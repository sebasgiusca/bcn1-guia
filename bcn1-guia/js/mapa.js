/* Guia BCN1 - mapa: coordenadas de garitas, muelles, virtuales, precheck, viales y rutas (Leaflet). */
/* ===================== MAPA SATELITE (Leaflet + Esri World Imagery) =====================
   Puntos medidos sobre Google Maps por el usuario y viales dibujados con geo/mapa-editor.html.
   Sin llamadas a sistemas internos: solo geometria del yard. */
const GEO_M_LAT = 111320, GEO_M_LON = 111320 * Math.cos(41.3146 * Math.PI / 180);
function geoDist(a, b) { return Math.hypot((b[0] - a[0]) * GEO_M_LAT, (b[1] - a[1]) * GEO_M_LON); }
function geoLerp(a, b, t) { return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]; }
function geoUnit(a, b) { const d = geoDist(a, b); return [(b[0] - a[0]) / d, (b[1] - a[1]) / d]; }
function geoMove(p, u, m) { return [p[0] + u[0] * m, p[1] + u[1] * m]; }

const GEO_FIJO = {
  garitaV0: [41.314100, 2.077853], garitaV2: [41.314841, 2.073871],
  compact: [41.315239, 2.077016], rampa: [41.315143, 2.076747],
  sala: [41.314793, 2.075249], llavesA: [41.314515, 2.074476],
  rampaDD300: [41.314159, 2.077614]
};
const GEO_POIS = {"puertaSur": [41.312678, 2.077304], "parkingTract": [41.314815, 2.074246], "llavesB": [41.314709, 2.075311]};
const GEO_ANC = { 107: [41.315144, 2.076686], 127: [41.314846, 2.075635], 130: [41.314785, 2.075418], 131: [41.314772, 2.075360],
  136: [41.314685, 2.075094], 146: [41.314546, 2.074534], 149: [41.314483, 2.074376], 161: [41.314289, 2.073722],
  163: [41.314262, 2.073614], 173: [41.314109, 2.073061], 174: [41.314094, 2.073003], 175: [41.314081, 2.072954] };
