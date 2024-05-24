

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        body:['ubuntu']
      },
      colors:{
        'blue': '#2a2185',
        'white':'#fff',
        'gray':'f5f55f',
        'black1':'#222',
        'black2':'#999',
      },
      boxShadow: {
        'custom': '0 7px 25px rgba(0, 0, 0, 0.8)',
      },
      gridTemplateColumns: {
        '2fr-1fr': '2fr 1fr', // Custom class for 2fr 1fr
      }
      
      
    },
  },
  plugins: [],
}

