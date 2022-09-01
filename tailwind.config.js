/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          light: '#3a5c9d',
          DEFAULT: '#1F4690',
          dark: 'red'
        },
        'secondary': {
          light: '#eb7714',
          DEFAULT: '#EB7714',
          dark: 'red'
        },
      }
    },
  },
  plugins: [],
}