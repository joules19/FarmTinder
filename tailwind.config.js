/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },


  },
  plugins: [],
}

