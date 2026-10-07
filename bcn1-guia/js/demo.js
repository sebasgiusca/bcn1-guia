/* Guia BCN1 - camiones de ejemplo (modo demo, sin ?vr= en la URL). No afecta al uso real. */
const entrada = { code: "GARITA", x: 520, y: 272 };

/* Nomenclatura nueva del Yard (PS = virtuales/parking, PRECHECK8XX = prechecking).
   Coordenadas aún de ejemplo hasta que localicemos las posiciones reales de cada PS5XX. */
const camiones = {
  V001: {
    vrId: "VR-8841",
    carril: 1,
    usaPrecheck: false,
    precheck: null,
    paradas: [
      { ubicacion: { code: "IB113", x: 230, y: 185 }, tipoLocation: "muelle", altura: "1,10 m", accion: "descarga_vivo" }
    ]
  },
  V002: {
    vrId: "VR-9012",
    carril: 2,
    usaPrecheck: true,
    precheck: { code: "PRECHECK807", x: 300, y: 400 },
    paradas: [
      {
        ubicacion: { code: "OB130", x: 420, y: 140 },
        tipoLocation: "muelle",
        altura: "1,25 m",
        accion: "carga_vivo",
        esperaPrevia: { code: "PS554", x: 250, y: 400, motivoKey: "cargaNoLista" }
      }
    ]
  },
  V003: {
    vrId: "VR-7734",
    carril: 3,
    usaPrecheck: false,
    precheck: null,
    paradas: [
      { ubicacion: { code: "PS502", x: 110, y: 450 }, tipoLocation: "virtual", altura: "-", accion: "soltar" }
    ]
  },
  V004: {
    vrId: "VR-6650",
    carril: 1,
    usaPrecheck: true,
    precheck: { code: "PRECHECK803", x: 340, y: 410 },
    paradas: [
      { ubicacion: { code: "PS703", x: 470, y: 460 }, tipoLocation: "virtual", altura: "-", accion: "soltar" },
      { ubicacion: { code: "IB119", x: 280, y: 160 }, tipoLocation: "muelle", altura: "1,15 m", accion: "recoger" }
    ]
  }
};
