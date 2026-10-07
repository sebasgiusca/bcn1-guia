/* Guia BCN1 - idioma: it. UI = textos de interfaz; STEP_TEXT = normas de seguridad, pasos del recorrido y del muelle. */

UI.it = {
    headerTitle: "BCN1 · Guida di accesso",
    lblDestino: "Inserisci il codice che ti hanno dato alla portineria:",
    lblTuCodigo: "Il tuo codice viaggio (VR Id):",
    tocaIdioma: "Tocca la tua lingua per iniziare",
    selectPlaceholder: "-- Seleziona il tuo VR Id --",
    btnVer: "Mostra il mio percorso",
    modoNota: "Modalità test: in produzione questa schermata non si vede, ogni camion arriva direttamente al suo percorso scansionando il QR.",
    mapHint: "Trascina per spostare · pizzica o rotella per lo zoom",
    btnAnterior: "◀ Tappa precedente",
    btnSiguiente: "Tappa successiva ▶",
    sub: {aculado: "Ho attraccato ▶", dejarT: "Consegna le chiavi", dejarD: "Chiudi il camion e consegna le chiavi nel punto indicato sulla mappa. A piedi, passa sempre dall'attraversamento pedonale.", entregadas: "Chiavi consegnate ▶", recogerT: "Ritira le chiavi", tengo: "Ho le chiavi ▶", volverT: "Torna al tuo camion", listo: "Pronto a uscire ▶", atras: "◀ Indietro", irSala: "Vai alla sala d'attesa", pcEspera: "Attendi nella tua piazzola di pre-controllo. Quando ti assegnano una destinazione questa schermata cambierà da sola.", psSuelto: "Rimorchio sganciato ▶", psTractora: "Ora vai con il trattore a <b>{d}</b>.", psT: "E adesso?", psSalir: "Esco dal sito ▶", psParking: "Aspetto con il trattore ▶", parkingT: "Area di attesa trattori", ddTitulo: "Sali sulla rampa", ddCorto: "Rampa", ddDesc: "Sali sulla rampa <b>{d}</b> e fermati dove ti indicano gli operatori.", ddPasos: ["Spegni il motore e aspetta in cabina che vengano ad assisterti.", "Quando finiscono, esci dal sito dal cancello sud (V0)."], ddSalir: "Scendi lentamente dalla rampa e dirigiti al cancello di uscita seguendo la segnaletica.", ddListo: "Mi hanno scaricato ▶", psEnganchado: "Rimorchio agganciato ▶", sigEsperaT: "Rimorchio sganciato", sigEsperaD: "Aspetta con il trattore dove sei. Quando ti assegnano la prossima posizione questa schermata cambierà da sola e il telefono vibrerà.", sigRemolque: "Rimorchio da ritirare: <b>{t}</b>", sigEngancha: "Aggancia, collega le connessioni e controlla che il rimorchio sia ben agganciato prima di muoverti."},
    disclaimer: "Demo: dati, baie e tempi di esempio. Le tappe avanzano a mano con i pulsanti in alto; in produzione si aggiorneranno da sole con i dati reali di portineria, piazzale e baie.",
    badgeCarril: "Corsia",
    alertCodigoNoReconocido: c => `Codice non riconosciuto: ${c}`,
    gateVridLine: v => `Camion / VRID: ${v}`,
    gateMapCaption: "Planimetria indicativa del sito BCN1.",
    btnAceptarNormas: "Ho letto e accetto le norme di sicurezza",
    alertSeleccionaCodigo: "Seleziona prima un codice",
    timerNote: "Contatore di esempio, in produzione arriverebbe dal sistema reale delle baie.",
    tomYardCargando: pct => `📦 Il tuo camion è in carico (~${pct}%)`,
    tomYardEsperando: "🕒 Il carico non è ancora iniziato.",
    tomYardListo: "✅ Il tuo carico è quasi completo.",
    tomYardTerminada: "✅ Carico terminato. Aspetta in sala finché non ti chiamano per ritirare le chiavi.",
    tomYardLlamada: "🔔 Ti stanno chiamando! Vai allo sportello a ritirare le chiavi.",
    callTitulo: "🔔 TI CHIAMANO!",
    doorChgT: "🔁 CAMBIO DI BAIA", doorChgD: "La tua destinazione è cambiata: prima {a}, ora {b}. Segui le nuove indicazioni sullo schermo.",
    callDesc: "Il tuo carico è pronto. Vai allo sportello della sala autisti a ritirare le chiavi.",
    callOk: "Capito, arrivo",
    lockAcredT: "Accesso non disponibile", lockAcredD: "Questo link funziona solo dopo la registrazione alla portineria di BCN1. Se l'hai già fatta, attendi un momento: la schermata si attiverà da sola.", lockFinT: "Percorso terminato", lockFinD: "Sei uscito dal sito. Grazie per la visita a BCN1; questo link non è più attivo.", btnSalido: "Sono uscito dal sito ▶",
    fbTitulo: "Ti è stata utile questa guida?",
    fbCaras: ["No", "Così così", "Sì"],
    fbComentario: "Cosa miglioreresti? (facoltativo)",
    fbEnviar: "Invia",
    fbGracias: "Grazie! La tua opinione ci aiuta a migliorare.",
    geoTitulo: "La tua posizione nel sito",
    geoDesc: "Per un servizio migliore chiediamo il permesso di vedere la tua posizione solo mentre sei all'interno del sito. Non sarà condivisa con nessuno; viene usata solo mentre sei nell'area del sito.",
    geoOk: "Accetta",
    geoNo: "Non ora",
    geoOn: "Posizione attiva nel sito",
    geoDenied: "Permesso di posizione negato. Puoi attivarlo nelle impostazioni del browser.",
    geoChipIn: "📍 Posizione attiva solo dentro BCN1", geoChipOut: "📍 Fuori dal sito: la tua posizione non viene registrata",
    nav: { izq: "Gira a sinistra", der: "Gira a destra", en: "Tra {m} metri, {x}", ahora: "{x} adesso", llegada: "Sei arrivato a {d}", llegadaProx: "Destinazione: {d}", fuera: "Sei uscito dal percorso: torna sulla corsia indicata", seguir: "Segui la mia posizione", voz: "Indicazioni vocali", vozOn: "Indicazioni vocali attivate" },
    asBtn: "🆘 Assistenza",
    asTitulo: "Hai bisogno di aiuto?",
    asDesc: "Scegli il livello e, se vuoi, raccontaci cosa succede. Qualcuno del team verrà da te.",
    asNiveles: { leve: "Lieve", moderado: "Moderato", urgente: "Urgente" },
    asNivelesDesc: { leve: "Un dubbio, senza fretta", moderado: "Mi serve aiuto per continuare", urgente: "Problema grave o di sicurezza" },
    asNota: "Raccontaci cosa succede (facoltativo)",
    asEnviar: "Richiedi assistenza",
    asCancelar: "Annulla",
    asEnviado: "Richiesta inviata. Resta dove sei; qualcuno verrà da te.",
    asAtendido: "La tua richiesta è stata gestita.",
    salidaPrevista: h => `🕒 Partenza prevista: <b>${h}</b>`,
    genericoTitulo: "La tua operazione a BCN1",
    genericoDesc: "Segui le indicazioni del personale di piazzale. Sotto vedrai lo stato del tuo camion in tempo reale.",
    demoOptions: {
      V001: "VR-8841 (diretto alla baia IB113, scarico live)",
      V002: "VR-9012 (PRECHECK807 → attesa TP PS554 → baia OB130, carico)",
      V003: "VR-7734 (diretto a virtuale PS502, sgancio rimorchio)",
      V004: "VR-6650 (PRECHECK803 → scambio PS703 / IB119)"
    }
};

