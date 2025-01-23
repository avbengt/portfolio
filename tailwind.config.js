/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './js/**/*.js',
    './css/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        fjord: ['Fjord One', 'serif'],
      },
    },
  },
  plugins: [],
}

