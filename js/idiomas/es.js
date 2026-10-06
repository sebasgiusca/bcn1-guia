/* Guia BCN1 - idioma: es. UI = textos de interfaz; STEP_TEXT = normas de seguridad, pasos del recorrido y del muelle. */

UI.es = {
    headerTitle: "BCN1 · Guía de acceso",
    lblDestino: "Introduce el código que te han dado en la garita:",
    lblTuCodigo: "Tu código de viaje (VR Id):",
    tocaIdioma: "Toca tu idioma para empezar",
    selectPlaceholder: "-- Selecciona tu VR Id --",
    btnVer: "Mostrar mi recorrido",
    modoNota: "Modo pruebas: en producción esta pantalla no se ve, cada camión llega directo a su recorrido al escanear su QR.",
    mapHint: "Arrastra para mover · pellizca o rueda para zoom",
    btnAnterior: "◀ Etapa anterior",
    btnSiguiente: "Etapa siguiente ▶",
    sub: {aculado: "Ya he aculado ▶", dejarT: "Deja las llaves", dejarD: "Cierra el camión y entrega las llaves en el punto marcado en el mapa. Ve a pie siempre por el paso de peatones.", entregadas: "Llaves entregadas ▶", recogerT: "Recoge las llaves", tengo: "Ya tengo las llaves ▶", volverT: "Vuelve a tu camión", listo: "Listo para salir ▶", atras: "◀ Atrás", irSala: "Ve a la sala de espera", pcEspera: "Espera en tu plaza de precheck. Cuando te asignen destino, esta pantalla cambiará sola.", psSuelto: "Remolque suelto ▶", psT: "¿Qué haces ahora?", psSalir: "Salgo del recinto ▶", psParking: "Espero con la tractora ▶", parkingT: "Zona de espera de tractoras", ddTitulo: "Sube a la rampa", ddCorto: "Rampa", ddDesc: "Sube a la rampa <b>{d}</b> y para donde te indiquen los operarios.", ddPasos: ["Apaga el motor y espera en la cabina a que vengan a atenderte.", "Cuando terminen, sal del recinto por la puerta sur (V0)."], ddSalir: "Baja de la rampa despacio y dirígete a la puerta de salida siguiendo la señalización.", ddListo: "Ya me han descargado ▶", psEnganchado: "Remolque enganchado ▶", sigEsperaT: "Remolque soltado", sigEsperaD: "Espera con la tractora donde estás. Cuando te asignen la siguiente posición, esta pantalla cambiará sola y el móvil vibrará.", sigRemolque: "Remolque a recoger: <b>{t}</b>", sigEngancha: "Engancha, conecta las conexiones y comprueba que el remolque está bien acoplado antes de moverte."},
    disclaimer: "Demo: datos, muelles y tiempos de ejemplo. Las etapas avanzan a mano con los botones de arriba; en producción se actualizarán solas con los datos reales de garita, yard y muelles.",
    badgeCarril: "Carril",
    alertCodigoNoReconocido: c => `Código no reconocido: ${c}`,
    gateVridLine: v => `Camión / VRID: ${v}`,
    gateMapCaption: "Plano orientativo del recinto de BCN1.",
    btnAceptarNormas: "He leído y acepto las normas de seguridad",
    alertSeleccionaCodigo: "Selecciona un código primero",
    timerNote: "Contador de ejemplo, en producción vendría del sistema real de muelles.",
    tomYardCargando: pct => `📦 Tu camión se está cargando (~${pct}%)`,
    tomYardEsperando: "🕒 Tu carga todavía no ha empezado.",
    tomYardListo: "✅ Tu carga está casi completa.",
    tomYardTerminada: "✅ Carga terminada. Espera en la sala a que te llamen para recoger las llaves.",
    tomYardLlamada: "🔔 ¡Te están llamando! Ve a la ventanilla a por las llaves.",
    callTitulo: "🔔 ¡TE LLAMAN!",
    doorChgT: "🔁 CAMBIO DE MUELLE", doorChgD: "Tu destino ha cambiado: antes {a}, ahora {b}. Sigue las indicaciones nuevas de la pantalla.",
    callDesc: "Tu carga está lista. Ve a la ventanilla de la sala de conductores a recoger las llaves.",
    callOk: "Entendido, voy",
    lockAcredT: "Acceso no disponible", lockAcredD: "Este enlace solo funciona después de acreditarte en la garita de BCN1. Si ya lo has hecho, espera un momento: la pantalla se activará sola.", lockFinT: "Recorrido finalizado", lockFinD: "Ya has salido del recinto. Gracias por tu visita a BCN1; este enlace ha dejado de estar activo.", btnSalido: "He salido del recinto ▶",
    fbTitulo: "¿Te ha servido esta guía?",
    fbCaras: ["No", "Más o menos", "Sí"],
    fbComentario: "¿Qué mejorarías? (opcional)",
    fbEnviar: "Enviar",
    fbGracias: "¡Gracias! Tu opinión nos ayuda a mejorar.",
    geoTitulo: "Tu ubicación dentro del recinto",
    geoDesc: "Para un mejor servicio solicitamos permiso para ver tu ubicación únicamente mientras estás dentro del site. No se compartirá la ubicación con nadie; solo será mientras estés en la zona interior del site.",
    geoOk: "Aceptar",
    geoNo: "Ahora no",
    geoOn: "Ubicación activa dentro del recinto",
    geoDenied: "Permiso de ubicación denegado. Puedes activarlo en los ajustes del navegador.",
    geoChipIn: "📍 Ubicación activa solo dentro de BCN1", geoChipOut: "📍 Fuera del recinto: no se registra tu ubicación",
    nav: { izq: "Gira a la izquierda", der: "Gira a la derecha", en: "En {m} metros, {x}", ahora: "{x} ahora", llegada: "Has llegado a {d}", llegadaProx: "Destino: {d}", fuera: "Te has salido de la ruta: vuelve al carril marcado", seguir: "Seguir mi posición", voz: "Indicaciones por voz", vozOn: "Indicaciones por voz activadas" },
    asBtn: "🆘 Asistencia",
    asTitulo: "¿Necesitas ayuda?",
    asDesc: "Elige el nivel y, si quieres, cuéntanos qué pasa. Alguien del equipo irá a atenderte.",
    asNiveles: { leve: "Leve", moderado: "Moderado", urgente: "Urgente" },
    asNivelesDesc: { leve: "Una duda, sin prisa", moderado: "Necesito ayuda para continuar", urgente: "Problema grave o de seguridad" },
    asNota: "Cuéntanos qué pasa (opcional)",
    asEnviar: "Pedir asistencia",
    asCancelar: "Cancelar",
    asEnviado: "Aviso enviado. Quédate donde estás; alguien irá a atenderte.",
    asAtendido: "Tu aviso ha sido atendido.",
    salidaPrevista: h => `🕒 Salida prevista: <b>${h}</b>`,
    genericoTitulo: "Tu operación en BCN1",
    genericoDesc: "Sigue las indicaciones del personal de patio. Abajo verás el estado de tu camión en tiempo real.",
    demoOptions: {
      V001: "VR-8841 (directo a muelle IB113, descarga en vivo)",
      V002: "VR-9012 (PRECHECK807 → espera TP PS554 → muelle OB130, carga)",
      V003: "VR-7734 (directo a virtual PS502, soltar remolque)",
      V004: "VR-6650 (PRECHECK803 → intercambio PS703 / IB119)"
    }
};

