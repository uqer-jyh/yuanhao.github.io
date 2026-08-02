import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Custom colors for a lively academic website
        primary: {
          light: '#6a1b9a', // A lighter shade of purple
          main: '#4a148c', // Deep Purple - Material Design inspired, professional yet vibrant
          dark: '#38006b',
          contrastText: '#ffffff',
        },
        secondary: {
          light: '#ff7961', // Coral - Playful and contrasting
          main: '#f44336', // Red - Strong accent
          dark: '#ba000d',
          contrastText: '#ffffff',
        },
        // You can add more custom colors here
        accent: {
          light: '#4dd0e1', // Cyan - Fresh and modern
          main: '#00bcd4',
          dark: '#00838f',
        },
        neutral: {
          light: '#f5f5f5',
          main: '#e0e0e0',
          dark: '#bdbdbd',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use Inter as the primary sans-serif font
        // You can add a more "lively" display font here if desired, e.g.,
        // display: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;
