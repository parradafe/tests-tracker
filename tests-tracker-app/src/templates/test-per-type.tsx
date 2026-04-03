import { ChevronLeft, ChevronRight, Gauge, Info, RulerDimensionLine, SquareActivity, Timer } from 'lucide-react';
import React from 'react';
import { NavBar } from '../components/navBar';

interface ProtocolCardProps {
  title: string;
  subtitle: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  iconBgColor: string;
  iconTextColor: string;
}

const ProtocolCard: React.FC<ProtocolCardProps> = ({ title, subtitle, icon, iconBgColor, iconTextColor }) => (
  <button className="group w-full flex items-center p-5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-[0.98]">
    <div className={`w-12 h-12 rounded-xl ${iconBgColor} flex items-center justify-center ${iconTextColor} group-hover:scale-110 transition-transform`}>
      <span className="material-icons-outlined">{icon}</span>
    </div>
    <div className="ml-4 text-left flex-1">
      <h3 className="font-bold text-slate-800 dark:text-slate-100">{title}</h3>
      <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>
    </div>
    <span className="material-icons-outlined text-slate-300 dark:text-slate-600"><ChevronRight /></span>
  </button>
);

// --- Componente Principal ---

const CardioSelection: React.FC = () => {
  return (
    <div className="bg-slate-100 dark:bg-black min-h-screen flex items-center justify-center p-0 sm:p-4 font-['Inter']">
      {/* Contenedor tipo dispositivo móvil */}
      <div className="relative w-full max-w-[400px] h-[844px] bg-white dark:bg-slate-900 shadow-2xl overflow-hidden sm:rounded-[3rem] border-[8px] border-slate-200 dark:border-slate-800 flex flex-col">

        <header className="px-6 py-4 flex items-center">
          <button className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-icons-outlined text-slate-600 dark:text-slate-400">
                <ChevronLeft />
            </span>
          </button>
          <p className="flex-1 text-center text-xl font-bold text-[#1E3A8A] dark:text-[#60A5FA] mr-8">
            Cardio Tests
          </p>
        </header>

        <main className="flex-1 px-6 pt-4 flex flex-col gap-6 overflow-y-auto pb-24 no-scrollbar">
          {/* Hero Card */}
          <div className="bg-gradient-to-br from-[#60A5FA] to-[#1E3A8A] p-6 rounded-[2rem] text-white relative overflow-hidden shadow-lg shadow-blue-500/20">
            <div className="relative z-10">
              <p className="text-blue-100 text-sm font-medium mb-1">Select your protocol</p>
              <p className="text-2xl font-bold leading-tight">Cardiovascular Performance</p>
            </div>
            <div className="absolute right-4 bottom-4 opacity-20">
              <span className="material-icons-outlined text-[120px]"><SquareActivity /></span>
            </div>
          </div>

          {/* Listado de Protocolos */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 px-1 uppercase tracking-wider">
              Available Tests
            </p>
            
            <ProtocolCard 
              title="Prueba de Esfuerzo"
              subtitle="Stress Test Protocol"
              icon={<Gauge />}
              iconBgColor="bg-blue-50 dark:bg-blue-900/30"
              iconTextColor="text-[#1E3A8A] dark:text-[#60A5FA]"
            />

            <ProtocolCard 
              title="Prueba 12 metros"
              subtitle="Short distance cardio burst"
              icon={<RulerDimensionLine />}
              iconBgColor="bg-indigo-50 dark:bg-indigo-900/30"
              iconTextColor="text-indigo-600 dark:text-indigo-400"
            />

            <ProtocolCard 
              title="Test de Cooper"
              subtitle="12-minute run endurance"
              icon={<Timer />}
              iconBgColor="bg-sky-50 dark:bg-sky-900/30"
              iconTextColor="text-sky-600 dark:text-sky-400"
            />
          </div>

          {/* Warning Note */}
          <div className="mt-4 p-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
            <div className="flex gap-3">
              <span className="material-icons-outlined text-slate-400 text-lg"><Info /></span>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Ensure you are properly warmed up before starting any high-intensity cardiovascular test.
              </p>
            </div>
          </div>
        </main>

        {/* Bottom Navigation con iOS Blur */}
        <NavBar active="tests" fixed />

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default CardioSelection;