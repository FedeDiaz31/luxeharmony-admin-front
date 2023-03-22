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
    colors: {
      bgPrimaryColor: "#FCFBFD",
      bgSecondaryColor: "black",
      bgTertiaryColor: "#85734D",
      bgForthColor: "#dcdcdc",
      textPrimary: "#FEFEFE",
      textSecondary: "black",
      textTertiary: "#717171",
      buttonsPrimaryColor: "#85734D",
      buttonsSecondaryColor: "black",
      headerAndFooterColor: "#292728",
    }
  },
  plugins: [],
}