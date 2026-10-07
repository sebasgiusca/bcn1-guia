/* Guia BCN1 - idioma: de. UI = textos de interfaz; STEP_TEXT = normas de seguridad, pasos del recorrido y del muelle. */

UI.de = {
    headerTitle: "BCN1 · Zufahrtsleitfaden",
    lblDestino: "Gib den Code ein, den du am Tor erhalten hast:",
    lblTuCodigo: "Dein Fahrtcode (VR Id):",
    tocaIdioma: "Tippe auf deine Sprache, um zu starten",
    selectPlaceholder: "-- Wähle deine VR Id --",
    btnVer: "Meine Route anzeigen",
    modoNota: "Testmodus: In der Produktion wird dieser Bildschirm nicht angezeigt; jeder Lkw gelangt durch Scannen seines QR-Codes direkt zu seiner Route.",
    mapHint: "Ziehen zum Verschieben · Zwei Finger oder Mausrad zum Zoomen",
    btnAnterior: "◀ Vorherige Etappe",
    btnSiguiente: "Nächste Etappe ▶",
    sub: {aculado: "Ich bin angedockt ▶", dejarT: "Schlüssel abgeben", dejarD: "Lkw abschließen und Schlüssel an der auf der Karte markierten Stelle abgeben. Zu Fuß immer den Fußgängerüberweg benutzen.", entregadas: "Schlüssel abgegeben ▶", recogerT: "Schlüssel abholen", tengo: "Ich habe die Schlüssel ▶", volverT: "Zurück zum Lkw", listo: "Bereit zur Ausfahrt ▶", atras: "◀ Zurück", irSala: "Zum Fahrerraum gehen", pcEspera: "Warte auf deinem Vorkontroll-Platz. Sobald du ein Ziel bekommst, wechselt dieser Bildschirm von selbst.", psSuelto: "Anhänger abgesattelt ▶", psT: "Was jetzt?", psSalir: "Ich verlasse das Gelände ▶", psParking: "Ich warte mit der Zugmaschine ▶", parkingT: "Wartebereich Zugmaschinen", ddTitulo: "Fahre auf die Rampe", ddCorto: "Rampe", ddDesc: "Fahre auf die Rampe <b>{d}</b> und halte dort, wo die Mitarbeiter es dir zeigen.", ddPasos: ["Stelle den Motor ab und warte in der Kabine, bis jemand zu dir kommt.", "Danach verlässt du das Gelände über das Südtor (V0)."], ddSalir: "Fahre langsam von der Rampe und folge der Beschilderung zum Ausgangstor.", ddListo: "Ich bin entladen ▶", psEnganchado: "Anhänger aufgesattelt ▶", sigEsperaT: "Anhänger abgesattelt", sigEsperaD: "Warte mit der Zugmaschine, wo du bist. Sobald du die nächste Position bekommst, wechselt dieser Bildschirm von selbst und das Handy vibriert.", sigRemolque: "Abzuholender Anhänger: <b>{t}</b>", sigEngancha: "Aufsatteln, Leitungen anschließen und prüfen, dass der Anhänger richtig gekuppelt ist, bevor du losfährst."},
    disclaimer: "Demo: Beispieldaten, -tore und -zeiten. Die Etappen werden mit den Schaltflächen oben manuell weitergeschaltet; in der Produktion aktualisieren sie sich automatisch mit echten Daten von Tor, Hof und Rampen.",
    badgeCarril: "Spur",
    alertCodigoNoReconocido: c => `Code nicht erkannt: ${c}`,
    gateVridLine: v => `Lkw / VRID: ${v}`,
    gateMapCaption: "Orientierungsplan des BCN1-Geländes.",
    btnAceptarNormas: "Ich habe die Sicherheitsregeln gelesen und akzeptiere sie",
    alertSeleccionaCodigo: "Wähle zuerst einen Code",
    timerNote: "Beispielzähler; in der Produktion käme er vom echten Rampensystem.",
    tomYardCargando: pct => `📦 Dein Lkw wird beladen (~${pct}%)`,
    tomYardEsperando: "🕒 Die Beladung hat noch nicht begonnen.",
    tomYardListo: "✅ Deine Ladung ist fast fertig.",
    tomYardTerminada: "✅ Beladung abgeschlossen. Warte im Fahrerraum, bis du zum Abholen der Schlüssel aufgerufen wirst.",
    tomYardLlamada: "🔔 Du wirst aufgerufen! Geh zum Schalter und hol deine Schlüssel.",
    callTitulo: "🔔 DU WIRST AUFGERUFEN!",
    doorChgT: "🔁 TORWECHSEL", doorChgD: "Dein Ziel hat sich geändert: vorher {a}, jetzt {b}. Folge den neuen Anweisungen auf dem Bildschirm.",
    callDesc: "Deine Ladung ist fertig. Geh zum Schalter im Fahrerraum und hol deine Schlüssel ab.",
    callOk: "Verstanden, ich komme",
    lockAcredT: "Zugang nicht verfügbar", lockAcredD: "Dieser Link funktioniert erst nach der Anmeldung am Tor von BCN1. Falls schon erledigt, kurz warten: der Bildschirm schaltet sich von selbst frei.", lockFinT: "Besuch beendet", lockFinD: "Du hast das Gelände verlassen. Danke für deinen Besuch bei BCN1; dieser Link ist nicht mehr aktiv.", btnSalido: "Ich habe das Gelände verlassen ▶",
    fbTitulo: "War dieser Leitfaden hilfreich?",
    fbCaras: ["Nein", "Teilweise", "Ja"],
    fbComentario: "Was würdest du verbessern? (optional)",
    fbEnviar: "Senden",
    fbGracias: "Danke! Deine Meinung hilft uns, besser zu werden.",
    geoTitulo: "Dein Standort auf dem Gelände",
    geoDesc: "Für einen besseren Service bitten wir um die Erlaubnis, deinen Standort nur zu sehen, während du dich auf dem Gelände befindest. Er wird mit niemandem geteilt und nur innerhalb des Geländes verwendet.",
    geoOk: "Akzeptieren",
    geoNo: "Jetzt nicht",
    geoOn: "Standort auf dem Gelände aktiv",
    geoDenied: "Standortberechtigung verweigert. Du kannst sie in den Browser-Einstellungen aktivieren.",
    geoChipIn: "📍 Standort nur innerhalb von BCN1 aktiv", geoChipOut: "📍 Außerhalb des Geländes: dein Standort wird nicht gespeichert",
    nav: { izq: "Links abbiegen", der: "Rechts abbiegen", en: "In {m} Metern {x}", ahora: "Jetzt {x}", llegada: "Du hast {d} erreicht", llegadaProx: "Ziel: {d}", fuera: "Du hast die Route verlassen: zurück auf die markierte Spur", seguir: "Meiner Position folgen", voz: "Sprachansagen", vozOn: "Sprachansagen aktiviert" },
    asBtn: "🆘 Hilfe",
    asTitulo: "Brauchst du Hilfe?",
    asDesc: "Wähle die Stufe und erzähl uns, wenn du willst, was los ist. Jemand vom Team kommt zu dir.",
    asNiveles: { leve: "Gering", moderado: "Mittel", urgente: "Dringend" },
    asNivelesDesc: { leve: "Eine Frage, keine Eile", moderado: "Ich brauche Hilfe, um weiterzumachen", urgente: "Ernstes Problem oder Sicherheitsproblem" },
    asNota: "Erzähl uns, was los ist (optional)",
    asEnviar: "Hilfe anfordern",
    asCancelar: "Abbrechen",
    asEnviado: "Meldung gesendet. Bleib, wo du bist; jemand kommt zu dir.",
    asAtendido: "Deine Meldung wurde bearbeitet.",
    salidaPrevista: h => `🕒 Geplante Abfahrt: <b>${h}</b>`,
    genericoTitulo: "Dein Vorgang bei BCN1",
    genericoDesc: "Folge den Anweisungen des Hofpersonals. Unten siehst du den Status deines Lkw in Echtzeit.",
    demoOptions: {
      V001: "VR-8841 (direkt zu Rampe IB113, Live-Entladung)",
      V002: "VR-9012 (PRECHECK807 → Warten TP PS554 → Rampe OB130, Beladung)",
      V003: "VR-7734 (direkt zu virtuell PS502, Anhänger abstellen)",
      V004: "VR-6650 (PRECHECK803 → Tausch PS703 / IB119)"
    }
};

