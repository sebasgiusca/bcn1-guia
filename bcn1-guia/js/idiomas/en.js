/* Guia BCN1 - idioma: en. UI = textos de interfaz; STEP_TEXT = normas de seguridad, pasos del recorrido y del muelle. */

UI.en = {
    headerTitle: "BCN1 · Access Guide",
    lblDestino: "Enter the code you were given at the gate:",
    lblTuCodigo: "Your trip code (VR Id):",
    tocaIdioma: "Tap your language to start",
    selectPlaceholder: "-- Select your VR Id --",
    btnVer: "Show my route",
    modoNota: "Test mode: in production this screen isn't shown, each truck goes straight to its route by scanning its QR.",
    mapHint: "Drag to move · pinch or scroll to zoom",
    btnAnterior: "◀ Previous stage",
    btnSiguiente: "Next stage ▶",
    sub: {aculado: "I'm docked ▶", dejarT: "Hand in your keys", dejarD: "Lock the truck and hand in the keys at the point marked on the map. Always walk along the marked pedestrian crossing.", entregadas: "Keys handed in ▶", recogerT: "Collect your keys", tengo: "I have my keys ▶", volverT: "Go back to your truck", listo: "Ready to leave ▶", atras: "◀ Back", irSala: "Go to the waiting room", pcEspera: "Wait at your pre-check bay. When you are given a destination this screen will change by itself.", psSuelto: "Trailer dropped ▶", psT: "What now?", psSalir: "I'm leaving the site ▶", psParking: "I'll wait with the tractor ▶", parkingT: "Tractor waiting area", ddTitulo: "Drive up the ramp", ddCorto: "Ramp", ddDesc: "Drive up ramp <b>{d}</b> and stop where the operators tell you.", ddPasos: ["Switch off the engine and wait in the cab until someone comes to attend to you.", "When they finish, leave the site through the south gate (V0)."], ddSalir: "Drive down the ramp slowly and head to the exit gate following the signs.", ddListo: "I've been unloaded ▶", psEnganchado: "Trailer hooked up ▶", sigEsperaT: "Trailer dropped", sigEsperaD: "Wait with the tractor where you are. When you are given your next position this screen will change by itself and your phone will vibrate.", sigRemolque: "Trailer to collect: <b>{t}</b>", sigEngancha: "Hook up, connect the lines and check the trailer is properly coupled before moving off."},
    disclaimer: "Demo: example data, docks and times. Stages move forward manually with the buttons above; in production they will update automatically with real gate, yard and dock data.",
    badgeCarril: "Lane",
    alertCodigoNoReconocido: c => `Code not recognized: ${c}`,
    gateVridLine: v => `Truck / VRID: ${v}`,
    gateMapCaption: "Reference layout of the BCN1 site.",
    btnAceptarNormas: "I have read and accept the safety rules",
    alertSeleccionaCodigo: "Select a code first",
    timerNote: "Example counter, in production it would come from the real dock system.",
    tomYardCargando: pct => `📦 Your truck is loading (~${pct}%)`,
    tomYardEsperando: "🕒 Loading hasn't started yet.",
    tomYardListo: "✅ Your load is almost complete.",
    tomYardTerminada: "✅ Loading finished. Wait in the lounge until you are called to collect your keys.",
    tomYardLlamada: "🔔 You're being called! Go to the window for your keys.",
    callTitulo: "🔔 YOU ARE BEING CALLED!",
    doorChgT: "🔁 DOCK CHANGE", doorChgD: "Your destination has changed: it was {a}, now it is {b}. Follow the new instructions on screen.",
    callDesc: "Your load is ready. Go to the drivers' lounge window to collect your keys.",
    callOk: "Got it, on my way",
    lockAcredT: "Access not available", lockAcredD: "This link only works after you check in at the BCN1 gate. If you already have, wait a moment: the screen will activate by itself.", lockFinT: "Visit finished", lockFinD: "You have left the site. Thank you for visiting BCN1; this link is no longer active.", btnSalido: "I have left the site ▶",
    fbTitulo: "Was this guide useful?",
    fbCaras: ["No", "Somewhat", "Yes"],
    fbComentario: "What would you improve? (optional)",
    fbEnviar: "Send",
    fbGracias: "Thank you! Your feedback helps us improve.",
    geoTitulo: "Your location inside the site",
    geoDesc: "To serve you better we ask permission to see your location only while you are inside the site. It will not be shared with anyone; it is only used while you are within the site area.",
    geoOk: "Accept",
    geoNo: "Not now",
    geoOn: "Location active inside the site",
    geoDenied: "Location permission denied. You can enable it in your browser settings.",
    geoChipIn: "📍 Location active only inside BCN1", geoChipOut: "📍 Outside the site: your location is not recorded",
    nav: { izq: "Turn left", der: "Turn right", en: "In {m} metres, {x}", ahora: "{x} now", llegada: "You have arrived at {d}", llegadaProx: "Destination: {d}", fuera: "You have left the route: return to the marked lane", seguir: "Follow my position", voz: "Voice guidance", vozOn: "Voice guidance on" },
    asBtn: "🆘 Assistance",
    asTitulo: "Do you need help?",
    asDesc: "Choose the level and, if you like, tell us what is going on. Someone from the team will come to you.",
    asNiveles: { leve: "Minor", moderado: "Moderate", urgente: "Urgent" },
    asNivelesDesc: { leve: "A question, no hurry", moderado: "I need help to continue", urgente: "Serious or safety problem" },
    asNota: "Tell us what is going on (optional)",
    asEnviar: "Request assistance",
    asCancelar: "Cancel",
    asEnviado: "Request sent. Stay where you are; someone will come to you.",
    asAtendido: "Your request has been handled.",
    salidaPrevista: h => `🕒 Scheduled departure: <b>${h}</b>`,
    genericoTitulo: "Your operation at BCN1",
    genericoDesc: "Follow the yard staff instructions. Below you will see your truck status in real time.",
    demoOptions: {
      V001: "VR-8841 (straight to dock IB113, live unload)",
      V002: "VR-9012 (PRECHECK807 → wait TP PS554 → dock OB130, load)",
      V003: "VR-7734 (straight to virtual PS502, drop trailer)",
      V004: "VR-6650 (PRECHECK803 → swap PS703 / IB119)"
    }
};

