import axios, { AxiosError } from 'axios';

interface ApiErrorResponse {
  code?: number;
  error?: string;
}

const handleApiError = (error: AxiosError): string => {
  if (axios.isAxiosError(error)) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[Service Error]', { error });
    }

    const response: ApiErrorResponse = error?.response?.data ?? {};
    const statusCode = response.code;
    const errMessage = response.error;

    switch (statusCode) {
      case 400:
        return errMessage || 'Bad request. Please check your input.';
      case 401:
        return errMessage || 'Unauthorized. Please authenticate.';
      case 403:
        return (
          errMessage ||
          'Forbidden. You do not have permission to access this resource.'
        );
      case 404:
        return (
          errMessage || 'Not found. The requested resource could not be found.'
        );
      case 500:
        return errMessage || 'Internal server error. Please try again later.';
      default:
        return 'An error occurred. Please try again.';
    }
  } else {
    return 'An unexpected error occurred. Please try again.';
  }
};

export default handleApiError;
