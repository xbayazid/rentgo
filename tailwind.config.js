/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'single-property-hero': "url('https://i.ibb.co/C7svDDw/property-header-1.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

