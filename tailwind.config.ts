import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'persian-green': '#00A896',
        'teal': '#028090',
        'rich-black': '#101720',
        'pearl': '#E6E1C5',
        'ivory': '#FFFFF0',
      },
      fontFamily: {
        constantia: ['Constantia', 'serif'],
        gabriola: ['Gabriola', 'sans-serif'],
      },
      screens:{
        xs: "320px", 
      }
    },
  },
  plugins: [],
} satisfies Config;
