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
        'baking': {
          'cream': '#FFF8F0',
          'brown': '#5C4033',
          'light-brown': '#8B5E3C',
          'vanilla': '#FDF6E3',
          'cinnamon': '#B76E79',
          'wheat': '#F5E6D3',
          'caramel': '#C68E17',
          'chocolate': '#3C2A21',
          'butter': '#FFE5B4',
          'sugar': '#F5F5F5',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'pattern': "url('/pattern.svg')",
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
export default config; 