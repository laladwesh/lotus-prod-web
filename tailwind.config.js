// tailwind.config.js
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          archivo: ["var(--font-archivo)", "sans-serif"],
          inter: ["var(--font-inter)", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  