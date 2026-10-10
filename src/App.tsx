import React, { useState } from 'react';
import { Header } from './components/Header';
import { RegulatoryTimeline } from './components/RegulatoryTimeline';
import { EpysRulesExplorer } from './components/EpysRulesExplorer';
import { SoftwareComparisonMatrix } from './components/SoftwareComparisonMatrix';
import { TimeSavingsCalculator } from './components/TimeSavingsCalculator';
import { AluplanLocalSupport } from './components/AluplanLocalSupport';
import { ResourceCenter } from './components/ResourceCenter';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');

  // Scroll to top helper
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 bg-blueprint-radial bg-cad-dots flex flex-col font-sans">
      {/* Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <RegulatoryTimeline
              onNavigateToRules={() => setActiveTab('rules')}
              onNavigateToComparison={() => setActiveTab('comparison')}
            />
            <AluplanLocalSupport />
            <EpysRulesExplorer />
            <ResourceCenter />
            <FAQSection />
          </div>
        )}

        {activeTab === 'rules' && (
          <div className="space-y-12">
            <EpysRulesExplorer />
            <AluplanLocalSupport />
          </div>
        )}

        {activeTab === 'comparison' && (
          <div className="space-y-12">
            <SoftwareComparisonMatrix />
            <TimeSavingsCalculator />
          </div>
        )}

        {activeTab === 'calculator' && (
          <div className="space-y-12">
            <TimeSavingsCalculator />
            <AluplanLocalSupport />
          </div>
        )}
      </main>

      {/* Floating Action Button (Scroll to Top) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={scrollToTop}
          className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white shadow-xl hover:border-cyan-500/50 transition-all"
          title="Yukarı Çık"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
