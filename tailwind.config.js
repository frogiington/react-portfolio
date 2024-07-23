/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        cursice: ['Playwrite AR', 'cursive']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      },
      backgroundImage: {
        'border': "url('../assets/scalloping.png')"
      }

    },
  },
  plugins: [],
}