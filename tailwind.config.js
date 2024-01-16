/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
				'Micro Grotesk': ['Micro Grotesk', 'sans-serif'],
			},},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [import('@tailwindcss/typography')],
};