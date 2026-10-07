/* Guia BCN1 - logica: fases y pantallas, acceso (Check-in), normas, Firebase, llamadas, presencia, asistencia, valoracion. */

/* ===================== CONSTRUCCIÓN DINÁMICA DEL RECORRIDO ===================== */
function generarPasos(camion) {
  const T = STEP_TEXT[currentLang];
  const pasos = [];

  const g = T.garita(camion.carril);
  pasos.push({ id: "garita", ...g, ubicacion: entrada, tipoLocation: null });

  if (camion.usaPrecheck) {
    const p = T.precheck(camion.precheck.code);
    pasos.push({ id: "precheck", ...p, ubicacion: camion.precheck, tipoLocation: "virtual" });
  }

  camion.paradas.forEach((parada, i) => {
    const cod = parada.ubicacion.code;
    const esUltima = i === camion.paradas.length - 1;

    if (parada.esperaPrevia) {
      const motivo = T.motivos[parada.esperaPrevia.motivoKey] || "";
      const e = T.espera(parada.esperaPrevia.code, motivo);
      pasos.push({ id: `espera_${i}`, ...e, ubicacion: parada.esperaPrevia, tipoLocation: "virtual" });
    }

    const tr = T.transito(cod, parada.tipoLocation);
    pasos.push({ id: `transito_${i}`, ...tr, ubicacion: parada.ubicacion, tipoLocation: parada.tipoLocation, ruta: true });

    pasos.push({
      id: `proceso_${i}`,
      titulo: T.accionTitulo[parada.accion] + ` &middot; ${cod}`,
      corto: T.accionTitulo[parada.accion],
      desc: null,
      pasosDetalle: T.pasosDeAccion(parada.accion, cod, parada.altura),
      ubicacion: parada.ubicacion,
      tipoLocation: parada.tipoLocation,
      timer: true
    });

    const f = T.fin(cod, esUltima);
    pasos.push({ id: `fin_${i}`, ...f, ubicacion: parada.ubicacion, tipoLocation: parada.tipoLocation });
  });

  const s = T.salida();
  pasos.push({ id: "salida", ...s, ubicacion: entrada, tipoLocation: null });

  return pasos;
}

/* ===================== ESTADO Y RENDER ===================== */
let pasosActuales = [];
let indiceActual = 0;
let timerInterval = null;
let timerSegundos = 0;
let tomYardInterval = null;
window.__tomYardLastCalledTs = 0;
window.__tomYardLastData = null;

const mapWrap = document.getElementById('mapWrap');
const stepsDiv = document.getElementById('steps');
const stepperDiv = document.getElementById('stepper');
const demoControls = document.getElementById('demoControls');

function mostrarCamion(code) {
  const camion = camiones[code];
  if (!camion) { alert(UI[currentLang].alertCodigoNoReconocido(code)); return; }
  plegarIdiomas(true);
  window.__pendingCamion = camion;
  if (haAceptadoNormas(camion.vrId)) {
    iniciarRecorrido(camion);
  } else {
    mostrarGateSeguridad(camion);
  }
}

/* ===================== NORMAS DE SEGURIDAD: PASO OBLIGATORIO ANTES DEL RECORRIDO =====================
   Cada VRID debe leer y aceptar las normas antes de ver su recorrido. La aceptación se guarda en
   localStorage junto con la fecha/hora y el idioma, simulando el registro que en producción quedaría
   asociado a esa VRID en el sistema (para poder demostrar que el conductor confirmó haberlas leído). */
/* Las normas y el permiso de ubicacion se aceptan por VIAJE: si garita ha vuelto a acreditar el VRID (gateTs posterior),
   se piden otra vez aunque este movil ya las hubiera aceptado para ese VRID en un viaje anterior. */
function tsDeMarca(raw) { if (!raw) return 0; try { const j = JSON.parse(raw); return Number(j && j.ts) || 0; } catch (e) { return 0; } }
function gateTsActual(vrId) { return Number(window.__gateTsPorVr && window.__gateTsPorVr[vrId]) || 0; }
function haAceptadoNormas(vrId) {
  const raw = localStorage.getItem('bcn1_accept_' + vrId);
  if (!raw) return false;
  return tsDeMarca(raw) >= gateTsActual(vrId);
}

function mostrarGateSeguridad(camion) {
  document.getElementById('panelManual').style.display = 'none';
  const gate = document.getElementById('safetyGate');
  gate.style.display = 'block';
  pintarGateSeguridad(camion);
  gate.scrollIntoView({ behavior: 'smooth' });
}

function pintarGateSeguridad(camion) {
  const t = UI[currentLang];
  const st = STEP_TEXT[currentLang].safety;
  document.getElementById('gateVridLine').textContent = t.gateVridLine(camion.vrId);
  document.getElementById('gateMapCaption').textContent = t.gateMapCaption;
  document.getElementById('safetyTitle').textContent = st.title;
  document.getElementById('safetyHeader').textContent = st.header;
  const ol = document.getElementById('safetyList');
  ol.innerHTML = '';
  st.bullets.forEach(b => {
    const li = document.createElement('li');
    li.textContent = b;
    ol.appendChild(li);
  });
  document.getElementById('safetyFooter').textContent = st.footer;
  document.getElementById('btnAceptarNormas').textContent = t.btnAceptarNormas;
}

document.getElementById('btnAceptarNormas').addEventListener('click', () => {
  const camion = window.__pendingCamion;
  if (!camion) return;
  const acceptTs = Date.now();
  localStorage.setItem('bcn1_accept_' + camion.vrId, JSON.stringify({ ts: acceptTs, lang: currentLang }));
  // Constancia en el panel: quien ha aceptado las normas de seguridad, cuando y en que idioma (solo codigo del camion, sin datos personales)
  if (camion.esGenerico) fetch(`${TOMYARD_URL}/presence/${encodeURIComponent(camion.vrId)}.json`, { method: 'PATCH', body: JSON.stringify({ ts: acceptTs, acceptTs, acceptLang: currentLang }) }).catch(() => {});
  document.getElementById('safetyGate').style.display = 'none';
  iniciarRecorrido(camion);
});

