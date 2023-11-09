/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Share Tech"', "sans-serif"],
    },
    
    extend: {

      colors: {
        'primarytheme':'#fffad6',
        'secondarytheme':'#374450',
        'accenttheme' : '#242a22'
      },

    },
  },
  plugins: [],
}

