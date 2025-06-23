/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        naval: {
          DEFAULT: 'hsl(222, 47%, 11%)',
          light: 'hsl(222, 47%, 21%)',
          lighter: 'hsl(222, 47%, 31%)',
        },
        cream: {
          text: 'hsl(42, 100%, 95%)',
          card: 'hsl(42, 100%, 98%)',
        },
        teal: {
          DEFAULT: 'hsl(172, 61%, 45%)',
          dark: 'hsl(172, 61%, 35%)',
        }
      }
    },
  },
  plugins: [],
}