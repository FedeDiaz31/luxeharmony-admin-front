/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobilXS': '420px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1380px',
    },
  },
  plugins: [],
}