const geoSlot = n => n >= 128 ? n + 1 : n; // la caseta entre 127 y 128 ocupa una posicion
const GEO_ANC_KEYS = Object.keys(GEO_ANC).map(Number).sort((a, b) => a - b);
function geoMuelle(n) {
  if (n <= 105) return GEO_FIJO.compact;
  if (n === 106) return GEO_FIJO.rampa;
  const sl = geoSlot(n);
  for (let i = 0; i < GEO_ANC_KEYS.length - 1; i++) {
    const a = GEO_ANC_KEYS[i], b = GEO_ANC_KEYS[i + 1];
    if (sl >= geoSlot(a) && sl <= geoSlot(b)) return geoLerp(GEO_ANC[a], GEO_ANC[b], (sl - geoSlot(a)) / (geoSlot(b) - geoSlot(a)));
  }
  return GEO_ANC[175];
}
const GEO_PS500 = [41.315543, 2.076634], GEO_PS586 = [41.314468, 2.073085], GEO_PS564 = [41.314709, 2.073952];
const GEO_PS700 = [41.313281, 2.076721], GEO_PS720 = [41.312696, 2.077019], GEO_PS721 = [41.313128, 2.077314], GEO_PS735 = [41.313285, 2.077864];
const GEO_PC800 = [41.314468, 2.077950], GEO_PC812 = [41.314942, 2.077997];
const GEO_ULT_ESTE = 558; // ultimo virtual del grupo este (pendiente confirmar)
function geoVirtual(n) {
  if (n >= 500 && n <= GEO_ULT_ESTE) return geoMove(GEO_PS500, geoUnit(GEO_PS500, GEO_PS586), 3.5 * (n - 500));
  if (n >= 559 && n <= 563) return geoMove(GEO_PS500, geoUnit(GEO_PS500, GEO_PS586), 3.5 * (n - 500));
  if (n >= 564 && n <= 586) return geoLerp(GEO_PS564, GEO_PS586, (n - 564) / 22);
  if (n >= 700 && n <= 720) return geoLerp(GEO_PS700, GEO_PS720, (n - 700) / 20);
  if (n >= 721 && n <= 735) return geoLerp(GEO_PS721, GEO_PS735, (n - 721) / 14);
  return null;
}
function geoPrecheck(n) { return geoLerp(GEO_PC800, GEO_PC812, Math.max(0, Math.min(12, n - 800)) / 12); }
const GEO_TRAMOS = {"vialEste": [[41.314102, 2.07791], [41.314299, 2.077918], [41.31446, 2.077832], [41.314706, 2.077824], [41.314998, 2.077838], [41.315043, 2.077797], [41.315061, 2.077733], [41.315065, 2.077569], [41.315107, 2.077441], [41.315184, 2.077333], [41.315292, 2.077146], [41.315369, 2.076974]], "carrilEntrada": [[41.315431, 2.076869], [41.315349, 2.076558], [41.315057, 2.075504], [41.314899, 2.07497], [41.31475, 2.074485], [41.314597, 2.073932], [41.314464, 2.073492], [41.314337, 2.073053]], "carrilSalida": [[41.314333, 2.072827], [41.314514, 2.073487], [41.314859, 2.074748], [41.315098, 2.075508], [41.315396, 2.076559], [41.315427, 2.076859]], "lazoSur": [[41.315351, 2.077073], [41.315127, 2.077258], [41.314869, 2.077457], [41.314561, 2.07761], [41.31446, 2.077653], [41.314331, 2.077717], [41.314225, 2.077768], [41.314061, 2.077779], [41.313777, 2.077787], [41.313644, 2.077762], [41.313543, 2.077658], [41.313493, 2.07751], [41.31344, 2.077357], [41.313312, 2.077191], [41.313163, 2.07714], [41.312821, 2.07728], [41.312686, 2.077301]], "salidaV2": [[41.314351, 2.073085], [41.314339, 2.07305], [41.314342, 2.072935], [41.314394, 2.072881], [41.314478, 2.072889], [41.314525, 2.072937], [41.314543, 2.073015], [41.31462, 2.073286], [41.3147, 2.073557], [41.314801, 2.073873]], "aPrecheck": [[41.314102, 2.077948], [41.31435, 2.07795], [41.3147, 2.07799]], "tractorasDirecto": [[41.314116, 2.077937], [41.314229, 2.077937], [41.31441, 2.077846], [41.314615, 2.07783], [41.31496, 2.077838], [41.315047, 2.077787], [41.315083, 2.077626], [41.315093, 2.077478], [41.315186, 2.077333], [41.315431, 2.076869], [41.3151, 2.0758], [41.314926, 2.074972], [41.314771, 2.074445], [41.314769, 2.074276], [41.314827, 2.074249]], "reentradaSur": [[41.313036, 2.077146], [41.312953, 2.077366], [41.313062, 2.077663], [41.313167, 2.077907], [41.313306, 2.077974], [41.313798, 2.078071], [41.31391, 2.077999], [41.313963, 2.077929], [41.313959, 2.077929], [41.314156, 2.077929]], "directoSur": [[41.314096, 2.077945], [41.314319, 2.077907], [41.314394, 2.077838], [41.314613, 2.077821], [41.315006, 2.077832], [41.315075, 2.077619], [41.315063, 2.077528], [41.315029, 2.077435], [41.314971, 2.077431], [41.314919, 2.077441], [41.314796, 2.077492], [41.314561, 2.077607], [41.314336, 2.077717], [41.314232, 2.077776], [41.314096, 2.077784], [41.313847, 2.07778], [41.313691, 2.077803], [41.313604, 2.077733], [41.313518, 2.077591], [41.313517, 2.077589], [41.313516, 2.077589]]};

