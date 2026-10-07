/* Guia BCN1 - idioma: fr. UI = textos de interfaz; STEP_TEXT = normas de seguridad, pasos del recorrido y del muelle. */

UI.fr = {
    headerTitle: "BCN1 · Guide d'accès",
    lblDestino: "Saisissez le code qui vous a été donné à la guérite :",
    lblTuCodigo: "Votre code de voyage (VR Id) :",
    tocaIdioma: "Touchez votre langue pour commencer",
    selectPlaceholder: "-- Sélectionnez votre VR Id --",
    btnVer: "Afficher mon parcours",
    modoNota: "Mode test : en production cet écran n'apparaît pas, chaque camion accède directement à son parcours en scannant son QR.",
    mapHint: "Faites glisser pour déplacer · pincez ou zoomez avec la molette",
    btnAnterior: "◀ Étape précédente",
    btnSiguiente: "Étape suivante ▶",
    sub: {aculado: "Je suis à quai ▶", dejarT: "Déposez vos clés", dejarD: "Fermez le camion et déposez les clés au point indiqué sur la carte. À pied, empruntez toujours le passage piéton.", entregadas: "Clés déposées ▶", recogerT: "Récupérez vos clés", tengo: "J'ai mes clés ▶", volverT: "Retournez à votre camion", listo: "Prêt à partir ▶", atras: "◀ Retour", irSala: "Allez à la salle d'attente", pcEspera: "Attendez sur votre place de pré-contrôle. Dès qu'une destination vous sera attribuée, cet écran changera tout seul.", psSuelto: "Remorque dételée ▶", psTractora: "Maintenant, allez avec le tracteur à <b>{d}</b>.", psT: "Et maintenant ?", psSalir: "Je quitte le site ▶", psParking: "J'attends avec le tracteur ▶", parkingT: "Zone d'attente des tracteurs", ddTitulo: "Montez sur la rampe", ddCorto: "Rampe", ddDesc: "Montez sur la rampe <b>{d}</b> et arrêtez-vous où les opérateurs vous l'indiquent.", ddPasos: ["Coupez le moteur et attendez dans la cabine qu'on vienne vous prendre en charge.", "Une fois terminé, quittez le site par la porte sud (V0)."], ddSalir: "Descendez lentement de la rampe et dirigez-vous vers la sortie en suivant la signalisation.", ddListo: "J'ai été déchargé ▶", psEnganchado: "Remorque attelée ▶", sigEsperaT: "Remorque dételée", sigEsperaD: "Attendez avec le tracteur où vous êtes. Dès qu'une nouvelle position vous sera attribuée, cet écran changera tout seul et le téléphone vibrera.", sigRemolque: "Remorque à récupérer : <b>{t}</b>", sigEngancha: "Attelez, branchez les connexions et vérifiez que la remorque est bien accrochée avant de rouler."},
    disclaimer: "Démo : données, quais et horaires d'exemple. Les étapes avancent manuellement avec les boutons ci-dessus ; en production elles se mettront à jour automatiquement avec les données réelles de la guérite, du yard et des quais.",
    badgeCarril: "Voie",
    alertCodigoNoReconocido: c => `Code non reconnu : ${c}`,
    gateVridLine: v => `Camion / VRID : ${v}`,
    gateMapCaption: "Plan indicatif du site BCN1.",
    btnAceptarNormas: "J'ai lu et j'accepte les règles de sécurité",
    alertSeleccionaCodigo: "Sélectionnez d'abord un code",
    timerNote: "Compteur d'exemple, en production il proviendrait du système réel des quais.",
    tomYardCargando: pct => `📦 Votre camion est en cours de chargement (~${pct}%)`,
    tomYardEsperando: "🕒 Le chargement n'a pas encore commencé.",
    tomYardListo: "✅ Votre chargement est presque terminé.",
    tomYardTerminada: "✅ Chargement terminé. Attendez dans la salle qu'on vous appelle pour récupérer vos clés.",
    tomYardLlamada: "🔔 On vous appelle ! Allez au guichet chercher vos clés.",
    callTitulo: "🔔 ON VOUS APPELLE !",
    doorChgT: "🔁 CHANGEMENT DE QUAI", doorChgD: "Votre destination a changé : avant {a}, maintenant {b}. Suivez les nouvelles indications à l'écran.",
    callDesc: "Votre chargement est prêt. Allez au guichet de la salle des chauffeurs récupérer vos clés.",
    callOk: "Compris, j'y vais",
    lockAcredT: "Accès non disponible", lockAcredD: "Ce lien ne fonctionne qu'après votre enregistrement à la guérite de BCN1. Si c'est déjà fait, patientez un instant : l'écran s'activera tout seul.", lockFinT: "Parcours terminé", lockFinD: "Vous avez quitté le site. Merci de votre visite à BCN1 ; ce lien n'est plus actif.", btnSalido: "J'ai quitté le site ▶",
    fbTitulo: "Ce guide vous a-t-il été utile ?",
    fbCaras: ["Non", "Plus ou moins", "Oui"],
    fbComentario: "Qu'amélioreriez-vous ? (facultatif)",
    fbEnviar: "Envoyer",
    fbGracias: "Merci ! Votre avis nous aide à nous améliorer.",
    geoTitulo: "Votre position dans l'enceinte",
    geoDesc: "Pour un meilleur service, nous demandons l'autorisation de voir votre position uniquement pendant que vous êtes sur le site. Elle ne sera partagée avec personne ; elle n'est utilisée que lorsque vous êtes dans la zone du site.",
    geoOk: "Accepter",
    geoNo: "Pas maintenant",
    geoOn: "Position active dans l'enceinte",
    geoDenied: "Autorisation de localisation refusée. Vous pouvez l'activer dans les réglages du navigateur.",
    geoChipIn: "📍 Position active uniquement dans BCN1", geoChipOut: "📍 Hors du site : votre position n'est pas enregistrée",
    nav: { izq: "Tournez à gauche", der: "Tournez à droite", en: "Dans {m} mètres, {x}", ahora: "{x} maintenant", llegada: "Vous êtes arrivé à {d}", llegadaProx: "Destination : {d}", fuera: "Vous avez quitté l'itinéraire : revenez sur la voie indiquée", seguir: "Suivre ma position", voz: "Guidage vocal", vozOn: "Guidage vocal activé" },
    asBtn: "🆘 Assistance",
    asTitulo: "Besoin d'aide ?",
    asDesc: "Choisissez le niveau et, si vous le souhaitez, expliquez-nous. Quelqu'un de l'équipe viendra vous voir.",
    asNiveles: { leve: "Léger", moderado: "Modéré", urgente: "Urgent" },
    asNivelesDesc: { leve: "Une question, sans urgence", moderado: "J'ai besoin d'aide pour continuer", urgente: "Problème grave ou de sécurité" },
    asNota: "Expliquez-nous (facultatif)",
    asEnviar: "Demander de l'aide",
    asCancelar: "Annuler",
    asEnviado: "Demande envoyée. Restez où vous êtes ; quelqu'un viendra vous voir.",
    asAtendido: "Votre demande a été traitée.",
    salidaPrevista: h => `🕒 Départ prévu : <b>${h}</b>`,
    genericoTitulo: "Votre opération à BCN1",
    genericoDesc: "Suivez les indications du personnel de cour. Ci-dessous, l'état de votre camion en temps réel.",
    demoOptions: {
      V001: "VR-8841 (direct au quai IB113, déchargement en direct)",
      V002: "VR-9012 (PRECHECK807 → attente TP PS554 → quai OB130, chargement)",
      V003: "VR-7734 (direct au virtuel PS502, déposer la remorque)",
      V004: "VR-6650 (PRECHECK803 → échange PS703 / IB119)"
    }
};

