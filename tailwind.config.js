/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1440px',
      },
    },
    colors: {
      darkprimary: '#3D874E',
      primary: '#103C1B',
      background: '#F5F5F5',
      light: '#FFFFFF',
      dark: '#333333',
      black: '#000000',
      secondary: '#FFA500',
      link: '#103C1B',
      subtitle: '#6E8877',
      neutral: '#EEEEE9',
      lightprimary: '#E7FBEC',
    },
    extend: {
      fontFamily: {
        microGrotesk: ['Micro Grotesk', 'sans-serif'],
        generalSans: ['General Sans', 'sans-serif'],
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [import('@tailwindcss/typography')],
};
