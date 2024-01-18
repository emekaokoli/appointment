import { Toaster } from '@/common/toaster.tsx'
import { FallBackError } from '@/errors/FallBackError.tsx'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: any, query) => {
      // 🎉 only show error toasts if we already have data in the cache
      // which indicates a failed background update
      if (query.state.data !== undefined) {
        console.error(`Something went wrong: ${error.message}`)
      }
    }
  })
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={FallBackError}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>,
)
