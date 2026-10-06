/* Guia BCN1 - navegacion tipo "Google Maps" dentro del recinto.
   - Sigue al camion en el mapa (boton "seguir"), con flecha de rumbo.
   - Detecta los giros de la ruta dibujada y avisa por voz en el idioma del conductor
     ("en 60 metros gira a la derecha", "has llegado a OB130"), sin tocar la pantalla.
   - Pancarta grande encima del mapa con la siguiente indicacion y la distancia.
   - ?simular=1  : recorre la ruta con una posicion ficticia (para probar en el PC, sin GPS).
   - ?grabar=1   : modo oculto para el equipo: graba la posicion GPS cada 2 s y la descarga en un .json
                   para pasar las coordenadas reales de cada carril a mapa.js.
   Depende de: mapa.js (geoMap, geoDist, geoProj...), ubicacion.js (geoPosicion llama a navOnPos), idiomas (UI.xx.nav). */

const NAV_GIRO_MIN_GRADOS = 30;   // cambio de rumbo minimo para considerarlo un giro
const NAV_AVISO_LEJOS_M = 70;     // primer aviso de voz: "en 70 m gira..."
const NAV_AVISO_CERCA_M = 22;     // segundo aviso: "gira ahora"
const NAV_LLEGADA_M = 18;         // distancia al destino para dar por llegado
const NAV_FUERA_RUTA_M = 35;      // a mas de esto del carril se avisa "vuelve a la ruta"
const NAV_FOLLOW_PAUSA_MS = 25000; // tras arrastrar el mapa a mano, se deja de seguir este tiempo
const NAV_VOZ_LANG = { es: 'es-ES', en: 'en-GB', fr: 'fr-FR', ro: 'ro-RO', de: 'de-DE', it: 'it-IT', tr: 'tr-TR', ar: 'ar-SA', bg: 'bg-BG', pl: 'pl-PL', ru: 'ru-RU', uk: 'uk-UA' };

let navRuta = null;        // { pts, dest, maniobras: [{idx, dAcum, tipo, ll}], total }
let navEstado = null;      // { prox (indice de maniobra), avisado: {lejos, cerca}, llegado, ultFuera }
let navFollow = true, navFollowPausaHasta = 0, navVoz = localStorage.getItem('bcn1_nav_voz') !== 'off';
let navUltPos = null, navRumbo = null;
const navParams = new URLSearchParams(location.search);
const NAV_SIMULAR = navParams.get('simular') === '1', NAV_GRABAR = navParams.get('grabar') === '1';

function navT() { return (UI[currentLang] && UI[currentLang].nav) || UI.es.nav; }
function navRumboEntre(a, b) { // grados 0..360, 0 = norte
  const dy = (b[0] - a[0]) * GEO_M_LAT, dx = (b[1] - a[1]) * GEO_M_LON;
  return (Math.atan2(dx, dy) * 180 / Math.PI + 360) % 360;
}
function navDeltaRumbo(r1, r2) { let d = r2 - r1; while (d > 180) d -= 360; while (d < -180) d += 360; return d; } // + derecha, - izquierda

/* Llamado por mapa.js cada vez que dibuja una ruta (verde de entrada o roja de salida). pts = null -> sin navegacion. */
function navSetRuta(pts, destTxt) {
  if (!pts || pts.length < 2) { navEstado = null; navRuta = null; navPintar(null); return; }
  // la guia repinta el mapa en cada consulta (15 s): si la ruta es la misma no se reinician los avisos
  if (navRuta && navRuta.dest === (destTxt || '') && navRuta.origen.length === pts.length && geoDist(navRuta.origen[0], pts[0]) < 1 && geoDist(navRuta.origen[pts.length - 1], pts[pts.length - 1]) < 1) return;
  navEstado = null; navRuta = null;
  // quitar puntos repetidos / pegados (< 1 m) que ensucian el calculo de rumbo
  const limpio = [pts[0]];
  for (let i = 1; i < pts.length; i++) if (geoDist(limpio[limpio.length - 1], pts[i]) > 1) limpio.push(pts[i]);
  const dAcum = [0];
  for (let i = 1; i < limpio.length; i++) dAcum.push(dAcum[i - 1] + geoDist(limpio[i - 1], limpio[i]));
  const maniobras = [];
  for (let i = 1; i < limpio.length - 1; i++) {
    // rumbo "de entrada" y "de salida" mirando un poco mas lejos que el punto vecino (tramos de 1-2 m dan rumbos ruidosos)
    let a = i - 1; while (a > 0 && dAcum[i] - dAcum[a] < 6) a--;
    let b = i + 1; while (b < limpio.length - 1 && dAcum[b] - dAcum[i] < 6) b++;
    const delta = navDeltaRumbo(navRumboEntre(limpio[a], limpio[i]), navRumboEntre(limpio[i], limpio[b]));
    if (Math.abs(delta) < NAV_GIRO_MIN_GRADOS) continue;
    const tipo = delta > 0 ? 'der' : 'izq';
    const ult = maniobras[maniobras.length - 1];
    if (ult && ult.tipo === tipo && dAcum[i] - ult.dAcum < 15) { ult.idx = i; ult.dAcum = dAcum[i]; ult.ll = limpio[i]; continue; } // mismo giro en varios puntos
    maniobras.push({ idx: i, dAcum: dAcum[i], tipo, ll: limpio[i] });
  }
  const n = limpio.length - 1;
  maniobras.push({ idx: n, dAcum: dAcum[n], tipo: 'llegada', ll: limpio[n] });
  navRuta = { pts: limpio, origen: pts, dAcum, dest: destTxt || '', maniobras, total: dAcum[n] };
  navEstado = { prox: 0, avisado: {}, llegado: false, ultFuera: 0 };
  navPintar({ tipo: maniobras[0].tipo, dist: maniobras[0].dAcum, inicio: true });
}