function renderTomYard(data) {
  window.__tomYardLastData = data;
  if (data && data.fin && window.__camionActual && window.__camionActual.esGenerico) { finalizarRecorrido(false); return; }
  const camionAct = window.__camionActual;
  if (camionAct && camionAct.esGenerico) renderGenerico(data);
  const box = document.getElementById('tomYardBox');
  if (!box) return;
  const t = UI[currentLang];
  if (!data) { box.style.display = 'none'; return; }

  let html = '';
  // El conductor no ve el estado de la carga (% ni fases de ODM): solo el aviso de que le llaman. (Decision 05/10.)
  if (!data.called) {
    // Llamada anulada desde ODM/admin: si el aviso sigue en pantalla, se cierra.
    if (document.getElementById('callOverlay').style.display !== 'none') ocultarLlamada();
    window.__tomYardLastCalledTs = 0;
  }
  if (data.called) {
    html += `<div class="tomyard-call">${t.tomYardLlamada}</div>`;
    if (data.calledTs && data.calledTs !== window.__tomYardLastCalledTs) {
      window.__tomYardLastCalledTs = data.calledTs;
      mostrarLlamada(data.calledTs);
    }
  }
  if (!html) { box.style.display = 'none'; return; }
  box.innerHTML = html;
  box.style.display = 'block';
}


/* Camion real (sin ruta de demo): la fase se deduce del estado que llega de ODM via Firebase.
   Fases: 0 garita -> 1 muelle -> 2 sala de espera -> 3 llaves y salida */
function faseDesdeEstado(data) {
  if (!data) return 0;
  if (data.called) return 3;
  const fill = typeof data.fill === 'number' ? data.fill : null;
  const st = (data.status || '').toUpperCase();
  if (!data.door && !st && fill === null) return 0; // acreditado en garita (Sesame) pero ODM aun no le ha dado destino
  if (st === 'LOADING_IN_PROGRESS' || (fill !== null && fill > 0)) return 2;
  if (st === 'SCHEDULED' || fill === 0) return 1;
  return 1;
}

/* Subpasos dentro de una fase real (el conductor avanza con "Siguiente"); se guardan por VRID.
   Fase 1: 0 ir al muelle, 1 dejar llaves, 2 ir a la sala.  Fase 3: 0 recoger llaves, 1 volver al camion, 2 salida. */
/* Virtuales (PS): 0 ir a la plaza, 1 remolque suelto: elegir, 2 salir del recinto, 3 esperar con la tractora. Precheck (PC): 1 pantalla de espera. */
function tipoDestino(door) { const d = geoResolver(door); return d ? d.tipo : null; }
/* Muelle 'rapido' (DD300): se descarga al momento, sin llaves ni sala: 0 acular y esperar en cabina, 1 salida. */
function esRapido(door) { const d = geoResolver(door); return !!(d && d.rapido); }
function subN(fase, door) {
  const t = tipoDestino(door);
  if (fase >= 1 && t === 'pc') return 1;
  if (fase >= 1 && window.__legPrev) return 2; // segunda referencia (tractora): 0 recoger remolque, 1 salida
  if (fase >= 1 && esRapido(door)) return 2;
  if (fase >= 1 && t === 'ps') return 4;
  return fase === 1 || fase === 3 ? 3 : 1;
}
function subPasoActual(vrId, fase, door) {
  const raw = localStorage.getItem('bcn1_sub_' + vrId) || '';
  const [f, dr, i] = raw.split(':');
  if (Number(f) !== fase || (dr || '') !== (door || '')) { localStorage.setItem('bcn1_sub_' + vrId, fase + ':' + (door || '') + ':0'); return 0; }
  return Math.min(Math.max(Number(i) || 0, 0), subN(fase, door) - 1);
}
function irSubPaso(target) {
  const camion = window.__camionActual; if (!camion) return;
  const data = window.__tomYardLastData;
  const fase = faseDesdeEstado(data), door = data && data.door ? String(data.door) : '';
  const cur = subPasoActual(camion.vrId, fase, door);
  let nx = typeof target === 'number' ? target : cur + (target === 'back' ? -1 : 1);
  if (target === 'back' && tipoDestino(door) === 'ps' && cur >= 2) nx = 1;
  nx = Math.min(Math.max(nx, 0), subN(fase, door) - 1);
  localStorage.setItem('bcn1_sub_' + camion.vrId, fase + ':' + door + ':' + nx);
  renderGenerico(data);
  mapWrap.scrollIntoView({ behavior: 'smooth' });
}
stepsDiv.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  if (b.classList.contains('sub-fin')) { if (confirm(UI[currentLang].btnSalido.replace(' ▶', '') + '?')) finalizarRecorrido(true); return; }
  if (b.dataset.to !== undefined) irSubPaso(Number(b.dataset.to));
  else if (b.classList.contains('sub-next')) irSubPaso('next');
  else if (b.classList.contains('sub-saltar')) saltarAReferencia();
  else if (b.classList.contains('sub-back')) irSubPaso('back');
});
/* Dos referencias: el conductor ha soltado el remolque (1a referencia) y la guia continua con la de la tractora (data.next),
   sin volver a pedir normas ni garita. Si la tractora aun no tiene destino, renderGenerico muestra la pantalla de espera. */
