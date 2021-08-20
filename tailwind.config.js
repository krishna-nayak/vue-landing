const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  // mode: "jit",
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      width: {
        100: "25rem",
        104: "26rem",
        116: "29rem",
        md: "37rem",
        lg: "64rem",
      },
      zIndex: {
        "-1": "-1",
      },
      animation: {
        "circle-expand": "circle-expand 8s linear 0.3s infinite",
      },
      keyframes: {
        "circle-expand": {
          "0%": {
            transform: "translate(-40%, 40%) scale(0.8)",
          },
          "33%": {
            transform: "translate(-50%, 60%) scale(1)",
          },
          "66%": {
            transform: "translate(-60%, 40%) scale(0.9)",
          },
          "100%": {
            transform: "translate(-40%, 40%) scale(0.8)",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus"],
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
        ".h-screen-vw-50": {
          height: "50vw",
        },
      };
      const width = {
        ".w-30-ch": {
          width: "30ch",
        },
        ".w-screen-vw-50": {
          width: "50vw",
        },
      };

      const borders = {
        ".border-b-1": {
          borderBottomWidth: "0.0625rem",
        },
      };
      addComponents(screen);
      addComponents(width);
      addComponents(borders);
    }),
  ],
};
