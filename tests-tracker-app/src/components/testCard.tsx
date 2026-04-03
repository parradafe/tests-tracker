import { ChevronRight, Dumbbell } from 'lucide-react';
import React from 'react';

interface TestCardProps {
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  duration: string;
  intensity: string;
  colorClass?: string;
  isFeatured?: boolean;
}

const TestCard: React.FC<TestCardProps> = ({ 
  title, description, icon, duration, intensity, colorClass, isFeatured 
}) => {
  if (isFeatured) {
    return (
      <div className="bg-indigo-600 text-white rounded-[32px] p-5 shadow-lg shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer relative overflow-hidden">
        <div className="absolute right-4 top-4 opacity-10">
          <span className="text-[120px]"><Dumbbell /></span>
        </div>
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <div className="bg-white/20 text-white p-3 rounded-2xl backdrop-blur-md">
              <span className="material-icons-round">{icon}</span>
            </div>
            <span>
                <ChevronRight />
            </span>
          </div>
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          <p className="text-xs text-white/80 leading-relaxed">{description}</p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-[10px] font-bold py-1 px-2 bg-white/20 rounded-md uppercase">{duration}</span>
            <span className="text-[10px] font-bold py-1 px-2 bg-white/20 rounded-md uppercase">{intensity}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-[32px] p-5 shadow-sm border border-transparent hover:border-indigo-500/20 active:scale-95 transition-all cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className={`${colorClass} p-3 rounded-2xl`}>
          <span>{icon}</span>
        </div>
        <span className="material-icons-round text-slate-300 dark:text-slate-600">
            <ChevronRight />
        </span>
      </div>
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">{title}</h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{description}</p>
      <div className="mt-4 flex items-center gap-2">
        <span className="text-[10px] font-bold py-1 px-2 bg-slate-100 dark:bg-slate-700 rounded-md text-slate-500 dark:text-slate-400 uppercase">{duration}</span>
        <span className="text-[10px] font-bold py-1 px-2 bg-slate-100 dark:bg-slate-700 rounded-md text-slate-500 dark:text-slate-400 uppercase">{intensity}</span>
      </div>
    </div>
  );
};

export default TestCard;