/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './pages/**/*.{html,js}',
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        }
      }
    },
  },
  plugins: [],
}
