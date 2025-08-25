import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0c1830",
        ink: "#0a0a0a",
        sky: "#4e8fdf",
        cherry: "#e54447",
      },
      boxShadow: {
        glow: "0 0 40px 0 rgba(78,143,223,0.35)",
        glowRed: "0 0 40px 0 rgba(229,68,71,0.35)",
      },
      keyframes: {
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        rise:   { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        pop:    { from: { opacity: "0", transform: "scale(.96)" }, to: { opacity: "1", transform: "scale(1)" } },
      },
      animation: {
        "fade-in": "fadeIn .6s ease-out both",
        "rise-in": "rise .6s ease-out both",
        "pop-in":  "pop .6s ease-out both",
      },
      fontFamily: {
        sans: ["ui-sans-serif","system-ui","-apple-system","Segoe UI","Roboto","Inter","Arial","Noto Sans","sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
