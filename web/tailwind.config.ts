import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "proxima-nova": ["proxima-nova", "sans-serif"],
      "proxima-nova-condensed": ["proxima-nova-condensed", "sans-serif"],
      calluna: ["calluna", "serif"],
    },
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
      general: { white: "#ffffff", black: "#000000" },
      destructive: { "300": "#f36356", "400": "#e44629" },
    },
    fontSize: {
      xs: "10px",
      sm: "13px",
      base: "14px",
      lg: "16px",
      xl: "22px",
      "2xl": "56px",
    },
    boxShadow: {
      brown: "0px 8px 8px 0px rgba(51,45,33,0.02)",
      "Shadow Header":
        "0px 13px 28px 0px rgba(8,10,14,0.01), 0px 51px 51px 0px rgba(8,10,14,0.01), 0px 115px 69px 0px rgba(8,10,14,0.01), 0px 205px 82px 0px rgba(8,10,14,0), 0px 320px 90px 0px rgba(8,10,14,0)",
      "Shadow Image":
        "0px 4px 9px 0px rgba(8,10,14,0.02), 0px 16px 16px 0px rgba(8,10,14,0.02), 0px 35px 21px 0px rgba(8,10,14,0.01), 0px 63px 25px 0px rgba(8,10,14,0), 0px 98px 28px 0px rgba(8,10,14,0)",
      "blue shadow":
        "-15px 17px 50px 0px rgba(32,46,70,0.1), -61px 67px 91px 0px rgba(32,46,70,0.09), -138px 151px 123px 0px rgba(32,46,70,0.05), -246px 268px 146px 0px rgba(32,46,70,0.02), -384px 419px 159px 0px rgba(32,46,70,0.01)",
      "more prominent blue shadow":
        "-26px 15px 66px 0px rgba(5,13,31,0.18), -105px 59px 120px 0px rgba(5,13,31,0.15), -236px 133px 162px 0px rgba(5,13,31,0.09), -419px 237px 192px 0px rgba(5,13,31,0.03), -654px 370px 210px 0px rgba(5,13,31,0)",
      cards:
        "0px 21px 47px 0px rgba(184,184,184,0.1), 0px 85px 85px 0px rgba(184,184,184,0.09), 0px 190px 114px 0px rgba(184,184,184,0.05), 0px 338px 135px 0px rgba(184,184,184,0.01), 0px 529px 148px 0px rgba(184,184,184,0)",
    },
    borderRadius: {
      "rounded-0": "0rem",
      "rounded-1": "0.07142857142857142rem",
      "rounded-2": "0.10714285714285714rem",
      "rounded-3": "0.35714285714285715rem",
      "rounded-4": "1.7142857142857142rem",
      "rounded-5": "2.142857142857143rem",
      "rounded-6": "4.081590924944196rem",
      "rounded-7": "71.35714285714286rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