STEP_TEXT.fr = {
    garita: carril => ({
      titulo: "Attente à la guérite",
      corto: "Guérite",
      desc: carril ? `Voie <b>${carril}</b>. Attendez qu'un associé vous prenne en charge et vous donne votre destination.` : `Attendez qu'un associé vous prenne en charge et vous donne votre destination.`
    }),
    precheck: code => ({
      titulo: `Au prechecking ${code}`,
      corto: "Prechecking",
      desc: `Attendez à <b>${code}</b> jusqu'à ce que vous soyez autorisé à avancer.`
    }),
    espera: (code, motivo) => ({
      titulo: `En attente à ${code}`,
      corto: `Attente ${code}`,
      desc: `${motivo} Attendez à <b>${code}</b> jusqu'à ce qu'on vous prévienne pour continuer.`
    }),
    transito: (cod, tipoLocation) => ({
      titulo: `En route vers ${cod}`,
      corto: `Aller à ${cod}`,
      desc: `Dirigez-vous vers <b>${tipoLocation === 'muelle' ? 'le quai' : 'la position virtuelle'} ${cod}</b>.`
    }),
    accionTitulo: {
      descarga_vivo: "Déchargement en direct",
      carga_vivo: "Chargement en direct",
      soltar: "Déposer la remorque",
      recoger: "Récupérer la remorque"
    },
    pasosDeAccion(accion, ubicacion, altura) {
      switch (accion) {
        case "descarga_vivo":
          return [
            "Accostez en laissant 4 mètres de marge avec le quai, sans le toucher encore, et ouvrez les portes de la remorque.",
            `Ouvrez les portes de la remorque et réglez la hauteur du quai à <b>${altura}</b>.`,
            "Terminez l'accostage avec précision et remontez les vitres.",
            "Coupez le moteur.",
            "Remettez les clés au guichet de la salle des chauffeurs et attendez qu'on vous appelle. À pied, empruntez toujours le passage piéton."
          ];
        case "carga_vivo":
          return [
            "Accostez en laissant 4 mètres de marge avec le quai, sans le toucher encore, et ouvrez les portes de la remorque.",
            `Ouvrez les portes de la remorque et réglez la hauteur du quai à <b>${altura}</b>.`,
            "Terminez l'accostage avec précision et remontez les vitres.",
            "Coupez le moteur.",
            "Remettez les clés au guichet de la salle des chauffeurs et attendez qu'on vous appelle. À pied, empruntez toujours le passage piéton."
          ];
        case "soltar":
          return [
            `Reculez à l'emplacement indiqué <b>${ubicacion}</b>.`,
            "Laissez le frein de stationnement de la remorque serré (ne le relâchez pas) lors du dételage.",
            "Une fois la remorque déposée : quittez le site si vous n'avez plus de travail, attelez ce qui vous a été indiqué, ou rendez-vous à la zone d'attente des tracteurs et remettez les clés."
          ];
        case "recoger":
          return [
            `Dirigez-vous vers l'emplacement <b>${ubicacion}</b>.`,
            "Vérifiez que le numéro de la remorque correspond à celui attribué avant l'attelage."
          ];
        default:
          return [];
      }
    },
    fin: (cod, esUltima) => ({
      titulo: `Terminé à ${cod}`,
      corto: "Terminé",
      desc: esUltima ? "Arrêt terminé. Dirigez-vous vers la sortie." : "Arrêt terminé. Suivez l'instruction suivante."
    }),
    salida: () => ({
      titulo: "Sortie",
      corto: "Sortie",
      desc: "Dirigez-vous vers la porte de sortie en suivant la signalisation."
    }),
    motivos: { cargaNoLista: "Votre chargement n'est pas encore prêt." },
    real: {
      muelle: { titulo: "Reculez sur votre quai", corto: "Quai",
        intro: "Rendez-vous au quai qui vous a été attribué à la guérite.",
        conPuerta: d => `Votre quai est le <b>${d}</b>. Suivez la signalisation de la cour jusqu'à cette porte.`, badge: "Quai" },
      sala: { titulo: "Attendez dans la salle des chauffeurs", corto: "Salle d'attente",
        desc: "Vous êtes à quai et avez remis vos clés. Attendez dans la salle des chauffeurs (cantine) jusqu'à la fin du chargement. Nous vous appellerons quand ce sera prêt ; ne retournez pas au quai avant." },
      llaves: { titulo: "Récupérez vos clés et sortez", corto: "Clés et sortie",
        pasos: [
          "Récupérez vos clés au guichet de la salle des chauffeurs. À pied, empruntez toujours le passage piéton.",
          "Retournez à votre camion. Fermez bien les portes de la remorque et vérifiez le scellé. À pied, empruntez toujours le passage piéton.",
          "Les opérateurs Amazon s'occupent de tout le reste ; vous n'avez rien d'autre à faire.",
          "Quittez le quai lentement et dirigez-vous vers la sortie en suivant la signalisation."
        ] }
    },
        safety: {
      title: "Règles de sécurité sur site",
      header: "Les chauffeurs doivent confirmer verbalement à la guérite qu'ils comprennent et acceptent ces règles, et fournir leurs données personnelles. Le non-respect de ces règles de sécurité entraînera l'exclusion du site. Suivez toujours les instructions des marshals du site.",
      bullets: [
        "La limite de vitesse sur le site est de 10 mph ou 15 km/h.",
        "Serrez toujours le frein à main et coupez le moteur lorsque le véhicule est à l'arrêt.",
        "Respectez toujours le marquage et la signalisation. Cédez toujours le passage aux véhicules effectuant une marche arrière.",
        "Le port du gilet/de la veste haute visibilité et de chaussures de sécurité est obligatoire avant de quitter la cabine (par exemple sur le site ou dans l'entrepôt), et doit être correctement effectué.",
        "Il est interdit de fumer sur l'ensemble du site, y compris sur la cour, sauf dans les zones fumeurs prévues à cet effet. Demandez des indications si nécessaire.",
        "Il est illégal, et donc interdit, d'utiliser un téléphone portable ou un appareil électronique en conduisant.",
        "Utilisez toujours les trottoirs et les passages piétons signalés. Cédez toujours le passage aux piétons. Ne marchez et ne vous arrêtez jamais derrière un véhicule effectuant une marche arrière. Maintenez toujours une distance minimale de 6 mètres avec les véhicules en mouvement.",
        "Les chauffeurs ne peuvent pas prendre de longues pauses sur le site ni dans les zones d'attente. Si vous avez besoin d'un repos légal, adressez-vous à un marshal du site.",
        "En cas d'incendie, arrêtez-vous immédiatement et coupez le moteur. Suivez les instructions des marshals et rendez-vous au point de rassemblement (voir le plan du site). N'essayez pas de quitter le site et attendez les instructions.",
        "Tout accident ou incident ayant pu causer des dommages et survenant sur le lieu de travail doit être signalé à un membre de l'équipe de direction d'Amazon. Les premiers secours sont disponibles sur site.",
        "L'accès au site est interdit aux enfants et aux animaux. Les seconds chauffeurs doivent connaître et suivre toutes les règles de sécurité et les instructions des marshals, rester dans la cabine et ne la quitter que si un employé d'Amazon le demande.",
        "Tous les jeux de clés des véhicules stationnés dans les baies doivent être contrôlés. Suivez les instructions du marshal du site.",
        "En l'absence de système de retenue, le chauffeur doit installer et retirer lui-même les cales de roue (les marshals du site indiqueront les exigences du lieu). Ne retirez pas le dispositif Lock n Stop.",
        "N'essayez pas de vous stationner ou de quitter une baie de stationnement ou une zone de chargement sans autorisation préalable, ni lorsque le feu est rouge.",
        "En laissant une remorque sur une baie de stationnement ou à une porte de quai, le chauffeur doit actionner le frein de stationnement de la remorque.",
        "Ne stationnez ou ne laissez votre véhicule dans une baie de stationnement ou une zone de chargement que lorsque vous y êtes autorisé et que le feu est vert.",
        "Les chauffeurs doivent ouvrir et fermer les portes de la remorque, et s'assurer qu'elles sont bien fermées avant que le véhicule ne bouge. Les chauffeurs sont responsables du retrait des scellés de la remorque, avec leurs propres outils et leur propre équipement de protection individuelle (les outils d'Amazon peuvent être utilisés si nécessaire, sous la responsabilité du chauffeur).",
        "Les chauffeurs doivent inspecter les charges pour garantir leur sécurité avant le départ et signaler tout problème aux marshals du site.",
        "Les cales de roue servent à empêcher les véhicules de se déplacer et doivent être utilisées lors de toutes les opérations d'attelage/dételage, aux portes de quai, dans les baies de stationnement et dans les zones de pré-contrôle. Placez-les toujours dans le sens de la pente, avant de connecter/déconnecter les conduites d'air ou d'abaisser une caisse mobile. Lorsque des butées fixes sont installées, l'utilisation de cales manuelles n'est pas obligatoire (la roue doit reposer contre la butée, dans le sens de la pente). Caisses mobiles : aucun chauffeur ne doit démonter une caisse mobile sans la supervision d'un membre de l'équipe du site Amazon ; seul le cariste du site peut placer une caisse mobile directement dans la zone de chargement.",
      ],
      footer: "Respectez en permanence les indications et instructions de nos marshals du site. Les chauffeurs devront confirmer qu'ils comprennent les règles de sécurité du site et coopérer aux enquêtes en cas d'accident, sur demande. En cas de question, adressez-vous à un marshal du site, qui vous aidera. Aucun comportement agressif, abusif ou dangereux ne sera toléré."
    }
};