/* Posicion nueva (real o simulada). Devuelve la indicacion actual. */
function navOnPos(lat, lon, acc, headingGps) {
  const ll = [lat, lon];
  if (navUltPos && geoDist(navUltPos, ll) > 3) navRumbo = navRumboEntre(navUltPos, ll);
  else if (typeof headingGps === 'number' && !isNaN(headingGps)) navRumbo = headingGps;
  navUltPos = ll;
  navActualizarFlecha();
  if (navFollow && geoMap && Date.now() > navFollowPausaHasta) {
    // setView animado con cambio de zoom se pisa a si mismo al llamarlo cada segundo; el zoom se fija sin animar y luego solo se desplaza
    const z = Math.max(geoMap.getZoom(), 18.5);
    if (Math.abs(geoMap.getZoom() - z) > 0.01) geoMap.setView(ll, z, { animate: false }); else geoMap.panTo(ll, { animate: true, duration: .5 });
  }
  if (NAV_GRABAR) navGrabarPunto(lat, lon, acc);
  if (!navRuta || !navEstado || navEstado.llegado) return;
  const pr = geoProj(navRuta.pts, ll);               // punto mas cercano del carril
  const dSobreRuta = navRuta.dAcum[pr.i] + geoDist(navRuta.pts[pr.i], pr.p);
  const t = navT();
  if (pr.d > NAV_FUERA_RUTA_M) {
    navPintar({ tipo: 'fuera' });
    if (Date.now() - navEstado.ultFuera > 30000) { navEstado.ultFuera = Date.now(); navHablar(t.fuera); }
    return;
  }
  // saltar maniobras ya pasadas (por distancia a lo largo de la ruta)
  while (navEstado.prox < navRuta.maniobras.length - 1 && dSobreRuta > navRuta.maniobras[navEstado.prox].dAcum + 8) { navEstado.prox++; navEstado.avisado = {}; }
  const m = navRuta.maniobras[navEstado.prox];
  const falta = Math.max(0, m.dAcum - dSobreRuta);
  if (m.tipo === 'llegada') {
    if (falta <= NAV_LLEGADA_M || geoDist(ll, m.ll) <= NAV_LLEGADA_M) {
      navEstado.llegado = true; navPintar({ tipo: 'llegada', dist: 0 });
      navHablar(t.llegada.replace('{d}', navRuta.dest)); return;
    }
  }
  navPintar({ tipo: m.tipo, dist: falta });
  const frase = m.tipo === 'izq' ? t.izq : m.tipo === 'der' ? t.der : t.llegada.replace('{d}', navRuta.dest);
  const comp = (plantilla, x) => plantilla.replace('{x}', plantilla.startsWith('{x}') ? x : x.charAt(0).toLowerCase() + x.slice(1)); // "In 70 metres, turn left"
  if (falta <= NAV_AVISO_CERCA_M && !navEstado.avisado.cerca) { navEstado.avisado.cerca = navEstado.avisado.lejos = true; navHablar(m.tipo === 'llegada' ? frase : comp(t.ahora, frase)); }
  else if (falta <= NAV_AVISO_LEJOS_M && !navEstado.avisado.lejos) { navEstado.avisado.lejos = true; navHablar(comp(t.en.replace('{m}', navRedondear(falta)), frase)); }
}
function navRedondear(m) { return m >= 100 ? Math.round(m / 50) * 50 : Math.round(m / 10) * 10 || 10; }

