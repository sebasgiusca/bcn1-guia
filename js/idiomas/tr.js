/* Guia BCN1 - idioma: tr. UI = textos de interfaz; STEP_TEXT = normas de seguridad, pasos del recorrido y del muelle. */

UI.tr = {
    headerTitle: "BCN1 · Giriş Rehberi",
    lblDestino: "Kapıda sana verilen kodu gir:",
    lblTuCodigo: "Sefer kodun (VR Id):",
    tocaIdioma: "Başlamak için dilinize dokunun",
    selectPlaceholder: "-- VR Id'ni seç --",
    btnVer: "Rotamı göster",
    modoNota: "Test modu: canlı ortamda bu ekran görünmez, her kamyon QR kodunu okutarak doğrudan kendi rotasına ulaşır.",
    mapHint: "Taşımak için sürükle · yakınlaştırmak için iki parmak veya tekerlek",
    btnAnterior: "◀ Önceki aşama",
    btnSiguiente: "Sonraki aşama ▶",
    sub: {aculado: "Rampaya yanaştım ▶", dejarT: "Anahtarları teslim et", dejarD: "Kamyonu kilitle ve anahtarları haritada işaretli noktaya teslim et. Yürürken her zaman yaya geçidini kullan.", entregadas: "Anahtarlar teslim edildi ▶", recogerT: "Anahtarları al", tengo: "Anahtarlar bende ▶", volverT: "Kamyonuna dön", listo: "Çıkışa hazırım ▶", atras: "◀ Geri", irSala: "Bekleme salonuna git", pcEspera: "Ön kontrol alanında bekle. Sana bir hedef verildiğinde bu ekran kendiliğinden değişecek.", psSuelto: "Römork ayrıldı ▶", psTractora: "Şimdi çekiciyle <b>{d}</b> konumuna git.", psT: "Şimdi ne yapıyorsun?", psSalir: "Tesisten çıkıyorum ▶", psParking: "Çekiciyle bekliyorum ▶", parkingT: "Çekici bekleme alanı", ddTitulo: "Rampaya çık", ddCorto: "Rampa", ddDesc: "<b>{d}</b> rampasına çık ve operatörlerin gösterdiği yerde dur.", ddPasos: ["Motoru kapat ve kabinde seninle ilgilenmeye gelmelerini bekle.", "Bitince tesisten güney kapısından (V0) çık."], ddSalir: "Rampadan yavaşça in ve işaretleri izleyerek çıkış kapısına git.", ddListo: "Boşaltıldım ▶", psEnganchado: "Römork bağlandı ▶", sigEsperaT: "Römork ayrıldı", sigEsperaD: "Çekiciyle bulunduğun yerde bekle. Sonraki konumun verildiğinde bu ekran kendiliğinden değişecek ve telefon titreyecek.", sigRemolque: "Alınacak römork: <b>{t}</b>", sigEngancha: "Bağla, hatları tak ve hareket etmeden önce römorkun düzgün bağlandığını kontrol et."},
    disclaimer: "Demo: örnek veriler, rampalar ve süreler. Aşamalar yukarıdaki düğmelerle elle ilerler; canlı ortamda kapı, saha ve rampa verileriyle otomatik güncellenir.",
    badgeCarril: "Şerit",
    alertCodigoNoReconocido: c => `Kod tanınmadı: ${c}`,
    gateVridLine: v => `Kamyon / VRID: ${v}`,
    gateMapCaption: "BCN1 tesisinin yol gösterici planı.",
    btnAceptarNormas: "Güvenlik kurallarını okudum ve kabul ediyorum",
    alertSeleccionaCodigo: "Önce bir kod seç",
    timerNote: "Örnek sayaç; canlı ortamda gerçek rampa sisteminden gelir.",
    tomYardCargando: pct => `📦 Kamyonun yükleniyor (~%${pct})`,
    tomYardEsperando: "🕒 Yükleme henüz başlamadı.",
    tomYardListo: "✅ Yükün neredeyse tamamlandı.",
    tomYardTerminada: "✅ Yükleme bitti. Anahtarları almak için çağrılana kadar salonda bekle.",
    tomYardLlamada: "🔔 Seni çağırıyorlar! Anahtarlar için gişeye git.",
    callTitulo: "🔔 SENİ ÇAĞIRIYORLAR!",
    doorChgT: "🔁 RAMPA DEĞİŞTİ", doorChgD: "Hedefin değişti: önce {a}, şimdi {b}. Ekrandaki yeni talimatları izle.",
    callDesc: "Yükün hazır. Anahtarlarını almak için sürücü salonundaki gişeye git.",
    callOk: "Anladım, geliyorum",
    lockAcredT: "Erişim yok", lockAcredD: "Bu bağlantı yalnızca BCN1 kapısında kayıt yaptırdıktan sonra çalışır. Yaptırdıysan biraz bekle: ekran kendiliğinden açılacak.", lockFinT: "Ziyaret tamamlandı", lockFinD: "Tesisten çıktın. BCN1'i ziyaret ettiğin için teşekkürler; bu bağlantı artık etkin değil.", btnSalido: "Tesisten çıktım ▶",
    fbTitulo: "Bu rehber işine yaradı mı?",
    fbCaras: ["Hayır", "Biraz", "Evet"],
    fbComentario: "Neyi iyileştirirdin? (isteğe bağlı)",
    fbEnviar: "Gönder",
    fbGracias: "Teşekkürler! Görüşün gelişmemize yardımcı oluyor.",
    geoTitulo: "Tesis içindeki konumunuz",
    geoDesc: "Daha iyi hizmet için, yalnızca tesis içindeyken konumunuzu görme izni istiyoruz. Kimseyle paylaşılmayacak; sadece tesis alanı içindeyken kullanılır.",
    geoOk: "Kabul et",
    geoNo: "Şimdi değil",
    geoOn: "Tesis içinde konum etkin",
    geoDenied: "Konum izni reddedildi. Tarayıcı ayarlarından etkinleştirebilirsiniz.",
    geoChipIn: "📍 Konum yalnızca BCN1 içinde etkin", geoChipOut: "📍 Tesis dışında: konumun kaydedilmiyor",
    nav: { izq: "Sola dön", der: "Sağa dön", en: "{m} metre sonra {x}", ahora: "Şimdi {x}", llegada: "{d} noktasına ulaştın", llegadaProx: "Hedef: {d}", fuera: "Rotadan çıktın: işaretli şeride geri dön", seguir: "Konumumu takip et", voz: "Sesli yönlendirme", vozOn: "Sesli yönlendirme açık" },
    asBtn: "🆘 Yardım",
    asTitulo: "Yardıma ihtiyacın var mı?",
    asDesc: "Seviyeyi seç ve istersen ne olduğunu anlat. Ekipten biri yanına gelecek.",
    asNiveles: { leve: "Hafif", moderado: "Orta", urgente: "Acil" },
    asNivelesDesc: { leve: "Bir soru, acelesi yok", moderado: "Devam etmek için yardım gerekiyor", urgente: "Ciddi sorun veya güvenlik sorunu" },
    asNota: "Ne olduğunu anlat (isteğe bağlı)",
    asEnviar: "Yardım iste",
    asCancelar: "İptal",
    asEnviado: "Bildirim gönderildi. Olduğun yerde kal; biri yanına gelecek.",
    asAtendido: "Bildirimin işleme alındı.",
    salidaPrevista: h => `🕒 Planlanan çıkış: <b>${h}</b>`,
    genericoTitulo: "BCN1'deki operasyonun",
    genericoDesc: "Saha personelinin talimatlarına uy. Aşağıda kamyonunun durumunu gerçek zamanlı göreceksin.",
    demoOptions: {
      V001: "VR-8841 (doğrudan IB113 rampasına, canlı boşaltma)",
      V002: "VR-9012 (PRECHECK807 → TP PS554'te bekleme → OB130 rampası, yükleme)",
      V003: "VR-7734 (doğrudan sanal PS502'ye, dorse bırakma)",
      V004: "VR-6650 (PRECHECK803 → değişim PS703 / IB119)"
    }
};

