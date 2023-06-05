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
      colors: {
        'primary-1': "#008067",
        "primary-2": "#008737",
        "primary-3": "#00491E",
        "primary-4": "#016E2A",
        "primary-5": "#01A985",

        'dark-1': "#282828",
        'dark-2': "#353535",

        "gray-1": "#7A7A7A",
        "gray-2": "#808191",
        "gray-3": "#f4f4f4",
        "gray-4": "#f8f8f8",
        "gray-5": "#BFBFBF",
        "gray-6": "#A9A9A9",
      },

    },


  },
  plugins: [],
}

