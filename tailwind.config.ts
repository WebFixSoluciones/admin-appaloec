import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6fcf0',
          100: '#ccf8e1',
          200: '#99f2c3',
          300: '#66eba5',
          400: '#33e587',
          500: '#00df68', // Vibrant 1000% Green
          600: '#00b353',
          700: '#00863e',
          800: '#00592a',
          900: '#002d15',
        },
        ink: {
          50: '#f9f9f9',
          100: '#f2f2f2',
          200: '#e6e6e6', // Borders
          300: '#cccccc',
          400: '#b3b3b3',
          500: '#999999',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333', // Secondary text
          900: '#1a1a1a', // Primary text
        },
        surface: '#ffffff',
        background: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'none': 'none',
      },
    },
  },
  plugins: [],
};
export default config;
