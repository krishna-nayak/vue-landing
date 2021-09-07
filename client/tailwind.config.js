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
      translate: {
        out: "1000px",
      },
      animation: {
        "circle-expand": "circle-expand 8s linear 0.3s infinite",
        "card-enter": "card-enter 1.8s ease forwards",
        "card-motion": "card-motion 2s ease-in-out 1.9s infinite alternate",
        "motion-sphere-large": "motion-sphere 10s linear  infinite forwards",
        "motion-sphere-normal": "motion-sphere 12s linear 0.52s infinite reverse",
        "motion-sphere-small": "motion-sphere 8s linear 0.3s infinite forwards",
      },
      keyframes: {
        "motion-sphere": {
          from: {
            transform: "translate(-10%, 0%)",
          },
          "25%": {
            transform: "translate(-80px, -100%)",
          },
          "50% ": {
            transform: "translate(40%, -120%)",
          },

          "75% ": {
            transform: "translate(100%, -50%)",
          },
          to: {
            transform: "translate(-10%, 0%)",
          },
        },

        "card-enter": {
          to: {
            transform: "translateY(0%)",
            transition: "all 1s",
          },
        },
        "card-motion": {
          from: {
            transform: "translateY(0%)",
          },
          to: {
            transform: "translateY(15%)",
          },
        },
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
        ".margin-top": {
          marginTop: "calc(100vh - 5rem)",
        },
      };

      const width = {
        ".w-30-ch": {
          width: "30ch",
        },
        ".w-screen-vw-50": {
          width: "50vw",
        },
        ".h-850": {
          height: "850px",
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
