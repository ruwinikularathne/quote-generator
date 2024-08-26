import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'ray-run': 'ray 2s linear infinite',
      },
      keyframes: {
        ray: {
          '0%': { backgroundPosition: '0% 50%', backgroundSize: '200% 100%' },
          '100%': { backgroundPosition: '100% 50%', backgroundSize: '200% 100%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
