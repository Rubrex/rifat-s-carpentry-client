/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        woodDark: "#876445",
        woodLight: "#B09B71",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
