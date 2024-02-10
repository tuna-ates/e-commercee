/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{html,js}",
    ,
  ],
  theme: {
    extend: {
      screens: {
        '2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'xl': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }

        'lg': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }

        'md': { 'max': '950px' },
        // => @media (max-width: 767px) { ... }

        'sm': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }
        'ozel': { 'min': '250px', 'max': '950px' },
        'ozel2': { 'min': '767px', 'max': '1080px' },
        'ozel3': { 'min': '950px', 'max': '1080px' },
      }
    },
  },
  plugins: [],
  darkMode: "class",
})

