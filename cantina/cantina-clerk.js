// cantina-clerk 2.0.0 (BCN1 Pantalla Cantina, cuerpo para el cargador del ODM Omega; generado por cantina/build.py)
(function () {
  'use strict';
  // BCN1 Pantalla Cantina 2.0.0 (rol: clerk). Fuente unica cantina/cantina.js; generado por cantina/build.py.
  // lead  = manda (va dentro de la BCN1 Suite): lee YMS y Firebase cada 15 s, escribe /board (tele), /bells (colores), /diag, limpieza.
  // clerk = ligero (script aparte o modulo del ODM Omega): nada de fondo; escribe solo al pulsar la campanilla o al dar Finalizar;
  //         lee /bells cada 3 min para los colores y coge el mando de emergencia si no hay lead en 3 min.
  const ROL = 'clerk';
  const VERSION = '2.0.0';
  const FB = 'https://tom-yard-default-rtdb.europe-west1.firebasedatabase.app';
  const KEY = 'TF5K5U18a2tA15Rvhabph8VjytAjldqHm0dNK4dM';
  const LEAD = ROL === 'lead';
  const PW = (typeof unsafeWindow !== 'undefined' && unsafeWindow) || window;
  const GMX = (typeof GM_xmlhttpRequest === 'function') ? GM_xmlhttpRequest : null;
  const enOdm = location.pathname.indexOf('/ssp/dock/') >= 0;
  const enYms = location.pathname.indexOf('/yms/shipclerk') >= 0;
  if (!enOdm && !enYms) return;
  try { if (window.top !== window) return; } catch (e) { return; }
  const MARCA = 'data-bcn1-cantina';
  const yaHay = document.documentElement.getAttribute(MARCA) || '';
  if (!LEAD && yaHay) { console.log('[Cantina] clerk no arranca: ya hay ' + yaHay); return; }
  if (LEAD && /^lead/.test(yaHay)) return;
  document.documentElement.setAttribute(MARCA, ROL + ' ' + VERSION);
  console.log('[Cantina] ' + ROL + ' ' + VERSION + ' via ' + (GMX ? 'GM_xmlhttpRequest' : 'fetch'));

  // ---------- red: Firebase con doble camino (extension / pagina), limite 15 s y ETag ----------
  const FB_TIMEOUT_MS = 15000, FB_FALLOS_CAMBIO = 3;
  const red = { via: GMX ? 'gm' : 'page', fallos: 0, ultimoOk: 0, ultimoFallo: 0, cambios: 0 };
  const etags = {}; // path -> { etag, data }
  try { PW.__cantinaRed = red; } catch (e) {}
  function redOk() { red.fallos = 0; red.ultimoOk = Date.now(); }
  function redFallo(why) {
    red.fallos++; red.ultimoFallo = Date.now();
    if (red.fallos >= FB_FALLOS_CAMBIO) {
      const otro = red.via === 'gm' ? 'page' : 'gm';
      if (otro === 'gm' && !GMX) { red.fallos = 0; return; }
      red.via = otro; red.fallos = 0; red.cambios++;
      console.warn('[Cantina] Firebase: ' + FB_FALLOS_CAMBIO + ' fallos (' + why + '); cambio al camino ' + otro);
    }
  }
  function cabecera(h, nombre) {
    if (!h) return null;
    if (typeof h.get === 'function') { try { return h.get(nombre); } catch (e) { return null; } }
    const m = new RegExp('^' + nombre + ':\\s*(.+)$', 'im').exec(String(h));
    return m ? m[1].trim() : null;
  }
  function viaGm(url, opts) {
    return new Promise((resolve, reject) => {
      let fin = false;
      const done = (fn) => { if (fin) return; fin = true; fn(); };
      try {
        GMX({ method: opts.method || 'GET', url: url, data: opts.body == null ? undefined : String(opts.body),
          headers: Object.assign({ 'Content-Type': 'application/json' }, opts.headers || {}), timeout: FB_TIMEOUT_MS,
          onload: (r) => done(() => resolve({ status: r.status | 0, text: String(r.responseText == null ? '' : r.responseText), headers: r.responseHeaders || '' })),
          onerror: () => done(() => reject(new Error('gm error'))), ontimeout: () => done(() => reject(new Error('gm timeout'))), onabort: () => done(() => reject(new Error('gm abort'))) });
      } catch (e) { done(() => reject(e)); }
    });
  }
  function viaPagina(url, opts) {
    return new Promise((resolve, reject) => {
      const t = setTimeout(() => reject(new Error('timeout')), FB_TIMEOUT_MS);
      Promise.resolve().then(() => PW.fetch(url, { method: opts.method || 'GET', body: opts.body == null ? undefined : String(opts.body), headers: Object.assign({ 'Content-Type': 'application/json' }, opts.headers || {}) }))
        .then(r => r.text().then(txt => { clearTimeout(t); resolve({ status: r.status | 0, text: txt, headers: r.headers || null }); }), e => { clearTimeout(t); reject(e); });
    });
  }
  // fb('trucks/X', { method, body, etag }) -> { ok, status, data, etag, cached }
  function fb(path, opts) {
    opts = opts || {};
    const url = FB + '/' + path + '.json?auth=' + KEY;
    const headers = {};
    const prev = opts.etag && etags[path];
    if (opts.etag) { headers['X-Firebase-ETag'] = 'true'; if (prev && prev.etag) headers['If-None-Match'] = prev.etag; }
    const o = { method: opts.method || 'GET', body: opts.body == null ? undefined : JSON.stringify(opts.body), headers: headers };
    const p = (red.via === 'gm' && GMX) ? viaGm(url, o) : viaPagina(url, o);
    return p.then(r => {
      if (r.status === 0) throw new Error('status 0');
      redOk();
      if (r.status === 304 && prev) return { ok: true, status: 304, data: prev.data, etag: prev.etag, cached: true };
      let data = null;
      try { data = r.text ? JSON.parse(r.text) : null; } catch (e) { data = null; }
      const et = cabecera(r.headers, 'ETag');
      if (opts.etag && r.status === 200 && et) etags[path] = { etag: et, data: data };
      return { ok: r.status >= 200 && r.status < 300, status: r.status, data: data, etag: et, cached: false };
    }, e => { redFallo(e && e.message || e); throw e; });
  }
  const get = (p, etag) => fb(p, { etag: !!etag }).then(r => { if (!r.ok) throw new Error(p + ' ' + r.status); return r.data; });
  const put = (p, body) => fb(p, { method: 'PUT', body: body }).then(r => { if (!r.ok) throw new Error(p + ' ' + r.status); return r.data; });
  const patch = (p, body) => fb(p, { method: 'PATCH', body: body }).then(r => { if (!r.ok) throw new Error(p + ' ' + r.status); return r.data; });
  const del = (p) => fb(p, { method: 'DELETE' }).catch(() => {});

  // ---------- utilidades ----------
  const normLoc = x => String(x || '').trim().split(/\s+-\s+|\s+/)[0].toUpperCase().replace(/[^A-Z0-9]/g, '');
  const VIRTUAL = k => /^(OB)?17[45]$/.test(k);
  const HORA_MAX_MS = 2 * 3600 * 1000; // una llamada vive 2 h
  function hhmm(ts) { const d = new Date(ts); return ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2); }
  let loginCache = null;
  function login() {
    if (loginCache) return loginCache;
    try {
      const txt = String((document.body && (document.body.innerText || document.body.textContent)) || '').slice(0, 20000);
      const m = /([a-z0-9][a-z0-9._-]{1,30})@amazon\.com/i.exec(txt);
      if (m) loginCache = m[1].toLowerCase();
    } catch (e) {}
    return loginCache || '?';
  }
  const SRC_TXT = { bell: 'campana', fin: 'Finalizar', auto: 'autom\u00e1tico', yms: 'YMS', rtd: 'Ready to Depart' };
  function quienTxt(t) {
    if (!t || !t.calledTs) return '';
    return 'Avisado por ' + (t.calledBy || '?') + ' a las ' + hhmm(t.calledTs) + ' (' + (SRC_TXT[t.calledSrc] || t.calledSrc || '?') + ')';
  }
  function registrarLlamada(vr, door, src, ts) {
    const k = ts + '_' + String(vr).replace(/[^A-Za-z0-9]/g, '');
    return put('calls/' + k, { vr: vr, door: door || null, by: login(), src: src, ts: ts, pc: INST }).catch(() => {});
  }
  function toast(txt, color) {
    try {
      const t = document.createElement('div');
      t.textContent = txt;
      t.style.cssText = 'position:fixed;bottom:18px;right:18px;z-index:2147483646;background:' + (color || '#333') + ';color:#fff;padding:10px 14px;border-radius:8px;font:14px/1.3 Arial,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.3);max-width:60vw;';
      document.body.appendChild(t);
      setTimeout(() => t.remove(), 5000);
    } catch (e) {}
  }

  // ---------- mando (quien escribe la tele) ----------
  // /lider/odm = { id, rol, ts, v, by }. El lead renueva cada 20 s; caduca a los 150 s. Un clerk solo lo coge si no hay
  // nadie (emergencia) y lo suelta en cuanto ve un lead. Un lead quita el mando a un clerk.
  const INST = Math.random().toString(36).slice(2, 10);
  const CADUCA_MS = 150000, LEAD_POLL_MS = 20000, CLERK_POLL_MS = 180000;
  const mando = { tengo: false, activo: true, okTs: 0, lider: null, clerkMin: null, id: INST, rol: ROL };
  try { PW.__cantinaMando = mando; } catch (e) {}
  const rolMando = enOdm ? 'odm' : 'yms';
  let mandoBusy = 0, avisoVersionDado = false;
  function menor(a, b) { // a < b en version x.y.z
    const x = String(a || '0').split('.').map(Number), y = String(b || '0').split('.').map(Number);
    for (let i = 0; i < 3; i++) { if ((x[i] || 0) < (y[i] || 0)) return true; if ((x[i] || 0) > (y[i] || 0)) return false; }
    return false;
  }
  function avisoVersion(c) {
    if (LEAD || avisoVersionDado || !c || !c.clerkMin || !menor(VERSION, c.clerkMin)) return;
    avisoVersionDado = true;
    toast('Pantalla cantina: tu version ' + VERSION + ' es antigua (minima ' + c.clerkMin + '). Avisa a Hugo/Giusca para actualizar.', '#c62828');
  }
  function pedirMando() {
    if (mandoBusy && Date.now() - mandoBusy < 30000) return Promise.resolve();
    mandoBusy = Date.now();
    const antes = mando.tengo, now = Date.now();
    return get('config').then(c => {
      mando.activo = !(c && c.activo === false);
      avisoVersion(c);
      if (!mando.activo) { mando.tengo = false; return; }
      if (!enOdm) return; // el YMS no manda: solo campanillas por muelle
      return get('lider/odm').then(l => {
        mando.okTs = Date.now(); mando.lider = l || null;
        const vivo = l && typeof l.ts === 'number' && (now - l.ts) <= CADUCA_MS && l.id !== INST;
        const puedo = !vivo || (LEAD && l.rol === 'clerk'); // libre, o un clerk de emergencia al que un lead quita el mando
        if (!puedo) { mando.tengo = false; return; }
        if (!LEAD && !vivo && l && l.rol === 'lead' && (now - l.ts) <= CLERK_POLL_MS) { mando.tengo = false; return; } // clerk: espera 3 min sin lead
        return put('lider/odm', { id: INST, rol: ROL, ts: now, v: VERSION, by: login(), oculta: !!document.hidden })
          .then(() => get('lider/odm')).then(l2 => { mando.tengo = !!(l2 && l2.id === INST); mando.lider = l2 || null; });
      });
    }).catch(() => {
      if (mando.tengo && Date.now() - mando.okTs > CADUCA_MS) mando.tengo = false;
    }).then(() => {
      mandoBusy = 0;
      if (mando.tengo !== antes) console.log('[Cantina] mando: ' + (mando.tengo ? 'ESTA pestana manda (' + ROL + ')' : 'otra pestana manda'));
    });
  }
  const tengoMando = () => mando.activo && mando.tengo;
  try { window.addEventListener('pagehide', () => { if (mando.tengo) del('lider/odm'); }); } catch (e) {}

  // ---------- estado compartido de colores: /bells = { VR: { e:'a'|'v', by, ts, src, k, tv, drop } } ----------
  // Lo escribe el que manda; los demas lo leen (lead cada 15 s, clerk cada 3 min) y pintan.
  let bells = {}, bellsTs = 0;
  let trucksCache = null; // solo lead
  function leerBells() {
    return fb('bells', { etag: true }).then(r => { if (r.ok) { bells = r.data || {}; bellsTs = Date.now(); } }).catch(() => {});
  }
  function leerConfig() { return pedirMando(); }

  // ---------- llamada (comun ODM y YMS) ----------
  // llamar(): escribe la llamada en trucks/{vr} (igual que la campanilla de siempre) y la registra en /calls.
  function llamar(vr, door, src) {
    const now = Date.now();
    const body = { called: true, calledTs: now, calledSrc: src, calledBy: login(), ts: now, keysTs: null, drop: null };
    if (door) { body.door = door; body.doorSrc = 'odm'; body.doorTs = now; }
    return patch('trucks/' + encodeURIComponent(vr), body).then(() => {
      registrarLlamada(vr, door, src, now);
      const t = Object.assign({}, (trucksCache && trucksCache[vr]) || {}, body);
      if (trucksCache) trucksCache[vr] = t;
      bells[vr] = { e: 'a', by: t.calledBy, ts: now, src: src, k: door || null };
      return t;
    });
  }
  // llamarSiHaceFalta(): lee antes; si ya esta avisado y vivo NO reinicia la llamada (la tarjeta de la tele no cambia).
  function llamarSiHaceFalta(vr, door, src) {
    return get('trucks/' + encodeURIComponent(vr)).then(t => {
      const now = Date.now();
      if (t && t.called && t.calledTs && (now - t.calledTs) < HORA_MAX_MS && !t.fin) return { ya: true, t: t };
      return llamar(vr, door, src).then(t2 => ({ ya: false, t: t2 }));
    });
  }

  // ===================== YMS (shipclerk): campanilla por muelle =====================
  let arrancarRol = null;
  if (enYms) (function () {
    let pend = null, pendT = null;
    const CAMPANA = '\ud83d\udd14';
    function puertaDe(a) { const t = normLoc(a.textContent); return /^[A-Z0-9]{2,12}$/.test(t) ? t : null; }
    function fin(btn, titulo, txt) {
      btn.textContent = txt; btn.title = titulo; btn.style.background = '#fff';
      setTimeout(() => { btn.textContent = CAMPANA; btn.title = 'Llamar al conductor (pulsa dos veces)'; }, 6000);
    }
    function llamarMuelle(door, btn) {
      btn.textContent = '...';
      get('board').then(board => {
        const now = Date.now();
        let ya = null;
        Object.keys(board || {}).forEach(k => { const b = board[k]; if (b && normLoc(b.door) === door && !(b.done && b.done >= b.ts) && now - b.ts < HORA_MAX_MS) ya = b; });
        if (ya) { fin(btn, door + ' ya esta en pantalla' + (ya.by ? ' (avisado por ' + ya.by + ' a las ' + hhmm(ya.ts) + ')' : ''), '\u2713'); return; }
        const id = 'M' + now + Math.random().toString(36).slice(2, 6);
        return put('board/' + id, { door: door, ts: now, shown: now, by: login(), src: 'yms' }).then(() => { registrarLlamada('M-' + door, door, 'yms', now); fin(btn, 'Llamado ' + door, '\u2713'); });
      }).catch(() => fin(btn, 'No se pudo enviar: pulsa otra vez', '\u26a0\ufe0f'));
    }
    function alPulsar(e, a, btn) {
      e.preventDefault(); e.stopPropagation();
      const door = puertaDe(a); if (!door) return;
      if (pend === btn) { clearTimeout(pendT); pend = null; btn.style.background = '#fff'; llamarMuelle(door, btn); return; }
      if (pend) { pend.style.background = '#fff'; pend.textContent = CAMPANA; }
      pend = btn; btn.textContent = CAMPANA + '?'; btn.title = 'Pulsa otra vez para llamar ' + door; btn.style.background = '#ff9900';
      clearTimeout(pendT);
      pendT = setTimeout(() => { if (pend === btn) { pend = null; btn.style.background = '#fff'; btn.textContent = CAMPANA; } }, 3000);
    }
    function inyectar() {
      if (!mando.activo) { document.querySelectorAll('.cantina-yms-bell').forEach(b => b.remove()); return; }
      document.querySelectorAll('td.col1 div.location-type-ProcessingLocation .short-name-distinguished').forEach(div => {
        if (div.querySelector('.cantina-yms-bell') || div.querySelector('.ty-yms-bell')) return;
        const a = div.querySelector('a'); if (!a || !puertaDe(a)) return;
        const btn = document.createElement('button');
        btn.className = 'cantina-yms-bell'; btn.type = 'button'; btn.textContent = CAMPANA;
        btn.title = 'Llamar al conductor (pulsa dos veces)';
        btn.style.cssText = 'margin-left:6px;border:1px solid #bbb;border-radius:10px;background:#fff;cursor:pointer;font-size:13px;line-height:1;padding:1px 4px;vertical-align:middle;';
        btn.addEventListener('click', e => alPulsar(e, a, btn));
        a.insertAdjacentElement('afterend', btn);
      });
    }
    function arrancarYms() {
      leerConfig();
      setInterval(leerConfig, LEAD ? 60000 : CLERK_POLL_MS);
      setInterval(inyectar, 2000);
      try { new MutationObserver(() => { clearTimeout(inyectar._t); inyectar._t = setTimeout(inyectar, 300); }).observe(document.documentElement, { childList: true, subtree: true }); } catch (e) {}
    }
    arrancarRol = arrancarYms;
  })();

  // ===================== ODM: campanilla por fila + Finalizar + (lead) tele =====================
  const CALL_DELAY_S = 5, DESHACER_MS = 2 * 60000, DROP_MS = 60000;
  const pendientes = new Map();
  const BELL_BG = { rojo: '#e03131', amarillo: '#f5c518', verde: '#2f9e44' };
  const clics = new Map(); // vrid -> ts del clic en Finalizar

  function leerFila(tr) {
    const vrid = tr.getAttribute('vrid'); if (!vrid) return null;
    const statusEl = tr.querySelector('.statusCell [data-status]');
    const status = statusEl ? statusEl.getAttribute('data-status') : null;
    const doorEl = tr.querySelector('.DOCK_DOOR ~ .locLabel');
    const door = doorEl && doorEl.textContent.trim() ? doorEl.textContent.trim() : null;
    const psEl = tr.querySelector('.tp-label-v14[title*="Tractora esperando"]');
    const psv = psEl ? String(psEl.textContent || '').trim().toUpperCase().replace(/\s+/g, '') : '';
    const fillTxt = tr.querySelector('.projectedFillPercentage .variableValue');
    const fill = fillTxt && fillTxt.textContent.trim() ? parseInt(fillTxt.textContent.replace('%', ''), 10) : null;
    let sdt = null;
    const tabla = tr.closest('table'); let iSdt = -1;
    if (tabla) { const ths = tabla.querySelectorAll('thead th'); for (let i = 0; i < ths.length; i++) if (/^\s*(SDT|Scheduled Departure)/i.test(ths[i].textContent)) { iSdt = i; break; } }
    const sdtCell = iSdt >= 0 ? tr.cells[iSdt] : tr.querySelector('td.sorting_2');
    if (sdtCell) {
      const txt = Array.from(sdtCell.childNodes).find(n => n.nodeType === 3 && n.textContent.trim());
      const m = txt && /^(\d{1,2}-[A-Za-z]{3}-\d{2})\s+(\d{1,2}:\d{2})/.exec(txt.textContent.trim());
      if (m) sdt = m[1] + ' ' + m[2];
    }
    return { vrid: vrid, status: status, door: door, ps: /^[A-Z0-9]{2,12}$/.test(psv) ? psv : null, fill: isNaN(fill) ? null : fill, sdt: sdt };
  }

  // ---- campanilla de tres estados: rojo sin avisar / amarillo avisado / verde llaves entregadas ----
  function estadoCampana(vr) {
    const b = bells[vr], now = Date.now();
    if (!b || !b.ts || (now - b.ts) >= HORA_MAX_MS) return { e: 'rojo', why: 'Avisar al conductor (clic: cuenta atras de ' + CALL_DELAY_S + ' s)' };
    const quien = 'Avisado por ' + (b.by || '?') + ' a las ' + hhmm(b.ts) + ' (' + (SRC_TXT[b.src] || b.src || '?') + ')';
    if (b.e === 'v') return { e: 'verde', why: (b.vwhy || 'Llaves entregadas') + '. ' + quien + ((b.vts && (now - b.vts) < DESHACER_MS) ? '. Clic: deshacer' : '') };
    return { e: 'amarillo', why: quien + (b.drop ? '. Drop sin tractora: no sale en pantalla' : (b.tv ? '. En la pantalla de la cantina' : '. Esperando tractora')) + '. Clic: llaves entregadas' };
  }
  function pintarCampanilla(btn) {
    const vr = btn.getAttribute('data-vrid'); if (!vr || pendientes.has(vr) || btn.getAttribute('data-ocupada')) return;
    const s = estadoCampana(vr);
    btn.setAttribute('data-estado', s.e); btn.title = s.why;
    btn.style.background = BELL_BG[s.e]; btn.style.color = s.e === 'verde' ? '#fff' : '';
    btn.textContent = s.e === 'verde' ? '\u2713' : '\ud83d\udd14';
  }
  function pintarCampanillas() { document.querySelectorAll('.cantina-bell').forEach(pintarCampanilla); }

  function enviarCampana(vrid, btn, intento) {
    const info = leerFila(btn.closest('tr')) || {};
    btn.setAttribute('data-ocupada', '1'); btn.textContent = '\u2026';
    llamarSiHaceFalta(vrid, info.door || null, 'bell').then(r => {
      btn.removeAttribute('data-ocupada');
      if (r.ya) {
        bells[vrid] = Object.assign({}, bells[vrid] || {}, { e: (r.t.keysTs && r.t.keysTs >= r.t.calledTs) ? 'v' : 'a', by: r.t.calledBy || '?', ts: r.t.calledTs, src: r.t.calledSrc || '?' });
        toast('Ya estaba avisado. ' + quienTxt(r.t), '#f08c00');
      } else {
        toast('\ud83d\udd14 Aviso enviado al conductor ' + vrid + (info.door ? ' \u00b7 ' + info.door : ''), '#2b8a3e');
      }
      pintarCampanilla(btn);
    }).catch(() => {
      if (!intento || intento < 3) { btn.title = 'Reintentando...'; setTimeout(() => enviarCampana(vrid, btn, (intento || 0) + 1), 1500); return; }
      btn.removeAttribute('data-ocupada'); btn.textContent = '\u26a0\ufe0f'; btn.title = 'No se pudo enviar el aviso: pulsa otra vez';
      setTimeout(() => pintarCampanilla(btn), 8000);
    });
  }
  function cuentaAtras(vrid, btn) {
    const p = pendientes.get(vrid);
    if (p) { clearInterval(p.timer); pendientes.delete(vrid); pintarCampanilla(btn); return; }
    let restante = CALL_DELAY_S;
    const pintar = () => { btn.textContent = '\u23f3' + restante + ' \u2715'; btn.title = 'Enviando en ' + restante + ' s. Clic para cancelar'; btn.style.color = '#d9480f'; };
    pintar();
    const timer = setInterval(() => {
      restante--;
      if (restante <= 0) { clearInterval(timer); pendientes.delete(vrid); enviarCampana(vrid, btn); return; }
      pintar();
    }, 1000);
    pendientes.set(vrid, { timer: timer });
  }
  function entregarLlaves(vrid, btn) {
    btn.setAttribute('data-ocupada', '1'); btn.textContent = '\u2026'; btn.title = 'Guardando...';
    const enc = encodeURIComponent(vrid), now = Date.now();
    const fin = () => { btn.removeAttribute('data-ocupada'); pintarCampanilla(btn); };
    Promise.all([get('trucks/' + enc), get('board/' + enc)]).then(([t, b]) => {
      if (!t || !t.called || !t.calledTs) throw new Error('sin llamada');
      const done = Math.max(now, t.calledTs + 1);
      const bb = { ts: t.calledTs, done: done, left: 'clerk-odm', doneBy: login() };
      if (!b) { const donde = (t.ps && !t.fin) ? t.ps : t.door; if (donde) bb.door = String(normLoc(donde) || donde).slice(0, 12); }
      return Promise.all([patch('board/' + enc, bb), patch('trucks/' + enc, { keysTs: now, keysBy: login(), ts: now })]).then(() => {
        bells[vrid] = Object.assign({}, bells[vrid] || {}, { e: 'v', vts: now, vwhy: 'Llaves entregadas', by: t.calledBy || '?', ts: t.calledTs, src: t.calledSrc || '?' });
        if (trucksCache && trucksCache[vrid]) trucksCache[vrid].keysTs = now;
      });
    }).then(fin, () => { fin(); btn.textContent = '\u26a0\ufe0f'; btn.title = 'No se pudo guardar: pulsa otra vez'; });
  }
  function deshacerLlaves(vrid, btn) {
    const b = bells[vrid];
    if (!b || !b.vts || Date.now() - b.vts >= DESHACER_MS) return;
    btn.setAttribute('data-ocupada', '1'); btn.textContent = '\u2026';
    const enc = encodeURIComponent(vrid);
    const fin = () => { btn.removeAttribute('data-ocupada'); pintarCampanilla(btn); };
    Promise.all([patch('board/' + enc, { done: null, left: null, doneBy: null }), patch('trucks/' + enc, { keysTs: null, keysBy: null })])
      .then(() => { bells[vrid] = Object.assign({}, b, { e: 'a', vts: null, vwhy: null }); if (trucksCache && trucksCache[vrid]) trucksCache[vrid].keysTs = null; }).then(fin, fin);
  }
  function inyectarCampanillas() {
    if (!mando.activo) { document.querySelectorAll('.cantina-bell').forEach(b => b.remove()); return; }
    document.querySelectorAll('tr[vrid]').forEach(tr => {
      if (tr.querySelector('.cantina-bell') || tr.querySelector('.tomyard-bell')) return;
      const vrid = tr.getAttribute('vrid'); if (!vrid) return;
      const celda = tr.querySelector('td.inputData') || tr.cells[tr.cells.length - 1]; if (!celda) return;
      const btn = document.createElement('button');
      btn.className = 'cantina-bell'; btn.setAttribute('data-vrid', vrid); btn.type = 'button';
      btn.textContent = '\ud83d\udd14'; btn.title = 'Avisar al conductor';
      btn.style.cssText = 'margin-left:6px;border:none;cursor:pointer;font-size:13px;line-height:1;padding:0;font-weight:700;width:22px;height:22px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;background:#e03131;';
      btn.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        if (btn.getAttribute('data-ocupada')) return;
        const est = btn.getAttribute('data-estado') || 'rojo';
        if (pendientes.has(vrid) || est === 'rojo') cuentaAtras(vrid, btn);
        else if (est === 'amarillo') entregarLlaves(vrid, btn);
        else deshacerLlaves(vrid, btn);
      });
      celda.appendChild(btn);
      pintarCampanilla(btn);
    });
  }

  // ---- Finalizar: clic en el enlace de ODM y, cuando la fila pasa a FINISHED_LOADING (<3 min), se llama con src 'fin' ----
  if (enOdm) document.addEventListener('click', (e) => {
    try {
      const a = e.target && e.target.closest && e.target.closest('.linkFinishLoading');
      if (!a) return;
      const tr = a.closest('tr[vrid]');
      const vr = (a.dataset && a.dataset.vrid) || (tr && tr.getAttribute('vrid'));
      if (vr) clics.set(vr, Date.now());
    } catch (err) {}
  }, true);
  const finPend = new Set();
  function barrerFilas() {
    if (!mando.activo) return;
    const now = Date.now();
    document.querySelectorAll('tr[vrid]').forEach(tr => {
      const info = leerFila(tr); if (!info || info.status !== 'FINISHED_LOADING') return;
      const vr = info.vrid, clic = clics.get(vr);
      let src = null;
      if (clic && now - clic < 3 * 60000) src = 'fin';
      else if (tengoMando() && !bells[vr] && bellsTs && info.fill !== 0 && /^(OB|PS)/i.test(String(info.door || ''))) src = 'auto'; // el que manda cubre al que no tiene script
      if (!src || finPend.has(vr)) return;
      finPend.add(vr);
      llamarSiHaceFalta(vr, info.door, src).then(r => {
        clics.delete(vr);
        if (!r.ya) toast('\ud83d\udd14 Aviso al conductor ' + vr + (info.door ? ' \u00b7 ' + info.door : '') + (src === 'fin' ? ' (carga terminada)' : ' (autom\u00e1tico)'), '#7c4dff');
        else if (src === 'fin') bells[vr] = Object.assign({}, bells[vr] || {}, { e: (r.t.keysTs && r.t.keysTs >= r.t.calledTs) ? 'v' : 'a', by: r.t.calledBy || '?', ts: r.t.calledTs, src: r.t.calledSrc || '?' });
        pintarCampanillas();
      }).catch(() => {}).then(() => finPend.delete(vr));
    });
  }

  // ---- YMS por API desde ODM (solo el que manda): tractoras por ubicacion ----
  const YMS_API = 'https://jwmjkz3dsd.execute-api.eu-west-1.amazonaws.com/call/';
  let yTok = null, yTokTs = 0, ySnap = null, ySnapTs = 0, yBusy = null, yGood = null, yGoodTs = 0;
  function fetchT(url, opts, ms) {
    const ac = (typeof AbortController !== 'undefined') ? new AbortController() : null;
    const t = setTimeout(() => { if (ac) ac.abort(); }, ms || 10000);
    const o = Object.assign({}, opts || {}); if (ac) o.signal = ac.signal;
    return PW.fetch(url, o).then(r => { clearTimeout(t); return r; }, e => { clearTimeout(t); throw e; });
  }
  function yardToken() {
    if (yTok && Date.now() - yTokTs < 30 * 60000) return Promise.resolve(yTok);
    return fetchT('/yms/eventHistory/', { credentials: 'include' }, 15000).then(r => r.ok ? r.text() : '').then(h => {
      const m = /window\.ymsSecurityToken\s*=\s*"([^"]+)"/.exec(h || '');
      if (!m) throw new Error('sin token');
      yTok = m[1].replace(/\\/g, ''); yTokTs = Date.now(); return yTok;
    });
  }
  function yardSnapshot() {
    if (ySnap && Date.now() - ySnapTs < 8000) return Promise.resolve(ySnap);
    if (yBusy) return yBusy;
    yBusy = yardToken().then(tok => fetchT(YMS_API + 'getYardStateWithPendingMoves', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8', Accept: 'application/json, text/plain, */*', api: 'getYardStateWithPendingMoves', method: 'POST', token: tok },
      body: JSON.stringify({ requester: { system: 'YMSWebApp' } })
    }, 20000)).then(r => {
      if (r.status === 401 || r.status === 403) { yTok = null; throw new Error('auth'); }
      if (!r.ok) throw new Error('http ' + r.status);
      return r.json();
    }).then(j => {
      const snap = { known: new Set(), tractor: {}, trailer: {}, trailers: {}, tractorVr: {} };
      (j.locationsSummaries || []).forEach(s => ((s && s.locations) || []).forEach(l => {
        const k = normLoc(l.code || l.name); if (!k) return;
        snap.known.add(k);
        (l.yardAssets || []).forEach(a => {
          const tipo = String(a.type || '').toUpperCase();
          const lp = a.licensePlateIdentifier || {};
          const pl = String(lp.registrationIdentifier || a.vehicleNumber || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 12);
          if (/^(TRACTOR|BOX_TRUCK|TRUCK|VAN|RIGID)/.test(tipo)) {
            if (!snap.tractor[k]) snap.tractor[k] = pl || '?';
            let ids = (a.load && a.load.identifiers) || [];
            if (!Array.isArray(ids)) ids = Object.keys(ids).map(x => ({ type: x, identifier: ids[x] && (ids[x].identifier || ids[x]) }));
            ids.forEach(i => { const v = i && /VR_?ID/i.test(String(i.type)) && String(i.identifier || '').trim().toUpperCase(); if (v && /^1[0-9A-Z]{8,10}$/.test(v) && !snap.tractorVr[v]) snap.tractorVr[v] = { loc: k, plate: pl || '?' }; });
          } else if (/^TRAILER/.test(tipo) && pl) { if (!snap.trailer[k]) snap.trailer[k] = pl; (snap.trailers[k] = snap.trailers[k] || []).push(pl); }
        });
      }));
      if (!snap.known.size) throw new Error('YMS sin ubicaciones');
      ySnap = snap; ySnapTs = Date.now(); yGood = snap; yGoodTs = ySnapTs; return snap;
    }).catch(() => (yGood && Date.now() - yGoodTs < 3 * 60000) ? yGood : null).then(x => { yBusy = null; return x; });
    return yBusy;
  }

  // ---- ciclo del que manda: trucks + board -> tele (/board), colores (/bells), /diag ----
  let cicloBusy = 0, diagTs = 0, bellsEscritas = '';
  function ciclo() {
    if (!tengoMando()) return;
    if (cicloBusy && Date.now() - cicloBusy < 40000) return;
    cicloBusy = Date.now();
    Promise.all([get('trucks', true), get('board', true)]).then(([trucks, board]) => {
      trucks = trucks || {}; board = board || {};
      trucksCache = trucks;
      const n0 = Date.now();
      const hayLlamados = Object.keys(trucks).some(vr => { const t = trucks[vr]; return t && t.called && !t.fin && t.calledTs && (n0 - t.calledTs) < HORA_MAX_MS; })
        || Object.keys(board).some(k => /^M\d{13}/.test(k) && !board[k].done && n0 - (board[k].ts || 0) < HORA_MAX_MS);
      return (hayLlamados ? yardSnapshot() : Promise.resolve(null)).then(snap => procesar(trucks, board, snap));
    }).catch(() => {}).then(() => { cicloBusy = 0; });
  }
  function procesar(trucks, board, snap) {
    const now = Date.now(), body = {}, trBody = {}, nb = {}, diag = [];
    const psDom = {};
    const filasOdm = document.querySelectorAll('tr[vrid]').length > 0;
    document.querySelectorAll('tr[vrid]').forEach(tr => { const vr = tr.getAttribute('vrid'); if (!vr) return; const i = leerFila(tr); psDom[vr] = i ? i.ps : null; });
    Object.keys(trucks).forEach(vr => {
      const t = trucks[vr]; if (!t) return;
      if (vr in psDom) {
        if ((t.ps || null) !== psDom[vr]) { trBody[vr + '/ps'] = psDom[vr]; trBody[vr + '/psTs'] = now; t.ps = psDom[vr]; }
        else if (t.ps && now - (t.psTs || 0) > 5 * 60000) trBody[vr + '/psTs'] = now;
      } else if (t.ps && filasOdm && now - (t.psTs || 0) > 10 * 60000) { trBody[vr + '/ps'] = null; t.ps = null; }
      const donde = (t.ps && !t.fin) ? t.ps : t.door;
      const vivo = t.called && !t.fin && t.calledTs && (now - t.calledTs) < HORA_MAX_MS;
      const b = board[vr];
      const key0 = normLoc(donde);
      const tv = (snap && !t.fin && snap.tractorVr && snap.tractorVr[String(vr).toUpperCase()]) || null;
      const enMuelle = !!(snap && snap.known.has(key0)) ? (snap.tractor[key0] || null) : null;
      const porVr = !!(tv && !enMuelle && !VIRTUAL(key0));
      const key = porVr ? tv.loc : key0;
      const juzgable = porVr || !!(snap && snap.known.has(key));
      const tract = porVr ? tv.plate : (juzgable ? (snap.tractor[key] || null) : null);
      const solo = !!(t.ps && !t.fin);
      const virtual = VIRTUAL(key);
      // drop: llamado hace >60 s, muelle conocido por el YMS y sin tractora -> nunca sale en la tele aunque llegue una tractora
      if (vivo && !t.drop && juzgable && !tract && !porVr && !solo && (now - t.calledTs) > DROP_MS && !b) { trBody[vr + '/drop'] = now; t.drop = now; }
      const mostrar = vivo && key && !virtual && !t.drop && (!juzgable || !!tract);
      const trl = juzgable ? (snap.trailer[key] || null) : null;
      if (mostrar) {
        const door = (key || String(donde).replace(/[^A-Za-z0-9]/g, '').toUpperCase()).slice(0, 12);
        const pl = tract && tract !== '?' ? tract : null;
        if (!b || b.ts !== t.calledTs || (b.door !== door && !b.done)) { body[vr] = { door: door, ts: t.calledTs, shown: now, by: t.calledBy || null, src: t.calledSrc || null }; if (pl) body[vr].plate = pl; if (trl) body[vr].trl = trl; }
        else if (b.done && b.left === 'tractora' && pl && b.plate === pl && now - b.done < 5 * 60000) { body[vr + '/done'] = null; body[vr + '/left'] = null; }
        else if (b.done) { /* ya quitado: no se repinta */ }
        else if (b.trl && trl && (snap.trailers[key] || []).indexOf(b.trl) < 0) { body[vr + '/done'] = now; body[vr + '/left'] = 'remolque'; }
        else if (pl && b.plate !== pl) body[vr + '/plate'] = pl;
        else if (!pl && juzgable && b.plate) body[vr + '/plate'] = null;
        else if (trl && !b.trl) body[vr + '/trl'] = trl;
      } else if (b) {
        if (vivo && juzgable && !tract && !virtual && b.plate) { if (!b.done) { body[vr + '/done'] = now; body[vr + '/left'] = 'tractora'; } }
        else if (vivo && b.done && !virtual) { /* hecho y sigue llamado */ }
        else body[vr] = null;
      }
      if (vivo) {
        const bb = Object.assign({}, b || {}, body[vr] && typeof body[vr] === 'object' ? body[vr] : {});
        const quitado = (t.keysTs && t.keysTs >= t.calledTs) || (bb.done && bb.done >= (bb.ts || 0));
        const e = { e: quitado ? 'v' : 'a', by: t.calledBy || null, ts: t.calledTs, src: t.calledSrc || null, k: key || null };
        if (quitado) { e.vts = t.keysTs || bb.done || now; e.vwhy = (t.keysTs && t.keysTs >= t.calledTs) ? 'Llaves entregadas' + (t.keysBy ? ' (' + t.keysBy + ')' : '') : (bb.left === 'tractora' ? 'La tractora se fue' : bb.left === 'remolque' ? 'Otro remolque en el muelle' : 'Quitado de la pantalla'); }
        if (t.drop) e.drop = 1; if (tract && tract !== '?') e.tv = tract;
        nb[vr] = e;
        diag.push({ vr: vr, donde: donde || null, key: key, solo: solo, juzgable: juzgable, tract: tract, virtual: virtual, porVr: porVr, drop: !!t.drop, mostrar: !!mostrar, enBoard: !!b, by: t.calledBy || null, src: t.calledSrc || null });
      } else if (t.fin && t.calledTs && (now - t.calledTs) < HORA_MAX_MS) nb[vr] = { e: 'v', by: t.calledBy || null, ts: t.calledTs, src: t.calledSrc || null, vwhy: 'Camion con check-out', vts: t.fin === true ? now : t.fin };
    });
    Object.keys(board).forEach(k => {
      if (/^M\d{13}/.test(k)) {
        const bm = board[k];
        if (now - (bm.ts || 0) > 24 * 3600 * 1000) { body[k] = null; return; }
        const km = normLoc(bm.door);
        if (!bm.done && VIRTUAL(km)) { body[k + '/done'] = now; body[k + '/left'] = 'virtual'; return; }
        if (snap && !bm.done && now - (bm.ts || 0) < HORA_MAX_MS && snap.known.has(km)) {
          const pm = snap.tractor[km]; const pl = pm && pm !== '?' ? pm : null;
          if (pl && bm.plate !== pl) body[k + '/plate'] = pl; else if (!pl && bm.plate) body[k + '/plate'] = null;
        }
        return;
      }
      if (!trucks[k] && !(k in body)) body[k] = null;
    });
    bells = nb; bellsTs = now; pintarCampanillas();
    const nbTxt = JSON.stringify(nb);
    const ps = [];
    if (Object.keys(trBody).length) ps.push(patch('trucks', trBody).catch(() => {}));
    if (Object.keys(body).length) ps.push(patch('board', body).catch(() => {}));
    if (nbTxt !== bellsEscritas) ps.push(put('bells', nb).then(() => { bellsEscritas = nbTxt; }).catch(() => {}));
    if (now - diagTs >= 45000) {
      diagTs = now;
      const tr = {}; if (snap) Object.keys(snap.tractor).forEach(k => { if (/^(PS|OB|IB)/.test(k)) tr[k] = snap.tractor[k]; });
      ps.push(put('diag', { ts: now, v: VERSION, rol: ROL, by: login(), inst: INST, via: red.via, yms: !!snap, known: snap ? snap.known.size : 0, tractoras: tr, camiones: diag.slice(0, 40) }).catch(() => {}));
    }
    return Promise.all(ps);
  }

  // ---- limpieza (solo el que manda, cada hora): trucks sin actividad 24 h, calls 7 d, lider caducado ----
  function limpiar() {
    if (!tengoMando()) return;
    const ahora = Date.now();
    const barrer = (ruta, maxMs) => get(ruta).then(all => {
      if (!all) return; const body = {}; let n = 0;
      Object.keys(all).forEach(k => { const d = all[k] || {}; if (typeof d.ts !== 'number' || ahora - d.ts > maxMs) { body[k] = null; n++; } });
      if (n) return patch(ruta, body);
    }).catch(() => {});
    barrer('trucks', 24 * 3600 * 1000);
    barrer('calls', 7 * 24 * 3600 * 1000);
    barrer('presence', 30 * 24 * 3600 * 1000);
  }

  // ---- boton Llamadas (solo lead): lista de las ultimas 24 h ----
  function botonLlamadas() {
    if (!LEAD || document.getElementById('cantina-llamadas-btn')) return;
    const btn = document.createElement('button');
    btn.id = 'cantina-llamadas-btn'; btn.type = 'button'; btn.textContent = 'Llamadas';
    btn.title = 'Pantalla cantina ' + VERSION + ': quien ha avisado a cada camion (24 h)';
    btn.style.cssText = 'position:fixed;bottom:10px;left:10px;z-index:2147483645;background:#1c7ed6;color:#fff;border:none;border-radius:14px;padding:4px 10px;font:12px Arial,sans-serif;cursor:pointer;opacity:.85';
    btn.addEventListener('click', () => {
      let panel = document.getElementById('cantina-llamadas');
      if (panel) { panel.remove(); return; }
      panel = document.createElement('div'); panel.id = 'cantina-llamadas';
      panel.style.cssText = 'position:fixed;bottom:40px;left:10px;z-index:2147483645;background:#fff;color:#222;border:1px solid #999;border-radius:8px;padding:8px 10px;font:12px/1.4 Arial,sans-serif;max-height:60vh;overflow:auto;box-shadow:0 4px 14px rgba(0,0,0,.3);min-width:320px';
      panel.textContent = 'Cargando...';
      document.body.appendChild(panel);
      get('calls').then(all => {
        const now = Date.now();
        const ks = Object.keys(all || {}).filter(k => now - (all[k].ts || 0) < 24 * 3600 * 1000).sort().reverse();
        if (!ks.length) { panel.textContent = 'Sin llamadas en 24 h'; return; }
        panel.textContent = '';
        ks.forEach(k => {
          const c = all[k]; const d = document.createElement('div');
          d.textContent = hhmm(c.ts) + '  ' + (c.vr || '') + '  ' + (c.door || '') + '  ' + (c.by || '?') + '  (' + (SRC_TXT[c.src] || c.src || '?') + ')';
          panel.appendChild(d);
        });
      }).catch(() => { panel.textContent = 'No se pudo leer /calls'; });
    });
    document.body.appendChild(btn);
  }

  // ---- arranque ----
  function arrancar() {
    if (!enOdm) { if (arrancarRol) arrancarRol(); return; }
    pedirMando().then(() => leerBells()).then(pintarCampanillas);
    inyectarCampanillas();
    setInterval(inyectarCampanillas, 2000);
    setInterval(barrerFilas, 5000);
    if (LEAD) {
      setInterval(pedirMando, LEAD_POLL_MS);
      setInterval(() => { if (tengoMando()) ciclo(); else leerBells().then(pintarCampanillas); }, 15000);
      setTimeout(ciclo, 4000);
      setTimeout(limpiar, 90000); setInterval(limpiar, 3600000);
      botonLlamadas();
    } else {
      // clerk: cada 3 min lee config/lider/bells; si tiene el mando de emergencia se comporta como lead mientras dure
      setInterval(() => { if (mando.tengo) { pedirMando().then(() => { if (tengoMando()) ciclo(); }); } }, LEAD_POLL_MS);
      setInterval(() => { pedirMando().then(() => leerBells()).then(pintarCampanillas); }, CLERK_POLL_MS);
    }
    try { new MutationObserver(() => { clearTimeout(inyectarCampanillas._t); inyectarCampanillas._t = setTimeout(inyectarCampanillas, 300); }).observe(document.body || document.documentElement, { childList: true, subtree: true }); } catch (e) {}
  }
  if (document.readyState === 'complete') setTimeout(arrancar, 500); else window.addEventListener('load', () => setTimeout(arrancar, 500));
})();

// fin cantina-clerk