/* Codigo de ubicacion (door del ODM o code de la demo) -> punto */
function geoResolver(code) {
  if (!code) return null;
  const c = String(code).trim().toUpperCase().replace(/\s+/g, '');
  let m;
  if (c === 'GARITA' || c === 'V0') return { tipo: 'garita', ll: GEO_FIJO.garitaV0, txt: 'V0' };
  if ((m = c.match(/^PS(\d{3})$/))) { const n = +m[1]; const ll = geoVirtual(n); return ll ? { tipo: 'ps', n, ll, txt: 'PS' + n } : null; }
  if ((m = c.match(/^(?:PRECHECK|PC)(\d{3})$/))) { const n = +m[1]; return { tipo: 'pc', n, ll: geoPrecheck(n), txt: 'PRECHECK' + n }; }
  if ((m = c.match(/^(?:OB|IB|D|DOOR|M)?(\d{3})$/))) { const n = +m[1]; if (n >= 101 && n <= 175) return { tipo: 'muelle', n, ll: geoMuelle(n), txt: c }; }
  if (c === 'DD300' || c === 'DD300-RAMP' || c === 'RAMP' || c === '300') return { tipo: 'muelle', n: 300, ll: GEO_FIJO.rampaDD300, txt: 'DD300', sur: true, rapido: true }; // rampa junto a garita V0: entra como PS700+, sale siempre por el sur
  return null;
}
function geoProj(pts, ll) {
  let best = { d: 1e9, i: 0, p: pts[0] };
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1];
    const ax = a[1] * GEO_M_LON, ay = a[0] * GEO_M_LAT, bx = b[1] * GEO_M_LON, by = b[0] * GEO_M_LAT, px = ll[1] * GEO_M_LON, py = ll[0] * GEO_M_LAT;
    const vx = bx - ax, vy = by - ay, L2 = vx * vx + vy * vy;
    let t = L2 ? ((px - ax) * vx + (py - ay) * vy) / L2 : 0; t = Math.max(0, Math.min(1, t));
    const q = [(ay + vy * t) / GEO_M_LAT, (ax + vx * t) / GEO_M_LON]; const d = geoDist(q, ll);
    if (d < best.d) best = { d, i, p: q };
  }
  return best;
}
function geoNearestIdx(pts, ll) { let bi = 0, bd = 1e9; pts.forEach((p, i) => { const d = geoDist(p, ll); if (d < bd) { bd = d; bi = i; } }); return bi; }
const geoEsSur = d => !!d && (d.sur || (d.tipo === 'ps' && d.n >= 700));
/* Ruta de entrada garita -> destino */
function geoRutaEntrada(d) {
  const tr = GEO_TRAMOS;
  if (!d || d.tipo === 'garita') return [GEO_FIJO.garitaV0];
  if (geoEsSur(d)) { const ds = tr.directoSur || tr.lazoSur; const pe = geoProj(ds, d.ll); return [...ds.slice(0, pe.i + 1), pe.p, d.ll]; }
  if (d.tipo === 'pc') { const pe = geoProj(tr.aPrecheck, d.ll); return [...tr.aPrecheck.slice(0, pe.i + 1), pe.p, d.ll]; }
  const pe = geoProj(tr.carrilEntrada, d.ll);
  return [...tr.vialEste, ...tr.carrilEntrada.slice(0, pe.i + 1), pe.p, d.ll];
}
/* Ruta de salida destino -> salida V0 (puerta sur) o V2 segun zona y toggle del OM */
function geoRutaSalida(d, v2) {
  const tr = GEO_TRAMOS;
  if (!d || d.tipo === 'garita') return { pts: [GEO_FIJO.garitaV0], puerta: 'V0' };
  if (geoEsSur(d)) { const ps = geoProj(tr.lazoSur, d.ll); return { pts: [d.ll, ps.p, ...tr.lazoSur.slice(ps.i + 1)], puerta: 'V0' }; }
  if (d.tipo === 'pc') { const i = geoNearestIdx(tr.lazoSur, GEO_FIJO.garitaV0); return { pts: [d.ll, ...tr.lazoSur.slice(i)], puerta: 'V0' }; }
  const pe = geoProj(tr.carrilEntrada, d.ll);
  if (v2) return { pts: [d.ll, pe.p, ...tr.carrilEntrada.slice(pe.i + 1), ...tr.salidaV2], puerta: 'V2' };
  const ps = geoProj(tr.carrilSalida, d.ll);
  return { pts: [d.ll, ps.p, ...tr.carrilSalida.slice(ps.i + 1), ...tr.lazoSur], puerta: 'V0' };
}
/* Ruta desde una plaza virtual hasta la zona de espera de tractoras */
function geoRutaParking(d) {
  const tr = GEO_TRAMOS, park = GEO_POIS.parkingTract;
  if (!d || !park) return [GEO_FIJO.garitaV0];
  if (geoEsSur(d)) { const ps = geoProj(tr.lazoSur, d.ll); return [d.ll, ps.p, ...tr.lazoSur.slice(ps.i + 1), ...tr.reentradaSur, ...tr.tractorasDirecto]; }
  const pe = geoProj(tr.carrilEntrada, d.ll), pp = geoProj(tr.carrilEntrada, park);
  if (pp.i >= pe.i) return [d.ll, pe.p, ...tr.carrilEntrada.slice(pe.i + 1, pp.i + 1), pp.p, park];
  return [d.ll, pe.p, park];
}
/* Punto de entrega de llaves segun destino (regla provisional: 136+ y virtuales -> caseta 146; 131- -> junto a la sala) */
function geoPuntoLlaves(d) {
  if (d && d.tipo === 'muelle' && d.n <= 131 && GEO_POIS.llavesB) return { ll: GEO_POIS.llavesB, cual: 'B' };
  return { ll: GEO_FIJO.llavesA, cual: 'A' };
}

