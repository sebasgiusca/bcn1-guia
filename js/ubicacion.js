/* Guia BCN1 - ubicacion del conductor (GPS): permiso por viaje, solo dentro del recinto. */
/* ===================== UBICACION DEL CONDUCTOR (GPS, solo dentro del recinto) =====================
   Consentimiento explicito por VRID. Solo se guarda la posicion cuando cae dentro del bbox del site;
   fuera del recinto no se envia nada. /track/{vrid}/{ts} = {lat, lon, acc, ts}. */
const GEO_BBOX = { latMin: 41.3115, latMax: 41.3170, lonMin: 2.0715, lonMax: 2.0800 };
let geoWatchId = null, geoMeMarker = null, geoMeCircle = null, geoLastSent = null;
function geoDentro(lat, lon) { return lat >= GEO_BBOX.latMin && lat <= GEO_BBOX.latMax && lon >= GEO_BBOX.lonMin && lon <= GEO_BBOX.lonMax; }
function geoPintarConsentimiento() {
  const t = UI[currentLang];
  document.getElementById('geoTitulo').textContent = t.geoTitulo || '';
  document.getElementById('geoDesc').textContent = t.geoDesc || '';
  document.getElementById('btnGeoOk').textContent = t.geoOk || 'OK';
  document.getElementById('btnGeoNo').textContent = t.geoNo || '-';
}
function geoPedirConsentimiento(camion) {
  if (!navigator.geolocation) return;
  const k = 'bcn1_geo_' + camion.vrId;
  const raw = localStorage.getItem(k);
  let prev = null;
  if (raw === 'ok' || raw === 'no') prev = null; // formato antiguo sin fecha: se vuelve a preguntar
  else if (raw) { try { const j = JSON.parse(raw); if (Number(j.ts) >= gateTsActual(camion.vrId)) prev = j.v; } catch (e) {} }
  if (prev === 'ok') { geoEmpezar(); return; }
  if (prev === 'no') return;
  geoPintarConsentimiento();
  document.getElementById('geoOverlay').style.display = 'flex';
}
document.getElementById('btnGeoOk').addEventListener('click', () => {
  const c = window.__camionActual; if (c) localStorage.setItem('bcn1_geo_' + c.vrId, JSON.stringify({ v: 'ok', ts: Date.now() }));
  document.getElementById('geoOverlay').style.display = 'none';
  geoEmpezar();
});
document.getElementById('btnGeoNo').addEventListener('click', () => {
  const c = window.__camionActual; if (c) localStorage.setItem('bcn1_geo_' + c.vrId, JSON.stringify({ v: 'no', ts: Date.now() }));
  document.getElementById('geoOverlay').style.display = 'none';
});
let geoRecheck = null, geoEstuvoDentro = false;
function geoChip(dentro) {
  const el = document.getElementById('geoChip'), t = UI[currentLang];
  if (dentro === null) { el.style.display = 'none'; return; }
  el.style.display = 'block'; el.className = dentro ? '' : 'out';
  el.textContent = dentro ? (t.geoChipIn || '') : (t.geoChipOut || '');
}
function geoEmpezar() {
  if (geoWatchId !== null || geoRecheck || !navigator.geolocation) return;
  geoWatchId = navigator.geolocation.watchPosition(geoPosicion, geoError, { enableHighAccuracy: true, maximumAge: 5000, timeout: 20000 });
}
function geoParar() {
  if (geoWatchId !== null) { navigator.geolocation.clearWatch(geoWatchId); geoWatchId = null; }
  if (geoMeMarker) { geoMap.removeLayer(geoMeMarker); geoMap.removeLayer(geoMeCircle); geoMeMarker = geoMeCircle = null; }
}
/* Fuera del recinto: se deja de seguir y solo se mira una vez cada 60 s si ya ha entrado (sin registrar nada) */
function geoFuera() {
  geoParar(); geoChip(false);
  if (geoEstuvoDentro && window.__camionActual && window.__camionActual.esGenerico) {
    const data = window.__tomYardLastData, door = data && data.door ? String(data.door) : '';
    const fase = faseDesdeEstado(data), sub = subPasoActual(window.__camionActual.vrId, fase, door), tipo = tipoDestino(door);
    if ((fase === 3 && sub === 2) || (tipo === 'ps' && sub === 2)) { finalizarRecorrido(true); return; }
  }
  if (geoRecheck) return;
  geoRecheck = setInterval(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      if (geoDentro(pos.coords.latitude, pos.coords.longitude)) { clearInterval(geoRecheck); geoRecheck = null; geoEmpezar(); }
    }, () => {}, { enableHighAccuracy: false, maximumAge: 30000, timeout: 15000 });
  }, 60000);
}
function geoError(e) {
  if (e && e.code === 1) { // denegado por el sistema
    geoWatchId = null;
    const c = window.__camionActual; if (c) localStorage.setItem('bcn1_geo_' + c.vrId, JSON.stringify({ v: 'no', ts: Date.now() }));
    const t = UI[currentLang]; if (t.geoDenied) alert(t.geoDenied);
  }
}
function geoPosicion(pos) {
  const lat = pos.coords.latitude, lon = pos.coords.longitude, acc = Math.round(pos.coords.accuracy || 0);
  geoInit(); if (!geoMap) return;
  const ll = [lat, lon];
  if (!geoMeMarker) {
    geoMeMarker = L.marker(ll, { interactive: false, zIndexOffset: 1000, icon: L.divIcon({ className: 'geo-dot', iconSize: [18, 18] }) }).addTo(geoMap);
    geoMeCircle = L.circle(ll, { radius: acc, color: '#1a73e8', weight: 1, fillOpacity: .12, interactive: false }).addTo(geoMap);
  } else { geoMeMarker.setLatLng(ll); geoMeCircle.setLatLng(ll).setRadius(acc); }
  if (typeof navOnPos === 'function') navOnPos(lat, lon, acc, pos.coords.heading); // navegacion (seguir, giros, voz, grabar)
  if (!geoDentro(lat, lon)) { geoFuera(); return; } // fuera del recinto: no se guarda nada y se deja de seguir
  geoEstuvoDentro = true; geoChip(true);
  const c = window.__camionActual; if (!c) return;
  const now = Date.now();
  if (geoLastSent && now - geoLastSent.ts < 10000 && geoDist([geoLastSent.lat, geoLastSent.lon], ll) < 5) return;
  geoLastSent = { lat, lon, ts: now };
  fetch(`${TOMYARD_URL}/track/${encodeURIComponent(c.vrId)}/${now}.json`, { method: 'PUT', body: JSON.stringify({ lat: +lat.toFixed(6), lon: +lon.toFixed(6), acc, ts: now }) }).catch(() => {});
}
