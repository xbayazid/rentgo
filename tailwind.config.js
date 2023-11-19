/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'single-property-hero': "url('https://i.ibb.co/C7svDDw/property-header-1.jpg')",
        'transport-banner-bg': "url('https://i.ibb.co/JjxZD8g/shifting-banner.webp')",
        'transport-package-img': "url('https://i.ibb.co/2sDQgNx/owner-banner.webp')",
      }
    },
  },
  plugins: [require("daisyui")],
}

