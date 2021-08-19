const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  // mode: "jit",
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  variants: {
    extend: {
      width: ["responsive"],
      gradientColorStops: ["active", "group-hover", "hover"],
    },
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