/* Pancarta encima del mapa */
function navPintar(ind) {
  const b = document.getElementById('navBanner'); if (!b) return;
  const hint = document.getElementById('txtMapHint');
  if (!ind) { b.style.display = 'none'; if (hint) hint.style.display = ''; return; }
  const t = navT();
  b.style.display = 'flex'; if (hint) hint.style.display = 'none';
  const ico = { izq: '↰', der: '↱', llegada: '🏁', fuera: '↩', recto: '↑' }[ind.tipo] || '↑';
  b.querySelector('.nav-ico').textContent = ico;
  b.classList.toggle('fuera', ind.tipo === 'fuera');
  b.classList.toggle('llegada', ind.tipo === 'llegada' && !ind.dist);
  const txt = ind.tipo === 'fuera' ? t.fuera : ind.tipo === 'izq' ? t.izq : ind.tipo === 'der' ? t.der : (ind.dist ? t.llegadaProx.replace('{d}', navRuta ? navRuta.dest : '') : t.llegada.replace('{d}', navRuta ? navRuta.dest : ''));
  b.querySelector('.nav-ins').textContent = txt;
  b.querySelector('.nav-dist').textContent = (ind.tipo !== 'fuera' && ind.dist) ? navRedondear(ind.dist) + ' m' : '';
}

/* Voz: usa la del propio telefono (speechSynthesis). En iPhone solo suena tras un toque del usuario, que ya se da al aceptar normas. */
let navVozCola = null;
function navHablar(txt) {
  if (!navVoz || !txt || typeof speechSynthesis === 'undefined') return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(txt);
    u.lang = NAV_VOZ_LANG[currentLang] || 'es-ES'; u.rate = 1; u.volume = 1;
    const voces = speechSynthesis.getVoices(); const v = voces.find(x => x.lang && x.lang.toLowerCase().startsWith(u.lang.slice(0, 2).toLowerCase()));
    if (v) u.voice = v;
    speechSynthesis.speak(u); navVozCola = u;
  } catch (e) {}
}
function navToggleVoz() {
  navVoz = !navVoz; localStorage.setItem('bcn1_nav_voz', navVoz ? 'on' : 'off'); navPintarBotones();
  if (navVoz) navHablar(navT().vozOn); else { try { speechSynthesis.cancel(); } catch (e) {} }
}
function navToggleFollow() { navFollow = !navFollow; navFollowPausaHasta = 0; navPintarBotones(); if (navFollow && navUltPos && geoMap) geoMap.setView(navUltPos, Math.max(geoMap.getZoom(), 18.5)); }
function navPintarBotones() {
  const f = document.getElementById('navFollow'), v = document.getElementById('navVoz'), t = navT();
  if (f) { f.classList.toggle('on', navFollow); f.title = t.seguir; }
  if (v) { v.textContent = navVoz ? '🔊' : '🔇'; v.classList.toggle('on', navVoz); v.title = t.voz; }
}
/* Flecha de rumbo sobre el punto azul del conductor (geoMeMarker lo crea ubicacion.js) */
function navActualizarFlecha() {
  if (typeof geoMeMarker === 'undefined' || !geoMeMarker) return;
  const el = geoMeMarker.getElement(); if (!el) return;
  el.classList.add('nav');
  el.style.setProperty('--rumbo', (navRumbo == null ? 0 : navRumbo) + 'deg');
  el.classList.toggle('sin-rumbo', navRumbo == null);
}

/* ---------- Modo SIMULAR (?simular=1): mueve la posicion por la ruta a ~5 m/s, para ver la navegacion en el PC ---------- */
let navSimTimer = null, navSimD = 0;
function navSimularTick() {
  if (!navRuta) return;
  navSimD += 5 * 1.0; // metros por tick (1 s)
  if (navSimD > navRuta.total + 10) { navSimD = navRuta.total; clearInterval(navSimTimer); navSimTimer = null; }
  let i = 0; while (i < navRuta.dAcum.length - 2 && navRuta.dAcum[i + 1] < navSimD) i++;
  const a = navRuta.pts[i], b = navRuta.pts[i + 1], seg = navRuta.dAcum[i + 1] - navRuta.dAcum[i];
  const t = seg ? Math.min(1, (navSimD - navRuta.dAcum[i]) / seg) : 0;
  const p = geoLerp(a, b, t);
  const ruido = 1.5 / GEO_M_LAT; // ~1,5 m de ruido para que parezca GPS
  geoPosicion({ coords: { latitude: p[0] + (Math.random() - .5) * ruido, longitude: p[1] + (Math.random() - .5) * ruido, accuracy: 6, heading: null } });
}
function navSimularArrancar() {
  if (navSimTimer) clearInterval(navSimTimer);
  navSimD = 0; navEstado && (navEstado.prox = 0, navEstado.avisado = {}, navEstado.llegado = false);
  navSimTimer = setInterval(navSimularTick, 1000);
}

