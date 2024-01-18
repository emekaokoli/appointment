import { Button } from '@/common/button';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

export function FallBackError() {

  const { reset } = useQueryErrorResetBoundary()
  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <div>
          There was an application error!
          <Button onClick={() => resetErrorBoundary()} variant='secondary'>Try again</Button>
        </div>
      )}
    >
    </ErrorBoundary>
  )
}