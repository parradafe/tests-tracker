import { Smartphone } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router'
import { appRoutes } from '../app-routes'
import { NavBar } from '../components/navBar'

const previewRoutes = [
  {
    path: '/preview',
    label: 'Preview',
  },
  ...appRoutes.map(({ path, label }) => ({ path, label })),
]

function Preview() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 text-slate-900">
      <div className="mx-auto relative flex min-h-[calc(100vh-3rem)] w-full max-w-sm flex-col rounded-4xl border border-slate-200 bg-white p-5 pb-24 shadow-[0_20px_70px_-30px_rgba(15,23,42,0.45)]">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
            <Smartphone size={22} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Mobile Preview</p>
            <h1 className="text-xl font-bold">Rutas disponibles</h1>
          </div>
        </div>

        <p className="mb-5 text-sm leading-6 text-slate-600">
          Usa estos accesos rápidos para abrir cada pantalla en una vista pensada principalmente para pruebas desde móvil.
        </p>

        <div className="flex flex-1 flex-col gap-3 overflow-y-auto pb-1">
          {previewRoutes.map((route) => {
            const isActive = location.pathname === route.path

            return (
              <button
                key={route.path}
                type="button"
                onClick={() => navigate(route.path)}
                className={`w-full rounded-2xl border px-4 py-4 text-left transition-all ${
                  isActive
                    ? 'border-slate-900 bg-slate-900 text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-900 active:scale-[0.99]'
                }`}
              >
                <span className="block text-base font-semibold">{route.label}</span>
                <span className={`mt-1 block text-xs ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                  {route.path}
                </span>
              </button>
            )
          })}
        </div>

        <NavBar active="profile" fixed />
      </div>
    </div>
  )
}

export default Preview