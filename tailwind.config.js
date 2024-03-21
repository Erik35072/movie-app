/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        animation: {
          "bounce-sm": "bounce-sm 1s infinite"
        },
        keyframes: {
          "bounce-sm": {
            "0%, 100%": { transform: "translateY(-10%)", "animation-timing-function": "cubic-bezier(0.8,0,1,1)" },
            "50%": { transform: "none", "animation-timing-function": "cubic-bezier(0,0,0.2,1)" }
          }
        },
        colors: {
          dark: {
            main: "#161616",
            secondary: "#262626"
          },
          light: {
            main: "#C0C0C0"
          },
          custom: {
            main: "#F35034"
          }
        },
        gridTemplateColumns: {
          main: "2fr 1fr 1fr",
          "skills-section": "repeat(7, 1fr)"
        },
        gridTemplateRows: {
          layout: "auto 1fr auto",
          main: "auto 160px 160px 130px auto 160px 160px auto auto"
        },
        fontFamily: {
          main: ["Inter"]
        }
      }
    }
  },
  plugins: []
};
