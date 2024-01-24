import { ToastProvider } from '@/common/toast'
import useAuth from '@/components/hooks/useAuth'
import { ErrorBoundary } from 'react-error-boundary'
import { useRoutes } from 'react-router-dom'
import './App.css'
import { FallBackError } from './errors/FallBackError'
import { routes } from './routes/routes'



function App() {
  const { isLoggedIn } = useAuth()
  const routing = useRoutes(routes(isLoggedIn));

  return (
    <main>
      <ToastProvider>
        <ErrorBoundary FallbackComponent={FallBackError}>
          {routing}
        </ErrorBoundary>
      </ToastProvider>
    </main>
  )
}

export default App
