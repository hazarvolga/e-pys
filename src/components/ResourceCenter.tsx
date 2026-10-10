import React, { useState } from 'react';
import { FileText, Download, BookOpen, ExternalLink, ShieldCheck, Sparkles, Check, Search, Filter } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  subtitle: string;
  category: 'bsdd' | 'openbim' | 'epys';
  fileSize: string;
  pages: number;
  description: string;
  topics: string[];
}

export const ResourceCenter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'bsdd' | 'openbim' | 'epys'>('all');
  const [downloadedId, setDownloadedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const resources: Resource[] = [
    {
      id: 'bsdd-ids-guide',
      title: 'buildingSMART bSDD & IDS Teknik Uygulama Rehberi',
      subtitle: 'e-PYS Ek-6 Özellik Setleri (Pset) ve Makine Tarafından Okunabilir Veri Sözlüğü',
      category: 'bsdd',
      fileSize: '4.2 MB',
      pages: 28,
      description: 'TS EN ISO 16739-1 uyarınca IFC sınıflarının bSDD veri sözlüğüyle eşleştirilmesi, IDS (Information Delivery Specification) kurguları ve ALLPLAN 2026 otonom Pset entegrasyonu rehberi.',
      topics: ['bSDD Data Dictionary', 'IDS Şartnameleri', 'Pset_WallCommon', 'ALLPLAN bSDD Mapping']
    },
    {
      id: 'openbim-iso19650',
      title: 'TS EN ISO 19650 Standartlarında openBIM Çalışma Akışları',
      subtitle: 'Proje Teslim Süreçlerinde CDE (Ortak Veri Ortamı) ve Bilgi Yönetimi',
      category: 'openbim',
      fileSize: '5.8 MB',
      pages: 42,
      description: 'Açık BIM (openBIM) ekosisteminde disiplinlerarası IFC4 ve IFC4.3 veri değişimi, CDE süreçleri, revizyon yönetimi ve model kalitesinin korunması ilkeleri.',
      topics: ['ISO 19650 Standartları', 'IFC4 / IFC4.3', 'CDE Yönetimi', 'Model Çakışma Denetimi']
    },
    {
      id: 'epys-mevzuat-rehberi',
      title: 'T.C. ÇEŞB e-PYS Yönetmelik ve Dijital Ruhsat El Kitabı',
      subtitle: 'Ek-1\'den Ek-9\'a Kodlama Standartları ve 15 Karakter Limiti',
      category: 'epys',
      fileSize: '3.6 MB',
      pages: 24,
      description: 'T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı e-PYS taslak yönetmeliğinin teknik incelemesi, 15 karakter malzeme sınırlaması (Madde 12) ve otonom onay kapısı şartları.',
      topics: ['Ek-1 Proje Kodu', 'Ek-2 Dosya İsimlendirme', 'Ek-3 IfcSpace', 'Madde 12 Limiti']
    },
    {
      id: 'allplan-single-workflow',
      title: 'ALLPLAN Single Workflow PDF/A & IFC4 Batch Export',
      subtitle: '2B Pafta ve 3B Model Tutarlılığında Otomasyon Standartları',
      category: 'openbim',
      fileSize: '2.9 MB',
      pages: 18,
      description: 'ALLPLAN Layout ve Exporter modülleri ile A4 katları standartlarında 2B PDF/A paftalarının ve 3B IFC modellerinin eşzamanlı üretimi ve Ek-9 kalite denetim uyumu.',
      topics: ['Layout Modülü', 'A4 Katları Pafta', 'Batch Exporter', '2B-3B Tutarlılığı']
    }
  ];

  const filteredResources = resources.filter(res => {
    const matchesCategory = selectedCategory === 'all' || res.category === selectedCategory;
    const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          res.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (id: string, title: string) => {
    setDownloadedId(id);
    setTimeout(() => setDownloadedId(null), 2500);

    // Create a simulated text/pdf file download
    const element = document.createElement('a');
    const file = new Blob([
      `ALLPLAN & ALUPLAN e-PYS / openBIM Teknik Dokümanı\nBaşlık: ${title}\nStandartlar: TS EN ISO 19650 / TS EN ISO 16739-1 (IFC4)\nT.C. ÇEŞB e-PYS Dijital Dönüşüm Portalı\nİletişim: www.aluplan.com.tr`
    ], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `${id}-Whitepaper.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="space-y-8 py-6">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase mb-1">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Teknik Yayınlar & İndirilebilir Rehberler</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            bSDD ve openBIM Dokümantasyon Merkezi
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
            e-PYS mevzuat uyumu, bSDD/IDS standartları ve ALLPLAN openBIM çalışma akışları hakkında hazırlanmış teknik whitepaper ve uygulama kılavuzları.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {(
            [
              { id: 'all', label: 'Tüm Dokümanlar' },
              { id: 'bsdd', label: 'bSDD & IDS' },
              { id: 'openbim', label: 'openBIM & ISO 19650' },
              { id: 'epys', label: 'e-PYS Yönetmelik' },
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

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                <span className="px-2.5 py-0.5 text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30 rounded font-bold uppercase">
                  PDF WHITEPAPER • {resource.fileSize}
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  {resource.pages} Sayfa
                </span>
              </div>

              <h3 className="text-lg font-bold text-white leading-snug">
                {resource.title}
              </h3>
              <p className="text-xs text-cyan-300/80 font-mono">
                {resource.subtitle}
              </p>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {resource.description}
              </p>

              {/* Topics tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {resource.topics.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800 rounded"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Resmi Yayın
              </span>

              <button
                onClick={() => handleDownload(resource.id, resource.title)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20"
              >
                {downloadedId === resource.id ? (
                  <>
                    <Check className="w-4 h-4 text-slate-950" />
                    <span>İndirildi</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-slate-950" />
                    <span>Dokümanı İndir</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
