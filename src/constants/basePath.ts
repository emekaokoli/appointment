export const API_URL =
  import.meta.env.MODE === 'development'
    ? '/api/'
    : 'https://appointment-api-6tdx.onrender.com/api/';