let geoMap = null, geoDyn = null, geoLastBounds = null;
function geoInit() {
  if (geoMap || typeof L === 'undefined') return;
  // El mapa se limita al recinto de BCN1 (GEO_BBOX con un pequeno margen): no se puede arrastrar fuera ni alejar mas de lo que cabe el site.
  const siteBounds = L.latLngBounds([GEO_BBOX.latMin, GEO_BBOX.lonMin], [GEO_BBOX.latMax, GEO_BBOX.lonMax]).pad(0.12);
  geoMap = L.map('map', { maxZoom: 21, zoomControl: true, attributionControl: true, maxBounds: siteBounds, maxBoundsViscosity: 1.0, zoomSnap: 0.25 });
  geoMap.attributionControl.setPrefix('');
  // Ortofoto del ICGC (Institut Cartografic i Geologic de Catalunya, datos abiertos CC BY 4.0): mas nitida que Esri en BCN1
  // y con detalle real hasta el zoom 20. Si una tesela falla, se muestra la de Esri (World Imagery) en su lugar.
  const esriUrl = (c) => `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${Math.min(c.z, 19)}/${c.y}/${c.x}`;
  const orto = L.tileLayer('https://geoserveis.icgc.cat/icc_mapesmultibase/noutm/wmts/orto/GRID3857/{z}/{x}/{y}.jpeg', { maxZoom: 21, maxNativeZoom: 20, bounds: siteBounds, attribution: '&copy; ICGC' }).addTo(geoMap);
  orto.on('tileerror', (e) => { try { if (e.tile && !e.tile.__esri) { e.tile.__esri = true; e.tile.src = esriUrl(e.coords); } } catch (x) {} });
  const ajustarMinZoom = () => { try { geoMap.setMinZoom(geoMap.getBoundsZoom(siteBounds, true)); } catch (e) {} };
  ajustarMinZoom();
  geoMap.on('resize', ajustarMinZoom);
  // Solo se pinta el destino del camion (sin el resto de muelles/plazas, para no confundir)
  geoDyn = L.layerGroup().addTo(geoMap);
  geoMap.setView([41.3143, 2.0757], 17);
  setTimeout(() => geoMap.invalidateSize(), 50);
}
const geoLblHtml = txt => `<span class="lbl-in">${txt}</span>`; // el span se contra-rota cuando la navegacion gira el mapa
function geoLbl(ll, txt, cls) { return L.marker(ll, { interactive: false, icon: L.divIcon({ className: '', iconSize: [0, 0] }) }).bindTooltip(geoLblHtml(txt), { permanent: true, direction: 'top', className: 'geo-lbl ' + (cls || ''), offset: [0, -6] }); }
function geoPin(ll, color, txt, cls) { const m = L.circleMarker(ll, { radius: 9, color: '#fff', fillColor: color, fillOpacity: 1, weight: 3, interactive: false }); if (txt) m.bindTooltip(geoLblHtml(txt), { permanent: true, direction: 'top', className: 'geo-lbl ' + (cls || 'big'), offset: [0, -8] }); return m; }
function geoFit(pts) {
  if (!geoMap || !pts.length) return;
  geoLastBounds = L.latLngBounds(pts.map(p => L.latLng(p[0], p[1]))).pad(0.25);
  geoMap.invalidateSize();
  // Si la navegacion esta siguiendo al camion, no se recoloca el mapa (el boton de centrar sigue usando geoLastBounds)
  if (typeof navFollow !== 'undefined' && navFollow && typeof navUltPos !== 'undefined' && navUltPos) return;
  geoMap.fitBounds(geoLastBounds, { maxZoom: 19 });
}
/* Dibuja la situacion segun la fase real: 0 garita, 1 ir al muelle, 2 sala de espera, 3 llaves y salida.
   dest: codigo (door del ODM). v2: salida por V2 activada por el OM. */
