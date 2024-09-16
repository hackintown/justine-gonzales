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
        "2xl": "1240px",
      },
    },
    extend: {
      screens: {
        xs: "440px",
      },
      colors: {
        primary: "#1c1c1c",
        secondary: "#006400",
      },
      backgroundImage: {
        "gradient-navbar":
          "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,100,0,1) 100%)",
        "about-sec-gradient":
          "linear-gradient(90deg, rgba(46,46,18,1) 20%, rgba(62,56,20,0.8) 65%, rgba(63,57,20,0.9) 100%)",
        "glass-gradient":
          "linear-gradient(90deg, rgba(223, 215, 215, 0.3) 0%, rgba(212, 202, 202, 0.3) 50%, rgba(220, 209, 209, 0.3) 100%)",
      },
      backdropBlur: {
        glass: "blur(10px)",
      },
    },
  },
  plugins: [],
};
export default config;
