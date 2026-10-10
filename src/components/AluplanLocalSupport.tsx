import React from 'react';
import { Layers, CheckCircle2, FileCheck, ShieldCheck, Sparkles, Building, ExternalLink, Headset, BookOpen } from 'lucide-react';

export const AluplanLocalSupport: React.FC = () => {
  return (
    <section className="space-y-8 py-6">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase mb-1">
          <Headset className="w-4 h-4 text-cyan-400" />
          <span>Yerel Uyum Altyapısı: ALUPLAN Türkiye Ekosistemi</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          ALUPLAN Türkiye e-PYS Uyum ve Şablon Desteği
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-3xl">
          Türkiye resmi distribütörü ALUPLAN, küresel ALLPLAN gücünü yerel e-PYS mevzuatına adapte eden hazır proje şablonları, kütüphaneler, katman yapılandırmaları ve teknik danışmanlık sunar.
        </p>
      </div>

      {/* 3 Main Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-cyan-500/50 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <BookOpen className="w-6 h-6" />
          </div>

          <h3 className="text-lg font-bold text-white">
            15-Karakter Uyumlu Yerel Kütüphaneler
          </h3>

          <p className="text-xs text-slate-300 leading-relaxed">
            Yönetmeliğin 12. maddesindeki 15 karakter malzeme ismi kuralına uygun olarak düzenlenmiş hazır duvar, döşeme, çatı ve seramik katman yapıları.
          </p>

          <ul className="space-y-2 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Tugla_Duvar_20 (14 Karakter)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Seramik_Yer_60 (15 Karakter)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Beton_C30_37 (13 Karakter)</span>
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-cyan-500/50 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Layers className="w-6 h-6" />
          </div>

          <h3 className="text-lg font-bold text-white">
            Ek-4 Katman ve Ek-5 IFC Yapılandırması
          </h3>

          <p className="text-xs text-slate-300 leading-relaxed">
            Disiplin, kategori ve detay kodlarının (MM-DVR-Tugla20) çizim anında elemanlara tanımlanabilmesini sağlayan hazır katman standartları.
          </p>

          <ul className="space-y-2 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>MM (Mimari) Katman Standartları</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>ST (Statik) Betonarme Standartları</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>IfcWall, IfcSlab Otonom Sınıflandırma</span>
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-cyan-500/50 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <FileCheck className="w-6 h-6" />
          </div>

          <h3 className="text-lg font-bold text-white">
            Single Workflow PDF/A & IFC Batch Exporter
          </h3>

          <p className="text-xs text-slate-300 leading-relaxed">
            A4 katları formatında 2B PDF/A paftaları ile 3B IFC modellerini aynı anda dışa aktararak Ek-9 kalite denetiminde %100 tutarlılık sağlar.
          </p>

          <ul className="space-y-2 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>A4 Katları Pafta Düzeni</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Ek-2 Standart Dosya Adlandırma</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>2B-3B Tutarsızlık Engeli</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ALUPLAN Contact & Demo Banner */}
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-slate-900 border border-cyan-500/40 rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <span className="px-3 py-1 text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-lg inline-block">
            ALUPLAN PROGRAM SİSTEMLERİ
          </span>
          <h3 className="text-2xl font-bold text-white">
            Ofisinizin e-PYS Hazırlığını ALUPLAN Uzmanlarıyla Birlikte Planlayın
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Türkiye genelindeki mimarlık, mühendislik ve yapı denetim firmaları için özel ALLPLAN e-PYS demosu, lisanslama ve şablon eğitimi talep edin.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href="https://aluplan.com.tr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all"
          >
            <span>ALUPLAN Resmi Web Sitesi</span>
            <ExternalLink className="w-4 h-4 text-slate-950" />
          </a>
        </div>
      </div>
    </section>
  );
};
