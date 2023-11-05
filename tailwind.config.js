/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bg_navcolor': '#272626', // Define your custom color
      },
      boxShadow: {
        'card3xl': '0px 4px 12px 0px rgba(0, 0, 0, 0.18)',
      }
    },
  },
  plugins: [],
}

