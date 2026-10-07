/* Guia BCN1 - idioma: ro. UI = textos de interfaz; STEP_TEXT = normas de seguridad, pasos del recorrido y del muelle. */

UI.ro = {
    headerTitle: "BCN1 · Ghid de acces",
    lblDestino: "Introduceți codul primit la poartă:",
    lblTuCodigo: "Codul tău de cursă (VR Id):",
    tocaIdioma: "Atinge limba ta pentru a începe",
    selectPlaceholder: "-- Selectați VR Id-ul dvs. --",
    btnVer: "Arată-mi traseul",
    modoNota: "Mod de testare: în producție acest ecran nu se vede, fiecare camion ajunge direct la traseul său scanând codul QR.",
    mapHint: "Trageți pentru a mișca · ciupiți sau derulați pentru zoom",
    btnAnterior: "◀ Etapa anterioară",
    btnSiguiente: "Etapa următoare ▶",
    sub: {aculado: "Am tras la rampă ▶", dejarT: "Predă cheile", dejarD: "Închide camionul și predă cheile la punctul marcat pe hartă. Pe jos, mergi mereu pe trecerea de pietoni.", entregadas: "Chei predate ▶", recogerT: "Ia cheile", tengo: "Am cheile ▶", volverT: "Întoarce-te la camion", listo: "Gata de plecare ▶", atras: "◀ Înapoi", irSala: "Mergi la sala de așteptare", pcEspera: "Așteaptă la locul de pre-verificare. Când primești destinația, acest ecran se va schimba singur.", psSuelto: "Remorcă decuplată ▶", psTractora: "Acum mergi cu capul tractor la <b>{d}</b>.", psT: "Ce faci acum?", psSalir: "Ies din incintă ▶", psParking: "Aștept cu capul tractor ▶", parkingT: "Zona de așteptare a capetelor tractor", ddTitulo: "Urcă pe rampă", ddCorto: "Rampă", ddDesc: "Urcă pe rampa <b>{d}</b> și oprește unde îți indică operatorii.", ddPasos: ["Oprește motorul și așteaptă în cabină până vine cineva să te preia.", "Când termină, ieși din incintă prin poarta sud (V0)."], ddSalir: "Coboară încet de pe rampă și îndreaptă-te spre poarta de ieșire urmând semnalizarea.", ddListo: "Am fost descărcat ▶", psEnganchado: "Remorcă cuplată ▶", sigEsperaT: "Remorcă decuplată", sigEsperaD: "Așteaptă cu capul tractor unde ești. Când primești următoarea poziție, acest ecran se va schimba singur și telefonul va vibra.", sigRemolque: "Remorcă de ridicat: <b>{t}</b>", sigEngancha: "Cuplează, conectează legăturile și verifică că remorca este bine prinsă înainte de a pleca."},
    disclaimer: "Demo: date, docuri și timpuri exemplu. Etapele avansează manual cu butoanele de mai sus; în producție se vor actualiza automat cu datele reale de la poartă, yard și docuri.",
    badgeCarril: "Culoar",
    alertCodigoNoReconocido: c => `Cod nerecunoscut: ${c}`,
    gateVridLine: v => `Camion / VRID: ${v}`,
    gateMapCaption: "Schița orientativă a incintei BCN1.",
    btnAceptarNormas: "Am citit și accept regulile de siguranță",
    alertSeleccionaCodigo: "Selectați mai întâi un cod",
    timerNote: "Contor exemplu, în producție ar veni din sistemul real al docurilor.",
    tomYardCargando: pct => `📦 Camionul tău se încarcă (~${pct}%)`,
    tomYardEsperando: "🕒 Încărcarea nu a început încă.",
    tomYardListo: "✅ Încărcătura ta este aproape completă.",
    tomYardTerminada: "✅ Încărcarea s-a terminat. Așteaptă în sală până ești chemat să iei cheile.",
    tomYardLlamada: "🔔 Ești chemat! Mergi la ghișeu pentru chei.",
    callTitulo: "🔔 EȘTI CHEMAT!",
    doorChgT: "🔁 SCHIMBARE DE RAMPĂ", doorChgD: "Destinația ta s-a schimbat: înainte {a}, acum {b}. Urmează noile indicații de pe ecran.",
    callDesc: "Încărcătura ta este gata. Mergi la ghișeul sălii șoferilor să iei cheile.",
    callOk: "Am înțeles, merg",
    lockAcredT: "Acces indisponibil", lockAcredD: "Acest link funcționează doar după ce te-ai înregistrat la poarta BCN1. Dacă ai făcut-o deja, așteaptă puțin: ecranul se va activa singur.", lockFinT: "Traseu încheiat", lockFinD: "Ai ieșit din incintă. Mulțumim pentru vizita la BCN1; acest link nu mai este activ.", btnSalido: "Am ieșit din incintă ▶",
    fbTitulo: "Ți-a fost utilă această ghidare?",
    fbCaras: ["Nu", "Așa și așa", "Da"],
    fbComentario: "Ce ai îmbunătăți? (opțional)",
    fbEnviar: "Trimite",
    fbGracias: "Mulțumim! Părerea ta ne ajută să ne îmbunătățim.",
    geoTitulo: "Locația ta în incintă",
    geoDesc: "Pentru un serviciu mai bun, cerem permisiunea de a vedea locația ta doar cât timp ești în interiorul site-ului. Nu va fi împărtășită cu nimeni; se folosește doar cât ești în zona site-ului.",
    geoOk: "Accept",
    geoNo: "Nu acum",
    geoOn: "Locație activă în incintă",
    geoDenied: "Permisiunea de locație a fost refuzată. O poți activa din setările browserului.",
    geoChipIn: "📍 Locația e activă doar în BCN1", geoChipOut: "📍 În afara incintei: locația ta nu se înregistrează",
    nav: { izq: "Virează la stânga", der: "Virează la dreapta", en: "În {m} metri, {x}", ahora: "{x} acum", llegada: "Ai ajuns la {d}", llegadaProx: "Destinație: {d}", fuera: "Ai ieșit de pe traseu: revino pe banda marcată", seguir: "Urmărește poziția mea", voz: "Indicații vocale", vozOn: "Indicații vocale activate" },
    asBtn: "🆘 Asistență",
    asTitulo: "Ai nevoie de ajutor?",
    asDesc: "Alege nivelul și, dacă vrei, spune-ne ce se întâmplă. Cineva din echipă va veni la tine.",
    asNiveles: { leve: "Minor", moderado: "Moderat", urgente: "Urgent" },
    asNivelesDesc: { leve: "O întrebare, fără grabă", moderado: "Am nevoie de ajutor pentru a continua", urgente: "Problemă gravă sau de siguranță" },
    asNota: "Spune-ne ce se întâmplă (opțional)",
    asEnviar: "Cere asistență",
    asCancelar: "Anulează",
    asEnviado: "Cerere trimisă. Rămâi unde ești; cineva va veni la tine.",
    asAtendido: "Cererea ta a fost rezolvată.",
    salidaPrevista: h => `🕒 Plecare prevăzută: <b>${h}</b>`,
    genericoTitulo: "Operațiunea ta la BCN1",
    genericoDesc: "Urmați indicațiile personalului din curte. Mai jos vedeți starea camionului în timp real.",
    demoOptions: {
      V001: "VR-8841 (direct la doc IB113, descărcare live)",
      V002: "VR-9012 (PRECHECK807 → așteptare TP PS554 → doc OB130, încărcare)",
      V003: "VR-7734 (direct la virtual PS502, lăsați remorca)",
      V004: "VR-6650 (PRECHECK803 → schimb PS703 / IB119)"
    }
};

