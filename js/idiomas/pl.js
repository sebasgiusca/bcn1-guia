/* Guia BCN1 - idioma: pl. UI = textos de interfaz; STEP_TEXT = normas de seguridad, pasos del recorrido y del muelle. */

UI.pl = {
    headerTitle: "BCN1 · Przewodnik wjazdu",
    lblDestino: "Wpisz kod, który otrzymałeś na bramie:",
    lblTuCodigo: "Twój kod przejazdu (VR Id):",
    tocaIdioma: "Dotknij swój język, aby zacząć",
    selectPlaceholder: "-- Wybierz swój VR Id --",
    btnVer: "Pokaż moją trasę",
    modoNota: "Tryb testowy: w produkcji ten ekran nie jest widoczny, każda ciężarówka trafia od razu do swojej trasy po zeskanowaniu kodu QR.",
    mapHint: "Przeciągnij, aby przesunąć · uszczypnij lub kółko, aby powiększyć",
    btnAnterior: "◀ Poprzedni etap",
    btnSiguiente: "Następny etap ▶",
    sub: {aculado: "Zadokowałem ▶", dejarT: "Oddaj klucze", dejarD: "Zamknij ciężarówkę i oddaj klucze w miejscu zaznaczonym na mapie. Pieszo zawsze idź przejściem dla pieszych.", entregadas: "Klucze oddane ▶", recogerT: "Odbierz klucze", tengo: "Mam klucze ▶", volverT: "Wróć do ciężarówki", listo: "Gotowy do wyjazdu ▶", atras: "◀ Wstecz", irSala: "Idź do poczekalni", pcEspera: "Czekaj na miejscu pre-check. Gdy dostaniesz miejsce docelowe, ten ekran zmieni się sam.", psSuelto: "Naczepa odpięta ▶", psTractora: "Teraz jedź ciągnikiem do <b>{d}</b>.", psT: "Co teraz?", psSalir: "Wyjeżdżam z terenu ▶", psParking: "Czekam z ciągnikiem ▶", parkingT: "Strefa oczekiwania ciągników", ddTitulo: "Wjedź na rampę", ddCorto: "Rampa", ddDesc: "Wjedź na rampę <b>{d}</b> i zatrzymaj się tam, gdzie wskażą operatorzy.", ddPasos: ["Wyłącz silnik i czekaj w kabinie, aż ktoś do ciebie podejdzie.", "Gdy skończą, wyjedź z terenu bramą południową (V0)."], ddSalir: "Zjedź powoli z rampy i kieruj się do bramy wyjazdowej zgodnie z oznakowaniem.", ddListo: "Zostałem rozładowany ▶", psEnganchado: "Naczepa podpięta ▶", sigEsperaT: "Naczepa odpięta", sigEsperaD: "Czekaj z ciągnikiem tam, gdzie jesteś. Gdy dostaniesz kolejne miejsce, ten ekran zmieni się sam, a telefon zawibruje.", sigRemolque: "Naczepa do odbioru: <b>{t}</b>", sigEngancha: "Podpnij, podłącz przewody i sprawdź, czy naczepa jest dobrze sprzęgnięta, zanim ruszysz."},
    disclaimer: "Demo: przykładowe dane, doki i czasy. Etapy przechodzą ręcznie przyciskami powyżej; w produkcji będą aktualizowane automatycznie na podstawie rzeczywistych danych z bramy, placu i doków.",
    badgeCarril: "Pas",
    alertCodigoNoReconocido: c => `Nierozpoznany kod: ${c}`,
    gateVridLine: v => `Ciężarówka / VRID: ${v}`,
    gateMapCaption: "Orientacyjny plan terenu BCN1.",
    btnAceptarNormas: "Przeczytałem i akceptuję zasady bezpieczeństwa",
    alertSeleccionaCodigo: "Najpierw wybierz kod",
    timerNote: "Przykładowy licznik, w produkcji pochodziłby z rzeczywistego systemu doków.",
    tomYardCargando: pct => `📦 Twoja ciężarówka jest ładowana (~${pct}%)`,
    tomYardEsperando: "🕒 Ładowanie jeszcze się nie zaczęło.",
    tomYardListo: "✅ Twój ładunek jest prawie gotowy.",
    tomYardTerminada: "✅ Ładowanie zakończone. Czekaj w poczekalni, aż zostaniesz wezwany po kluczyki.",
    tomYardLlamada: "🔔 Wzywają cię! Idź do okienka po kluczyki.",
    callTitulo: "🔔 WZYWAJĄ CIĘ!",
    doorChgT: "🔁 ZMIANA RAMPY", doorChgD: "Twój cel się zmienił: wcześniej {a}, teraz {b}. Postępuj zgodnie z nowymi wskazówkami na ekranie.",
    callDesc: "Twój ładunek jest gotowy. Idź do okienka w poczekalni kierowców po kluczyki.",
    callOk: "Rozumiem, idę",
    lockAcredT: "Dostęp niedostępny", lockAcredD: "Ten link działa dopiero po zgłoszeniu się na bramie BCN1. Jeśli już to zrobiłeś, poczekaj chwilę: ekran uaktywni się sam.", lockFinT: "Wizyta zakończona", lockFinD: "Opuściłeś teren obiektu. Dziękujemy za wizytę w BCN1; ten link nie jest już aktywny.", btnSalido: "Opuściłem teren ▶",
    fbTitulo: "Czy ten przewodnik był pomocny?",
    fbCaras: ["Nie", "Średnio", "Tak"],
    fbComentario: "Co byś poprawił? (opcjonalnie)",
    fbEnviar: "Wyślij",
    fbGracias: "Dziękujemy! Twoja opinia pomaga nam się poprawiać.",
    geoTitulo: "Twoja lokalizacja na terenie obiektu",
    geoDesc: "Aby lepiej Cię obsłużyć, prosimy o zgodę na podgląd Twojej lokalizacji wyłącznie podczas pobytu na terenie obiektu. Nie będzie udostępniana nikomu; używana jest tylko w obrębie obiektu.",
    geoOk: "Akceptuję",
    geoNo: "Nie teraz",
    geoOn: "Lokalizacja aktywna na terenie obiektu",
    geoDenied: "Odmówiono dostępu do lokalizacji. Możesz go włączyć w ustawieniach przeglądarki.",
    geoChipIn: "📍 Lokalizacja aktywna tylko na terenie BCN1", geoChipOut: "📍 Poza obiektem: Twoja lokalizacja nie jest zapisywana",
    nav: { izq: "Skręć w lewo", der: "Skręć w prawo", en: "Za {m} metrów {x}", ahora: "Teraz {x}", llegada: "Dotarłeś do {d}", llegadaProx: "Cel: {d}", fuera: "Zjechałeś z trasy: wróć na oznaczony pas", seguir: "Śledź moją pozycję", voz: "Wskazówki głosowe", vozOn: "Wskazówki głosowe włączone" },
    asBtn: "🆘 Pomoc",
    asTitulo: "Potrzebujesz pomocy?",
    asDesc: "Wybierz poziom i, jeśli chcesz, opisz, co się dzieje. Ktoś z zespołu do ciebie przyjdzie.",
    asNiveles: { leve: "Drobna", moderado: "Umiarkowana", urgente: "Pilna" },
    asNivelesDesc: { leve: "Pytanie, bez pośpiechu", moderado: "Potrzebuję pomocy, aby kontynuować", urgente: "Poważny problem lub zagrożenie bezpieczeństwa" },
    asNota: "Opisz, co się dzieje (opcjonalnie)",
    asEnviar: "Poproś o pomoc",
    asCancelar: "Anuluj",
    asEnviado: "Zgłoszenie wysłane. Zostań na miejscu; ktoś do ciebie przyjdzie.",
    asAtendido: "Twoje zgłoszenie zostało obsłużone.",
    salidaPrevista: h => `🕒 Planowany wyjazd: <b>${h}</b>`,
    genericoTitulo: "Twoja operacja w BCN1",
    genericoDesc: "Postępuj zgodnie ze wskazówkami personelu placu. Poniżej zobaczysz status swojej ciężarówki w czasie rzeczywistym.",
    demoOptions: {
      V001: "VR-8841 (bezpośrednio do doku IB113, rozładunek na żywo)",
      V002: "VR-9012 (PRECHECK807 → oczekiwanie TP PS554 → dok OB130, załadunek)",
      V003: "VR-7734 (bezpośrednio do wirtualnej PS502, odstawienie naczepy)",
      V004: "VR-6650 (PRECHECK803 → wymiana PS703 / IB119)"
    }
};

