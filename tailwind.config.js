const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

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

        'hover-primary': colors.blue[700],
				'hover-secondary': '#eba714',
				'hover-success': colors.green[700],
				'hover-danger': colors.red[700],
				'hover-warning': colors.yellow[600],
				'hover-info': colors.blue[500],
				'hover-light': colors.gray[300],
				'hover-dark': colors.gray[900],
				'hover-link': colors.gray[100],

				'focus-primary': colors.blue[700],
				'focus-secondary': '#eba714',
				'focus-success': colors.green[700],
				'focus-danger': colors.green[700],
				'focus-warning': colors.yellow[600],
				'focus-info': colors.blue[500],
				'focus-light': colors.gray[300],
				'focus-dark': colors.gray[900],
				'focus-link': colors.gray[100],

				'active-primary': colors.blue[800],
				'active-secondary': '#E87009',
				'active-success': colors.green[800],
				'active-danger': colors.green[800],
				'active-warning': colors.yellow[700],
				'active-info': colors.blue[600],
				'active-light': colors.gray[400],
				'active-dark': colors.gray[900],
				'active-link': colors.gray[200],
      },

      textColor: {
				primary: colors.blue[600],
				secondary: '#eB7714',
				success: colors.green[600],
				danger: colors.red[600],
				warning: colors.yellow[500],
				info: colors.blue[400],
				light: colors.gray[200],
				dark: colors.gray[800],
				link: colors.blue[800],
			},
			backgroundColor: {
				primary: colors.blue[600],
				secondary: '#eB7714',
				success: colors.green[600],
				danger: colors.red[600],
				warning: colors.yellow[500],
				info: colors.blue[400],
				light: colors.gray[200],
				dark: colors.gray[800],
				link: colors.transparent,
			},
			borderColor: {
				primary: colors.blue[600],
				secondary: '#eB7714',
				success: colors.green[600],
				danger: colors.red[600],
				warning: colors.yellow[500],
				info: colors.blue[400],
				light: colors.gray[200],
				dark: colors.gray[800],
			},
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`)
      })
    })
  ],
}
