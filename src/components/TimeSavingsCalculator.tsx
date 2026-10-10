import React, { useState } from 'react';
import { TIME_SAVING_TASKS } from '../data/epysData';
import { Calculator, Clock, TrendingUp, ShieldCheck, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';

export const TimeSavingsCalculator: React.FC = () => {
  const [teamSize, setTeamSize] = useState<number>(8);
  const [activeProjects, setActiveProjects] = useState<number>(6);
  const [annualSquareMeters, setAnnualSquareMeters] = useState<number>(45000);
  const [hourlyCostTL, setHourlyCostTL] = useState<number>(750); // Average senior BIM architect hourly cost in TL

  // Calculate savings per project
  const allplanHoursPerProject = TIME_SAVING_TASKS.reduce((acc, task) => acc + task.allplanHours, 0); // 23 hours
  const traditionalHoursPerProject = TIME_SAVING_TASKS.reduce((acc, task) => acc + task.traditionalHours, 0); // 185 hours
  const savedHoursPerProject = traditionalHoursPerProject - allplanHoursPerProject; // 162 hours saved per project

  // Annual Totals
  const totalSavedHoursYear = savedHoursPerProject * activeProjects;
  const totalFinancialSavingsTL = totalSavedHoursYear * hourlyCostTL;
  const timeReductionPercentage = Math.round((savedHoursPerProject / traditionalHoursPerProject) * 100);

  return (
    <section className="space-y-8 py-6">
      {/* Title */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase mb-1">
          <Calculator className="w-4 h-4 text-cyan-400" />
          <span>Etkileşimli Adam/Saat & Finansal ROI Hesaplayıcı</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Tasarım Ofisleri İçin Zaman & Maliyet Tasarrufu
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-3xl">
          ALLPLAN ve ALUPLAN yerel e-PYS şablonlarının manuel e-PYS kodlamalarına, Pset eşleştirmelerine ve fiziki ince yapı çizimlerine kıyasla ofisinize kazandıracağı adam/saat tasarrufunu hesaplayın.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs Controls */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6">
          <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <Clock className="w-5 h-5 text-cyan-400" />
            Ofis Parametrelerinizi Girin:
          </h3>

          <div className="space-y-4 font-mono text-xs">
            {/* Team Size Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-slate-300">
                <label>Mimar & Mühendis Kadrosu:</label>
                <span className="text-cyan-400 font-bold text-sm">{teamSize} Kişi</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Active Projects Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-slate-300">
                <label>Yıllık Aktif e-PYS Proje Sayısı:</label>
                <span className="text-cyan-400 font-bold text-sm">{activeProjects} Proje</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={activeProjects}
                onChange={(e) => setActiveProjects(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Annual m² Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-slate-300">
                <label>Yıllık Proje İnşaat Alanı (m²):</label>
                <span className="text-cyan-400 font-bold text-sm">
                  {annualSquareMeters.toLocaleString('tr-TR')} m²
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={annualSquareMeters}
                onChange={(e) => setAnnualSquareMeters(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Hourly Rate Input */}
            <div className="space-y-2">
              <div className="flex justify-between text-slate-300">
                <label>Ortalama Mimar Adam/Saat Maliyeti (TL):</label>
                <span className="text-cyan-400 font-bold text-sm">{hourlyCostTL} TL/saat</span>
              </div>
              <input
                type="range"
                min="300"
                max="2000"
                step="50"
                value={hourlyCostTL}
                onChange={(e) => setHourlyCostTL(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Right ROI Results Dashboard */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold text-slate-400">
                [TAHMİNİ YILLIK VERİMLİLİK VE HESAPLAMA ÇIKTISI]
              </span>
              <span className="px-2.5 py-0.5 text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/40 rounded font-bold">
                %{timeReductionPercentage} Süre Tasarrufu
              </span>
            </div>

            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-slate-950 p-5 rounded-xl border border-cyan-500/40 space-y-2">
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  Yıllık Kazandırılan Adam/Saat:
                </div>
                <div className="text-3xl font-extrabold text-cyan-400 font-mono">
                  {totalSavedHoursYear.toLocaleString('tr-TR')} <span className="text-sm font-normal text-slate-400">Saat</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Proje başına ~{savedHoursPerProject} saat idari ve teknik yük ortadan kalkar.
                </div>
              </div>

              <div className="bg-slate-950 p-5 rounded-xl border border-emerald-500/40 space-y-2">
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Yıllık Tahmini Finansal Tasarruf:
                </div>
                <div className="text-3xl font-extrabold text-emerald-400 font-mono">
                  ₺{totalFinancialSavingsTL.toLocaleString('tr-TR')}
                </div>
                <div className="text-[11px] text-slate-400">
                  Ofisinizin yeni projelere ve tasarıma ayırabileceği ek bütçe potansiyeli.
                </div>
              </div>
            </div>

            {/* Risk Reduction Banner */}
            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-slate-200 mt-4 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-cyan-400 shrink-0" />
              <div>
                <strong className="text-white block font-bold">Ruhsat Ret Riski %100 Ortadan Kalkar:</strong>
                Ek-9 otonom model denetimindeki 15 karakter sınırlaması, Pset hataları ve 2B/3B pafta uyumsuzluğu kaynaklı ruhsat gecikmeleri engellenir.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Breakdown Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 overflow-x-auto">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-cyan-400" />
          e-PYS İş Akışlarına Göre Detaylı Adam/Saat Karşılaştırması (Proje Başına Ortalama)
        </h3>

        <table className="w-full text-left text-xs font-sans">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase text-[11px]">
              <th className="py-3 px-4">Görev Kategorisi</th>
              <th className="py-3 px-4 text-cyan-400 font-bold">ALLPLAN + ALUPLAN</th>
              <th className="py-3 px-4 text-rose-400 font-bold">Geleneksel Manuel Süreç</th>
              <th className="py-3 px-4 text-emerald-400 font-bold">Fark / Kazanç</th>
              <th className="py-3 px-4 text-slate-400">Açıklama</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            {TIME_SAVING_TASKS.map((task, idx) => (
              <tr key={idx}>
                <td className="py-3.5 px-4 font-semibold text-white">{task.category}</td>
                <td className="py-3.5 px-4 font-bold text-cyan-400 font-mono">{task.allplanHours} Saat</td>
                <td className="py-3.5 px-4 font-bold text-rose-400 font-mono">{task.traditionalHours} Saat</td>
                <td className="py-3.5 px-4 font-bold text-emerald-400 font-mono">
                  +{task.traditionalHours - task.allplanHours} Saat Kazanç
                </td>
                <td className="py-3.5 px-4 text-slate-400 text-[11px] max-w-xs">{task.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
