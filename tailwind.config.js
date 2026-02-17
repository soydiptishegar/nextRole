/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        greenCustom: '#10b917', // green with opacity
      },
    },
  },
  plugins: [],
}