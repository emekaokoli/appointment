import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import ErrorPage from './components/NotFound'
import ProtectedRoutes from './components/ProtectedRoutes'
import { UserLogin } from './components/user-login'

function App() {

  return (
    <main>
      <Routes>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/" element={<Navigate to="/login" />} />

        {/* private routes */}
        <Route
          path="/appointments"
          element={
            <ProtectedRoutes>
              <div>appointments</div>
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<ErrorPage />} />

      </Routes>

    </main>
  )
}

export default App
