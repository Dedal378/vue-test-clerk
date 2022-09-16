/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  plugins: [],
  safelist: 'p-1 p-2 p-3 p-4 p-5',
  theme: {
    extend: {
      transitionProperty: { width: 'width' },
      fontFamily: {
        sans: ['Inter var'],
      },
    },
  },
}
