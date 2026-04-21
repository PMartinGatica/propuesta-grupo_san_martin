/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#0D2B45',
        'navy-soft': '#1A3B5C',
        teal: '#0097A7',
        'teal-dark': '#006C75',
        'teal-light': '#E0F5F7',
        gold: '#C9963A',
        'gold-soft': '#F3E2BE',
        ink: '#121212',
        paper: '#FAFAFA',
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
      },
      borderRadius: {
        '4xl': '3rem',
      },
      letterSpacing: {
        separated: '0.35px',
      },
      padding: {
        15: '60px',
      },
      transitionDuration: {
        DEFAULT: '400ms',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': { display: 'none' },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      })
    },
  ],
}
