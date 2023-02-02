/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightgreen: '#8cff1a',
        green: 'green',
        expgray: '#484848',
        backgroundgray: '#323232',
      },
    },
  },
  plugins: [],
}
