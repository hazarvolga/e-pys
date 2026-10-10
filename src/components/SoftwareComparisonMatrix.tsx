import React, { useState } from 'react';
import { SOFTWARE_COMPARISON } from '../data/epysData';
import { Cpu, CheckCircle2, AlertTriangle, XCircle, ShieldCheck, Zap, Info, ExternalLink } from 'lucide-react';

export const SoftwareComparisonMatrix: React.FC = () => {
  const [selectedPillarIndex, setSelectedPillarIndex] = useState(0);

  const selectedMetric = SOFTWARE_COMPARISON[selectedPillarIndex];

  return (
    <section className="space-y-8 py-6">
      {/* Title */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase mb-1">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span>Karşılaştırmalı BIM Yazılım Analizi (e-PYS Uyum Kapasitesi)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          ALLPLAN vs Revit vs Archicad Karşılaştırması
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-3xl">
          T.C. ÇEŞB e-PYS yönetmeliğinin katı kurallarına (15 karakter sınırı, Ek-6 Pset matrisi, bSDD/IDS zorunluluğu, IfcCovering ince yapı) hangi yazılımın doğrudan hazır olduğunu teknik olarak inceleyin.
        </p>
      </div>

      {/* Pillar Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        {SOFTWARE_COMPARISON.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedPillarIndex(idx)}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all ${
              selectedPillarIndex === idx
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            {item.pillar}
          </button>
        ))}
      </div>

      {/* Software Metric Detail View */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <span className="text-xs font-mono font-bold text-cyan-400">
            [ODAK NOKTASI: {selectedMetric.pillar}]
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            {selectedMetric.title}
          </h3>
        </div>

        {/* 3-Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ALLPLAN Card */}
          <div className="bg-slate-950 border-2 border-cyan-500/80 rounded-2xl p-5 space-y-4 shadow-xl shadow-cyan-500/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-cyan-500 text-slate-950 text-[10px] font-mono font-extrabold px-3 py-1 rounded-bl-xl uppercase">
              TAVSİYE EDİLEN
            </div>

            <div className="flex items-center gap-2 pt-2">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
              <h4 className="text-lg font-extrabold text-white">ALLPLAN + ALUPLAN</h4>
            </div>

            <div className="inline-block px-3 py-1 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold">
              ✓ {selectedMetric.allplan.badge}
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {selectedMetric.allplan.description}
            </p>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-cyan-300 font-mono">
              <strong>Teknik Detay:</strong> {selectedMetric.allplan.technicalNote}
            </div>
          </div>

          {/* Revit Card */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between pt-2">
              <h4 className="text-lg font-bold text-slate-200">Autodesk Revit</h4>
              <span className="text-xs font-mono text-slate-500">Global Standart</span>
            </div>

            <div className="inline-block px-3 py-1 rounded-lg bg-amber-950 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold">
              ! {selectedMetric.revit.badge}
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              {selectedMetric.revit.description}
            </p>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-amber-300/90 font-mono">
              <strong>Sıkıntı Noktası:</strong> {selectedMetric.revit.technicalNote}
            </div>
          </div>

          {/* Archicad Card */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between pt-2">
              <h4 className="text-lg font-bold text-slate-200">Graphisoft Archicad</h4>
              <span className="text-xs font-mono text-slate-500">openBIM Oyuncusu</span>
            </div>

            <div className="inline-block px-3 py-1 rounded-lg bg-amber-950 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold">
              ~ {selectedMetric.archicad.badge}
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              {selectedMetric.archicad.description}
            </p>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-mono">
              <strong>İş Yükü:</strong> {selectedMetric.archicad.technicalNote}
            </div>
          </div>
        </div>
      </div>

      {/* Overview Matrix Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 overflow-x-auto space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Info className="w-5 h-5 text-cyan-400" />
          Tüm e-PYS Metrikleri Genel Karşılaştırma Matrisi
        </h3>

        <table className="w-full text-left text-xs font-sans">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase text-[11px]">
              <th className="py-3 px-4">e-PYS Gereksinimi</th>
              <th className="py-3 px-4 text-cyan-400 font-bold">ALLPLAN + ALUPLAN</th>
              <th className="py-3 px-4 text-slate-300">Autodesk Revit</th>
              <th className="py-3 px-4 text-slate-300">Graphisoft Archicad</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            <tr>
              <td className="py-3.5 px-4 font-semibold text-white">Pset & bSDD Entegrasyonu (Ek-6)</td>
              <td className="py-3.5 px-4 font-bold text-emerald-400">Yüksek (Native IDS & bSDD)</td>
              <td className="py-3.5 px-4 text-rose-400">Düşük (Manuel TXT / Dynamo)</td>
              <td className="py-3.5 px-4 text-amber-400">Orta (Manuel Translator)</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-semibold text-white">IfcCovering İnce Yapı Üretimi</td>
              <td className="py-3.5 px-4 font-bold text-emerald-400">Otonom (Mahal Niteliklerinden)</td>
              <td className="py-3.5 px-4 text-rose-400">Manuel (Fiziki 2cm Çizim)</td>
              <td className="py-3.5 px-4 text-amber-400">Yarı-Otomatik (Kompozitler)</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-semibold text-white">15-Karakter Malzeme Sınırı (Madde 12)</td>
              <td className="py-3.5 px-4 font-bold text-emerald-400">Hazır (ALUPLAN e-PYS Şablonları)</td>
              <td className="py-3.5 px-4 text-rose-400">Zorlu (Manuel Kütüphane Revizyonu)</td>
              <td className="py-3.5 px-4 text-amber-400">Zorlu (Manuel Attribute Revizyonu)</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-semibold text-white">Batch PDF/A + IFC4 Export (Ek-9)</td>
              <td className="py-3.5 px-4 font-bold text-emerald-400">Tek İş Akışı (Batch Exporter)</td>
              <td className="py-3.5 px-4 text-amber-400">Hantal / Versiyon Kopukluğu Riski</td>
              <td className="py-3.5 px-4 text-emerald-400">Başarılı (Publisher)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
