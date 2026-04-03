/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronLeft, Dumbbell, HeartPulse, Timer, TrendingUp } from 'lucide-react';
import React from 'react';
import { NavBar } from '../components/navBar';

// --- Interfaces ---

interface ChartData {
  label: string;
  value: number; // Porcentaje de 0 a 100
}

interface HistoryEntry {
  id: string;
  date: string;
  value: number;
  referenceRange: string;
  observations: string;
  isLatest?: boolean;
}

// --- Sub-componentes ---

const ProgressBarChart: React.FC<{ data: ChartData[] }> = ({ data }) => (
  <div className="flex items-end justify-between gap-3 h-40 pb-6 px-2">
    {data.map((item, index) => (
      <div key={index} className="flex-1 flex flex-col items-center gap-2 group">
        <div 
          className="w-full bg-gradient-to-b from-[#10B981] to-[#34D399] rounded-t-lg rounded-b-md relative transition-all duration-500 ease-out group-hover:brightness-110"
          style={{ height: `${item.value}%` }}
        >
          {/* Tooltip opcional al hacer hover */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {item.value}%
          </div>
        </div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
          {item.label}
        </span>
      </div>
    ))}
  </div>
);

const HistoryCard: React.FC<{ entry: HistoryEntry }> = ({ entry }) => (
  <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
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
        <p className="text-2xl font-extrabold text-slate-900 dark:text-white">{entry.value.toFixed(1)}</p>
      </div>
      <div className="space-y-1">
        <p className="text-xs text-slate-400 uppercase font-semibold">Referencia</p>
        <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">{entry.referenceRange}</p>
      </div>
    </div>
    <div className="mt-4 pt-4 border-t border-slate-50 dark:border-slate-700/50">
      <p className="text-xs text-slate-400 uppercase font-semibold mb-1">Observaciones</p>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        {entry.observations === 'N/A' ? <span className="italic opacity-60">N/A</span> : entry.observations}
      </p>
    </div>
  </div>
);

// --- Componente Principal ---

const ProgressHistory: React.FC = () => {
  const chartData: ChartData[] = [
    { label: 'Oct', value: 60 },
    { label: 'Nov', value: 75 },
    { label: 'Dic', value: 65 },
    { label: 'Ene', value: 85 },
    { label: 'Feb', value: 100 },
  ];

  const historyEntries: HistoryEntry[] = [
    {
      id: '1',
      date: '25/02/26',
      value: 42.0,
      referenceRange: '40 - 45',
      observations: 'Progreso constante. Ritmo cardíaco estable durante la fase de recuperación.',
      isLatest: true,
    },
    {
      id: '2',
      date: '24/02/26',
      value: 41.5,
      referenceRange: '40 - 45',
      observations: 'N/A',
      isLatest: false,
    },
  ];

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen font-['Plus_Jakarta_Sans'] text-slate-900 dark:text-slate-100">

      <main className="px-5 pb-32 pt-2">
        <header className="flex items-center justify-between mb-6">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 active:scale-90 transition-transform">
            <span className="material-icons-round text-slate-600 dark:text-slate-300"><ChevronLeft /></span>
          </button>
          <p className="text-xl font-bold tracking-tight">Resultados</p>
          <div className="w-10" />
        </header>

        {/* Progress Chart Section */}
        <section className="mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Progreso Temporal</h3>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  +2.4% <span className="text-sm font-medium text-emerald-500">este mes</span>
                </p>
              </div>
              <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-emerald-600 text-xl font-bold"><TrendingUp /></span>
              </div>
            </div>
            
            <ProgressBarChart data={chartData} />
          </div>
        </section>

        {/* History Records */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center">
              <span className="material-icons-round text-[#6366F1]"><HeartPulse /></span>
            </div>
            <div>
              <h2 className="text-lg font-bold">Prueba de Esfuerzo</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Historial de rendimiento</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {historyEntries.map(entry => (
              <HistoryCard key={entry.id} entry={entry} />
            ))}
          </div>
        </section>

        {/* Other Tests */}
        <section className="space-y-3">
          <h3 className="text-xs font-bold uppercase text-slate-400 tracking-widest ml-1 mb-2">Otros Tests</h3>
          <OtherTestRow icon={<Dumbbell />} label="Prueba 12 Metros" color="emerald" />
          <OtherTestRow icon={<Timer />} label="Test de Cooper" color="amber" />
        </section>
      </main>

      {/* Bottom Nav */}
      <NavBar active="records" fixed />

      {/* Home Indicator */}
      <div className="fixed bottom-1 inset-x-0 flex justify-center pointer-events-none z-[60]">
        <div className="w-32 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full" />
      </div>
    </div>
  );
};

// --- Helper Components ---

const OtherTestRow = ({ icon, label, color }: { icon: any, label: string, color: 'emerald' | 'amber' }) => (
  <button className="w-full bg-white dark:bg-slate-800 p-4 rounded-2xl flex items-center justify-between border border-slate-100 dark:border-slate-700 shadow-sm active:scale-[0.98] transition-all group">
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
        color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600' : 'bg-amber-100 dark:bg-amber-900/30 text-amber-600'
      }`}>
        <span className="material-icons-round text-[20px]">{icon}</span>
      </div>
      <span className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-[#6366F1] transition-colors">{label}</span>
    </div>
    <span className="material-icons-round text-slate-300">chevron_right</span>
  </button>
);

export default ProgressHistory;