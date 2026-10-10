export interface RegulationArticle {
  id: string;
  code: string;
  title: string;
  summary: string;
  technicalDetails: string[];
  allplanSolution: string;
  riskIfIgnored: string;
}

export interface SoftwareFeatureMetric {
  pillar: string;
  title: string;
  allplan: {
    status: 'perfect' | 'warning' | 'fail';
    badge: string;
    description: string;
    technicalNote: string;
  };
  revit: {
    status: 'perfect' | 'warning' | 'fail';
    badge: string;
    description: string;
    technicalNote: string;
  };
  archicad: {
    status: 'perfect' | 'warning' | 'fail';
    badge: string;
    description: string;
    technicalNote: string;
  };
}

export interface TimeSavingTask {
  category: string;
  allplanHours: number;
  traditionalHours: number;
  description: string;
  impactLevel: 'Kritik' | 'Yüksek' | 'Orta';
}

// Regulatory Timeline Milestones
export const REGULATORY_MILESTONES = [
  {
    date: '1 Eylül 2027',
    badge: 'Aşama 1: 2B Dijital Onay',
    title: 'Tüm Türkiye\'de PDF/A Zorunluluğu',
    description: 'Tüm ölçekteki mimari ve mühendislik projelerinin 2B paftaları A4 katları standartlarında, 3B modelden türetilmiş PDF/A formatında e-PYS sistemine yüklenecektir.',
    scope: 'Tüm Türkiye - Bütün Yapılar',
    activePhase: true
  },
  {
    date: '1 Eylül 2029',
    badge: 'Aşama 2: Türkiye Geneli Metropol & Büyükşehir Eşiği',
    title: '3B IFC / openBIM Zorunluluğu (Büyükşehir Odaklı)',
    description: 'Nüfusu 2.000.000\'u geçen illerin (İstanbul, Ankara, İzmir, Bursa, Antalya, Konya vb.) nüfusu 600.000\'den fazla olan büyük ilçelerinde inşaat alanı 10.000 m²\'yi geçen binalar için 3B IFC4/IFC4.3 teslimi zorunludur.',
    scope: 'Türkiye Geneli Metropoller (&gt;10.000 m²)',
    activePhase: true,
    highlight: true
  },
  {
    date: '1 Eylül 2032',
    badge: 'Aşama 3: Kademeli Genişleme',
    title: 'Tüm Büyükşehirlerde Genel IFC Zorunluluğu',
    description: 'Büyükşehir belediyelerinde 2.000 m² üzerindeki tüm yapılar için 3B IFC ve bSDD veri sözlüğü uyumlu teslim şartı devreye girecektir.',
    scope: 'Tüm Büyükşehirler (&gt;2.000 m²)',
    activePhase: false
  },
  {
    date: '1 Eylül 2033',
    badge: 'Aşama 4: %100 Dijital İmar Rejimi',
    title: 'Tüm Türkiye\'de Genel openBIM Standartlaşması',
    description: 'Ölçek bağımsız tüm yapı ruhsatı ve imar onay süreçleri otonom e-PYS Model Kalite Kontrol (Ek-9) algoritması üzerinden onaylanacaktır.',
    scope: 'Tüm Türkiye - Bütün Yapılar',
    activePhase: false
  }
];

