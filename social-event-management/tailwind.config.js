/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      brightness: {
        '125': '1.25'
      }
    },
  },
  plugins: [require("daisyui")],
}

