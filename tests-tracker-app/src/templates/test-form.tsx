import { ChevronLeft, ChevronRight, SquareActivity } from 'lucide-react';
import React, { useState } from 'react';
import { NavBar } from '../components/navBar';

// --- Sub-componentes ---

interface InputFieldProps {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, placeholder, type = "text", value, onChange }) => (
  <div className="space-y-2">
    <label className="text-sm font-semibold ml-1 text-slate-700 dark:text-slate-200" htmlFor={id}>
      {label}
    </label>
    <input
      className="w-full bg-white dark:bg-slate-900 border-none rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] text-slate-900 dark:text-white transition-all outline-none"
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

const SecondaryTestItem = ({ icon, label, colorClass, iconColor }: { icon: string, label: string, colorClass: string, iconColor: string }) => (
  <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl flex items-center justify-between shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-100 dark:border-slate-700/50 cursor-pointer active:scale-[0.98] transition-all">
    <div className="flex items-center gap-4">
      <div className={`w-10 h-10 rounded-xl ${colorClass} ${iconColor} flex items-center justify-center`}>
        <span className="material-symbols-rounded">{icon}</span>
      </div>
      <span className="font-bold">{label}</span>
    </div>
    <span><ChevronRight /></span>
  </div>
);

// --- Componente Principal ---

const StressTestDataEntry: React.FC = () => {
  // Estado para el formulario
  const [formData, setFormData] = useState({
    heartRate: '',
    vo2max: '',
    duration: ''
  });

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleCalculate = () => {
    console.log("Datos enviados:", formData);
    // Aquí iría la lógica de cálculo
  };

  return (
    <div className="bg-slate-50 dark:bg-[#0F172A] min-h-screen flex justify-center font-['Plus_Jakarta_Sans']">
      <main className="w-full max-w-[430px] bg-white dark:bg-slate-900 min-h-screen relative flex flex-col overflow-hidden shadow-2xl">
        
        {/* Decorative Background Blurs */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <header className="px-8 pt-6 pb-4 flex justify-between items-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <button className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="">
                <ChevronLeft />
              </span>
            </button>
            <p className="text-xl font-bold tracking-tight">Cardio Tests</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center overflow-hidden border border-indigo-200 dark:border-indigo-800">
            <img alt="User" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=User&background=6366F1&color=fff" />
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 px-6 pb-32 space-y-6 overflow-y-auto z-10">
          <section className="mt-4">
            <p className="text-slate-500 dark:text-slate-400 font-medium">Stress Test Entry</p>
            <h2 className="text-2xl font-extrabold mt-1">Prueba esfuerzo</h2>
          </section>

          {/* Form Card */}
          <section className="bg-indigo-50/50 dark:bg-slate-800/40 rounded-[2.5rem] p-6 border border-indigo-100 dark:border-indigo-900/20 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-none">
                <span ><SquareActivity /></span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Input metrics</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Please provide the test data</p>
              </div>
            </div>

            <form className="space-y-5">
              <InputField 
                label="Maximum Heart Rate (BPM)" 
                id="heart_rate" 
                placeholder="e.g. 185" 
                type="number"
                value={formData.heartRate}
                onChange={handleInputChange('heartRate')}
              />
              <InputField 
                label="VO2 Max (Estimated)" 
                id="vo2max" 
                placeholder="e.g. 45.5" 
                type="number"
                value={formData.vo2max}
                onChange={handleInputChange('vo2max')}
              />
              <InputField 
                label="Total Duration (Minutes)" 
                id="duration" 
                placeholder="e.g. 12:45" 
                value={formData.duration}
                onChange={handleInputChange('duration')}
              />

              <button 
                onClick={handleCalculate}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-none transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2" 
                type="button"
              >
                <span className="material-symbols-rounded">Calculate</span>
              </button>
            </form>
          </section>

          {/* Other Tests */}
          <section className="space-y-4">
            <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Other Tests</h4>
            <SecondaryTestItem 
              icon="sprint" 
              label="Prueba 12 metros" 
              colorClass="bg-orange-100 dark:bg-orange-900/20" 
              iconColor="text-orange-600 dark:text-orange-400" 
            />
            <SecondaryTestItem 
              icon="timer" 
              label="Test de Cooper" 
              colorClass="bg-emerald-100 dark:bg-emerald-900/20" 
              iconColor="text-emerald-600 dark:text-emerald-400" 
            />
          </section>
        </div>

        {/* Bottom Nav with Center FAB */}
        <NavBar active="tests" fixed />
      </main>
    </div>
  );
};

export default StressTestDataEntry;