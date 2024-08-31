// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//       animation: {
//         'ray-run': 'ray 2s linear infinite',
//         'spin-slow': 'spin 10s linear infinite',
//       },
//       keyframes: {
//         ray: {
//           '0%': { backgroundPosition: '0% 50%', backgroundSize: '200% 100%' },
//           '100%': { backgroundPosition: '100% 50%', backgroundSize: '200% 100%' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;


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
        'spin-slow': 'spin 10s linear infinite',
        'move-particles': 'move 10s linear infinite',
      },
      keyframes: {
        ray: {
          '0%': { backgroundPosition: '0% 50%', backgroundSize: '200% 100%' },
          '100%': { backgroundPosition: '100% 50%', backgroundSize: '200% 100%' },
        },
        move: {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: 1 },
          '50%': { transform: 'translateX(-50px) translateY(-50px)', opacity: 0.7 },
          '100%': { transform: 'translateX(0) translateY(0)', opacity: 1 },
        },
        smallMove: {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: 1 },
          '50%': { transform: 'translateX(-20px) translateY(-20px)', opacity: 0.5 },
          '100%': { transform: 'translateX(0) translateY(0)', opacity: 1 },
        },
      },
      colors: {
        particleBlue: 'rgba(173, 216, 230, 0.5)', 
      },
    },
  },
  plugins: [],
};

export default config;

