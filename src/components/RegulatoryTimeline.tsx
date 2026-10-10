import React, { useState } from 'react';
import { REGULATORY_MILESTONES } from '../data/epysData';
import { MapPin, ArrowRight, ShieldCheck, Building, Sparkles, Clock } from 'lucide-react';

interface RegulatoryTimelineProps {
  onNavigateToRules: () => void;
  onNavigateToComparison: () => void;
}

export const RegulatoryTimeline: React.FC<RegulatoryTimelineProps> = ({ onNavigateToRules, onNavigateToComparison }) => {
  const [selectedMilestone, setSelectedMilestone] = useState(1); // Default to Metropol 2029

  return (
    <section className="space-y-12 py-6">
      {/* Hero Showcase Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/80 border border-slate-800 p-8 sm:p-12 bg-cad-grid">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>T.C. ÇEŞB Mevzuatı & openBIM Dönüşüm Rehberi</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            e-PYS Dijital Geçiş Sürecinde <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              ALLPLAN & ALUPLAN Çözüm Ekosistemi
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
            Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın yayımladığı <strong>"Mimarlık ve Mühendislik Projelerinin Dijital Olarak Hazırlanması Hakkında Yönetmelik"</strong>, Türkiye genelinde kağıt ve 2B onay devrini kapatıyor. 
            <strong> Türkiye genelindeki büyükşehir ve metropollerde</strong> 10.000 m² üzeri yapılar için başlayan 3B openBIM (ISO 19650 / IFC4) zorunluluğuna ALLPLAN'in otonom veri yapısı ve ALUPLAN'ın yerel e-PYS şablonları ile %100 uyum sağlayın.
          </p>

          {/* Key Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
              <div className="text-xs text-slate-400 font-mono">PDF/A Zorunluluğu</div>
              <div className="text-xl font-bold text-cyan-400 mt-1">1 Eylül 2027</div>
              <div className="text-[11px] text-slate-500 mt-1">Tüm 2B Dijital Paftalar</div>
            </div>

            <div className="bg-cyan-950/60 border border-cyan-500/40 p-4 rounded-xl shadow-lg shadow-cyan-500/10">
              <div className="text-xs text-cyan-300 font-mono font-semibold flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" /> Metropol & Büyükşehir
              </div>
              <div className="text-xl font-bold text-white mt-1">1 Eylül 2029</div>
              <div className="text-[11px] text-cyan-300/80 mt-1">&gt;10.000 m² / 3B IFC Zorunlu</div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
              <div className="text-xs text-slate-400 font-mono">Malzeme İsmi Limiti</div>
              <div className="text-xl font-bold text-amber-400 mt-1">Maks 15 Karakter</div>
              <div className="text-[11px] text-slate-500 mt-1">Madde 12 Katı Kuralı</div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
              <div className="text-xs text-slate-400 font-mono">ALLPLAN bSDD Uyum</div>
              <div className="text-xl font-bold text-emerald-400 mt-1">%100 Native</div>
              <div className="text-[11px] text-slate-500 mt-1">IDS & Pset Otomasyonu</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onNavigateToRules}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/20 transition-all duration-200 hover:scale-[1.02]"
            >
              <span>e-PYS Yönetmelik Eklerini İncele</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <button
              onClick={onNavigateToComparison}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white border border-slate-700 font-semibold text-sm transition-all duration-200"
            >
              <span>ALLPLAN vs Revit vs Archicad Analizi</span>
            </button>
          </div>
        </div>
      </div>

      {/* Special Focus Card: Turkey Metropolises Context */}
      <div className="bg-slate-900/80 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 relative">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase">
              <Building className="w-4 h-4 text-cyan-400" />
              <span>Türkiye Geneli Metropol & Büyükşehir İmar Analizi</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Türkiye Genelinde Hangi Yapılar Öncelikli Kapsamda?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Yönetmelik taslağındaki kademeli geçiş takvimine göre; <strong>nüfusu 2 milyonu geçen tüm illerde</strong> (İstanbul, Ankara, İzmir, Bursa, Antalya, Konya vb.), <strong>nüfusu 600.000'i aşan büyük merkez ilçelerde</strong> ve <strong>inşaat alanı 10.000 m²'yi geçen</strong> sanayi tesisleri, karma projeler ve konut bloklarında 3B IFC teslimi <strong>1 Eylül 2029</strong> tarihine kadar zorunlu hale gelecektir.
            </p>
          </div>

          <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-5 w-full md:w-80 shrink-0 space-y-3 font-mono text-xs">
            <div className="text-slate-400 border-b border-slate-800 pb-2 font-bold text-cyan-300">
              [METROPOL KRİTER KONTROLÜ]
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>İl Nüfus Eşiği:</span>
              <span className="text-emerald-400 font-bold">&gt; 2 Milyon</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>İlçe Nüfus Eşiği:</span>
              <span className="text-emerald-400 font-bold">&gt; 600.000</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>Yapı Alanı Eşiği:</span>
              <span className="text-amber-400 font-bold">&gt; 10.000 m²</span>
            </div>
            <div className="flex justify-between items-center text-slate-300 border-t border-slate-800 pt-2 text-[11px]">
              <span>Son Uyum Tarihi:</span>
              <span className="text-cyan-400 font-bold">1 Eylül 2029</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Timeline Tabs & Detailed Cards */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Clock className="w-6 h-6 text-cyan-400" />
              e-PYS Yönetmeliği Yasal Geçiş Takvimi
            </h2>
            <p className="text-slate-400 text-xs mt-1">
              Aşamaları tıklayarak kapsadığı yapı tiplerini ve yasal şartları inceleyin.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
            {REGULATORY_MILESTONES.map((m, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedMilestone(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  selectedMilestone === idx
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {m.date.split(' ')[2] || m.date}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Timeline Card Detailed Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <span className="px-3 py-1 text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/30 rounded-lg">
                {REGULATORY_MILESTONES[selectedMilestone].badge}
              </span>
              <span className="text-slate-400 text-xs font-mono">
                Hedef Tarih: <strong className="text-white">{REGULATORY_MILESTONES[selectedMilestone].date}</strong>
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">
                {REGULATORY_MILESTONES[selectedMilestone].title}
              </h3>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                {REGULATORY_MILESTONES[selectedMilestone].description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl space-y-2">
                <div className="text-xs font-mono text-slate-400">Yasal Kapsam & Ölçek</div>
                <div className="text-sm font-semibold text-white">
                  {REGULATORY_MILESTONES[selectedMilestone].scope}
                </div>
              </div>

              <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl space-y-2">
                <div className="text-xs font-mono text-slate-400">Model Doğrulama Tipi</div>
                <div className="text-sm font-semibold text-cyan-300">
                  {selectedMilestone === 0 ? '2B PDF/A (A4 Katları)' : '3B IFC4 / bSDD (TS EN ISO 16739-1)'}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-slate-300 space-y-2">
              <div className="font-bold text-cyan-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                ALLPLAN & ALUPLAN Bu Aşamada Ne Sağlıyor?
              </div>
              <p>
                {selectedMilestone === 0 
                  ? 'ALLPLAN Layout Modülü ile 3B modelden türetilen 2B paftalar A4 katları standartlarında tek tıkla PDF/A formatında dışa aktarılır. Model ile pafta arasında %100 tutarlılık garanti edilir.'
                  : 'ALLPLAN 2026 native IDS ve bSDD entegrasyonu sayesinde e-PYS Pset verileri modele otonom aktarılır. ALUPLAN e-PYS yerel şablonları ile 15-karakter sınırlamasına %100 uyum sağlanır.'}
              </p>
            </div>
          </div>

          {/* Timeline Visual Cards Column */}
          <div className="lg:col-span-4 space-y-3">
            {REGULATORY_MILESTONES.map((m, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedMilestone(idx)}
                className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 ${
                  selectedMilestone === idx
                    ? 'bg-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400">{m.date}</span>
                  {selectedMilestone === idx && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                </div>
                <div className="text-sm font-bold text-white mt-1">{m.badge}</div>
                <div className="text-xs text-slate-400 mt-1 line-clamp-1">{m.scope}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