STEP_TEXT.pl = {
    garita: carril => ({
      titulo: "Oczekiwanie na bramie",
      corto: "Brama",
      desc: carril ? `Pas <b>${carril}</b>. Czekaj, aż pracownik cię obsłuży i poda cel.` : `Czekaj, aż pracownik cię obsłuży i poda cel.`
    }),
    precheck: code => ({
      titulo: `W prechecking ${code}`,
      corto: "Prechecking",
      desc: `Czekaj w <b>${code}</b>, aż otrzymasz zgodę na dalszą jazdę.`
    }),
    espera: (code, motivo) => ({
      titulo: `Oczekiwanie w ${code}`,
      corto: `Oczekiwanie ${code}`,
      desc: `${motivo} Czekaj w <b>${code}</b>, aż zostaniesz wezwany, aby kontynuować.`
    }),
    transito: (cod, tipoLocation) => ({
      titulo: `W drodze do ${cod}`,
      corto: `Jedź do ${cod}`,
      desc: `Udaj się do <b>${tipoLocation === 'muelle' ? 'doku' : 'pozycji wirtualnej'} ${cod}</b>.`
    }),
    accionTitulo: {
      descarga_vivo: "Rozładunek na żywo",
      carga_vivo: "Załadunek na żywo",
      soltar: "Odstawienie naczepy",
      recoger: "Podpięcie naczepy"
    },
    pasosDeAccion(accion, ubicacion, altura) {
      switch (accion) {
        case "descarga_vivo":
          return [
            "Podjedź tyłem, zostawiając 4 metry od doku, nie dotykając go, i otwórz drzwi naczepy.",
            `Otwórz drzwi naczepy i ustaw wysokość platformy na <b>${altura}</b>.`,
            "Dokończ dokowanie precyzyjnie i zamknij szyby.",
            "Wyłącz silnik.",
            "Oddaj kluczyki w okienku poczekalni kierowców i czekaj tam, aż zostaniesz wezwany. Pieszo zawsze idź przejściem dla pieszych."
          ];
        case "carga_vivo":
          return [
            "Podjedź tyłem, zostawiając 4 metry od doku, nie dotykając go, i otwórz drzwi naczepy.",
            `Otwórz drzwi naczepy i ustaw wysokość platformy na <b>${altura}</b>.`,
            "Dokończ dokowanie precyzyjnie i zamknij szyby.",
            "Wyłącz silnik.",
            "Oddaj kluczyki w okienku poczekalni kierowców i czekaj tam, aż zostaniesz wezwany. Pieszo zawsze idź przejściem dla pieszych."
          ];
        case "soltar":
          return [
            `Zaparkuj tyłem na oznaczonej pozycji <b>${ubicacion}</b>.`,
            "Przy odpinaniu zostaw zaciągnięty hamulec postojowy naczepy (nie zwalniaj go).",
            "Po odstawieniu naczepy: opuść teren, jeśli nie masz więcej zadań, podpnij to, co ci wskazano, lub jedź do strefy oczekiwania ciągników i oddaj kluczyki."
          ];
        case "recoger":
          return [
            `Udaj się na pozycję <b>${ubicacion}</b>.`,
            "Przed podpięciem sprawdź, czy numer naczepy zgadza się z przydzielonym."
          ];
        default:
          return [];
      }
    },
    fin: (cod, esUltima) => ({
      titulo: `Zakończono w ${cod}`,
      corto: "Zakończono",
      desc: esUltima ? "Postój zakończony. Jedź do wyjazdu." : "Postój zakończony. Postępuj zgodnie z następną wskazówką."
    }),
    salida: () => ({
      titulo: "Wyjazd",
      corto: "Wyjazd",
      desc: "Jedź do bramy wyjazdowej zgodnie z oznakowaniem."
    }),
    motivos: { cargaNoLista: "Twój ładunek nie jest jeszcze gotowy." },
    real: {
      muelle: { titulo: "Podjedź do swojego doku", corto: "Dok",
        intro: "Udaj się do doku przydzielonego na bramie.",
        conPuerta: d => `Twój dok to <b>${d}</b>. Kieruj się oznakowaniem placu do tej bramy.`, badge: "Dok" },
      sala: { titulo: "Czekaj w poczekalni kierowców", corto: "Poczekalnia",
        desc: "Podjechałeś do doku i oddałeś kluczyki. Czekaj w poczekalni kierowców (kantynie), aż ładowanie się zakończy. Wezwiemy cię, gdy będzie gotowe; do tego czasu nie wracaj do doku." },
      llaves: { titulo: "Odbierz kluczyki i wyjedź", corto: "Kluczyki i wyjazd",
        pasos: [
          "Odbierz kluczyki w okienku poczekalni kierowców. Pieszo zawsze idź przejściem dla pieszych.",
          "Wróć do ciężarówki. Dobrze zamknij drzwi naczepy i sprawdź plombę. Pieszo zawsze idź przejściem dla pieszych.",
          "Resztą zajmują się operatorzy Amazon; nie musisz robić nic więcej.",
          "Powoli odjedź od doku i kieruj się oznakowaniem do bramy wyjazdowej."
        ] }
    },
    safety: {
      title: "Zasady bezpieczeństwa na placu",
      header: "Kierowcy muszą ustnie potwierdzić na bramie, że rozumieją i akceptują te zasady, oraz podać swoje dane osobowe. Nieprzestrzeganie tych zasad bezpieczeństwa skutkuje usunięciem z terenu. Zawsze wykonuj polecenia osób odpowiedzialnych za plac.",
      bullets: [
        "Ograniczenie prędkości na terenie wynosi 10 mph, czyli 15 km/h.",
        "Zawsze zaciągaj hamulec ręczny i wyłączaj silnik, gdy pojazd stoi.",
        "Zawsze przestrzegaj oznakowania poziomego i znaków kierunkowych. Zawsze ustępuj pierwszeństwa pojazdom cofającym.",
        "Przed wyjściem z kabiny (np. na plac lub do magazynu) obowiązkowe jest prawidłowe noszenie kamizelek/kurtek odblaskowych i obuwia ochronnego.",
        "Palenie jest zabronione na całym terenie, łącznie z placem, z wyjątkiem wyznaczonych stref dla palących. W razie potrzeby zapytaj o drogę.",
        "Używanie telefonów komórkowych lub urządzeń elektronicznych podczas jazdy jest nielegalne, a więc zabronione.",
        "Zawsze korzystaj z chodników i oznakowanych przejść dla pieszych. Zawsze ustępuj pieszym. Nigdy nie chodź ani nie stój za cofającym pojazdem. Zawsze zachowuj co najmniej 6 metrów odległości od poruszających się pojazdów.",
        "Kierowcy nie mogą robić długich przerw na placu ani w strefach oczekiwania. Jeśli potrzebujesz przerwy z powodów prawnych, porozmawiaj z osobą odpowiedzialną za plac.",
        "W razie pożaru natychmiast się zatrzymaj i wyłącz silnik. Wykonuj polecenia marshalów i udaj się do punktu zbiórki (patrz mapa terenu). Nie próbuj opuszczać terenu i czekaj na instrukcje.",
        "Wszystkie wypadki i zdarzenia w miejscu pracy, które mogły spowodować szkody, należy zgłaszać członkowi zespołu zarządzającego Amazon. Na miejscu udzielana jest pierwsza pomoc.",
        "Na teren nie wolno wprowadzać dzieci ani zwierząt. Drudzy kierowcy muszą znać i przestrzegać wszystkich zasad bezpieczeństwa oraz poleceń osób odpowiedzialnych za plac, pozostawać w kabinie i opuszczać pojazd tylko na prośbę pracownika Amazon.",
        "Wszystkie komplety kluczy pojazdów zaparkowanych na stanowiskach muszą być pod kontrolą. Wykonuj polecenia osoby odpowiedzialnej za plac.",
        "Gdy nie ma systemu blokującego, kierowca musi zakładać i zdejmować kliny pod koła (osoby odpowiedzialne za plac poinformują o wymaganiach na miejscu). Nie usuwaj urządzenia Lock n Stop.",
        "Nie próbuj parkować ani opuszczać miejsca parkingowego lub strefy ładunkowej bez wcześniejszej zgody ani gdy sygnalizator jest czerwony.",
        "Pozostawiając naczepę na miejscu parkingowym lub przy bramie doku, kierowca musi zaciągnąć hamulec postojowy naczepy.",
        "Parkuj lub pozostawiaj pojazd na miejscu parkingowym lub w strefie ładunkowej tylko wtedy, gdy masz na to zgodę, a sygnalizator jest zielony.",
        "Kierowcy muszą otwierać i zamykać drzwi naczepy, upewniając się, że są dobrze zamknięte, zanim pojazd ruszy. Kierowcy są odpowiedzialni za usuwanie plomb naczepy własnymi narzędziami i środkami ochrony indywidualnej (w razie potrzeby można użyć narzędzi Amazon, na odpowiedzialność kierowcy).",
        "Kierowcy muszą sprawdzić ładunek pod kątem bezpieczeństwa przed wyjazdem i zgłaszać wszelkie problemy osobom odpowiedzialnym za plac.",
        "Kliny pod koła zapobiegają przemieszczaniu się pojazdów i muszą być używane przy wszystkich operacjach podpinania lub odpinania, przy dokach, na miejscach parkingowych i w strefach kontroli wstępnej. Zawsze zakładaj je w kierunku spadku, przed podłączeniem lub odłączeniem przewodów powietrza lub opuszczeniem nadwozia wymiennego. Jeśli zainstalowane są stałe odboje, ręczne kliny nie są obowiązkowe (koło musi opierać się o odbój w kierunku spadku). Dotyczy nadwozi wymiennych: żaden kierowca nie może zdejmować nadwozia wymiennego bez nadzoru członka zespołu placu Amazon; tylko operator manewrowy zakładu może ustawić nadwozie wymienne bezpośrednio w strefie ładunkowej.",
      ],
      footer: "Zawsze przestrzegaj wskazówek i poleceń naszych osób odpowiedzialnych za plac. Kierowcy zostaną poproszeni o potwierdzenie, że rozumieją zasady bezpieczeństwa na placu, oraz o współpracę w dochodzeniach powypadkowych, gdy zostaną o to poproszeni. W razie wątpliwości porozmawiaj z osobą odpowiedzialną za plac, która ci pomoże. Agresywne, obelżywe lub niebezpieczne zachowanie nie będzie tolerowane."
    }
};
