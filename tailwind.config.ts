import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sun: 'hsl(47, 91%, 58%)',
        moon: 'hsl(212, 13%, 82%)',
        darkModeBg: 'hsl(208, 31%, 12%)',
      },
      transitionTimingFunction: {
        slideEase: 'cubic-bezier(.4,-0.3,.6,1.3)',
      },
      transitionDuration: {
        bearSpeed: '10s',
      },
    },
  },
  plugins: [],
} satisfies Config;