STEP_TEXT.es = {
    garita: carril => ({
      titulo: "Espera en garita",
      corto: "Garita",
      desc: carril ? `Carril <b>${carril}</b>. Espera a que un asociado te atienda y te dé destino.` : `Espera a que un asociado te atienda y te dé destino.`
    }),
    precheck: code => ({
      titulo: `En prechecking ${code}`,
      corto: "Prechecking",
      desc: `Espera en <b>${code}</b> hasta que te autoricen a avanzar.`
    }),
    espera: (code, motivo) => ({
      titulo: `Esperando en ${code}`,
      corto: `Espera ${code}`,
      desc: `${motivo} Espera en <b>${code}</b> hasta que te avisen para continuar.`
    }),
    transito: (cod, tipoLocation) => ({
      titulo: `En tránsito a ${cod}`,
      corto: `Ir a ${cod}`,
      desc: `Dirígete a <b>${tipoLocation === 'muelle' ? 'muelle' : 'posición virtual'} ${cod}</b>.`
    }),
    accionTitulo: {
      descarga_vivo: "Descarga en vivo",
      carga_vivo: "Carga en vivo",
      soltar: "Soltar remolque",
      recoger: "Recoger remolque"
    },
    pasosDeAccion(accion, ubicacion, altura) {
      switch (accion) {
        case "descarga_vivo":
          return [
            "Acula dejando 4 metros de margen con el muelle, sin llegar a tocarlo, y abre las puertas del remolque.",
            `Abre las puertas del remolque y ajusta la altura de la plataforma a <b>${altura}</b>.`,
            "Termina de acular con precisión y sube las ventanillas.",
            "Apaga el motor.",
            "Entrega las llaves en la ventanilla de la sala de conductores y espera allí hasta que te avisen. Ve a pie siempre por el paso de peatones."
          ];
        case "carga_vivo":
          return [
            "Acula dejando 4 metros de margen con el muelle, sin llegar a tocarlo, y abre las puertas del remolque.",
            `Abre las puertas del remolque y ajusta la altura de la plataforma a <b>${altura}</b>.`,
            "Termina de acular con precisión y sube las ventanillas.",
            "Apaga el motor.",
            "Entrega las llaves en la ventanilla de la sala de conductores y espera allí hasta que te avisen. Ve a pie siempre por el paso de peatones."
          ];
        case "soltar":
          return [
            `Aparca de espaldas en la posición señalizada <b>${ubicacion}</b>.`,
            "Deja el freno de estacionamiento del remolque puesto (no lo quites) al desacoplar.",
            "Con el remolque ya suelto: sal del recinto si no tienes más trabajo, engancha lo que se te haya indicado, o ve a la zona de espera de tractoras y entrega las llaves."
          ];
        case "recoger":
          return [
            `Dirígete a la posición <b>${ubicacion}</b>.`,
            "Verifica que el número de remolque coincide con el asignado antes de enganchar."
          ];
        default:
          return [];
      }
    },
    fin: (cod, esUltima) => ({
      titulo: `Completado en ${cod}`,
      corto: "Completado",
      desc: esUltima ? "Parada finalizada. Dirígete a salida." : "Parada finalizada. Sigue con la siguiente indicación."
    }),
    salida: () => ({
      titulo: "Salida",
      corto: "Salida",
      desc: "Dirígete a la puerta de salida siguiendo la señalización."
    }),
    motivos: { cargaNoLista: "Tu carga aún no está lista para empezar." },
    real: {
      muelle: { titulo: "Acula en tu muelle", corto: "Muelle",
        intro: "Dirígete al muelle que te han asignado en garita.",
        conPuerta: d => `Tu muelle es el <b>${d}</b>. Sigue la señalización del patio hasta esa puerta.`, badge: "Muelle" },
      sala: { titulo: "Espera en la sala de conductores", corto: "Sala de espera",
        desc: "Ya has aculado y entregado las llaves. Espera en la sala de conductores (cantina) hasta que termine la carga. Te llamaremos cuando esté lista; no vuelvas al muelle hasta entonces." },
      llaves: { titulo: "Recoge las llaves y sal", corto: "Llaves y salida",
        pasos: [
          "Recoge las llaves en la ventanilla de la sala de conductores. Ve a pie siempre por el paso de peatones.",
          "Vuelve a tu camión. Cierra bien las puertas del remolque y comprueba el precinto. Ve a pie siempre por el paso de peatones.",
          "De todo lo demás se encargan los operarios de Amazon; tú no tienes que hacer nada más.",
          "Sal del muelle despacio y dirígete a la puerta de salida siguiendo la señalización."
        ] }
    },
        safety: {
      title: "Reglas de Seguridad en el Patio",
      header: "Los conductores deben confirmar verbalmente ante la garita que comprenden y aceptan estas normas, y proporcionar sus datos personales. El incumplimiento de estas normas de seguridad dará lugar a la expulsión del recinto. Siga en todo momento las instrucciones de los encargados del patio.",
      bullets: [
        "El límite de velocidad en el recinto es de 10 mph o 15 km/h.",
        "Aplique siempre el freno de mano y apague el motor cuando el vehículo esté parado.",
        "Siga siempre las marcas y señales de dirección. Ceda siempre el paso a los vehículos que dan marcha atrás.",
        "Es obligatorio llevar chalecos/chaquetas de alta visibilidad y calzado de seguridad antes de salir de la cabina (por ejemplo, en el patio o el almacén), usados correctamente.",
        "Está prohibido fumar en todo el recinto, incluido el patio, excepto en las zonas habilitadas para fumadores. Solicite indicaciones si es necesario.",
        "Es ilegal, y por tanto está prohibido, utilizar teléfonos móviles o dispositivos electrónicos mientras se conduce.",
        "Utilice siempre las aceras y los pasos de peatones señalizados. Ceda siempre el paso a los peatones. No camine ni se pare nunca detrás de un vehículo que esté dando marcha atrás. Mantenga siempre una distancia mínima de 6 metros con los vehículos en movimiento.",
        "Los conductores no pueden tomarse descansos largos en el patio ni en las áreas de espera. Si necesita un descanso por motivos legales, hable con un encargado del patio.",
        "En caso de incendio, deténgase inmediatamente y apague el motor. Siga las instrucciones de los marshals y diríjase al punto de reunión (consulte el mapa del recinto). No intente abandonar el recinto y espere instrucciones.",
        "Todos los accidentes e incidentes que puedan haber causado daños, y que ocurran en el lugar de trabajo, deben reportarse a un miembro del equipo de gestión de Amazon. Se proporcionan primeros auxilios en el lugar de trabajo.",
        "No se permite la entrada de niños ni animales al recinto. Los segundos conductores deben conocer y seguir todas las normas de seguridad y las instrucciones de los encargados del patio, permanecer en la cabina y solo abandonar el vehículo si lo solicita un empleado de Amazon.",
        "Todos los juegos de llaves de los vehículos estacionados en las bahías deben estar controlados. Siga las instrucciones del encargado del patio.",
        "Cuando no haya ningún sistema de sujeción, el conductor deberá colocar y retirar los calzos para ruedas (los encargados del patio informarán sobre los requisitos del lugar). No retire el dispositivo Lock n Stop.",
        "No intente estacionar ni salir de una plaza de aparcamiento o zona de carga sin autorización previa, ni cuando el semáforo esté en rojo.",
        "Al dejar un remolque en una plaza de aparcamiento o en la puerta de un muelle, el conductor debe accionar el freno de estacionamiento del remolque.",
        "Solo aparque o deje su vehículo en una plaza de aparcamiento o zona de carga cuando esté autorizado para hacerlo y el semáforo esté en verde.",
        "Los conductores deben abrir y cerrar las puertas del remolque, asegurándose de que estén bien cerradas antes de que el vehículo se mueva. Los conductores son responsables de quitar los precintos del remolque usando sus propias herramientas y equipo de protección personal (si es necesario, pueden usarse herramientas de Amazon, bajo la responsabilidad del conductor).",
        "Los conductores deben inspeccionar las cargas para garantizar su seguridad antes de la salida y comunicar cualquier problema a los encargados del patio.",
        "Los calzos para ruedas se utilizan para evitar que los vehículos se desplacen, y deben usarse en todas las actividades de acoplamiento o desacoplamiento, en muelles, plazas de aparcamiento y zonas de preinspección. Colóquelos siempre en la dirección de la pendiente, antes de conectar o desconectar las líneas de aire o bajar una caja móvil. Si hay topes fijos instalados, no es obligatorio usar calzos manuales (la rueda debe apoyarse contra el tope en la dirección de la pendiente). Específico para cajas móviles: ningún conductor debe desmontar la caja móvil sin la supervisión de un miembro del equipo de patio de Amazon; solo el maniobrador del sitio puede colocar una caja móvil directamente en la zona de carga.",
      ],
      footer: "Respete en todo momento las indicaciones y las instrucciones de nuestros encargados del patio. Se pedirá a los conductores que confirmen que comprenden las normas de seguridad del patio y que colaboren en las investigaciones de accidentes cuando se les solicite. Si tiene alguna duda, hable con un encargado del patio, que le ayudará. No se tolerará ningún comportamiento agresivo, abusivo o inseguro."
    }
};
