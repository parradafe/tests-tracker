import { Routes, Route } from 'react-router'
import './App.css'
import { appRoutes } from './app-routes'
import Preview from './templates/preview'

function App() {
  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="/preview" element={<Preview />} />
    </Routes>
  )
}

export default App
