/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern-mobile": "url('../public/background/for_mobile.png')",
        "hero-pattern-desktop": "url('../public/background/for_desktop.png')",
      },
      colors: {
        primary: "#D85545",
        secondary: "#5CF8C3",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
