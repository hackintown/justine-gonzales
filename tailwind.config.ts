import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        primary: "#1c1c1c",
        secondary: "#006400",
      },
      backgroundImage: {
        "gradient-navbar":
          "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,100,0,1) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
