/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern-mobile": "url('./public/background/for_mobile.png')",
        "hero-pattern-desktop": "url('./public/background/for_desktop.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
