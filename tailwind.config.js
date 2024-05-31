/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px", //@media (min-width: 640px) { ... }
      md: "768px", //@media (min-width: 768px) { ... }
      lg: "1024px", //@media (min-width: 1024px) { ... }
      xl: "1280px", //@media (min-width: 1280px) { ... }
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
    },
    animation: {
      text: "text 5s ease infinite",
      typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
      bounce: "bounce 1s infinite",
    },
    keyframes: {
      bounce: {
        "0%": {
          transform: "translateY(-25%)",
        },
        "50%": {
          transform: "translateY(0)",
        },
        "100%": {
          transform: "translateY(-25%)",
        },
      },
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden",
        },
        "100%": {
          width: "100%",
        },
      },
      blink: {
        "50%": {
          borderColor: "transparent",
        },
        "100%": {
          borderColor: "white",
        },
      },
      text: {
        "0%, 100%": {
          "background-size": "200% 200%",
          "background-position": "left center",
        },
        "50%": {
          "background-size": "200% 200%",
          "background-position": "right center",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
