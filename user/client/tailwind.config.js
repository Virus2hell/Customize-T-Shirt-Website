/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust if needed
  ],
  theme: {
    extend: {
      screens: {
        'xxl': '1280px', // custom screen
      },
    },
  },
  plugins: [],
}
