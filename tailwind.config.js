/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          peach: "#E7816B",
          black: "#1D1C1E",
          white: "#FFFFFF",
        },
        secondary: {
          lightPeach: "#FFAD9B",
          darkGrey: "#333136",
          lightGrey: "#F1F3F5",
        },
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      fontSize: {
        h1: ["48px", { lineHeight: "48px" }],
        h2: ["40px", { lineHeight: "48px", letterSpacing: "0.02em" }],
        h3: ["20px", { lineHeight: "26px", letterSpacing: "0.05em" }],
        nav: ["14px", { lineHeight: "14px", letterSpacing: "2px" }],
        body: ["16px", { lineHeight: "26px" }],
      },
      margin: {
          mxcm: "164px",
          mxtm: "39px",
          mxmm: "35px",
          mydtm: "64px",
          mymobm: "24px",
      },
    },
  },
  plugins: [],
};
