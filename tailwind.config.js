/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xsm: '512px',
      },
      colors: {
        lightgreen: '#8cff1a',
        green: 'green',
        backgroundgray: '#323232',
      },
    },
  },
  plugins: [],
}
