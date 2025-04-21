/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : "#5f6FFF",
        'secondary' : '#04877e'
      },
      gridTemplateColumns :{
        'auto' :'repeat(auto-fill, minmax(180px, 2fr))'
      }
    },
  },
  plugins: [],
}