/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/html/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      riverbed: '#424b5f',
      padua: '#E1FFE8',
      malachite: '#0CBD33',
    },
    extend: {
      fontSize: {
        xxs: '0.625rem',
      },
    },
  },
  plugins: [],
});