/* ---------- Modo GRABAR (?grabar=1): traza GPS para el equipo, se descarga como .json ---------- */
const NAV_REC_KEY = 'bcn1_traza';
let navRec = [], navRecLinea = null, navRecUltTs = 0;
function navGrabarPunto(lat, lon, acc) {
  const now = Date.now(); if (now - navRecUltTs < 2000) return; navRecUltTs = now;
  navRec.push({ lat: +lat.toFixed(6), lon: +lon.toFixed(6), acc: Math.round(acc || 0), ts: now });
  try { localStorage.setItem(NAV_REC_KEY, JSON.stringify(navRec)); } catch (e) {}
  if (geoMap) { const pts = navRec.map(p => [p.lat, p.lon]); if (!navRecLinea) navRecLinea = L.polyline(pts, { color: '#e53935', weight: 4, opacity: .9, interactive: false }).addTo(geoMap); else navRecLinea.setLatLngs(pts); }
  const b = document.getElementById('navRec'); if (b) b.textContent = '⏺ ' + navRec.length;
}
function navGrabarDescargar() {
  if (!navRec.length) { alert('Sin puntos grabados todavia.'); return; }
  const nombre = prompt('Nombre del tramo (ej. V0-a-700, precheck, carrilEntrada):', 'tramo') || 'tramo';
  const txt = JSON.stringify({ tramo: nombre, grabado: new Date().toISOString(), puntos: navRec, leaflet: navRec.map(p => [p.lat, p.lon]) }, null, 1);
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([txt], { type: 'application/json' }));
  a.download = `traza_${nombre}_${new Date().toISOString().slice(0, 16).replace(/[-:T]/g, '')}.json`; document.body.appendChild(a); a.click(); a.remove();
  if (confirm('Traza descargada. ¿Borrar los puntos para empezar otro tramo?')) { navRec = []; localStorage.removeItem(NAV_REC_KEY); if (navRecLinea) { geoMap.removeLayer(navRecLinea); navRecLinea = null; } document.getElementById('navRec').textContent = '⏺ 0'; }
}
function navGrabarArrancar() {
  try { navRec = JSON.parse(localStorage.getItem(NAV_REC_KEY) || '[]'); } catch (e) { navRec = []; }
  document.getElementById('mapWrap').classList.add('show');
  geoInit();
  const b = document.getElementById('navRec'); b.style.display = ''; b.textContent = '⏺ ' + navRec.length;
  if (navRec.length && geoMap) navRecLinea = L.polyline(navRec.map(p => [p.lat, p.lon]), { color: '#e53935', weight: 4, opacity: .9, interactive: false }).addTo(geoMap);
  navPintar(null);
  const hint = document.getElementById('txtMapHint'); if (hint) hint.textContent = 'MODO GRABAR: recorre el carril; cada 2 s se guarda tu posicion. Toca ⏺ para descargar la traza.';
  geoEmpezar();
}

/* ---------- Arranque ---------- */
document.getElementById('navFollow').addEventListener('click', navToggleFollow);
document.getElementById('navVoz').addEventListener('click', navToggleVoz);
document.getElementById('navRec').addEventListener('click', navGrabarDescargar);
navPintarBotones();
(function navEngancharMapa() { // al arrastrar el mapa a mano se deja de seguir un rato
  const esperar = () => { if (geoMap) { geoMap.on('dragstart', () => { navFollowPausaHasta = Date.now() + NAV_FOLLOW_PAUSA_MS; }); return; } setTimeout(esperar, 500); };
  esperar();
})();
if (NAV_GRABAR) setTimeout(navGrabarArrancar, 300);
if (NAV_SIMULAR) { const orig = navSetRuta; navSetRuta = function (pts, d) { orig(pts, d); if (pts && pts.length > 1) setTimeout(navSimularArrancar, 800); }; }