function geoMostrar(fase, destCode, v2, sub) {
  geoInit(); if (!geoMap) return;
  geoDyn.clearLayers();
  sub = sub || 0;
  const T = STEP_TEXT[currentLang], R = T.real;
  const d = geoResolver(destCode);
  const lblGarita = 'V0 · ' + T.garita(null).corto, lblSala = R.sala.corto, lblLlaves = R.llaves.corto;
  const k = geoPuntoLlaves(d);
  const dash = (a, b) => L.polyline([a, b], { color: '#fff', weight: 3, dashArray: '6 8', opacity: .9, interactive: false });
  const GRIS = '#6b7280', NAR = '#ff9900', AZUL = '#0b57d0', ROJO = '#e53935';
  let pts = [GEO_FIJO.garitaV0];
  const tipo = d ? d.tipo : null;
  if (fase >= 1 && d && d.rapido && sub === 0) {
    const r = geoRutaEntrada(d);
    geoDyn.addLayer(geoPin(GEO_FIJO.garitaV0, GRIS, lblGarita, 'poi'));
    geoDyn.addLayer(L.polyline(r, { color: '#1db954', weight: 6, opacity: .95, interactive: false }));
    geoDyn.addLayer(geoPin(d.ll, NAR, d.txt));
    pts = r;
  } else if (fase >= 1 && d && d.rapido) {
    const sal = geoRutaSalida(d, !!v2);
    geoDyn.addLayer(geoPin(d.ll, GRIS, d.txt, 'poi'));
    geoDyn.addLayer(L.polyline(sal.pts, { color: ROJO, weight: 6, opacity: .95, dashArray: '12 10', interactive: false }));
    geoDyn.addLayer(geoPin(sal.pts[sal.pts.length - 1], ROJO, T.salida().corto + ' ' + sal.puerta, 'poi'));
    pts = sal.pts;
  } else if (fase >= 1 && d && (tipo === 'pc' || (tipo === 'ps' && sub === 0))) {
    const r = geoRutaEntrada(d);
    geoDyn.addLayer(geoPin(GEO_FIJO.garitaV0, GRIS, lblGarita, 'poi'));
    geoDyn.addLayer(L.polyline(r, { color: '#1db954', weight: 6, opacity: .95, interactive: false }));
    geoDyn.addLayer(geoPin(d.ll, NAR, d.txt));
    pts = r;
  } else if (fase >= 1 && d && tipo === 'ps' && sub === 1) {
    geoDyn.addLayer(geoPin(d.ll, NAR, d.txt));
    pts = [d.ll, GEO_FIJO.garitaV0];
  } else if (fase >= 1 && d && tipo === 'ps' && sub === 2) {
    const sal = geoRutaSalida(d, !!v2);
    geoDyn.addLayer(geoPin(d.ll, GRIS, d.txt, 'poi'));
    geoDyn.addLayer(L.polyline(sal.pts, { color: ROJO, weight: 6, opacity: .95, dashArray: '12 10', interactive: false }));
    geoDyn.addLayer(geoPin(sal.pts[sal.pts.length - 1], ROJO, T.salida().corto + ' ' + sal.puerta, 'poi'));
    pts = sal.pts;
  } else if (fase >= 1 && d && tipo === 'ps') {
    const r = geoRutaParking(d);
    geoDyn.addLayer(geoPin(d.ll, GRIS, d.txt, 'poi'));
    geoDyn.addLayer(L.polyline(r, { color: '#1db954', weight: 6, opacity: .95, interactive: false }));
    geoDyn.addLayer(geoPin(r[r.length - 1], AZUL, UI[currentLang].sub.parkingT));
    pts = r;
  } else if (fase === 0 || (fase === 1 && sub === 0)) {
    geoDyn.addLayer(geoPin(GEO_FIJO.garitaV0, GRIS, lblGarita, 'poi'));
    if (d) {
      const r = geoRutaEntrada(d);
      geoDyn.addLayer(L.polyline(r, { color: '#1db954', weight: 6, opacity: .95, interactive: false }));
      geoDyn.addLayer(geoPin(d.ll, NAR, d.txt));
      pts = r;
    } else if (fase === 0) pts = [GEO_FIJO.garitaV0, GEO_FIJO.compact];
  } else if (fase === 1 && sub === 1) {
    if (d) { geoDyn.addLayer(geoPin(d.ll, GRIS, d.txt, 'poi')); geoDyn.addLayer(dash(d.ll, k.ll)); }
    geoDyn.addLayer(geoPin(k.ll, AZUL, lblLlaves));
    pts = d ? [d.ll, k.ll] : [k.ll, GEO_FIJO.garitaV0];
  } else if (fase === 1 || fase === 2) {
    geoDyn.addLayer(geoPin(k.ll, GRIS, lblLlaves, 'poi'));
    geoDyn.addLayer(dash(k.ll, GEO_FIJO.sala));
    geoDyn.addLayer(geoPin(GEO_FIJO.sala, AZUL, lblSala));
    pts = [k.ll, GEO_FIJO.sala];
  } else if (sub === 0) {
    geoDyn.addLayer(geoPin(GEO_FIJO.sala, GRIS, lblSala, 'poi'));
    geoDyn.addLayer(dash(GEO_FIJO.sala, k.ll));
    geoDyn.addLayer(geoPin(k.ll, AZUL, lblLlaves));
    pts = [GEO_FIJO.sala, k.ll];
  } else if (sub === 1) {
    geoDyn.addLayer(geoPin(k.ll, GRIS, lblLlaves, 'poi'));
    if (d) { geoDyn.addLayer(dash(k.ll, d.ll)); geoDyn.addLayer(geoPin(d.ll, NAR, d.txt)); pts = [k.ll, d.ll]; }
    else pts = [k.ll, GEO_FIJO.garitaV0];
  } else {
    if (d) {
      geoDyn.addLayer(geoPin(d.ll, GRIS, d.txt, 'poi'));
      const sal = geoRutaSalida(d, !!v2);
      geoDyn.addLayer(L.polyline(sal.pts, { color: ROJO, weight: 6, opacity: .95, dashArray: '12 10', interactive: false }));
      const fin = sal.pts[sal.pts.length - 1];
      geoDyn.addLayer(geoPin(fin, ROJO, T.salida().corto + ' ' + sal.puerta, 'poi'));
      pts = sal.pts;
    } else pts = [k.ll, GEO_FIJO.garitaV0];
  }
  geoFit(pts);
  // Navegacion: solo cuando lo dibujado es una ruta por los carriles (3+ puntos); los tramos a pie (2 puntos) no la activan
  if (typeof navSetRuta === 'function') navSetRuta(pts.length > 2 ? pts : null, d ? d.txt : '');
}
/* Demo (camiones V001-V004): etapa a etapa con los codigos de la demo */
function geoMostrarDemo(origen, paso) {
  geoInit(); if (!geoMap) return;
  geoDyn.clearLayers();
  const o = geoResolver(origen && origen.code), d = geoResolver(paso.ubicacion && paso.ubicacion.code);
  let pts = [];
  if (paso.ruta && d) {
    const r = (paso.id === 'salida') ? geoRutaSalida(o, !!window.__salidaV2).pts : geoRutaEntrada(d);
    geoDyn.addLayer(L.polyline(r, { color: paso.id === 'salida' ? '#e53935' : '#1db954', weight: 6, opacity: .95, interactive: false }));
    pts = r.slice();
  }
  if (o && paso.ruta) geoDyn.addLayer(geoPin(o.ll, '#6b7280', o.txt, 'poi'));
  if (d) { geoDyn.addLayer(geoPin(d.ll, '#ff9900', d.txt)); pts.push(d.ll); }
  geoFit(pts.length ? pts : [GEO_FIJO.garitaV0]);
  if (typeof navSetRuta === 'function') navSetRuta(pts.length > 2 ? pts : null, d ? d.txt : '');
}
document.getElementById('zoomReset').addEventListener('click', () => { if (geoMap && geoLastBounds) geoMap.fitBounds(geoLastBounds, { maxZoom: 19 }); });
