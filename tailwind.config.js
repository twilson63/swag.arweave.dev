import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
  plugins: [typography, daisyui],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      "roboto-mono": ["Roboto Mono", "monospace"],
      "work-sans": ["Work Sans", "sans-serif"]
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#293241",
          secondary: "#FF8500",
          accent: "#F2F3F4",
          neutral: "#FCFCFC",
          "base-100": "#2A303C",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272"
        }
      }
    ]
  }
};