STEP_TEXT.en = {
    garita: carril => ({
      titulo: "Wait at the gate",
      corto: "Gate",
      desc: carril ? `Lane <b>${carril}</b>. Wait for an associate to assist you and give you your destination.` : `Wait for an associate to assist you and give you your destination.`
    }),
    precheck: code => ({
      titulo: `At prechecking ${code}`,
      corto: "Prechecking",
      desc: `Wait at <b>${code}</b> until you're cleared to proceed.`
    }),
    espera: (code, motivo) => ({
      titulo: `Waiting at ${code}`,
      corto: `Wait ${code}`,
      desc: `${motivo} Wait at <b>${code}</b> until you're notified to continue.`
    }),
    transito: (cod, tipoLocation) => ({
      titulo: `On the way to ${cod}`,
      corto: `Go to ${cod}`,
      desc: `Head to <b>${tipoLocation === 'muelle' ? 'dock' : 'virtual spot'} ${cod}</b>.`
    }),
    accionTitulo: {
      descarga_vivo: "Live unload",
      carga_vivo: "Live load",
      soltar: "Drop trailer",
      recoger: "Pick up trailer"
    },
    pasosDeAccion(accion, ubicacion, altura) {
      switch (accion) {
        case "descarga_vivo":
          return [
            "Dock leaving 4 metres of margin, without touching the dock yet, and open the trailer doors.",
            `Open the trailer doors and set the dock leveler height to <b>${altura}</b>.`,
            "Finish docking precisely and close the windows.",
            "Switch off the engine.",
            "Hand in the keys at the driver lounge window and wait there until you're called. Always walk along the marked pedestrian crossing."
          ];
        case "carga_vivo":
          return [
            "Dock leaving 4 metres of margin, without touching the dock yet, and open the trailer doors.",
            `Open the trailer doors and set the dock leveler height to <b>${altura}</b>.`,
            "Finish docking precisely and close the windows.",
            "Switch off the engine.",
            "Hand in the keys at the driver lounge window and wait there until you're called. Always walk along the marked pedestrian crossing."
          ];
        case "soltar":
          return [
            `Reverse into the marked spot <b>${ubicacion}</b>.`,
            "Leave the trailer's parking brake engaged (don't release it) when uncoupling.",
            "With the trailer dropped: leave the site if you have no more work, hitch what you've been told to, or head to the tractor waiting area and hand in the keys."
          ];
        case "recoger":
          return [
            `Head to spot <b>${ubicacion}</b>.`,
            "Verify the trailer number matches the one assigned before hitching."
          ];
        default:
          return [];
      }
    },
    fin: (cod, esUltima) => ({
      titulo: `Completed at ${cod}`,
      corto: "Completed",
      desc: esUltima ? "Stop finished. Head to the exit." : "Stop finished. Continue with the next instruction."
    }),
    salida: () => ({
      titulo: "Exit",
      corto: "Exit",
      desc: "Head to the exit gate following the signage."
    }),
    motivos: { cargaNoLista: "Your load isn't ready yet." },
    real: {
      muelle: { titulo: "Back onto your dock", corto: "Dock",
        intro: "Go to the dock assigned to you at the gate.",
        conPuerta: d => `Your dock is <b>${d}</b>. Follow the yard signs to that door.`, badge: "Dock" },
      sala: { titulo: "Wait in the drivers' lounge", corto: "Waiting room",
        desc: "You have docked and handed in your keys. Wait in the drivers' lounge (canteen) until loading is finished. We will call you when it is ready; do not return to the dock until then." },
      llaves: { titulo: "Collect your keys and leave", corto: "Keys & exit",
        pasos: [
          "Collect your keys at the drivers' lounge window. Always walk along the marked pedestrian crossing.",
          "Return to your truck. Close the trailer doors properly and check the seal. Always walk along the marked pedestrian crossing.",
          "Amazon operators take care of everything else; you do not need to do anything more.",
          "Leave the dock slowly and head to the exit gate following the signs."
        ] }
    },
        safety: {
      title: "Yard Safety Rules",
      header: "Drivers must verbally confirm at the gatehouse that they understand and accept these rules, and provide their personal details. Failure to comply with these safety rules will result in expulsion from the site. Follow the yard marshals' instructions at all times.",
      bullets: [
        "The speed limit on site is 10 mph or 15 km/h.",
        "Always apply the handbrake and turn off the engine when the vehicle is stopped.",
        "Always follow road markings and signs. Always give way to reversing vehicles.",
        "High-visibility vests/jackets and safety footwear are mandatory before leaving the cabin (e.g. in the yard or warehouse), and must be worn correctly.",
        "Smoking is prohibited throughout the site, including the yard, except in designated smoking areas. Please ask for directions if needed.",
        "It is illegal, and therefore prohibited, to use mobile phones or electronic devices while driving.",
        "Always use marked pavements and pedestrian crossings. Always give way to pedestrians. Never walk or stand behind a reversing vehicle. Always keep a minimum distance of 6 metres from moving vehicles.",
        "Drivers may not take long breaks in the yard or in waiting areas. If you need a legally required rest, speak to a yard marshal.",
        "In case of fire, stop immediately and turn off the engine. Follow the marshals' instructions and go to the assembly point (see site map). Do not attempt to leave the site and wait for instructions.",
        "Any accident or incident that may have caused damage and occurs on site must be reported to a member of Amazon's management team. First aid is available on site.",
        "Children and animals are not allowed on site. Co-drivers must know and follow all safety rules and the yard marshals' instructions, stay in the cab, and only leave the vehicle if asked to by an Amazon employee.",
        "All key sets for vehicles parked in bays must be kept under control. Follow the yard marshal's instructions.",
        "Where there is no restraint system in place, the driver must fit and remove the wheel chocks (yard marshals will advise on site requirements). Do not remove the Lock n Stop device.",
        "Do not attempt to park in, or pull out of, a parking bay or loading area without prior authorisation, or while the traffic light is red.",
        "When leaving a trailer in a parking bay or at a dock door, the driver must apply the trailer's parking brake.",
        "Only park or leave your vehicle in a parking bay or loading area when authorised to do so and the traffic light is green.",
        "Drivers must open and close the trailer doors, and ensure they are properly closed before the vehicle moves. Drivers are responsible for removing trailer seals using their own tools and PPE (Amazon tools may be used if necessary, at the driver's own responsibility).",
        "Drivers must inspect loads to ensure they are safe before departure and report any issues to the yard marshals.",
        "Wheel chocks are used to stop vehicles from moving and must be used during all coupling/uncoupling activities, at dock doors, parking bays and pre-check areas. Always place them in the direction of the slope, before connecting/disconnecting air lines or lowering a swap body. Where fixed wheel stops are installed, manual chocks are not mandatory (the wheel must rest against the stop, in the direction of the slope). Swap bodies: no driver may remove a swap body without supervision from an Amazon yard team member; only the site's yard shunter may place a swap body directly in the loading area.",
      ],
      footer: "Always follow the guidance and instructions of our yard marshals. Drivers will be asked to confirm they understand the yard safety rules and to cooperate with accident investigations when requested. If you have any questions, speak to a yard marshal, who will help you. Aggressive, abusive or unsafe behaviour will not be tolerated."
    }
};
