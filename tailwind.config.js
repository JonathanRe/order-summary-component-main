const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '495px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        'custom': ['"Red Hat Display"', 'sans-serif'],
      },
      backgroundColor: {
        'pale-blue': 'hsl(225, 100%, 94%)',
        'very-pale-blue': 'hsl(225, 100%, 98%)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
