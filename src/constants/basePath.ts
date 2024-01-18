export const API_URL =
  import.meta.env.MODE === 'development'
    ? '/api/v1/'
    : 'http://IP here:9001/api/v1/';