function saltarAReferencia() {
  const camion = window.__camionActual, data = window.__tomYardLastData;
  if (!camion || !data || !data.next) { irSubPaso('next'); return; }
  const viejo = camion.vrId, nuevo = String(data.next);
  if (nuevo === viejo) { irSubPaso('next'); return; }
  // Constancia en el panel: la primera referencia queda terminada y apunta a la segunda
  fetch(`${TOMYARD_URL}/presence/${encodeURIComponent(viejo)}.json`, { method: 'PATCH', body: JSON.stringify({ ts: Date.now(), fase: 4, next: nuevo }) }).catch(() => {});
  if (!camiones[nuevo]) camiones[nuevo] = { vrId: nuevo, carril: null, usaPrecheck: false, precheck: null, paradas: [], esGenerico: true };
  // Las normas ya se aceptaron en este mismo viaje: se heredan (local y en el panel)
  const acc = localStorage.getItem('bcn1_accept_' + viejo);
  if (acc && !localStorage.getItem('bcn1_accept_' + nuevo)) {
    localStorage.setItem('bcn1_accept_' + nuevo, acc);
    try { const a = JSON.parse(acc); fetch(`${TOMYARD_URL}/presence/${encodeURIComponent(nuevo)}.json`, { method: 'PATCH', body: JSON.stringify({ ts: Date.now(), acceptTs: a.ts || Date.now(), acceptLang: a.lang || currentLang, prev: viejo }) }).catch(() => {}); } catch (e) {}
  }
  ['bcn1_sub_', 'bcn1_fin_', 'bcn1_door_'].forEach(p => localStorage.removeItem(p + nuevo));
  window.__vrFromUrl = nuevo;
  try { const u = new URL(location.href); u.searchParams.set('vr', nuevo); history.replaceState(null, '', u.toString()); } catch (e) {}
  const vf = document.getElementById('vrFixed'); if (vf) vf.textContent = nuevo;
  window.__tomYardLastData = null;
  ocultarLlamada();
  if (navigator.vibrate) navigator.vibrate(200);
  verificarAcreditacion(nuevo);
  iniciarRecorrido(camiones[nuevo]);
}
function renderGenerico(data) {
  const camion = window.__camionActual;
  if (!camion) return;
  const T = STEP_TEXT[currentLang];
  const R = T.real;
  const fase = faseDesdeEstado(data);
  // Dos referencias en el Check-in (remolque y tractora con destinos distintos): next = VRID de la tractora (se salta al soltar),
  // prev = VRID del remolque (esta guia es la segunda parte: recoger remolque y salir).
  const next = data && data.next ? String(data.next) : null;
  const prev = data && data.prev ? String(data.prev) : null;
  window.__legPrev = !!prev;

  const door0 = data && data.door ? String(data.door) : null;
  const rapido = esRapido(door0);
  const sub0 = subPasoActual(camion.vrId, fase, door0);
  const fases = prev ? [
    { corto: T.garita(null).corto },
    { corto: T.accionTitulo.recoger },
    { corto: T.salida().corto }
  ] : rapido ? [
    { corto: T.garita(null).corto },
    { corto: UI[currentLang].sub.ddCorto },
    { corto: T.salida().corto }
  ] : [
    { corto: T.garita(null).corto },
    { corto: R.muelle.corto },
    { corto: R.sala.corto },
    { corto: R.llaves.corto }
  ];
  const faseVis = (rapido || prev) ? (fase === 0 ? 0 : sub0 === 0 ? 1 : 2) : fase;
  stepperDiv.style.display = '';
  stepperDiv.innerHTML = '';
  fases.forEach((f, i) => {
    const pill = document.createElement('div');
    pill.className = 'pill' + (i < faseVis ? ' done' : i === faseVis ? ' actual' : '');
    pill.textContent = f.corto;
    stepperDiv.appendChild(pill);
  });

  const door = data && data.door ? String(data.door) : null;
  avisarCambioMuelle(camion.vrId, door);
  let html = `<span class="badge">${camion.vrId}</span>`;
  if (door && fase >= 1) html += `<span class="badge carril">${rapido ? UI[currentLang].sub.ddCorto : R.muelle.badge} ${door}</span>`;
  const sub = subPasoActual(camion.vrId, fase, door);
  const nSub = subN(fase, door);
  const tipo = tipoDestino(door);
  const S = UI[currentLang].sub;
  let btnNext = null, extraBtns = '', clsNext = 'sub-next';
  if (fase === 0 && prev) {
    // Ya ha soltado el remolque y la tractora aun no tiene destino: pantalla de espera (cambia sola al llegar el destino)
    html += `<h3>${S.sigEsperaT}</h3><p>${S.sigEsperaD}</p>`;
  } else if (fase === 0) {
    const g = T.garita(null);
    html += `<h3>${g.titulo}</h3><p>${g.desc}</p>`;
  } else if (prev && tipo !== 'pc' && sub === 0) {
    html += `<h3>${T.accionTitulo.recoger}</h3><div class="door-big">${door}</div>`;
    if (data && data.trailer) html += `<p>${S.sigRemolque.replace('{t}', data.trailer)}</p>`;
    html += '<ol>';
    T.pasosDeAccion('recoger', door, '').forEach(p => html += `<li>${p}</li>`);
    html += `<li>${S.sigEngancha}</li></ol>`;
    btnNext = S.psEnganchado;
  } else if (prev && tipo !== 'pc') {
    const puerta = geoRutaSalida(geoResolver(door), !!window.__salidaV2).puerta;
    html += `<h3>${T.salida().titulo} ${puerta}</h3><p>${T.salida().desc}</p><div class="sdt-line">🚪 <b>${T.salida().corto}: ${puerta}</b></div>`;
    extraBtns = `<button type="button" class="sub-fin">${UI[currentLang].btnSalido}</button>`;
  } else if (tipo === 'pc') {
    html += `<h3>${T.precheck(door).titulo}</h3><div class="door-big">${door}</div><p>${S.pcEspera}</p>`;
  } else if (tipo === 'ps' && sub === 0) {
    const tt = T.transito(door, 'virtual');
    html += `<h3>${tt.titulo}</h3><div class="door-big">${door}</div><p>${tt.desc}</p><ol>`;
    T.pasosDeAccion('soltar', door, '').slice(0, 2).forEach(p => html += `<li>${p}</li>`);
    html += '</ol>';
    btnNext = S.psSuelto;
    if (next) clsNext = 'sub-saltar'; // con segunda referencia, al soltar se pasa directamente a la guia de la tractora
  } else if (tipo === 'ps' && sub === 1) {
    html += `<h3>${S.psT}</h3>`;
    extraBtns = `<button type="button" data-to="2">${S.psSalir}</button><button type="button" data-to="3">${S.psParking}</button>`;
  } else if (tipo === 'ps' && sub === 2) {
    const puerta = geoRutaSalida(geoResolver(door), !!window.__salidaV2).puerta;
    html += `<h3>${T.salida().titulo} ${puerta}</h3><p>${T.salida().desc}</p><div class="sdt-line">🚪 <b>${T.salida().corto}: ${puerta}</b></div>`;
    extraBtns = `<button type="button" class="sub-fin">${UI[currentLang].btnSalido}</button>`;
  } else if (tipo === 'ps') {
    html += `<h3>${S.parkingT}</h3><p>${S.psParking.replace(' ▶', '')}</p>`;
  } else if (rapido && sub === 0) {
    html += `<h3>${S.ddTitulo}</h3><div class="door-big">${door}</div><p>${S.ddDesc.replace('{d}', door)}</p><ol>`;
    S.ddPasos.forEach(p => html += `<li>${p}</li>`);
    html += '</ol>';
    btnNext = S.ddListo;
  } else if (rapido) {
    const puerta = geoRutaSalida(geoResolver(door), !!window.__salidaV2).puerta;
    html += `<h3>${T.salida().titulo} ${puerta}</h3><ol><li>${S.ddSalir}</li></ol><div class="sdt-line">🚪 <b>${T.salida().corto}: ${puerta}</b></div>`;
    extraBtns = `<button type="button" class="sub-fin">${UI[currentLang].btnSalido}</button>`;
  } else if (fase === 1 && sub === 0) {
    html += `<h3>${R.muelle.titulo}</h3>`;
    if (door) html += `<div class="door-big">${door}</div><p>${R.muelle.conPuerta(door)}</p>`;
    else html += `<p>${R.muelle.intro}</p>`;
    html += '<ol>';
    T.pasosDeAccion('carga_vivo', '', '__ALTURA__')
      .filter(p => !p.includes('__ALTURA__'))
      .forEach(p => html += `<li>${p}</li>`);
    html += '</ol>';
    btnNext = S.aculado;
  } else if (fase === 1 && sub === 1) {
    html += `<h3>${S.dejarT}</h3><p>${S.dejarD}</p>`;
    btnNext = S.entregadas;
  } else if (fase === 1 || fase === 2) {
    html += `<h3>${fase === 1 ? S.irSala : R.sala.titulo}</h3><p>${R.sala.desc}</p>`;
    const hSdt = horaSdt(data && data.sdt);
    if (hSdt) html += `<div class="sdt-line">${UI[currentLang].salidaPrevista(hSdt)}</div>`;
  } else if (sub === 0) {
    html += `<h3>${S.recogerT}</h3><ol><li>${R.llaves.pasos[0]}</li></ol>`;
    btnNext = S.tengo;
  } else if (sub === 1) {
    html += `<h3>${S.volverT}</h3><ol><li>${R.llaves.pasos[1]}</li><li>${R.llaves.pasos[2]}</li></ol>`;
    btnNext = S.listo;
  } else {
    const puerta = geoRutaSalida(geoResolver(door), !!window.__salidaV2).puerta;
    html += `<h3>${T.salida().titulo} ${puerta}</h3><ol><li>${R.llaves.pasos[3]}</li></ol><div class="sdt-line">🚪 <b>${T.salida().corto}: ${puerta}</b></div>`;
    extraBtns = `<button type="button" class="sub-fin">${UI[currentLang].btnSalido}</button>`;
  }
  if (nSub > 1 && (sub > 0 || btnNext || extraBtns)) {
    html += '<div class="sub-nav">';
    if (sub > 0) html += `<button type="button" class="sub-back">${S.atras}</button>`;
    if (btnNext) html += `<button type="button" class="${clsNext}">${btnNext}</button>`;
    html += extraBtns + '</div>';
  }
  stepsDiv.innerHTML = html;
  mapWrap.classList.add('show');
  geoMostrar(fase, door, !!window.__salidaV2, prev && fase >= 1 ? (sub === 0 ? 0 : 2) : sub);
  if (fase >= 1 && door) geoPedirConsentimiento(camion);
  renderFeedback((fase === 3 && sub === nSub - 1) || (tipo === 'ps' && sub >= 2) || (rapido && sub === 1) || (!!prev && fase >= 1 && sub === 1));
  if (fase !== window.__ultimaFasePresencia) { window.__ultimaFasePresencia = fase; enviarPresencia(); }
}