STEP_TEXT.de = {
    garita: carril => ({
      titulo: "Warten am Tor",
      corto: "Tor",
      desc: carril ? `Spur <b>${carril}</b>. Warte, bis ein Mitarbeiter dich bedient und dir dein Ziel nennt.` : `Warte, bis ein Mitarbeiter dich bedient und dir dein Ziel nennt.`
    }),
    precheck: code => ({
      titulo: `Im Prechecking ${code}`,
      corto: "Prechecking",
      desc: `Warte bei <b>${code}</b>, bis du zum Weiterfahren freigegeben wirst.`
    }),
    espera: (code, motivo) => ({
      titulo: `Warten bei ${code}`,
      corto: `Warten ${code}`,
      desc: `${motivo} Warte bei <b>${code}</b>, bis du zum Weiterfahren aufgerufen wirst.`
    }),
    transito: (cod, tipoLocation) => ({
      titulo: `Unterwegs zu ${cod}`,
      corto: `Fahre zu ${cod}`,
      desc: `Fahre zu <b>${tipoLocation === 'muelle' ? 'Rampe' : 'virtueller Position'} ${cod}</b>.`
    }),
    accionTitulo: {
      descarga_vivo: "Live-Entladung",
      carga_vivo: "Live-Beladung",
      soltar: "Anhänger abstellen",
      recoger: "Anhänger aufnehmen"
    },
    pasosDeAccion(accion, ubicacion, altura) {
      switch (accion) {
        case "descarga_vivo":
          return [
            "Fahre rückwärts an, lass 4 Meter Abstand zur Rampe, berühre sie nicht und öffne die Anhängertüren.",
            `Öffne die Anhängertüren und stelle die Plattformhöhe auf <b>${altura}</b> ein.`,
            "Docke präzise fertig an und schließe die Fenster.",
            "Stelle den Motor ab.",
            "Gib die Schlüssel am Schalter im Fahrerraum ab und warte dort, bis du aufgerufen wirst. Zu Fuß immer den Fußgängerüberweg benutzen."
          ];
        case "carga_vivo":
          return [
            "Fahre rückwärts an, lass 4 Meter Abstand zur Rampe, berühre sie nicht und öffne die Anhängertüren.",
            `Öffne die Anhängertüren und stelle die Plattformhöhe auf <b>${altura}</b> ein.`,
            "Docke präzise fertig an und schließe die Fenster.",
            "Stelle den Motor ab.",
            "Gib die Schlüssel am Schalter im Fahrerraum ab und warte dort, bis du aufgerufen wirst. Zu Fuß immer den Fußgängerüberweg benutzen."
          ];
        case "soltar":
          return [
            `Parke rückwärts auf der markierten Position <b>${ubicacion}</b>.`,
            "Lass die Feststellbremse des Anhängers beim Abkuppeln angezogen (nicht lösen).",
            "Wenn der Anhänger abgestellt ist: Verlasse das Gelände, wenn du keine weitere Aufgabe hast, kupple an, was dir zugewiesen wurde, oder fahre zum Wartebereich für Zugmaschinen und gib die Schlüssel ab."
          ];
        case "recoger":
          return [
            `Fahre zur Position <b>${ubicacion}</b>.`,
            "Prüfe vor dem Ankuppeln, dass die Anhängernummer mit der zugewiesenen übereinstimmt."
          ];
        default:
          return [];
      }
    },
    fin: (cod, esUltima) => ({
      titulo: `Abgeschlossen bei ${cod}`,
      corto: "Abgeschlossen",
      desc: esUltima ? "Halt beendet. Fahre zur Ausfahrt." : "Halt beendet. Folge der nächsten Anweisung."
    }),
    salida: () => ({
      titulo: "Ausfahrt",
      corto: "Ausfahrt",
      desc: "Fahre der Beschilderung folgend zum Ausfahrtstor."
    }),
    motivos: { cargaNoLista: "Deine Ladung ist noch nicht bereit." },
    real: {
      muelle: { titulo: "Docke an deiner Rampe an", corto: "Rampe",
        intro: "Fahre zur Rampe, die dir am Tor zugewiesen wurde.",
        conPuerta: d => `Deine Rampe ist <b>${d}</b>. Folge der Beschilderung im Hof bis zu diesem Tor.`, badge: "Rampe" },
      sala: { titulo: "Warte im Fahrerraum", corto: "Warteraum",
        desc: "Du hast angedockt und die Schlüssel abgegeben. Warte im Fahrerraum (Kantine), bis die Beladung fertig ist. Wir rufen dich, wenn sie fertig ist; geh bis dahin nicht zur Rampe zurück." },
      llaves: { titulo: "Schlüssel abholen und ausfahren", corto: "Schlüssel und Ausfahrt",
        pasos: [
          "Hol die Schlüssel am Schalter im Fahrerraum ab. Zu Fuß immer den Fußgängerüberweg benutzen.",
          "Geh zurück zu deinem Lkw. Schließe die Anhängertüren gut und prüfe die Plombe. Zu Fuß immer den Fußgängerüberweg benutzen.",
          "Um alles Weitere kümmern sich die Amazon-Mitarbeiter; du musst nichts weiter tun.",
          "Fahre langsam von der Rampe weg und folge der Beschilderung zum Ausfahrtstor."
        ] }
    },
    safety: {
      title: "Sicherheitsregeln auf dem Hof",
      header: "Fahrer müssen am Tor mündlich bestätigen, dass sie diese Regeln verstehen und akzeptieren, und ihre persönlichen Daten angeben. Verstöße gegen diese Sicherheitsregeln führen zum Verweis vom Gelände. Befolge jederzeit die Anweisungen des Hofpersonals.",
      bullets: [
        "Die Höchstgeschwindigkeit auf dem Gelände beträgt 10 mph bzw. 15 km/h.",
        "Ziehe bei stehendem Fahrzeug immer die Handbremse an und stelle den Motor ab.",
        "Befolge immer die Fahrbahnmarkierungen und Richtungsschilder. Gewähre rückwärtsfahrenden Fahrzeugen immer Vorfahrt.",
        "Warnwesten/-jacken und Sicherheitsschuhe sind vor dem Verlassen des Fahrerhauses (z. B. auf dem Hof oder im Lager) Pflicht und korrekt zu tragen.",
        "Rauchen ist auf dem gesamten Gelände, einschließlich Hof, verboten, außer in den ausgewiesenen Raucherzonen. Frag bei Bedarf nach dem Weg.",
        "Die Nutzung von Mobiltelefonen oder elektronischen Geräten während der Fahrt ist illegal und daher verboten.",
        "Benutze immer die Gehwege und markierten Fußgängerüberwege. Gewähre Fußgängern immer Vorrang. Gehe oder stehe niemals hinter einem rückwärtsfahrenden Fahrzeug. Halte zu fahrenden Fahrzeugen immer mindestens 6 Meter Abstand.",
        "Fahrer dürfen auf dem Hof oder in den Wartebereichen keine langen Pausen machen. Wenn du aus gesetzlichen Gründen eine Pause brauchst, sprich mit einem Hofverantwortlichen.",
        "Bei Feuer sofort anhalten und Motor abstellen. Befolge die Anweisungen der Marshals und begib dich zum Sammelpunkt (siehe Geländeplan). Versuche nicht, das Gelände zu verlassen, und warte auf Anweisungen.",
        "Alle Unfälle und Vorfälle am Arbeitsplatz, die Schäden verursacht haben könnten, sind einem Mitglied des Amazon-Managementteams zu melden. Erste Hilfe wird vor Ort geleistet.",
        "Kinder und Tiere dürfen das Gelände nicht betreten. Beifahrer müssen alle Sicherheitsregeln und Anweisungen des Hofpersonals kennen und befolgen, im Fahrerhaus bleiben und das Fahrzeug nur auf Aufforderung eines Amazon-Mitarbeiters verlassen.",
        "Alle Schlüsselsätze von in den Buchten abgestellten Fahrzeugen müssen kontrolliert werden. Befolge die Anweisungen des Hofverantwortlichen.",
        "Wo kein Rückhaltesystem vorhanden ist, muss der Fahrer die Unterlegkeile anlegen und entfernen (das Hofpersonal informiert über die Anforderungen vor Ort). Entferne nicht die Lock-n-Stop-Vorrichtung.",
        "Versuche nicht, ohne vorherige Genehmigung oder bei roter Ampel auf einem Parkplatz oder in einer Ladezone zu parken oder diese zu verlassen.",
        "Beim Abstellen eines Anhängers auf einem Parkplatz oder an einem Rampentor muss der Fahrer die Feststellbremse des Anhängers betätigen.",
        "Parke oder stelle dein Fahrzeug nur dann auf einem Parkplatz oder in einer Ladezone ab, wenn du dazu berechtigt bist und die Ampel grün zeigt.",
        "Fahrer müssen die Anhängertüren öffnen und schließen und sicherstellen, dass sie vor der Bewegung des Fahrzeugs fest verschlossen sind. Fahrer sind für das Entfernen der Anhängerplomben mit eigenem Werkzeug und eigener persönlicher Schutzausrüstung verantwortlich (bei Bedarf können Amazon-Werkzeuge auf Verantwortung des Fahrers verwendet werden).",
        "Fahrer müssen die Ladung vor der Abfahrt auf Sicherheit prüfen und Probleme dem Hofpersonal melden.",
        "Unterlegkeile verhindern das Wegrollen von Fahrzeugen und müssen bei allen An- und Abkuppelvorgängen an Rampen, Parkplätzen und Vorkontrollzonen verwendet werden. Lege sie immer in Gefällerichtung an, bevor du Luftleitungen verbindest oder trennst oder einen Wechselbehälter absenkst. Sind feste Anschläge installiert, sind manuelle Keile nicht Pflicht (das Rad muss in Gefällerichtung am Anschlag anliegen). Speziell für Wechselbehälter: Kein Fahrer darf einen Wechselbehälter ohne Aufsicht eines Amazon-Hofmitarbeiters absetzen; nur der Rangierer des Standorts darf einen Wechselbehälter direkt in die Ladezone stellen.",
      ],
      footer: "Beachte jederzeit die Hinweise und Anweisungen unseres Hofpersonals. Fahrer werden aufgefordert zu bestätigen, dass sie die Sicherheitsregeln des Hofs verstehen, und bei Unfalluntersuchungen auf Anfrage mitzuwirken. Bei Fragen wende dich an einen Hofverantwortlichen, der dir hilft. Aggressives, beleidigendes oder unsicheres Verhalten wird nicht toleriert."
    }
};
