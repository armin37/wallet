/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#084a83',
      primary_shade: '#0b2d4d',
      secondary: '#539ddb',
      secondary_shade: '#356893',
      black: colors.black,
      white: colors.white,
      neutral: colors.gray
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