/* ===================== PRESENCIA (latido a Firebase) ===================== */
function enviarPresencia() {
  const camion = window.__camionActual;
  if (!camion) return;
  const k = 'bcn1_first_' + camion.vrId;
  let firstTs = Number(localStorage.getItem(k));
  if (!firstTs) { firstTs = Date.now(); localStorage.setItem(k, String(firstTs)); }
  const fase = camion.esGenerico ? faseDesdeEstado(window.__tomYardLastData) : indiceActual;
  fetch(`${TOMYARD_URL}/presence/${encodeURIComponent(camion.vrId)}.json`, {
    method: 'PATCH', // y no PUT: un PUT borraba acceptTs/acceptLang (aceptacion de normas)
    body: JSON.stringify({ ts: Date.now(), lang: currentLang, fase, firstTs })
  }).catch(() => {});
}
let presenciaInterval = null;

/* ===================== VALORACION Y PROPUESTAS ===================== */
function renderFeedback(mostrar) {
  const box = document.getElementById('fbBox');
  const camion = window.__camionActual;
  if (!mostrar || !camion) { box.style.display = 'none'; return; }
  const t = UI[currentLang];
  box.style.display = 'block';
  if (localStorage.getItem('bcn1_fb_' + camion.vrId)) {
    box.innerHTML = `<div class="fb-thanks">${t.fbGracias}</div>`;
    return;
  }
  if (box.dataset.vr === camion.vrId && box.dataset.lang === currentLang) return; // ya pintado, no perder lo escrito
  box.dataset.vr = camion.vrId; box.dataset.lang = currentLang;
  const caras = ['😕', '😐', '😊'];
  box.innerHTML = `<h4>${t.fbTitulo}</h4>
    <div class="fb-faces">${caras.map((cara, i) => `<button type="button" class="fb-face" data-r="${i + 1}"><span>${cara}</span>${t.fbCaras[i]}</button>`).join('')}</div>
    <textarea id="fbComment" rows="2" maxlength="600" placeholder="${t.fbComentario}"></textarea>
    <button type="button" class="fb-send" id="fbSend" disabled>${t.fbEnviar}</button>`;
  let rating = 0;
  box.querySelectorAll('.fb-face').forEach(b => b.addEventListener('click', () => {
    rating = Number(b.dataset.r);
    box.querySelectorAll('.fb-face').forEach(x => x.classList.toggle('sel', x === b));
    document.getElementById('fbSend').disabled = false;
  }));
  document.getElementById('fbSend').addEventListener('click', () => {
    if (!rating) return;
    const comment = document.getElementById('fbComment').value.trim().slice(0, 600);
    const body = { ts: Date.now(), rating, lang: currentLang };
    if (comment) body.comment = comment;
    document.getElementById('fbSend').disabled = true;
    fetch(`${TOMYARD_URL}/feedback/${encodeURIComponent(camion.vrId)}.json`, { method: 'PUT', body: JSON.stringify(body) })
      .then(() => { localStorage.setItem('bcn1_fb_' + camion.vrId, '1'); box.innerHTML = `<div class="fb-thanks">${t.fbGracias}</div>`; })
      .catch(() => { document.getElementById('fbSend').disabled = false; });
  });
}

