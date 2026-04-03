import { BicepsFlexed, ChartBarStacked, ChevronLeft, ChevronRight, Save, Timer } from 'lucide-react';
import React from 'react';
import { NavBar } from '../components/navBar';

// --- Sub-componentes ---

const StatusEmoji = () => (
  <div className="absolute -top-4 -right-2 z-10 w-24 h-24">
    <svg className="w-full h-full drop-shadow-lg" viewBox="0 0 100 100">
      <circle className="fill-[#C7D2FE] dark:fill-indigo-900" cx="50" cy="50" r="40" />
      <path d="M30 45 Q35 35 40 45" fill="none" stroke="#4338CA" strokeWidth="3" />
      <path d="M60 45 Q65 35 70 45" fill="none" stroke="#4338CA" strokeWidth="3" />
      <path d="M40 70 Q50 80 60 70" fill="none" stroke="#4338CA" strokeWidth="3" />
      <circle cx="35" cy="50" fill="#4338CA" r="3" />
      <circle cx="65" cy="50" fill="#4338CA" r="3" />
    </svg>
  </div>
);

interface RecordItemProps {
  title: string;
  subtitle: string;
  icon: any;
  bgColor: string;
  iconColor: string;
}

const RecordItem: React.FC<RecordItemProps> = ({ title, subtitle, icon, bgColor, iconColor }) => (
  <div className="bg-white dark:bg-slate-800 p-5 rounded-[1.5rem] border border-slate-100 dark:border-slate-700 flex items-center justify-between shadow-sm active:scale-[0.98] transition-all cursor-pointer">
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-2xl ${bgColor} flex items-center justify-center ${iconColor}`}>
        <span className="material-icons-round">{icon}</span>
      </div>
      <div>
        <h4 className="font-bold text-slate-800 dark:text-slate-200">{title}</h4>
        <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
      </div>
    </div>
    <span className="material-icons-round text-slate-300"><ChevronRight /></span>
  </div>
);

// --- Componente Principal ---

const TestResults: React.FC<{ vo2MaxValue?: number }> = ({ vo2MaxValue = 48.2 }) => {
  return (
    <div className="bg-slate-100 dark:bg-black min-h-screen flex justify-center font-['Plus_Jakarta_Sans']">
      <div className="w-full max-w-[430px] min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] relative flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <header className="px-6 pt-6 pb-2 flex items-center justify-between">
          <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-400 active:scale-90 transition-transform">
            <span className="material-icons-round"><ChevronLeft /></span>
          </button>
          <p className="text-xl font-extrabold tracking-tight">Resultados</p>
          <div className="w-10" /> {/* Spacer */}
        </header>

        <main className="flex-1 px-6 py-4 overflow-y-auto pb-32 no-scrollbar">
          {/* Main Card Result */}
          <section className="relative mb-8 pt-4">
            <StatusEmoji />
            
            <div className="bg-indigo-50/80 dark:bg-slate-800/50 rounded-[2rem] p-8 border border-indigo-100 dark:border-slate-700 shadow-xl shadow-indigo-500/5">
              <p className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-xs mb-2">Prueba Actual</p>
              <h2 className="text-2xl font-extrabold mb-6">Prueba de Esfuerzo</h2>
              
              <div className="flex flex-col items-center justify-center py-6 bg-white dark:bg-slate-900 rounded-3xl border border-indigo-50 dark:border-slate-800 mb-8 shadow-inner">
                <span className="text-slate-400 dark:text-slate-500 text-sm font-medium mb-1">Resultado VO2 Max</span>
                <div className="text-5xl font-black text-[#6366f1]">{vo2MaxValue}</div>
                <span className="text-slate-400 dark:text-slate-500 text-xs mt-1 uppercase tracking-tighter">ml/kg/min</span>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-[#6366f1] text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-500/25 active:scale-95 transition-transform flex items-center justify-center gap-2">
                  <span className="material-icons-round text-sm"><Save /></span>
                  Almacenar
                </button>
                <button className="flex-1 bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold py-4 rounded-2xl border border-slate-200 dark:border-slate-600 active:scale-95 transition-transform flex items-center justify-center gap-2">
                  <span className="material-icons-round text-sm"><ChartBarStacked /></span>
                  Comparar
                </button>
              </div>
            </div>
          </section>

          {/* Other Records */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold px-1">Otros Registros</h3>
            <RecordItem 
              title="Prueba 12 metros"
              subtitle="Hace 2 días • 12:45 min"
              icon={<BicepsFlexed />}
              bgColor="bg-sky-100 dark:bg-sky-900/30"
              iconColor="text-sky-600"
            />
            <RecordItem 
              title="Test de Cooper"
              subtitle="Hace 1 semana • 2800m"
              icon={<Timer />}
              bgColor="bg-rose-100 dark:bg-rose-900/30"
              iconColor="text-rose-600"
            />
          </section>
        </main>

        {/* Navbar */}
        <NavBar active="tests" fixed />

        {/* Home Indicator iOS */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full" />
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default TestResults;