STEP_TEXT.tr = {
    garita: carril => ({
      titulo: "Kapıda bekleme",
      corto: "Kapı",
      desc: carril ? `Şerit <b>${carril}</b>. Bir görevlinin seni karşılayıp hedefini vermesini bekle.` : `Bir görevlinin seni karşılayıp hedefini vermesini bekle.`
    }),
    precheck: code => ({
      titulo: `Ön kontrolde ${code}`,
      corto: "Ön kontrol",
      desc: `İlerlemene izin verilene kadar <b>${code}</b>'de bekle.`
    }),
    espera: (code, motivo) => ({
      titulo: `${code}'de bekleniyor`,
      corto: `Bekleme ${code}`,
      desc: `${motivo} Devam etmen için haber verilene kadar <b>${code}</b>'de bekle.`
    }),
    transito: (cod, tipoLocation) => ({
      titulo: `${cod}'e gidiliyor`,
      corto: `${cod}'e git`,
      desc: `<b>${cod} ${tipoLocation === 'muelle' ? 'rampasına' : 'sanal konumuna'}</b> git.`
    }),
    accionTitulo: {
      descarga_vivo: "Canlı boşaltma",
      carga_vivo: "Canlı yükleme",
      soltar: "Dorse bırakma",
      recoger: "Dorse alma"
    },
    pasosDeAccion(accion, ubicacion, altura) {
      switch (accion) {
        case "descarga_vivo":
          return [
            "Rampaya dokunmadan, 4 metre boşluk bırakarak geri yanaş ve dorse kapılarını aç.",
            `Dorse kapılarını aç ve platform yüksekliğini <b>${altura}</b> olarak ayarla.`,
            "Yanaşmayı hassas şekilde tamamla ve camları kapat.",
            "Motoru kapat.",
            "Anahtarları sürücü salonundaki gişeye teslim et ve çağrılana kadar orada bekle. Yürürken her zaman yaya geçidini kullan."
          ];
        case "carga_vivo":
          return [
            "Rampaya dokunmadan, 4 metre boşluk bırakarak geri yanaş ve dorse kapılarını aç.",
            `Dorse kapılarını aç ve platform yüksekliğini <b>${altura}</b> olarak ayarla.`,
            "Yanaşmayı hassas şekilde tamamla ve camları kapat.",
            "Motoru kapat.",
            "Anahtarları sürücü salonundaki gişeye teslim et ve çağrılana kadar orada bekle. Yürürken her zaman yaya geçidini kullan."
          ];
        case "soltar":
          return [
            `İşaretli <b>${ubicacion}</b> konumuna geri geri park et.`,
            "Ayırırken dorsenin el frenini çekili bırak (çözme).",
            "Dorse ayrıldıktan sonra: başka işin yoksa tesisten çık, sana söyleneni bağla veya çekici bekleme alanına gidip anahtarları teslim et."
          ];
        case "recoger":
          return [
            `<b>${ubicacion}</b> konumuna git.`,
            "Bağlamadan önce dorse numarasının sana atananla aynı olduğunu kontrol et."
          ];
        default:
          return [];
      }
    },
    fin: (cod, esUltima) => ({
      titulo: `${cod}'de tamamlandı`,
      corto: "Tamamlandı",
      desc: esUltima ? "Durak bitti. Çıkışa git." : "Durak bitti. Sonraki talimata devam et."
    }),
    salida: () => ({
      titulo: "Çıkış",
      corto: "Çıkış",
      desc: "Tabelaları izleyerek çıkış kapısına git."
    }),
    motivos: { cargaNoLista: "Yükün henüz başlamaya hazır değil." },
    real: {
      muelle: { titulo: "Rampana yanaş", corto: "Rampa",
        intro: "Kapıda sana atanan rampaya git.",
        conPuerta: d => `Rampan <b>${d}</b>. Sahadaki tabelaları izleyerek o kapıya git.`, badge: "Rampa" },
      sala: { titulo: "Sürücü salonunda bekle", corto: "Bekleme salonu",
        desc: "Yanaştın ve anahtarları teslim ettin. Yükleme bitene kadar sürücü salonunda (kantin) bekle. Hazır olunca seni çağıracağız; o zamana kadar rampaya dönme." },
      llaves: { titulo: "Anahtarları al ve çık", corto: "Anahtarlar ve çıkış",
        pasos: [
          "Anahtarları sürücü salonundaki gişeden al. Yürürken her zaman yaya geçidini kullan.",
          "Kamyonuna dön. Dorse kapılarını iyice kapat ve mührü kontrol et. Yürürken her zaman yaya geçidini kullan.",
          "Geri kalan her şeyi Amazon operatörleri halleder; başka bir şey yapman gerekmez.",
          "Rampadan yavaşça ayrıl ve tabelaları izleyerek çıkış kapısına git."
        ] }
    },
    safety: {
      title: "Saha Güvenlik Kuralları",
      header: "Sürücüler bu kuralları anladıklarını ve kabul ettiklerini kapıda sözlü olarak onaylamalı ve kişisel bilgilerini vermelidir. Bu güvenlik kurallarına uyulmaması tesisten çıkarılmaya yol açar. Her zaman saha sorumlularının talimatlarına uyun.",
      bullets: [
        "Tesis içinde hız sınırı 10 mph yani 15 km/s'dir.",
        "Araç dururken her zaman el frenini çekin ve motoru kapatın.",
        "Yer işaretlerine ve yön tabelalarına her zaman uyun. Geri manevra yapan araçlara her zaman yol verin.",
        "Kabinden inmeden önce (örneğin sahada veya depoda) yüksek görünürlüklü yelek/ceket ve güvenlik ayakkabısı giymek zorunludur ve doğru kullanılmalıdır.",
        "Saha dahil tüm tesiste, belirlenmiş sigara alanları dışında sigara içmek yasaktır. Gerekirse yol tarifi isteyin.",
        "Sürüş sırasında cep telefonu veya elektronik cihaz kullanmak yasa dışıdır ve dolayısıyla yasaktır.",
        "Her zaman kaldırımları ve işaretli yaya geçitlerini kullanın. Yayalara her zaman yol verin. Geri manevra yapan bir aracın arkasında asla yürümeyin veya durmayın. Hareket eden araçlarla her zaman en az 6 metre mesafe bırakın.",
        "Sürücüler sahada veya bekleme alanlarında uzun mola veremez. Yasal nedenlerle mola gerekiyorsa bir saha sorumlusuyla konuşun.",
        "Yangın durumunda hemen durun ve motoru kapatın. Marshal'ların talimatlarına uyun ve toplanma noktasına gidin (tesis haritasına bakın). Tesisi terk etmeye çalışmayın ve talimat bekleyin.",
        "İş yerinde meydana gelen ve hasara yol açabilecek tüm kazalar ve olaylar Amazon yönetim ekibinden birine bildirilmelidir. İş yerinde ilk yardım sağlanır.",
        "Tesise çocuk ve hayvan girişi yasaktır. İkinci sürücüler tüm güvenlik kurallarını ve saha sorumlularının talimatlarını bilmeli ve uymalı, kabinde kalmalı ve aracı yalnızca bir Amazon çalışanı isterse terk etmelidir.",
        "Park yerlerinde duran araçların tüm anahtar takımları kontrol altında olmalıdır. Saha sorumlusunun talimatlarına uyun.",
        "Sabitleme sistemi olmayan yerlerde sürücü tekerlek takozlarını yerleştirmeli ve kaldırmalıdır (saha sorumluları yerel gereklilikleri bildirir). Lock n Stop cihazını çıkarmayın.",
        "Önceden izin almadan veya ışık kırmızıyken bir park yerine veya yükleme alanına park etmeye ya da buradan çıkmaya çalışmayın.",
        "Bir dorseyi park yerine veya rampa kapısına bırakırken sürücü dorsenin park frenini devreye almalıdır.",
        "Aracınızı yalnızca yetkiniz varsa ve ışık yeşilse bir park yerine veya yükleme alanına park edin veya bırakın.",
        "Sürücüler dorse kapılarını açıp kapatmalı ve araç hareket etmeden önce iyice kapalı olduklarından emin olmalıdır. Sürücüler dorse mühürlerini kendi aletleri ve kişisel koruyucu donanımlarıyla sökmekten sorumludur (gerekirse Amazon aletleri, sürücünün sorumluluğunda kullanılabilir).",
        "Sürücüler çıkıştan önce yükün güvenliğini kontrol etmeli ve her türlü sorunu saha sorumlularına bildirmelidir.",
        "Tekerlek takozları araçların kaymasını önlemek için kullanılır ve rampalarda, park yerlerinde ve ön kontrol alanlarında tüm bağlama veya ayırma işlemlerinde kullanılmalıdır. Hava hatlarını bağlamadan veya ayırmadan ya da bir swap body indirmeden önce her zaman eğim yönünde yerleştirin. Sabit durdurucular varsa elle takoz zorunlu değildir (tekerlek eğim yönünde durdurucuya dayanmalıdır). Swap body'lere özel: hiçbir sürücü Amazon saha ekibinden birinin gözetimi olmadan swap body indiremez; yalnızca tesisin manevracısı bir swap body'yi doğrudan yükleme alanına yerleştirebilir.",
      ],
      footer: "Saha sorumlularımızın yönlendirme ve talimatlarına her zaman uyun. Sürücülerden saha güvenlik kurallarını anladıklarını onaylamaları ve istendiğinde kaza soruşturmalarına iş birliği yapmaları istenecektir. Sorunuz varsa bir saha sorumlusuyla konuşun, size yardımcı olacaktır. Saldırgan, hakaret içeren veya güvensiz hiçbir davranışa müsamaha gösterilmez."
    }
};
