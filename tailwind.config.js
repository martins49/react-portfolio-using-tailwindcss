/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        myPopins: ["'Inter', sans-serif"],
        myLobster: ["'Lobster', cursive"]
      }
    },
  },
  plugins: [],
}