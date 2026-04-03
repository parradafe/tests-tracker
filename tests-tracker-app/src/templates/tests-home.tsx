import React from 'react';
import TestCard from '../components/testCard';
import { BellDot, ChartColumnBig, Dumbbell, Heart, HeartPulse, PersonStanding, Plus, Rabbit, Search, Timer, Zap } from 'lucide-react';
import { NavBar } from '../components/navBar';

const SportsDashboard: React.FC = () => {
  const categories = [
    { id: 'cardio', icon: <Heart />, label: 'Cardio', active: true },
    { id: 'strength', icon: <Dumbbell />, label: 'Strength' },
    { id: 'resist', icon: <Timer />, label: 'Resist' },
    { id: 'mobility', icon: <PersonStanding />, label: 'Mobility' },
    { id: 'speed', icon: <Zap />, label: 'Speed' },
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 min-h-screen font-['Plus_Jakarta_Sans']">
      <div className="max-w-md mx-auto min-h-screen flex flex-col relative overflow-hidden bg-white dark:bg-[#0F172A]">
        
        {/* Header */}
        <header className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center">
              <ChartColumnBig />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Welcome back,</p>
              <p className="text-xl font-bold leading-tight">Sport Performance</p>
            </div>
          </div>
          <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center">
            <BellDot />
          </button>
        </header>

        {/* Search */}
        <div className="px-6 mb-6">
          <div className="relative">
            <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Search />
            </span>
            <input 
              className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-indigo-500/20 transition-all" 
              placeholder="Search tests..." 
              type="text"
            />
          </div>
        </div>

        <main className="flex-1 flex overflow-hidden">
          {/* Sidebar */}
          <aside className="w-24 flex flex-col items-center gap-2 py-2 border-r border-slate-100 dark:border-slate-800">
            {categories.map((cat) => (
              <button key={cat.id} className={`flex flex-col items-center group ${!cat.active ? 'opacity-60' : ''}`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                  cat.active ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600' : 'bg-slate-100 dark:bg-slate-800'
                }`}>
                  <span>{cat.icon}</span>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${cat.active ? 'text-indigo-600' : ''}`}>
                  {cat.label}
                </span>
              </button>
            ))}
          </aside>

          {/* Listado de Tests */}
          <div className="flex-1 px-6 overflow-y-auto no-scrollbar pb-32">
            <div className="flex items-center justify-between mb-6 pt-2">
              <h2 className="text-xl font-extrabold text-slate-800 dark:text-white">Cardio Tests</h2>
              <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase">3 Available</span>
            </div>

            <div className="space-y-4">
              <TestCard 
                title="Stress Test"
                description="Assess your heart's ability to respond to external stress."
                icon={<HeartPulse />}
                duration="15-20 MIN"
                intensity="HIGH INTENSITY"
                colorClass="bg-rose-100 dark:bg-rose-900/30 text-rose-500"
              />
              
              <TestCard 
                title="12-Meter Run"
                description="Sprint testing focused on explosive acceleration and initial speed."
                icon={<Rabbit />}
                duration="5 MIN"
                intensity="EXPLOSIVE"
                colorClass="bg-blue-100 dark:bg-blue-900/30 text-blue-500"
              />

              <TestCard 
                title="Cooper Test"
                description="Classic 12-minute run to estimate your aerobic fitness (VO2 Max)."
                icon={<Timer />}
                duration="12 MIN"
                intensity="ENDURANCE"
                isFeatured
              />
            </div>
          </div>
        </main>

        {/* FAB & Nav (Igual que antes) */}
        <button className="absolute bottom-24 right-6 w-14 h-14 bg-indigo-800 text-white rounded-2xl shadow-xl shadow-indigo-500/30 flex items-center justify-center active:scale-90 transition-all">
            <Plus />
        </button>

        <NavBar active="tests" fixed />
        
      </div>
    </div>
  );
};

export default SportsDashboard;