// e-PYS Regulation Breakdown (Ek-1 to Ek-9 + Madde 12)
export const EPYS_ARTICLES: RegulationArticle[] = [
  {
    id: 'madde-12',
    code: 'Madde 12 / Ek-12',
    title: '15 Karakter Malzeme ve Obje İsimlendirme Sınırı',
    summary: 'BIM modelinde yer alan tüm malzeme, kompozit katman ve aile isimleri maksimum 15 karakter olmak zorundadır.',
    technicalDetails: [
      'Geleneksel "Seramik_Yer_Kaplamasi_60x60" (27 karakter) gibi uzun isimler kesinlikle yasaktır.',
      'Sistem filtresinden geçebilmek için standart akıllı kısaltmalar (örn: Seramik_Yer_60) kullanılmalıdır.',
      'Aksi halde Ek-9 otonom doğrulama kapısında proje sistem tarafından anında reddedilir.'
    ],
    allplanSolution: 'ALLPLAN ve ALUPLAN e-PYS yerel kütüphaneleri, tüm malzeme ve kompozit yapıları önceden 15 karaktere sığacak şekilde kodlanmış olarak sunar.',
    riskIfIgnored: 'Projenin Ek-9 Kalite Kontrolünden geçemeyip ruhsat sürecinin durması.'
  },
  {
    id: 'ek-1',
    code: 'Ek-1',
    title: 'Proje Kodlama ve Meta-Veri Standardı',
    summary: 'Ruhsat başvurusuna ait proje ana kimliğinin algoritmik dize şemasına göre oluşturulması.',
    technicalDetails: [
      'Format: YIL_IL_ILCE_MAHALLE_ADA_PARSEL_DURUM',
      'Örnek: 2026_34_0150_012345_000123_000045_YO (34=İstanbul, 06=Ankara vb.)',
      'Tüm alt disiplin belgeleri bu ana proje kimliğine bağlanmak zorundadır.'
    ],
    allplanSolution: 'ALLPLAN Proje Yöneticisi, e-PYS meta-veri yapısını otomatik olarak proje niteliklerine bağlar.',
    riskIfIgnored: 'Dosya arşivleme ve parsel eşleşme hatası nedeniyle ruhsat başvuru iptali.'
  },
  {
    id: 'ek-2',
    code: 'Ek-2',
    title: 'Disiplin ve Dosya İsimlendirme Standardı',
    summary: 'Disiplin, alt disiplin, dosya türü ve kat bilgilerini içeren katı isimlendirme kuralı.',
    technicalDetails: [
      'Disiplin Kodları: MM (Mimari), ST (Statik), EE (Elektrik), ME (Mekanik).',
      'Öge Kodları: DUVA (Duvar), SAPP (Döşeme), KPKN (Kapı Kanadı).',
      'Örnek Dosya Adı: MM-DUVA-CP-K01-01.pdf veya MM-MODEL-MD-3D.ifc'
    ],
    allplanSolution: 'ALLPLAN Layout & Batch Exporter, paftaları ve IFC modellerini Ek-2 dizilimine göre otomatik adlandırarak dışa aktarır.',
    riskIfIgnored: 'Otonom sunucu tarafından dosyanın okunamaması.'
  },
  {
    id: 'ek-3',
    code: 'Ek-3',
    title: 'Mahal (IfcSpace) ve Mekansal Kodlama',
    summary: 'Mahal numaraları, kat, fonksiyon ve 3 harfli standart Türkçe alan kısaltmalarını içermelidir.',
    technicalDetails: [
      'Format: Kat-Fonksiyon-SıraNo (Örn: K01-OFS-01)',
      'Zorunlu 3 Harfli Kısaltmalar: ACM (Açık Mutfak), ASH (Asansör Holü), CPO (Çöp Odası), BNY (Banyo).',
      'Emsal hesapları net ve brüt alan Pset niteliklerine tam uyumlu işlenmelidir.'
    ],
    allplanSolution: 'ALLPLAN Mahal (Room) arayüzü, e-PYS kısaltma sözlüğünü yerleşik olarak barındırır ve net/brüt alanları otomatik Pset\'e dönüştürür.',
    riskIfIgnored: 'Emsal ve yapı denetim brüt alan uyumsuzluğu sebebiyle idari ceza.'
  },
  {
    id: 'ek-5',
    code: 'Ek-5',
    title: 'IFC Kategori ve Eleman Sınıflandırması',
    summary: 'Yapı elemanlarının TS EN ISO 16739-1 uyarınca Türkçe IFC kategorilerine eşlenmesi.',
    technicalDetails: [
      'Disiplin-KategoriKodu-Açıklama (Örn: MM-DVR-Tugla20)',
      'DVR = IfcWall (Duvar), DSM = IfcSlab (Döşeme), MHL = IfcSpace (Mahal), KAP = IfcDoor (Kapı).',
      'IfcBuildingElementProxy kullanımına kesinlikle izin verilmez.'
    ],
    allplanSolution: 'ALLPLAN objeleri doğrudan ISO 16739-1 açık BIM nesne yapısına sahiptir; proxy eleman oluşturmaz.',
    riskIfIgnored: 'Sınıflandırılamayan objeler yüzünden modelin otomasyondan geçememesi.'
  },
  {
    id: 'ek-6',
    code: 'Ek-6',
    title: 'Pset (Property Sets) ve bSDD / IDS Standartları',
    summary: 'Her IFC sınıfı için zorunlu ("Z") ve isteğe bağlı ("O") özellik setlerinin doldurulması.',
    technicalDetails: [
      'Örnek: IfcWall için Pset_WallCommon (LoadBearing, FireRating).',
      'Örnek: Mechanical için Pset_DamperTypeCommon veya Pset_SpaceHeaterTypeCommon.',
      'bSDD (buildingSMART Data Dictionary) ve IDS (Information Delivery Specification) ile makine tarafından doğrulanabilirlik.'
    ],
    allplanSolution: 'ALLPLAN 2026, native bSDD & IDS desteğiyle e-PYS Pset verilerini doğrudan model nesnesine entegre eder.',
    riskIfIgnored: 'Açık parametre eksikliği nedeniyle otomatik kalite denetiminden kalma.'
  },
  {
    id: 'ek-9',
    code: 'Ek-9',
    title: 'Model Kalite Kontrol ve Otonom Onay Kapısı',
    summary: 'Modelin 2B paftalarla tutarlılığının, çakışmalarının ve veri eksiksizliğinin algoritmik denetimi.',
    technicalDetails: [
      '2B PDF/A paftaları ile 3B IFC modeli arasında %100 geometrik ve veri tutarlılığı şarttır.',
      'Otomatik çakışma (clash) ve kural doğrulama motoru çalıştırılır.',
      'Başarılı geçen modellere e-PYS Dijital Ruhsat Barkodu atanır.'
    ],
    allplanSolution: 'ALLPLAN "Single Workflow" mimarisi ile 3B modelden türetilen 2B pafta ve IFC arasında %100 eşzamanlı tutarlılık garanti edilir.',
    riskIfIgnored: 'Ruhsat başvurusunun sistem tarafından otomatik olarak reddedilmesi.'
  }
];