/* ===================== ASISTENCIA (leve / moderado / urgente) ===================== */
let asNivel = null;
function pintarAsistencia() {
  const t = UI[currentLang];
  { const b = document.getElementById('btnAssist'); if (!b.classList.contains('sent')) b.textContent = '\u{1F198}'; b.title = t.asBtn; b.setAttribute('aria-label', t.asBtn); }
  document.getElementById('asTitulo').textContent = t.asTitulo;
  document.getElementById('asDesc').textContent = t.asDesc;
  document.getElementById('asNota').placeholder = t.asNota;
  document.getElementById('btnAsEnviar').textContent = t.asEnviar;
  document.getElementById('btnAsCancelar').textContent = t.asCancelar;
  const lv = document.getElementById('asLevels');
  lv.innerHTML = '';
  ['leve', 'moderado', 'urgente'].forEach(n => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'as-level ' + n + (asNivel === n ? ' sel' : '');
    b.innerHTML = `${t.asNiveles[n]}<small>${t.asNivelesDesc[n]}</small>`;
    b.addEventListener('click', () => {
      asNivel = n;
      lv.querySelectorAll('.as-level').forEach(x => x.classList.toggle('sel', x === b));
      document.getElementById('btnAsEnviar').disabled = false;
    });
    lv.appendChild(b);
  });
}
function abrirAsistencia() {
  asNivel = null;
  document.getElementById('asNota').value = '';
  document.getElementById('btnAsEnviar').disabled = true;
  pintarAsistencia();
  document.getElementById('assistOverlay').style.display = 'flex';
}
function cerrarAsistencia() { document.getElementById('assistOverlay').style.display = 'none'; }
function enviarAsistencia() {
  const camion = window.__camionActual;
  if (!camion || !asNivel) return;
  const t = UI[currentLang];
  const d = window.__tomYardLastData;
  const body = { ts: Date.now(), level: asNivel, lang: currentLang, resolved: false };
  const nota = document.getElementById('asNota').value.trim().slice(0, 300);
  if (nota) body.note = nota;
  if (d && d.door) body.door = String(d.door);
  document.getElementById('btnAsEnviar').disabled = true;
  fetch(`${TOMYARD_URL}/assist/${encodeURIComponent(camion.vrId)}.json`, { method: 'PUT', body: JSON.stringify(body) })
    .then(() => {
      cerrarAsistencia();
      const b = document.getElementById('btnAssist');
      b.classList.add('sent');
      b.textContent = '✅'; b.title = t.asNiveles[asNivel];
      alert(t.asEnviado);
      comprobarAsistencia();
    })
    .catch(() => { document.getElementById('btnAsEnviar').disabled = false; });
}
// Si el equipo marca la solicitud como atendida, el boton vuelve a su estado normal.
function comprobarAsistencia() {
  const camion = window.__camionActual;
  if (!camion) return;
  fetch(`${TOMYARD_URL}/assist/${encodeURIComponent(camion.vrId)}.json`)
    .then(r => r.ok ? r.json() : null)
    .then(a => {
      const b = document.getElementById('btnAssist');
      const t = UI[currentLang];
      if (a && !a.resolved) { b.classList.add('sent'); b.textContent = '✅'; b.title = t.asNiveles[a.level]; }
      else {
        if (b.classList.contains('sent') && a && a.resolved) alert(t.asAtendido);
        b.classList.remove('sent'); b.textContent = '\u{1F198}'; b.title = t.asBtn;
      }
    }).catch(() => {});
}
document.getElementById('btnAssist').addEventListener('click', abrirAsistencia);
document.getElementById('btnAsCancelar').addEventListener('click', cerrarAsistencia);
document.getElementById('btnAsEnviar').addEventListener('click', enviarAsistencia);
document.getElementById('assistOverlay').addEventListener('click', e => { if (e.target.id === 'assistOverlay') cerrarAsistencia(); });

/* Hora de salida programada: llega de ODM como "29-Sep-26 13:00". Se muestra solo la hora;
   si es de otro dia se anade el dia. Si ya paso hace mas de 30 min, no se muestra. */
function horaSdt(sdt) {
  if (!sdt || typeof sdt !== 'string') return null;
  const m = sdt.match(/^(\d{1,2})-([A-Za-z]{3})-(\d{2})\s+(\d{1,2}:\d{2})$/);
  if (!m) return sdt;
  const meses = { jan:0, feb:1, mar:2, apr:3, may:4, jun:5, jul:6, aug:7, sep:8, oct:9, nov:10, dec:11 };
  const mes = meses[m[2].toLowerCase()];
  if (mes === undefined) return m[4];
  const [hh, mm] = m[4].split(':').map(Number);
  const d = new Date(2000 + Number(m[3]), mes, Number(m[1]), hh, mm);
  const ahora = new Date();
  if (ahora - d > 30 * 60 * 1000) return null;
  const mismoDia = d.toDateString() === ahora.toDateString();
  return mismoDia ? m[4] : `${m[1]}/${String(mes + 1).padStart(2, '0')} ${m[4]}`;
}

