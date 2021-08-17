const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addComponents }) => {
      const screen = {
        ".screen": {
          minHeight: "calc(100vh - 5rem)",
        },
      };
      const width = {
        ".w-100": {
          width: "25rem",
        },
        ".w-104": {
          width: "26rem",
        },
        ".w-116": {
          width: "29rem",
        },
        ".w-30-ch": {
          width: "30ch",
        },
      };
      addComponents(screen);
      addComponents(width);
    }),
  ],
};
