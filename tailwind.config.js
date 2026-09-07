/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6200EE',
        secondary: '#311B92',
        tertiary: '#BB86FC',
        neutral: '#FDFBFF',
        dark: '#120F1F',
        panel: '#1A1430',
      },
      boxShadow: {
        glow: '0 0 40px rgba(98, 0, 238, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