/* Aviso de llamada: pantalla completa parpadeando + sonido + vibracion, hasta que el conductor pulse OK. */
let audioCtx = null;
let callBeepTimer = null;
function desbloquearAudio() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
  } catch (e) {}
}
function pitido() {
  if (!audioCtx) return;
  try {
    const t0 = audioCtx.currentTime;
    [0, 0.25, 0.5].forEach(off => {
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = 'square'; o.frequency.value = 880;
      g.gain.setValueAtTime(0.0001, t0 + off);
      g.gain.exponentialRampToValueAtTime(0.4, t0 + off + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + off + 0.18);
      o.connect(g); g.connect(audioCtx.destination);
      o.start(t0 + off); o.stop(t0 + off + 0.2);
    });
  } catch (e) {}
}
// Si ODM/YMS cambian el destino mientras el conductor ya tiene uno, se le avisa (vibracion + pitido + aviso).
function avisarCambioMuelle(vrId, door) {
  if (!door) return;
  const k = 'bcn1_door_' + vrId;
  const prev = localStorage.getItem(k);
  localStorage.setItem(k, door);
  if (!prev || prev === door) return;
  const t = UI[currentLang];
  document.getElementById('callTitulo').textContent = t.doorChgT;
  document.getElementById('callDesc').textContent = t.doorChgD.replace('{a}', prev).replace('{b}', door);
  document.getElementById('btnCallOk').textContent = t.callOk;
  document.getElementById('btnCallOk').onclick = () => ocultarLlamada();
  document.getElementById('callOverlay').style.display = 'flex';
  if (navigator.vibrate) navigator.vibrate([300, 100, 300, 100, 600]);
  desbloquearAudio();
  pitido();
}
function mostrarLlamada(calledTs) {
  if (localStorage.getItem('bcn1_call_ack') === String(calledTs)) return;
  const t = UI[currentLang];
  document.getElementById('callTitulo').textContent = t.callTitulo;
  document.getElementById('callDesc').textContent = t.callDesc;
  document.getElementById('btnCallOk').textContent = t.callOk;
  document.getElementById('btnCallOk').onclick = () => {
    localStorage.setItem('bcn1_call_ack', String(calledTs));
    ocultarLlamada();
  };
  document.getElementById('callOverlay').style.display = 'flex';
  document.title = t.callTitulo;
  if (navigator.vibrate) navigator.vibrate([400, 150, 400, 150, 400, 150, 800]);
  desbloquearAudio();
  pitido();
  clearInterval(callBeepTimer);
  let veces = 0;
  callBeepTimer = setInterval(() => {
    if (++veces > 20) { clearInterval(callBeepTimer); return; }
    pitido();
    if (navigator.vibrate) navigator.vibrate([400, 150, 400]);
  }, 3000);
}
function ocultarLlamada() {
  clearInterval(callBeepTimer);
  document.getElementById('callOverlay').style.display = 'none';
  document.title = 'BCN1 - Guía para camioneros';
}
// Si el conductor vuelve a la pestana y hay una llamada sin confirmar, se vuelve a mostrar.
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible') return;
  const d = window.__tomYardLastData;
  if (d && d.called && d.calledTs) mostrarLlamada(d.calledTs);
  pollTomYard();
});
// El audio en moviles solo se puede activar tras un gesto del usuario.
['touchstart', 'click'].forEach(ev => document.addEventListener(ev, desbloquearAudio, { once: true, passive: true }));

function pollSalidaV2() {
  fetch(`${TOMYARD_URL}/config/salidaV2.json`)
    .then(r => r.json())
    .then(v => { const nv = !!v; if (nv !== !!window.__salidaV2) { window.__salidaV2 = nv; const c = window.__camionActual; if (c && c.esGenerico) renderGenerico(window.__tomYardLastData); } })
    .catch(() => {});
}
function pollTomYard() {
  pollSalidaV2();
  const camion = window.__camionActual;
  if (!camion) return;
  comprobarAsistencia();
  fetch(`${TOMYARD_URL}/trucks/${encodeURIComponent(camion.vrId)}.json`)
    .then(r => r.ok ? r.json() : null)
    .then(data => {
      // Dos referencias con el mismo destino (descarga y carga en el mismo muelle): el aviso de llaves puede llegar a la otra (alt)
      if (!data || !data.alt || data.called) return data;
      return fetch(`${TOMYARD_URL}/trucks/${encodeURIComponent(data.alt)}.json`).then(r => r.ok ? r.json() : null)
        .then(a => { if (a && a.called && !a.fin) { data.called = true; data.calledTs = a.calledTs || Date.now(); } return data; })
        .catch(() => data);
    })
    .then(data => renderTomYard(data))
    .catch(() => {});
}

/* Pantalla siempre encendida mientras la guia esta abierta (Screen Wake Lock: Safari iOS 16.4+, Chrome Android).
   Con la pantalla bloqueada el navegador duerme la pagina y no puede vibrar ni sonar; asi evitamos que se bloquee sola. */
let wakeLock = null;
function mantenerPantalla() {
  if (!('wakeLock' in navigator) || document.visibilityState !== 'visible') return;
  navigator.wakeLock.request('screen').then(wl => { wakeLock = wl; wl.addEventListener('release', () => { wakeLock = null; }); }).catch(() => {});
}
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && window.__camionActual) mantenerPantalla(); });
function iniciarRecorrido(camion) {
  mantenerPantalla();
  pasosActuales = generarPasos(camion);
  indiceActual = 0;
  window.__camionActual = camion;
  // Camion generico (VRID real sin ruta conocida): no se muestran etapas inventadas,
  // solo el estado real que llega de Firebase.
  demoControls.style.display = camion.esGenerico ? 'none' : 'flex';
  renderTodo();
  mapWrap.scrollIntoView({ behavior: 'smooth' });

  window.__tomYardLastCalledTs = 0;
  clearInterval(tomYardInterval);
  pollTomYard();
  tomYardInterval = setInterval(pollTomYard, POLL_TOMYARD_MS);

  // Presencia (latido cada 30 s) y boton de asistencia
  window.__ultimaFasePresencia = null;
  enviarPresencia();
  clearInterval(presenciaInterval);
  presenciaInterval = setInterval(enviarPresencia, POLL_PRESENCIA_MS);
  document.getElementById('btnAssist').style.display = 'block';
  pintarAsistencia();
  comprobarAsistencia();
  // La ubicacion se pide mas tarde, cuando garita ya le ha dado destino (fase >= 1): asi no se pregunta fuera del recinto.
}

function renderTodo() {
  renderStepper();
  renderPasoActual();
}

function renderStepper() {
  stepperDiv.innerHTML = '';
  pasosActuales.forEach((p, i) => {
    const pill = document.createElement('div');
    pill.className = 'pill' + (i < indiceActual ? ' done' : i === indiceActual ? ' actual' : '');
    pill.textContent = p.corto;
    stepperDiv.appendChild(pill);
  });
}

