module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      mono: ["Space Mono", "monospace"],
    },
    extend: {
      colors: {
        strongCyan: "hsl(172, 67%, 45%)",
        darkCyan: "hsl(183, 100%, 15%)",
        veryDarkGrayCyan: "hsl(186, 14%, 43%)",
        darkGrayCyan: "hsl(184, 14%, 56%)",
        lightGrayCyan: "hsl(185, 41%, 84%)",
        veryLightGrayCyan: "hsl(189, 41%, 97%)",
      },
    },
  },
  plugins: [],
}
