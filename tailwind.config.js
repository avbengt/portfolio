/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',       // Main HTML file
    './js/**/*.js',       // All JavaScript files in the js folder and subfolders
    './css/**/*.css',     // All CSS files in the css folder and subfolders
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}