// Software Comparison Matrix
export const SOFTWARE_COMPARISON: SoftwareFeatureMetric[] = [
  {
    pillar: 'Pset & bSDD Uyum Mantığı',
    title: 'Özellik Seti (Pset) ve IDS Entegrasyonu',
    allplan: {
      status: 'perfect',
      badge: '%100 Native / Otonom',
      description: 'ALLPLAN 2026, bSDD ve IDS protokollerini doğrudan çekirdeğinde çalıştırır. e-PYS Pset tanımları yerel olarak yüklenir.',
      technicalNote: 'Tek tıkla bSDD sözlüğü ile nesneler otomatik eşleşir. Kodlama yazmaya gerek kalmaz.'
    },
    revit: {
      status: 'warning',
      badge: 'Zorlu TXT / Script',
      description: 'Revit kullanıcıları DefaultUserDefinedParameterSets.txt metin dosyasını manuel yazmak veya Dynamo script yazmak zorundadır.',
      technicalNote: 'TXT dosyasındaki ufak bir sekme/syntax hatası Pset dışa aktarımını bozar ve projeyi reddettirir.'
    },
    archicad: {
      status: 'warning',
      badge: 'Manuel Translator',
      description: 'Gelişmiş IFC Çeviricilere sahiptir ancak e-PYS Pset matrisi için yoğun manuel Property Mapping gerektirir.',
      technicalNote: 'Her proje için detaylı çevirici konfigürasyonu yapılması zorunludur.'
    }
  },
  {
    pillar: 'Mahal & İnce Yapı (IfcCovering)',
    title: 'Otonom 3B İnce Yapı ve Metraj Üretimi',
    allplan: {
      status: 'perfect',
      badge: 'Otonom IfcCovering',
      description: 'Mimar sadece Mahal niteliğine kaplama yazar (Seramik, Sıva vb.). ALLPLAN IFC export sırasında otonom 3B IfcCovering üretir!',
      technicalNote: 'Fiziki 2 cm duvar çizimini bitirir. Model hafif kalır, net/brüt metraj %100 hatasız Pset\'e işlenir.'
    },
    revit: {
      status: 'fail',
      badge: 'Manuel 2cm Çizim Mecburiyeti',
      description: 'Revit odaları (Room) sadece sanal hacimdir. 3B IfcCovering için mimar HER odaya fiziki 2 cm ek duvar/zemin çizmek ZORUNDADIR.',
      technicalNote: 'Model boyutunu devasa şişirir, revizyonlarda kaplamalar patlar ve haftalarca iş gücü kaybettirir.'
    },
    archicad: {
      status: 'warning',
      badge: 'Yarı-Otomatik / Karmaşık',
      description: 'Kompozit yapılar veya eklentiler (Add-on) yardımıyla yönetilebilir ancak detaylı kurgu gerektirir.',
      technicalNote: 'Emsal ve net/brüt alan detaylandırmalarında manuel kontroller gerekir.'
    }
  },
  {
    pillar: 'Yerel Mevzuat & 15-Karakter Sınırı',
    title: 'e-PYS Türkiye Lokalizasyon Desteği',
    allplan: {
      status: 'perfect',
      badge: 'ALUPLAN e-PYS Şablonları',
      description: 'Türkiye distribütörü ALUPLAN, 15 karakter sınırlı hazır kütüphaneler, katman ağaçları ve e-PYS proje şablonları sunar.',
      technicalNote: 'Hazır şablonlarla doğrudan mevzuata uygun çizim yapılır.'
    },
    revit: {
      status: 'fail',
      badge: 'Sıfır Yerel Şablon',
      description: 'Autodesk standart kütüphaneleri e-PYS kurallarını tanımaz. Tüm Family isimleri ve malzemeler 15 karaktere manuel uydurulmalıdır.',
      technicalNote: 'Ofislerin tam zamanlı BIM Yöneticisi istihdam ederek kütüphane revize etmesi şarttır.'
    },
    archicad: {
      status: 'warning',
      badge: 'Kısmi TR Desteği',
      description: 'TR Versiyonu mevcuttur ancak e-PYS\'ye özgü aşırı spesifik kodlamalar için ofis içi şablon geliştirme gerekir.',
      technicalNote: 'Ek-1\'den Ek-9\'a kadar olan kurallar için özel nitelik kütüphanesi oluşturulmalıdır.'
    }
  },
  {
    pillar: 'Çıktı & Tutarlılık (PDF/A + IFC)',
    title: 'Tek İş Akışı (Single Workflow) ve Çıktı Güvenilirliği',
    allplan: {
      status: 'perfect',
      badge: 'Anında Batch Export',
      description: '3B model ile 2B pafta dökümantasyonu eşzamanlı bağlıdır. Tek tıkla A4 katları PDF/A ve IFC4 tutarlı olarak üretilir.',
      technicalNote: '2B pafta ile 3B model arasında %0 uyumsuzluk riski.'
    },
    revit: {
      status: 'warning',
      badge: 'Hantal Export / Uyumsuzluk',
      description: 'Büyük projelerde IFC export hantal çalışır. Pafta isimleri ve IFC model versiyonları arasında kopukluk riski yüksektir.',
      technicalNote: 'Ek-9 tutarlılık kontrollerinde sıkça revizyon hatası üretir.'
    },
    archicad: {
      status: 'perfect',
      badge: 'Güçlü Publisher',
      description: 'Archicad Publisher modülü ile başarılı PDF/A ve IFC çıktıları alınabilir.',
      technicalNote: 'İsimlendirme kurallarının e-PYS Ek-2 standartlarına önceden ayarlanması gerekir.'
    }
  }
];

