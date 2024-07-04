/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/html/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
});