function renderPasoActual() {
  const paso = pasosActuales[indiceActual];
  const camion = window.__camionActual;

  mapWrap.classList.add('show');
  stepsDiv.classList.add('show');

  const origen = indiceActual > 0 ? pasosActuales[indiceActual - 1].ubicacion : entrada;
  if (!camion.esGenerico) geoMostrarDemo(origen, paso);

  let html = `<span class="badge">${camion.vrId}</span>` + (camion.carril ? `<span class="badge carril">${UI[currentLang].badgeCarril} ${camion.carril}</span>` : '');
  if (camion.esGenerico) {
    renderGenerico(window.__tomYardLastData);
    return;
  }
  html += `<h3>${paso.titulo}</h3>`;
  if (paso.desc) html += `<p>${paso.desc}</p>`;
  if (paso.pasosDetalle) {
    html += '<ol>';
    paso.pasosDetalle.forEach(p => html += `<li>${p}</li>`);
    html += '</ol>';
  }
  if (paso.timer) {
    html += `<div class="timer" id="timerDisplay">00:00</div><p style="font-size:12px;color:#6b7280;">${UI[currentLang].timerNote}</p>`;
  }
  stepsDiv.innerHTML = html;

  clearInterval(timerInterval);
  if (paso.timer) {
    timerSegundos = 0;
    timerInterval = setInterval(() => {
      timerSegundos++;
      const min = String(Math.floor(timerSegundos / 60)).padStart(2, '0');
      const seg = String(timerSegundos % 60).padStart(2, '0');
      const disp = document.getElementById('timerDisplay');
      if (disp) disp.textContent = `${min}:${seg}`;
    }, 1000);
  }
}

document.getElementById('btnSiguiente').addEventListener('click', () => {
  if (indiceActual < pasosActuales.length - 1) {
    indiceActual++;
    renderTodo();
  }
});
document.getElementById('btnAnterior').addEventListener('click', () => {
  if (indiceActual > 0) {
    indiceActual--;
    renderTodo();
  }
});

document.getElementById('btnVer').addEventListener('click', () => {
  const code = window.__vrFromUrl || document.getElementById('destino').value;
  if (!code) { alert(UI[currentLang].alertSeleccionaCodigo); return; }
  mostrarCamion(code);
});

/* ===================== IDIOMA: UI ESTÁTICA Y SELECTOR ===================== */
/* Tras empezar el recorrido la barra de idiomas se pliega a una banderita en la esquina de la cabecera. */
function plegarIdiomas(plegar) {
  const bar = document.getElementById('langBar');
  const chip = document.getElementById('langChip');
  window.__langPlegado = plegar;
  bar.classList.toggle('collapsed', plegar);
  document.getElementById('txtTocaIdioma').classList.toggle('collapsed', plegar);
  chip.style.display = plegar || chip.dataset.modo === 'chip' ? 'inline-block' : 'none';
  if (plegar) chip.dataset.modo = 'chip';
  chip.textContent = (LANG_FLAG[currentLang] || '') + ' ' + currentLang.toUpperCase();
}
document.getElementById('langChip').addEventListener('click', () => plegarIdiomas(!window.__langPlegado));
function pintarSelectorIdioma() {
  const bar = document.getElementById('langBar');
  bar.innerHTML = '';
  LANGS.forEach(lang => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'lang-btn' + (lang === currentLang ? ' active' : '');
    btn.textContent = LANG_LABEL[lang];
    btn.addEventListener('click', () => {
      cambiarIdioma(lang);
      if (document.getElementById('langChip').dataset.modo === 'chip') plegarIdiomas(true);
      // Pantalla de inicio en produccion (QR con ?vr=): elegir idioma arranca directamente el recorrido.
      else if (window.__vrFromUrl && document.getElementById('panelManual').style.display !== 'none') mostrarCamion(window.__vrFromUrl);
    });
    bar.appendChild(btn);
  });
}

function pintarTextosEstaticos() {
  const t = UI[currentLang];
  document.getElementById('txtHeaderTitle').textContent = t.headerTitle;
  document.getElementById('lblDestino').textContent = window.__vrFromUrl ? (t.lblTuCodigo || t.lblDestino) : t.lblDestino;
  document.getElementById('txtTocaIdioma').textContent = t.tocaIdioma || '';
  if (document.getElementById('geoOverlay').style.display === 'flex') geoPintarConsentimiento();
  document.getElementById('btnVer').textContent = t.btnVer;
  document.getElementById('txtModoNota').textContent = t.modoNota;
  document.getElementById('txtMapHint').textContent = t.mapHint;
  document.getElementById('btnAnterior').textContent = t.btnAnterior;
  document.getElementById('btnSiguiente').textContent = t.btnSiguiente;
  document.getElementById('txtDisclaimer').textContent = t.disclaimer;

  const select = document.getElementById('destino');
  const valorPrevio = select.value;
  select.innerHTML = '';
  const optPlaceholder = document.createElement('option');
  optPlaceholder.value = '';
  optPlaceholder.textContent = t.selectPlaceholder;
  select.appendChild(optPlaceholder);
  Object.keys(t.demoOptions).forEach(code => {
    const opt = document.createElement('option');
    opt.value = code;
    opt.textContent = t.demoOptions[code];
    select.appendChild(opt);
  });
  select.value = valorPrevio;

  if (document.getElementById('safetyGate').style.display !== 'none' && window.__pendingCamion) {
    pintarGateSeguridad(window.__pendingCamion);
  }
  pintarAsistencia();
}

function aplicarDireccion() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = LANG_RTL.includes(currentLang) ? 'rtl' : 'ltr';
}
function cambiarIdioma(lang) {
  if (!LANGS.includes(lang)) return;
  currentLang = lang;
  localStorage.setItem('bcn1_lang', lang);
  aplicarDireccion();
  pintarSelectorIdioma();
  pintarTextosEstaticos();
  if (window.__camionActual) {
    pasosActuales = generarPasos(window.__camionActual);
    renderTodo();
    renderTomYard(window.__tomYardLastData);
  }
  if (window.__lockTipo && document.getElementById('lockOverlay').style.display !== 'none') mostrarBloqueo(window.__lockTipo, window.__lockVr);
}

aplicarDireccion();
pintarSelectorIdioma();
pintarTextosEstaticos();

/* Modo producción: el QR lleva directamente a ?vr=CODIGO, sin pasar por el desplegable.
   También soporta ?lang=XX para preseleccionar idioma (opcional, si el generador lo incluye). */
