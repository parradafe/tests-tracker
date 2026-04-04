import React, { useState } from 'react';
import TestCard from '../components/testCard';
import {
  BellDot, ChartColumnBig, Dumbbell, HeartPulse,
  PersonStanding, Plus, Search, Zap,
} from 'lucide-react';
import { NavBar } from '../components/navBar';
import categoriesData from '../data/data-to-mock.json';
import { iconMap } from '../helpers/iconMap';

const categoryIconMap: Record<string, React.ReactNode> = {
  endurance: <HeartPulse />,
  strength: <Dumbbell />,
  mobility: <PersonStanding />,
  speed: <Zap />,
};

const SportsDashboard: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categoriesData.categories[0].categoryKey);
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory =
    categoriesData.categories.find((c) => c.categoryKey === activeCategory) ??
    categoriesData.categories[0];

  const filteredTests = searchQuery.trim()
    ? categoriesData.categories.flatMap((c) => c.tests).filter((t) =>
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currentCategory.tests;

  return (
    <div className="bg-slate-50 dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 h-screen font-['Plus_Jakarta_Sans']">
      <div className="w-full max-w-md mx-auto h-full flex flex-col overflow-hidden bg-white dark:bg-[#0F172A]">

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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <main className="flex-1 flex overflow-hidden">
          {/* Sidebar */}
          <aside className="w-24 flex flex-col items-center gap-2 py-2 border-r border-slate-100 dark:border-slate-800">
            {categoriesData.categories.map((cat) => {
              const isActive = cat.categoryKey === activeCategory;
              return (
                <button
                  key={cat.categoryKey}
                  onClick={() => setActiveCategory(cat.categoryKey)}
                  className={`flex flex-col items-center group ${!isActive ? 'opacity-60' : ''}`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isActive ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600' : 'bg-slate-100 dark:bg-slate-800'
                  }`}>
                    <span>{categoryIconMap[cat.categoryKey]}</span>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-indigo-600' : ''}`}>
                    {cat.categoryName}
                  </span>
                </button>
              );
            })}
          </aside>

          {/* Listado de Tests */}
          <div className="flex-1 px-6 overflow-y-auto no-scrollbar pb-32">
            <div className="flex items-center justify-between mb-6 pt-2">
              <h2 className="text-xl font-extrabold text-slate-800 dark:text-white">
                {searchQuery.trim() ? 'Search Results' : `${currentCategory.categoryName} Tests`}
              </h2>
              <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                {filteredTests.length} Available
              </span>
            </div>

            <div className="space-y-4">
              {filteredTests.length > 0 ? filteredTests.map((test) => (
                <TestCard
                  key={test.id}
                  title={test.title}
                  description={test.description}
                  icon={iconMap[test.iconName] ?? <Dumbbell />}
                  duration={test.duration}
                  intensity={test.intensity}
                  colorClass={test.colorClass}
                  isFeatured={test.isFeatured}
                />
              )) : (
                <div className="bg-white dark:bg-slate-800 rounded-[32px] p-5 shadow-sm border border-transparent">
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 p-3 rounded-2xl">
                      <Search />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">No tests found</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    No results for <span className="font-semibold">"{searchQuery}"</span>. Try a different keyword.
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* FAB */}
        <button className="">
          <Plus />
        </button>

        <NavBar active="tests" fixed />

      </div>
    </div>
  );
};

export default SportsDashboard;