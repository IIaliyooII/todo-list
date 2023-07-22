/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "verdant-green": "#1AA37A",
        "vendant-darker": "#0C6159",
        "mint-green": "#9DFFB3",
      },
    },
    fontFamily: {
      IBM: ["IBM Plex Mono", "monospace"],
    },
  },
  plugins: [],
};
