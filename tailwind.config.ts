import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1000px",
      xl: "1111px",
    },
    colors: {
      body: "hsl(217, 18%, 14%)",
      white: "hsl(0, 0%, 100%)",
      text: "hsl(0, 0%, 83%)",
      text_Light: "hsla(0, 0%, 83%, 0.6)",
      buttonBg: "hsl(217, 10%, 25%)",
      cyan: "hsl(160, 100%, 45%)",
      cyan_dark: "hsla(166, 100%, 34%, 0.4)",
      veryDark: "hsl(0, 0%, 0%)",
      gray: "hsl(217, 13%, 27%)",
      orange: "hsl(11, 80%, 60%)",
      jade: "hsl(160, 100%, 32%)",
      amber:"hsl(45, 100%, 50%)",
      blue: "#302de0",
      blue_dark:"#110dde",
      slate:"#cbced4"
    },
    fontFamily: {
      pop: ["var(--font-poppins)"],
    },
    extend: {
      rotate:{
        "180":"180deg"
      }
      
    },
  },
  plugins: [],
};
export default config;