STEP_TEXT.ro = {
    garita: carril => ({
      titulo: "Așteptare la poartă",
      corto: "Poartă",
      desc: carril ? `Culoar <b>${carril}</b>. Așteptați ca un asociat să vă preia și să vă dea destinația.` : `Așteptați ca un asociat să vă preia și să vă dea destinația.`
    }),
    precheck: code => ({
      titulo: `La prechecking ${code}`,
      corto: "Prechecking",
      desc: `Așteptați la <b>${code}</b> până sunteți autorizat să continuați.`
    }),
    espera: (code, motivo) => ({
      titulo: `În așteptare la ${code}`,
      corto: `Așteptare ${code}`,
      desc: `${motivo} Așteptați la <b>${code}</b> până sunteți anunțat să continuați.`
    }),
    transito: (cod, tipoLocation) => ({
      titulo: `În tranzit către ${cod}`,
      corto: `Mergi la ${cod}`,
      desc: `Îndreptați-vă către <b>${tipoLocation === 'muelle' ? 'docul' : 'poziția virtuală'} ${cod}</b>.`
    }),
    accionTitulo: {
      descarga_vivo: "Descărcare live",
      carga_vivo: "Încărcare live",
      soltar: "Lăsați remorca",
      recoger: "Ridicați remorca"
    },
    pasosDeAccion(accion, ubicacion, altura) {
      switch (accion) {
        case "descarga_vivo":
          return [
            "Acostați lăsând 4 metri de marjă față de doc, fără să îl atingeți încă, și deschideți ușile remorcii.",
            `Deschideți ușile remorcii și reglați înălțimea rampei la <b>${altura}</b>.`,
            "Terminați acostarea cu precizie și ridicați geamurile.",
            "Opriți motorul.",
            "Predați cheile la ghișeul sălii șoferilor și așteptați acolo până sunteți chemat. Pe jos, mergi mereu pe trecerea de pietoni."
          ];
        case "carga_vivo":
          return [
            "Acostați lăsând 4 metri de marjă față de doc, fără să îl atingeți încă, și deschideți ușile remorcii.",
            `Deschideți ușile remorcii și reglați înălțimea rampei la <b>${altura}</b>.`,
            "Terminați acostarea cu precizie și ridicați geamurile.",
            "Opriți motorul.",
            "Predați cheile la ghișeul sălii șoferilor și așteptați acolo până sunteți chemat. Pe jos, mergi mereu pe trecerea de pietoni."
          ];
        case "soltar":
          return [
            `Parcați cu spatele la locul marcat <b>${ubicacion}</b>.`,
            "Lăsați frâna de parcare a remorcii acționată (nu o eliberați) la decuplare.",
            "Cu remorca lăsată: părăsiți incinta dacă nu mai aveți altă activitate, cuplați ce vi s-a indicat, sau mergeți în zona de așteptare a tractoarelor și predați cheile."
          ];
        case "recoger":
          return [
            `Îndreptați-vă către locul <b>${ubicacion}</b>.`,
            "Verificați că numărul remorcii corespunde cu cel alocat înainte de cuplare."
          ];
        default:
          return [];
      }
    },
    fin: (cod, esUltima) => ({
      titulo: `Finalizat la ${cod}`,
      corto: "Finalizat",
      desc: esUltima ? "Oprire finalizată. Îndreptați-vă spre ieșire." : "Oprire finalizată. Continuați cu instrucțiunea următoare."
    }),
    salida: () => ({
      titulo: "Ieșire",
      corto: "Ieșire",
      desc: "Îndreptați-vă spre poarta de ieșire urmând semnalizarea."
    }),
    motivos: { cargaNoLista: "Încărcătura dvs. nu este încă pregătită." },
    real: {
      muelle: { titulo: "Trage la docul tău", corto: "Doc",
        intro: "Mergi la docul care ți-a fost atribuit la poartă.",
        conPuerta: d => `Docul tău este <b>${d}</b>. Urmează semnalizarea din curte până la acea ușă.`, badge: "Doc" },
      sala: { titulo: "Așteaptă în sala șoferilor", corto: "Sala de așteptare",
        desc: "Ai tras la doc și ai predat cheile. Așteaptă în sala șoferilor (cantină) până se termină încărcarea. Te vom chema când este gata; nu te întoarce la doc până atunci." },
      llaves: { titulo: "Ia cheile și pleacă", corto: "Chei și ieșire",
        pasos: [
          "Ia cheile de la ghișeul sălii șoferilor. Pe jos, mergi mereu pe trecerea de pietoni.",
          "Întoarce-te la camion. Închide bine ușile remorcii și verifică sigiliul. Pe jos, mergi mereu pe trecerea de pietoni.",
          "De tot restul se ocupă operatorii Amazon; tu nu trebuie să mai faci nimic.",
          "Părăsește docul încet și mergi spre poarta de ieșire urmând semnalizarea."
        ] }
    },
        safety: {
      title: "Reguli de siguranță în curte",
      header: "Șoferii trebuie să confirme verbal la poarta de control că înțeleg și acceptă aceste reguli și să își furnizeze datele personale. Nerespectarea acestor reguli de siguranță va duce la excluderea de pe incintă. Respectați în permanență instrucțiunile responsabililor de curte (marshals).",
      bullets: [
        "Limita de viteză pe incintă este de 10 mph sau 15 km/h.",
        "Trageți întotdeauna frâna de mână și stingeți motorul când vehiculul este oprit.",
        "Respectați întotdeauna marcajele și semnele de circulație. Cedați întotdeauna trecerea vehiculelor care efectuează marșarier.",
        "Este obligatorie folosirea vestelor/jachetelor reflectorizante și a încălțămintei de protecție înainte de a părăsi cabina (de exemplu, în curte sau în depozit), folosite corect.",
        "Fumatul este interzis pe întreaga incintă, inclusiv în curte, cu excepția zonelor special destinate. Solicitați indicații dacă este necesar.",
        "Este ilegal și, prin urmare, interzis, să folosiți telefonul mobil sau dispozitive electronice în timp ce conduceți.",
        "Folosiți întotdeauna trotuarele și trecerile de pietoni semnalizate. Cedați întotdeauna trecerea pietonilor. Nu mergeți și nu vă opriți niciodată în spatele unui vehicul care efectuează marșarier. Păstrați întotdeauna o distanță minimă de 6 metri față de vehiculele în mișcare.",
        "Șoferii nu pot face pauze lungi în curte sau în zonele de așteptare. Dacă aveți nevoie de o pauză obligatorie prin lege, discutați cu un responsabil de curte.",
        "În caz de incendiu, opriți-vă imediat și stingeți motorul. Urmați instrucțiunile responsabililor și deplasați-vă la punctul de adunare (consultați harta incintei). Nu încercați să părăsiți incinta și așteptați instrucțiuni.",
        "Toate accidentele și incidentele care pot cauza daune și care au loc la locul de muncă trebuie raportate unui membru al echipei de conducere Amazon. Primul ajutor este disponibil la fața locului.",
        "Accesul copiilor și al animalelor pe incintă este interzis. Al doilea șofer trebuie să cunoască și să respecte toate regulile de siguranță și instrucțiunile responsabililor de curte, să rămână în cabină și să părăsească vehiculul doar dacă i se solicită de către un angajat Amazon.",
        "Toate seturile de chei ale vehiculelor parcate în locuri de parcare trebuie să fie controlate. Respectați instrucțiunile responsabilului de curte.",
        "Atunci când nu există un sistem de fixare, șoferul trebuie să monteze și să scoată calele pentru roți (responsabilii de curte vor comunica cerințele locului). Nu scoateți dispozitivul Lock n Stop.",
        "Nu încercați să parcați sau să părăsiți un loc de parcare sau o zonă de încărcare fără autorizare prealabilă sau când semaforul este pe roșu.",
        "La lăsarea unei remorci într-un loc de parcare sau la o poartă de doc, șoferul trebuie să acționeze frâna de parcare a remorcii.",
        "Parcați sau lăsați vehiculul într-un loc de parcare sau zonă de încărcare doar atunci când sunteți autorizat să faceți acest lucru și semaforul este pe verde.",
        "Șoferii trebuie să deschidă și să închidă ușile remorcii și să se asigure că sunt bine închise înainte ca vehiculul să se deplaseze. Șoferii sunt responsabili pentru scoaterea sigiliilor remorcii folosind propriile unelte și echipament de protecție personală (dacă este necesar, se pot folosi uneltele Amazon, pe responsabilitatea șoferului).",
        "Șoferii trebuie să inspecteze încărcătura pentru a se asigura de siguranța acesteia înainte de plecare și să raporteze orice problemă responsabililor de curte.",
        "Calele pentru roți se folosesc pentru a preveni deplasarea vehiculelor și trebuie utilizate în toate activitățile de cuplare/decuplare, la porțile de doc, în locurile de parcare și în zonele de pre-verificare. Așezați-le întotdeauna în direcția pantei, înainte de a conecta/deconecta liniile de aer sau de a coborî o cutie mobilă (swap body). Atunci când sunt instalate opritoare fixe pentru roți, calele manuale nu sunt obligatorii (roata trebuie să se sprijine pe opritor, în direcția pantei). Specific pentru cutiile mobile: niciun șofer nu trebuie să demonteze o cutie mobilă fără supravegherea unui membru al echipei de curte Amazon; doar manevrantul șantierului poate așeza o cutie mobilă direct în zona de încărcare.",
      ],
      footer: "Respectați în permanență indicațiile și instrucțiunile responsabililor noștri de curte. Șoferilor li se va cere să confirme că înțeleg regulile de siguranță ale curții și să colaboreze la investigarea accidentelor, atunci când li se solicită. Dacă aveți întrebări, discutați cu un responsabil de curte, care vă va ajuta. Niciun comportament agresiv, abuziv sau nesigur nu va fi tolerat."
    }
};
