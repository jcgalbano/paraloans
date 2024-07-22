import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      proximaNova: ["proxima-nova", "sans-serif"],
      proximaNovaCondensed: ["proxima-nova-condensed", "sans-serif"],
      calluna: ["calluna", "serif"],
    },
    extend: {
      colors: {
        neutral: {
          "50": "#f9f9fb",
          "100": "#e1e3ea",
          "200": "#dcdee2",
          "300": "#c8cace",
          "400": "#96979c",
          "500": "#818287",
          "600": "#696a72",
          "700": "#4f5054",
          "800": "#1d202b",
          "900": "#080a0f",
        },
        primary: {
          "50": "#e6fffc",
          "300": "#09c7b0",
          "400": "#01b49f",
          "500": "#00a793",
          "600": "#006f62",
          "700": "#026244",
          "900": "#012b1e",
        },
        errors: { "600": "#E44629" },
        general: { white: "#ffffff", black: "#000000" },
        destructive: { "300": "#f36356", "400": "#e44629" },
      },
      fontSize: {
        xs: "10px",
        sm: "13px",
        base: "14px",
        lg: "16px",
        xl: "22px",
        h1: "38px",
        "2xl": "56px",
      },
      borderRadius: {
        rounded5px: "5px",
      },
      screens: {
        xs: "390px",
        "2sm": "900px",
        "3xl": "1700px",
        "4xl": "1920px",
        "5xl": "2560px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: { mdButton: "12px 24px", lgButton: "17px 34px" },
    },
  },
  plugins: [],
};
export default config;
