export const API_URL =
  import.meta.env.MODE === 'development'
    ? '/api/'
    : 'https://appointment-api-1uq8.onrender.com/api/';
