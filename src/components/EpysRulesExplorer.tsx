import React, { useState } from 'react';
import { EPYS_ARTICLES, RegulationArticle } from '../data/epysData';
import { FileCode, ShieldAlert, CheckCircle, Code, Layers, Sparkles, BookOpen, AlertOctagon, HelpCircle } from 'lucide-react';

export const EpysRulesExplorer: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<string>('madde-12');

  const selectedArticle = EPYS_ARTICLES.find(a => a.id === selectedArticleId) || EPYS_ARTICLES[0];

  return (
    <section className="space-y-8 py-6">
      {/* Section Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase mb-1">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>T.C. ÇEŞB Yönetmelik Ekleri (Ek-1 &apos;den Ek-9 &apos;a) ve Madde 12</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            e-PYS Yönetmeliği Kural Anatomi Rehberi
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
            Sistemin otonom kalite doğrulama kapısında (Ek-9) takılmamak için gereken teknik veri yapısını, 15 karakter sınırlamasını ve IFC Pset standartlarını detaylıca inceleyin.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-slate-400 bg-slate-900 px-3 py-2 rounded-xl border border-slate-800">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>TS EN ISO 16739-1 (IFC4/4.3) Uyumlu</span>
        </div>
      </div>

      {/* Grid Layout: Left Tabs / List, Right Detailed Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Article Selector List */}
        <div className="lg:col-span-4 space-y-2">
          {EPYS_ARTICLES.map((article) => {
            const isSelected = article.id === selectedArticleId;
            const isCritical15Char = article.id === 'madde-12';
            return (
              <button
                key={article.id}
                onClick={() => setSelectedArticleId(article.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 relative overflow-hidden ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500 text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900/80'
                }`}
              >
                {isSelected && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400" />
                )}
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-xs font-mono font-bold ${isCritical15Char ? 'text-amber-400' : 'text-cyan-400'}`}>
                    {article.code}
                  </span>
                  {isCritical15Char && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono bg-amber-950 text-amber-300 border border-amber-500/40 rounded">
                      KRİTİK
                    </span>
                  )}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1 line-clamp-1">
                  {article.title}
                </div>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                  {article.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Article Detailed Card */}
        <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/40 rounded-lg">
                {selectedArticle.code}
              </span>
              <h3 className="text-xl font-bold text-white">
                {selectedArticle.title}
              </h3>
            </div>
            {selectedArticle.id === 'madde-12' && (
              <span className="px-3 py-1 text-xs font-mono font-bold bg-amber-950 text-amber-300 border border-amber-500/40 rounded-lg flex items-center gap-1">
                <AlertOctagon className="w-3.5 h-3.5 text-amber-400" />
                Sık Yapılan Hata Sebebi
              </span>
            )}
          </div>

          <p className="text-slate-300 text-sm leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
            {selectedArticle.summary}
          </p>

          {/* Technical Requirements Breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
              <Code className="w-4 h-4 text-cyan-400" />
              Teknik Zorunluluklar & Sözdizimi (Syntax)
            </h4>
            <ul className="space-y-2">
              {selectedArticle.technicalDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-950/40 p-3 rounded-lg border border-slate-800/50 font-mono">
                  <span className="text-cyan-400 font-bold text-sm select-none">›</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Two-Column Comparison: Risk vs ALLPLAN Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Risk Box */}
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span>Uyum Sağlanmazsa Yaşanacak Risk</span>
              </div>
              <p className="text-xs text-rose-200/90 leading-relaxed">
                {selectedArticle.riskIfIgnored}
              </p>
            </div>

            {/* ALLPLAN / ALUPLAN Solution Box */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>ALLPLAN + ALUPLAN Çözümü</span>
              </div>
              <p className="text-xs text-emerald-200/90 leading-relaxed">
                {selectedArticle.allplanSolution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
