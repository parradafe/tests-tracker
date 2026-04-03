import { LayoutTemplate, LibraryBig, UserCog } from 'lucide-react'
import { useNavigate } from 'react-router'

type NavBarTab = 'tests' | 'records' | 'profile'

type NavBarProps = {
  active?: NavBarTab
  fixed?: boolean
}

export const NavBar: React.FC<NavBarProps> = ({ active = 'tests', fixed = true }) => {
  const navigate = useNavigate()

  return (
    <nav
      className={`${
        fixed ? 'fixed inset-x-0 mx-auto w-full max-w-md' : 'absolute left-0 right-0'
      } bottom-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 px-8 py-4 flex justify-between items-center rounded-t-4xl z-50`}
    >
      <button
        type="button"
        onClick={() => navigate('/tests-home')}
        className={`flex flex-col items-center gap-1 ${active === 'tests' ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
      >
        <span className="material-icons-round">
          <LayoutTemplate />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wide">Tests</span>
      </button>

      <button
        type="button"
        onClick={() => navigate('/tests-history')}
        className={`flex flex-col items-center gap-1 ${active === 'records' ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
      >
        <span className="material-icons-round">
          <LibraryBig />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wide">Records</span>
      </button>

      <button
        type="button"
        onClick={() => navigate('/preview')}
        className={`flex flex-col items-center gap-1 ${active === 'profile' ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
      >
        <span className="material-icons-round">
          <UserCog />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wide">Profile</span>
      </button>
    </nav>
  )
}