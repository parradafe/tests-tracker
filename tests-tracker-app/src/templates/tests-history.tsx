/* eslint-disable @typescript-eslint/no-explicit-any */
import { BicepsFlexed, ChevronLeft, ChevronRight, HeartPulse, Timer } from 'lucide-react';
import React from 'react';
import { NavBar } from '../components/navBar';

// --- Interfaces ---

interface HistoryEntry {
  id: string;
  date: string;
  value: number;
  referenceRange: string;
  observations: string;
  isLatest?: boolean;
}

interface OtherTestProps {
  icon: any;
  label: string;
  colorClass: string;
  iconColor: string;
}

// --- Sub-componentes ---

const HistoryCard: React.FC<{ entry: HistoryEntry }> = ({ entry }) => (
  <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 transition-all hover:shadow-md">
    <div className="flex justify-between items-start mb-4">
      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
        entry.isLatest 
          ? 'text-[#6366F1] bg-indigo-50 dark:bg-indigo-900/40' 
          : 'text-slate-400 bg-slate-50 dark:bg-slate-700'
      }`}>
        {entry.isLatest ? 'Reciente' : 'Anterior'}
      </span>
      <span className="text-sm font-medium text-slate-400">{entry.date}</span>
    </div>
    
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-1">
        <p className="text-xs text-slate-400 uppercase font-semibold">Valor</p>
        <p className="text-2xl font-extrabold text-slate-900 dark:text-white">
          {entry.value.toFixed(1)}
        </p>
      </div>
      <div className="space-y-1">
        <p className="text-xs text-slate-400 uppercase font-semibold">Referencia</p>
        <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">
          {entry.referenceRange}
        </p>
      </div>
    </div>
    
    <div className="mt-4 pt-4 border-t border-slate-50 dark:border-slate-700/50">
      <p className="text-xs text-slate-400 uppercase font-semibold mb-1">Observaciones</p>
      <p className={`text-sm leading-relaxed ${
        entry.observations === 'N/A' 
          ? 'text-slate-400 italic' 
          : 'text-slate-600 dark:text-slate-400'
      }`}>
        {entry.observations}
      </p>
    </div>
  </div>
);

const OtherTestButton: React.FC<OtherTestProps> = ({ icon, label, colorClass, iconColor }) => (
  <button className="w-full bg-white dark:bg-slate-800 p-4 rounded-2xl flex items-center justify-between border border-slate-100 dark:border-slate-700 shadow-sm active:scale-95 transition-transform group">
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 ${colorClass} rounded-xl flex items-center justify-center`}>
        <span className={`material-icons-round ${iconColor} text-[20px]`}>{icon}</span>
      </div>
      <span className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-[#6366F1] transition-colors">
        {label}
      </span>
    </div>
    <span className="material-icons-round text-slate-300"><ChevronRight /></span>
  </button>
);

// --- Componente Principal ---

const HistoricalRecords: React.FC = () => {
  const historyData: HistoryEntry[] = [
    {
      id: '1',
      date: '25/02/26',
      value: 42.0,
      referenceRange: '40 - 45',
      observations: 'Progreso constante. Ritmo cardíaco estable durante la fase de recuperación.',
      isLatest: true
    },
    {
      id: '2',
      date: '24/02/26',
      value: 41.5,
      referenceRange: '40 - 45',
      observations: 'N/A',
      isLatest: false
    }
  ];

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen text-slate-900 dark:text-slate-100 font-['Plus_Jakarta_Sans']">

      <main className="px-5 pb-32">
        {/* Navigation Header */}
        <header className="flex items-center justify-between mb-6 pt-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 active:scale-90 transition-transform">
            <span className="material-icons-round text-slate-600 dark:text-slate-300"><ChevronLeft /></span>
          </button>
          <p className="text-xl font-bold tracking-tight">Resultados</p>
          <div className="w-10"></div>
        </header>

        {/* Test Info Section */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center shadow-inner">
              <span className="material-icons-round text-[#6366F1]"><HeartPulse /></span>
            </div>
            <div>
              <h2 className="text-lg font-bold">Prueba de Esfuerzo</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Historial de rendimiento</p>
            </div>
          </div>

          <div className="space-y-4">
            {historyData.map((entry) => (
              <HistoryCard key={entry.id} entry={entry} />
            ))}
          </div>
        </section>

        {/* Other Tests Section */}
        <section className="space-y-3">
          <h3 className="text-xs font-bold uppercase text-slate-400 tracking-widest ml-1 mb-4">Otros Tests</h3>
          <OtherTestButton 
            icon={<BicepsFlexed />} 
            label="Prueba 12 Metros" 
            colorClass="bg-emerald-100 dark:bg-emerald-900/30" 
            iconColor="text-emerald-600 dark:text-emerald-400" 
          />
          <OtherTestButton 
            icon={<Timer />} 
            label="Test de Cooper" 
            colorClass="bg-amber-100 dark:bg-amber-900/30" 
            iconColor="text-amber-600 dark:text-amber-400" 
          />
        </section>
      </main>

      {/* Floating Bottom Navigation */}
        <NavBar active="records" fixed />

      {/* iOS Home Indicator */}
      <div className="fixed bottom-1 inset-x-0 flex justify-center pointer-events-none z-[60]">
        <div className="w-32 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default HistoricalRecords;