/* ===== ACCESO: solo con el camion acreditado en garita (gateTs en Firebase, < 24 h; el ts lo escriben tambien ODM y el Yard de YMS y no vale) y hasta que se le da salida ===== */
let acredTimer = null;
function mostrarBloqueo(tipo, vrId) {
  const t = UI[currentLang], en = UI.en;
  const fin = tipo === 'fin';
  window.__lockTipo = tipo; window.__lockVr = vrId;
  document.getElementById('lockVr').textContent = vrId || '';
  document.getElementById('lockIcon').textContent = fin ? '✅' : '🔒';
  document.getElementById('lockT').textContent = fin ? t.lockFinT : t.lockAcredT;
  document.getElementById('lockD').textContent = fin ? t.lockFinD : t.lockAcredD;
  document.getElementById('lockEn').textContent = currentLang === 'en' ? '' : (fin ? en.lockFinD : en.lockAcredD);
  document.getElementById('lockOverlay').style.display = 'flex';
}
function ocultarBloqueo() { document.getElementById('lockOverlay').style.display = 'none'; }
function estaAcreditado(data) { return !!(data && data.gateTs && Date.now() - data.gateTs < ACRED_MAX_MS && !data.fin); }
function verificarAcreditacion(vrId) {
  clearTimeout(acredTimer);
  const finLocal = Number(localStorage.getItem('bcn1_fin_' + vrId)) || 0;
  if (finLocal) mostrarBloqueo('fin', vrId);
  fetch(`${TOMYARD_URL}/trucks/${encodeURIComponent(vrId)}.json`, { cache: 'no-store' })
    .then(r => r.ok ? r.json() : null)
    .then(data => {
      // Viaje nuevo: garita ha vuelto a generar el QR (qrTs) o ha acreditado (reopenTs) despues de la salida anterior.
      window.__gateTsPorVr = window.__gateTsPorVr || {};
      if (data && data.gateTs) window.__gateTsPorVr[vrId] = Math.max(Number(data.gateTs) || 0, Number(data.reopenTs) || 0);
      const finTs = Math.max(finLocal, (data && data.finTs) || 0);
      const viajeNuevo = !!(data && ((data.qrTs && data.qrTs > finTs) || (data.reopenTs && data.reopenTs > finTs)));
      if (data && data.fin && !viajeNuevo) { finalizarRecorrido(false); return; }
      if (finLocal) {
        // El panel ha reabierto el enlace o ha empezado un viaje nuevo despues de que el conductor lo cerrara
        if (viajeNuevo) localStorage.removeItem('bcn1_fin_' + vrId);
        else { acredTimer = setTimeout(() => verificarAcreditacion(vrId), 15000); return; }
      }
      if (estaAcreditado(data)) { ocultarBloqueo(); return; }
      mostrarBloqueo('acred', vrId);
      acredTimer = setTimeout(() => verificarAcreditacion(vrId), 15000);
    })
    .catch(() => { mostrarBloqueo('acred', vrId); acredTimer = setTimeout(() => verificarAcreditacion(vrId), 15000); });
}
/* Fin del recorrido: lo marca el conductor (boton), el panel (campo fin) o la salida del recinto con GPS. Desde entonces el enlace queda cerrado en este movil. */
function finalizarRecorrido(avisarServidor) {
  const vrId = window.__vrFromUrl || (window.__camionActual && window.__camionActual.vrId);
  if (!vrId) return;
  localStorage.setItem('bcn1_fin_' + vrId, String(Date.now()));
  clearInterval(tomYardInterval); clearInterval(presenciaInterval); clearTimeout(acredTimer);
  if (typeof geoParar === 'function') { geoParar(); if (geoRecheck) { clearInterval(geoRecheck); geoRecheck = null; } }
  ocultarLlamada();
  ['geoOverlay', 'assistOverlay'].forEach(id => document.getElementById(id).style.display = 'none');
  if (avisarServidor) fetch(`${TOMYARD_URL}/presence/${encodeURIComponent(vrId)}.json`, { method: 'PATCH', body: JSON.stringify({ ts: Date.now(), fase: 4 }) }).catch(() => {});
  mostrarBloqueo('fin', vrId);
}
function comprobarUrl() {
  const params = new URLSearchParams(window.location.search);
  const langFromUrl = params.get('lang');
  if (langFromUrl && LANGS.includes(langFromUrl) && langFromUrl !== currentLang) {
    currentLang = langFromUrl;
    localStorage.setItem('bcn1_lang', currentLang);
    pintarSelectorIdioma();
    pintarTextosEstaticos();
  }
  let codeFromUrl = params.get('vr');
  if (codeFromUrl) {
    // Misma normalizacion que los scripts de garita: identificadores amzn1.* -> G-XXXXXXXX; sin caracteres prohibidos en Firebase
    codeFromUrl = String(codeFromUrl).trim();
    if (/^amzn1\./i.test(codeFromUrl)) codeFromUrl = 'G-' + codeFromUrl.replace(/[^a-z0-9]/gi, '').slice(-8).toUpperCase();
    else codeFromUrl = codeFromUrl.replace(/[.#$\[\]\/\s]+/g, '_');
    if (!camiones[codeFromUrl]) {
      // VRID real (o ID de operacion sin VRID) que no esta en el set de demo:
      // se crea un camion generico, sin ruta detallada conocida, para no caer al selector manual.
      camiones[codeFromUrl] = {
        vrId: codeFromUrl,
        carril: null,
        usaPrecheck: false,
        precheck: null,
        paradas: [],
        esGenerico: true
      };
    }
    // Pantalla de inicio en produccion: VRID fijo (sin desplegable), seleccion de idioma y boton para empezar.
    window.__vrFromUrl = codeFromUrl;
    if (camiones[codeFromUrl].esGenerico) verificarAcreditacion(codeFromUrl);
    document.getElementById('destino').style.display = 'none';
    document.getElementById('txtModoNota').style.display = 'none';
    document.getElementById('txtDisclaimer').style.display = 'none'; // el aviso "Demo" solo tiene sentido sin camion real
    const vf = document.getElementById('vrFixed');
    vf.textContent = codeFromUrl;
    vf.style.display = 'block';
    document.getElementById('btnVer').style.display = 'none';
    document.getElementById('txtTocaIdioma').style.display = 'block';
    pintarTextosEstaticos();
  }
}


// Arranque: se ejecuta al final, cuando ya existen el mapa (zoom/pan) y todos los manejadores.
comprobarUrl();
