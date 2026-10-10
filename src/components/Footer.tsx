import React from 'react';
import { Building2, MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs font-sans mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-slate-800 pb-8">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                ALLPLAN <span className="text-cyan-400">e-PYS</span> Portalı
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı Elektronik Proje Yönetim Sistemi (e-PYS) ve TS EN ISO 19650 openBIM standartlarında ALLPLAN & ALUPLAN dijital dönüşüm platformu.
            </p>
            <div className="text-[11px] font-mono text-cyan-400">
              [Nemetschek Group • ALLPLAN Deutschland GmbH • ALUPLAN Program Sistemleri]
            </div>
          </div>

          {/* Standards & Certs */}
          <div className="md:col-span-3 space-y-3 font-mono text-[11px]">
            <div className="font-bold text-white uppercase text-xs">Uluslararası Standartlar</div>
            <ul className="space-y-1.5 text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span>TS EN ISO 19650 (BIM Bilgi Yönetimi)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span>TS EN ISO 16739-1 (IFC4 / IFC4.3 Schema)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span>bSDD (buildingSMART Data Dictionary)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span>IDS (Information Delivery Specification)</span>
              </li>
            </ul>
          </div>

          {/* Official Distributor Contact */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-bold text-white uppercase text-xs font-mono">
              ALUPLAN Türkiye Yetkili Distribütörü
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href="https://aluplan.com.tr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline font-mono"
                >
                  www.aluplan.com.tr
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Türkiye Genel Yetkili Satış, Şablon ve Eğitim Merkezi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} ALLPLAN & ALUPLAN Program Sistemleri. Tüm hakları saklıdır.
          </div>
          <div>
            Türkiye e-PYS Dijital Ruhsatlama & openBIM Dönüşüm Rehberi
          </div>
        </div>
      </div>
    </footer>
  );
};
