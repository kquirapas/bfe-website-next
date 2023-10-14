/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './src/helpers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'Montserrat': ["Montserrat", ...defaultTheme.fontFamily.sans],
      'Montserrat-Subrayada': ['Montserrat Subrayada'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}