STEP_TEXT.it = {
    garita: carril => ({
      titulo: "Attesa in portineria",
      corto: "Portineria",
      desc: carril ? `Corsia <b>${carril}</b>. Aspetta che un addetto ti riceva e ti dia la destinazione.` : `Aspetta che un addetto ti riceva e ti dia la destinazione.`
    }),
    precheck: code => ({
      titulo: `In prechecking ${code}`,
      corto: "Prechecking",
      desc: `Aspetta in <b>${code}</b> finché non ti autorizzano ad avanzare.`
    }),
    espera: (code, motivo) => ({
      titulo: `In attesa in ${code}`,
      corto: `Attesa ${code}`,
      desc: `${motivo} Aspetta in <b>${code}</b> finché non ti avvisano di continuare.`
    }),
    transito: (cod, tipoLocation) => ({
      titulo: `In transito verso ${cod}`,
      corto: `Vai a ${cod}`,
      desc: `Dirigiti alla <b>${tipoLocation === 'muelle' ? 'baia' : 'posizione virtuale'} ${cod}</b>.`
    }),
    accionTitulo: {
      descarga_vivo: "Scarico live",
      carga_vivo: "Carico live",
      soltar: "Sganciare il rimorchio",
      recoger: "Agganciare il rimorchio"
    },
    pasosDeAccion(accion, ubicacion, altura) {
      switch (accion) {
        case "descarga_vivo":
          return [
            "Fai retromarcia lasciando 4 metri di margine dalla baia, senza toccarla, e apri le porte del rimorchio.",
            `Apri le porte del rimorchio e regola l'altezza della piattaforma a <b>${altura}</b>.`,
            "Completa l'accosto con precisione e alza i finestrini.",
            "Spegni il motore.",
            "Consegna le chiavi allo sportello della sala autisti e aspetta lì finché non ti avvisano. A piedi, passa sempre dall'attraversamento pedonale."
          ];
        case "carga_vivo":
          return [
            "Fai retromarcia lasciando 4 metri di margine dalla baia, senza toccarla, e apri le porte del rimorchio.",
            `Apri le porte del rimorchio e regola l'altezza della piattaforma a <b>${altura}</b>.`,
            "Completa l'accosto con precisione e alza i finestrini.",
            "Spegni il motore.",
            "Consegna le chiavi allo sportello della sala autisti e aspetta lì finché non ti avvisano. A piedi, passa sempre dall'attraversamento pedonale."
          ];
        case "soltar":
          return [
            `Parcheggia in retromarcia nella posizione segnalata <b>${ubicacion}</b>.`,
            "Lascia inserito il freno di stazionamento del rimorchio (non toglierlo) quando sganci.",
            "Con il rimorchio sganciato: esci dal sito se non hai altro lavoro, aggancia ciò che ti è stato indicato, oppure vai alla zona di attesa delle motrici e consegna le chiavi."
          ];
        case "recoger":
          return [
            `Dirigiti alla posizione <b>${ubicacion}</b>.`,
            "Verifica che il numero del rimorchio coincida con quello assegnato prima di agganciare."
          ];
        default:
          return [];
      }
    },
    fin: (cod, esUltima) => ({
      titulo: `Completato in ${cod}`,
      corto: "Completato",
      desc: esUltima ? "Sosta terminata. Dirigiti all'uscita." : "Sosta terminata. Continua con l'indicazione successiva."
    }),
    salida: () => ({
      titulo: "Uscita",
      corto: "Uscita",
      desc: "Dirigiti al cancello di uscita seguendo la segnaletica."
    }),
    motivos: { cargaNoLista: "Il tuo carico non è ancora pronto per iniziare." },
    real: {
      muelle: { titulo: "Accosta alla tua baia", corto: "Baia",
        intro: "Dirigiti alla baia che ti hanno assegnato in portineria.",
        conPuerta: d => `La tua baia è la <b>${d}</b>. Segui la segnaletica del piazzale fino a quella porta.`, badge: "Baia" },
      sala: { titulo: "Aspetta nella sala autisti", corto: "Sala d'attesa",
        desc: "Hai accostato e consegnato le chiavi. Aspetta nella sala autisti (mensa) finché il carico non termina. Ti chiameremo quando sarà pronto; non tornare alla baia fino ad allora." },
      llaves: { titulo: "Ritira le chiavi ed esci", corto: "Chiavi e uscita",
        pasos: [
          "Ritira le chiavi allo sportello della sala autisti. A piedi, passa sempre dall'attraversamento pedonale.",
          "Torna al tuo camion. Chiudi bene le porte del rimorchio e controlla il sigillo. A piedi, passa sempre dall'attraversamento pedonale.",
          "Di tutto il resto si occupano gli operatori Amazon; tu non devi fare altro.",
          "Esci dalla baia lentamente e dirigiti al cancello di uscita seguendo la segnaletica."
        ] }
    },
    safety: {
      title: "Regole di sicurezza nel piazzale",
      header: "Gli autisti devono confermare verbalmente in portineria di aver compreso e accettato queste regole e fornire i propri dati personali. Il mancato rispetto di queste regole di sicurezza comporterà l'espulsione dal sito. Seguire sempre le istruzioni dei responsabili del piazzale.",
      bullets: [
        "Il limite di velocità nel sito è di 10 mph ovvero 15 km/h.",
        "Inserire sempre il freno a mano e spegnere il motore quando il veicolo è fermo.",
        "Seguire sempre la segnaletica orizzontale e le indicazioni di direzione. Dare sempre la precedenza ai veicoli in retromarcia.",
        "È obbligatorio indossare correttamente gilet/giacche ad alta visibilità e calzature di sicurezza prima di scendere dalla cabina (ad esempio nel piazzale o nel magazzino).",
        "È vietato fumare in tutto il sito, piazzale incluso, tranne nelle aree fumatori dedicate. Chiedere indicazioni se necessario.",
        "È illegale, e quindi vietato, usare telefoni cellulari o dispositivi elettronici durante la guida.",
        "Usare sempre i marciapiedi e gli attraversamenti pedonali segnalati. Dare sempre la precedenza ai pedoni. Non camminare né fermarsi mai dietro un veicolo in retromarcia. Mantenere sempre una distanza minima di 6 metri dai veicoli in movimento.",
        "Gli autisti non possono fare pause lunghe nel piazzale né nelle aree di attesa. Se serve una pausa per motivi legali, parlare con un responsabile del piazzale.",
        "In caso di incendio, fermarsi immediatamente e spegnere il motore. Seguire le istruzioni dei marshal e dirigersi al punto di raccolta (consultare la mappa del sito). Non tentare di lasciare il sito e attendere istruzioni.",
        "Tutti gli incidenti e gli eventi che possano aver causato danni, avvenuti sul luogo di lavoro, devono essere segnalati a un membro del team di gestione Amazon. Il primo soccorso è disponibile sul posto.",
        "Non è consentito l'ingresso di bambini né animali nel sito. I secondi autisti devono conoscere e rispettare tutte le regole di sicurezza e le istruzioni dei responsabili del piazzale, restare in cabina e lasciare il veicolo solo se richiesto da un dipendente Amazon.",
        "Tutte le chiavi dei veicoli parcheggiati nelle piazzole devono essere controllate. Seguire le istruzioni del responsabile del piazzale.",
        "In assenza di un sistema di bloccaggio, l'autista deve posizionare e rimuovere i cunei per le ruote (i responsabili del piazzale informeranno sui requisiti del sito). Non rimuovere il dispositivo Lock n Stop.",
        "Non tentare di parcheggiare o uscire da una piazzola o da una zona di carico senza autorizzazione preventiva, né con il semaforo rosso.",
        "Quando si lascia un rimorchio in una piazzola o alla porta di una baia, l'autista deve inserire il freno di stazionamento del rimorchio.",
        "Parcheggiare o lasciare il veicolo in una piazzola o zona di carico solo quando autorizzati e con il semaforo verde.",
        "Gli autisti devono aprire e chiudere le porte del rimorchio, assicurandosi che siano ben chiuse prima che il veicolo si muova. Gli autisti sono responsabili della rimozione dei sigilli del rimorchio con i propri attrezzi e dispositivi di protezione individuale (se necessario si possono usare attrezzi Amazon, sotto la responsabilità dell'autista).",
        "Gli autisti devono ispezionare i carichi per garantirne la sicurezza prima della partenza e comunicare qualsiasi problema ai responsabili del piazzale.",
        "I cunei per le ruote servono a impedire lo spostamento dei veicoli e vanno usati in tutte le operazioni di aggancio o sgancio, alle baie, nelle piazzole e nelle zone di pre-ispezione. Posizionarli sempre nella direzione della pendenza, prima di collegare o scollegare le linee dell'aria o abbassare una cassa mobile. Se sono installati fermi fissi, i cunei manuali non sono obbligatori (la ruota deve appoggiare contro il fermo nella direzione della pendenza). Specifico per le casse mobili: nessun autista deve smontare la cassa mobile senza la supervisione di un membro del team di piazzale Amazon; solo il manovratore del sito può collocare una cassa mobile direttamente nella zona di carico.",
      ],
      footer: "Rispettare sempre le indicazioni e le istruzioni dei nostri responsabili del piazzale. Agli autisti sarà chiesto di confermare di aver compreso le regole di sicurezza del piazzale e di collaborare alle indagini sugli incidenti quando richiesto. In caso di dubbi, parlare con un responsabile del piazzale, che vi aiuterà. Non sarà tollerato alcun comportamento aggressivo, offensivo o non sicuro."
    }
};
