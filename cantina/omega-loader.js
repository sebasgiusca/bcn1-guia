// ===== BCN1 Pantalla Cantina: cargador remoto (pegar al final del ODM Omega) =====
// Requiere en la cabecera del Omega: @grant GM_xmlhttpRequest GM_getValue GM_setValue unsafeWindow
//   @connect sebasgiusca.github.io   @connect tom-yard-default-rtdb.europe-west1.firebasedatabase.app
// Descarga cantina-clerk.js de GitHub Pages (o cantina-clerk-beta.js si el login esta en /config/beta), comprueba que esta
// completo y que arranca, lo guarda como copia (GM_setValue) y lo ejecuta. Si la nube falla usa la copia. Nunca rompe el Omega.
(function () {
  if (!/\/ssp\/dock\/|\/yms\/shipclerk/.test(location.pathname)) return;
  try { if (window.top !== window) return; } catch (e) { return; }
  var BASE = 'https://sebasgiusca.github.io/bcn1-guia/cantina/';
  var CFG = 'https://tom-yard-default-rtdb.europe-west1.firebasedatabase.app/config.json?auth=TF5K5U18a2tA15Rvhabph8VjytAjldqHm0dNK4dM';
  var CACHE = 'cantina_clerk_src';
  function log(m) { try { console.log('[Cantina loader] ' + m); } catch (e) {} }
  function gm(url, cb) {
    try {
      GM_xmlhttpRequest({ method: 'GET', url: url + (url.indexOf('?') < 0 ? '?' : '&') + 't=' + Date.now(), timeout: 15000,
        onload: function (r) { cb(r.status === 200 ? String(r.responseText || '') : null); },
        onerror: function () { cb(null); }, ontimeout: function () { cb(null); } });
    } catch (e) { cb(null); }
  }
  function completo(src) { return /^\/\/ cantina-clerk \d+\.\d+\.\d+/.test(src) && /\/\/ fin cantina-clerk\s*$/.test(src); }
  function correr(src, origen) {
    try { new Function('GM_xmlhttpRequest', 'unsafeWindow', src)(GM_xmlhttpRequest, unsafeWindow); log('ejecutado (' + origen + ') ' + (src.match(/^\/\/ cantina-clerk (\S+)/) || ['', '?'])[1]); return true; }
    catch (e) { log('fallo al ejecutar (' + origen + '): ' + e); return false; }
  }
  function login() {
    try { var m = /([a-z0-9][a-z0-9._-]{1,30})@amazon\.com/i.exec(String(document.body && document.body.innerText || '').slice(0, 20000)); return m ? m[1].toLowerCase() : ''; } catch (e) { return ''; }
  }
  function cargar() {
    gm(CFG, function (txt) {
      var cfg = {}; try { cfg = JSON.parse(txt) || {}; } catch (e) {}
      if (cfg.activo === false) { log('apagado por /config/activo'); return; }
      var beta = Array.isArray(cfg.beta) && cfg.beta.indexOf(login()) >= 0;
      gm(BASE + (beta ? 'cantina-clerk-beta.js' : 'cantina-clerk.js'), function (src) {
        if (src && completo(src)) {
          try { new Function(src); } catch (e) { src = null; log('version remota con error de sintaxis; se usa la copia'); }
        } else { src = null; log('sin version remota; se usa la copia'); }
        if (src) { try { GM_setValue(CACHE, src); } catch (e) {} if (correr(src, beta ? 'nube beta' : 'nube')) return; }
        var copia = ''; try { copia = GM_getValue(CACHE, '') || ''; } catch (e) {}
        if (copia && completo(copia)) correr(copia, 'copia'); else log('sin copia guardada: la cantina no arranca en este PC hasta que la nube responda');
      });
    });
  }
  if (document.readyState === 'complete') setTimeout(cargar, 300); else window.addEventListener('load', function () { setTimeout(cargar, 300); });
})();
