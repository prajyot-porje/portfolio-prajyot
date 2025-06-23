import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
   // Background gradients
   'bg-gradient-to-br',
   'from-purple-900',
   'via-blue-900', 
   'to-indigo-900',
   'from-emerald-600',
   'via-emerald-600',
   'to-emerald-600',
   'from-orange-900',
   'via-red-900',
   'to-pink-900',
   'from-slate-900',
   'via-gray-900',
   'to-zinc-900',
   // Text colors
   'text-white',
   'text-gray-100',
   'text-slate-300',
   'text-blue-300',
   'text-purple-300',
   'text-emerald-200',
   'text-orange-300',
   'text-slate-300',
   // Font weights and transforms
   'font-black',
   'font-light',
   'tracking-tighter',
   'tracking-wider',
   'transform',
   '-skew-y-2',
   'skew-y-1',
   // Text sizes
   'text-6xl',
   'text-8xl',
   'text-9xl',
   'text-4xl',
   'text-6xl',
   'text-7xl',
   'text-lg',
   // Responsive variants
   'sm:text-8xl',
   'md:text-9xl',
   'sm:text-6xl',
   'md:text-7xl',
 ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