// Operational Time Savings Data (Adam/Saat)
export const TIME_SAVING_TASKS: TimeSavingTask[] = [
  {
    category: 'Kurulum & İsimlendirme (15-Karakter, Katman, Dosya Formatı)',
    allplanHours: 4,
    traditionalHours: 45,
    description: 'ALUPLAN e-PYS hazır şablonları ile tüm katmanlar, kütüphaneler ve 15 karakter sınırlı malzemeler anında yüklenir.',
    impactLevel: 'Kritik'
  },
  {
    category: 'Pset & bSDD Parametre Eşleştirmesi (Mapping)',
    allplanHours: 3,
    traditionalHours: 28,
    description: 'ALLPLAN 2026 native IDS/bSDD aktarımı ile otonom Pset eşleşmesi sağlanır; TXT/Dynamo kodlaması gerekmez.',
    impactLevel: 'Kritik'
  },
  {
    category: 'İnce Yapı (IfcCovering) Modellemesi ve Metraj',
    allplanHours: 12,
    traditionalHours: 90,
    description: 'Mahal niteliklerinden otonom 3B IFC üretilir. Her odaya fiziki 2 cm duvar çizme hantallığı ortadan kalkar.',
    impactLevel: 'Kritik'
  },
  {
    category: 'PDF/A & IFC Dışa Aktarım (Export) Doğrulaması',
    allplanHours: 4,
    traditionalHours: 22,
    description: 'Tek iş akışı (Single Workflow) batch export ile 2B pafta ve 3B IFC tutarlı biçimde tek hamlede üretilir.',
    impactLevel: 'Yüksek'
  }
];
