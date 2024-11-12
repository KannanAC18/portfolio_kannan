/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neumorphic: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff',
        neumorphicDark: '8px 8px 16px #0e0e0e, -8px -8px 16px #333333',
      },
    },
  },
  plugins: [],
  darkMode:"class"
};
