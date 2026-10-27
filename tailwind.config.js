/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
   theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#fafbf9",
        primary: "#1c2e1e",
        sidebar: "#f7f4eb",
      },
    },
  },
  plugins: [],
};