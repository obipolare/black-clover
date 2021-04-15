module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-gray": "#f3f4f6",
        "dark-banner": "#1B2831",
        "dark-main": "#192229",
        "dark-footer": "#121A21",
        "dark-header": "#212E36",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
