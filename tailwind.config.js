/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '229px': '229px',
      },
      height: {
        '36px': '36px',
      },
      margin: {
        '25px': '25px',
      },
      padding: {
        '5px': '5px',
      },
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
        'text-navbar': '#5E5873',
        'footer': '#6E6B7B',
        'title-content': '#6E6B7B',
        'button': '#4299E1',
        'btn': {
          primary: '#4299E1',
          DEFAULT: '#4299E1',
          warning: '#FAB215',
          error: '#E53E3E',
        },  
        'base-page': '#EDF2F7',      
        'text-table': '#5E5873',
        'thead': '#F3F2F7',
        'color-tabs': {
          active: '#EB7714',
          DEFAULT: '#B9B9C3',
        },
      }
    },
  },
  plugins: [],
}
