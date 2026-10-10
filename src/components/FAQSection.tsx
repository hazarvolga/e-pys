import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'mevzuat' | 'teknik' | 'allplan';
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'mevzuat' | 'teknik' | 'allplan'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const faqs: FAQItem[] = [
    {
      category: 'mevzuat',
      question: 'e-PYS yönetmeliği nedir ve hangi tarihlerde yürürlüğe girecektir?',
      answer: 'T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı tarafından yayımlanan yönetmelik, mimari ve mühendislik projelerinin dijital olarak hazırlanmasını ve onaylanmasını zorunlu kılar. 1 Eylül 2027 itibarıyla tüm Türkiye\'de 2B paftaların PDF/A formatında teslimi, 1 Eylül 2029 itibarıyla ise nüfusu 2 milyonu aşan metropollerde 10.000 m² üzeri yapılar için 3B IFC formatında openBIM teslim zorunluluğu başlayacaktır.'
    },
    {
      category: 'teknik',
      question: 'Madde 12 / Ek-12 uyarınca 15 karakter sınırlaması neleri kapsar?',
      answer: 'BIM modelinde yer alan tüm malzeme, kompozit katman ve aile tanımlarının maksimum 15 karakter olması şarttır. Örneğin "Seramik_Yer_Kaplamasi_60x60" gibi 27 karakterlik isimler Ek-9 otonom model denetim sisteminde hata vererek projenin reddedilmesine yol açar. "Seramik_Yer_60" veya "Beton_C30_37" gibi 15 karaktere sığdırılmış kısaltmalar kullanılmalıdır.'
    },
    {
      category: 'teknik',
      question: 'bSDD (buildingSMART Data Dictionary) ve IDS nedir, e-PYS için neden gereklidir?',
      answer: 'bSDD, yapı nesnelerinin ve parametrelerinin uluslararası ölçekte bilgisayarlar tarafından algılanabilir (machine-readable) biçimde tanımlandığı bulut tabanlı bir veri sözlüğüdür. IDS (Information Delivery Specification) ise hangi elemanın hangi parametreyi taşıması gerektiğini belirleyen şartnamedir. e-PYS otomasyonu, projenizi doğrudan bSDD ve IDS protokolleri üzerinden algoritmik olarak denetler.'
    },
    {
      category: 'allplan',
      question: 'ALLPLAN, ince yapı kaplamalarında (IfcCovering) rakiplerine kıyasla nasıl bir avantaj sağlar?',
      answer: 'Geleneksel yazılımlarda (örn. Revit) 3B IFC modelde kaplamaların (seramik, alçı sıva, asma tavan) görünmesi için mimarın her odanın iç yüzeyine fiziki olarak 2 cm kalınlığında ek duvar/zemin çizmesi gerekir. ALLPLAN\'de ise mimar sadece Mahal (IfcSpace) niteliklerine kaplama malzemesini yazar. ALLPLAN, IFC Export anında otonom olarak 3B IfcCovering objelerini kendisi üretir. Bu sayede model %80 hafif kalır ve manuel çizim iş yükü ortadan kalkar.'
    },
    {
      category: 'allplan',
      question: 'ALLPLAN 2026 bSDD ve IDS entegrasyonu nasıl çalışır?',
      answer: 'ALLPLAN 2026, buildingSMART bSDD ve IDS standartlarını native (doğrudan) olarak destekler. e-PYS\'nin talep ettiği Özellik Setleri (Pset_WallCommon, Pset_SpaceCommon vb.) doğrudan ALLPLAN arayüzünden bSDD sözlüğüne bağlanır ve nesneler otonom olarak doğru IFC sınıflarına eşlenir.'
    },
    {
      category: 'mevzuat',
      question: '2B PDF/A paftaları ile 3B IFC modeli arasında tutarsızlık olursa ne olur?',
      answer: 'Yönetmeliğin Ek-9 maddesi gereğince, 2B onay paftaları ile 3B IFC modeli arasında %100 geometri ve veri tutarlılığı şarttır. ALLPLAN "Single Workflow" (Tek İş Akışı) mimarisi kullandığı için, 3B modelde yapılan bir değişiklik 2B PDF/A paftalara ve IFC dosyasına eşzamanlı yansır ve tutarsızlık riski sıfıra indirilir.'
    },
    {
      category: 'allplan',
      question: 'ALUPLAN Türkiye tasarım ofislerine e-PYS sürecinde nasıl destek sağlıyor?',
      answer: 'ALUPLAN, Türkiye resmi distribütörü olarak 15 karakter sınırlamasına uygun e-PYS kütüphaneleri, katman standartları, proje şablonları ve kurum içi eğitim/danışmanlık hizmetleri sunarak ofislerin dijital dönüşümünü risksiz tamamlamasını sağlar.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="space-y-8 py-6">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase mb-1">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span>Sıkça Sorulan Sorular & Teknik Bilgi Bankası</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            e-PYS Uyum ve openBIM Geçiş Rehberi (SSS)
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
            T.C. ÇEŞB e-PYS mevzuatı, 15 karakter kuralı, bSDD standartları ve ALLPLAN + ALUPLAN çözümleri hakkında merak edilen tüm sorular.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-2">
          {(
            [
              { id: 'all', label: 'Tümü' },
              { id: 'mevzuat', label: 'Mevzuat & Takvim' },
              { id: 'teknik', label: 'Teknik Kurallar & bSDD' },
              { id: 'allplan', label: 'ALLPLAN Avantajları' },
            ] as const
          ).map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Sorularda veya konularda arayın..."
          className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs font-sans text-white focus:outline-none focus:border-cyan-400"
        />
      </div>

      {/* Accordion FAQ List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="bg-slate-900/50 border border-slate-800 p-8 text-center rounded-2xl text-slate-400 text-xs font-mono">
            Aramanızla eşleşen soru bulunamadı. Lütfen farklı anahtar kelimeler deneyin.
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-500/5'
                    : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-sm text-slate-200"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 font-sans space-y-2">
                    <p className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};
