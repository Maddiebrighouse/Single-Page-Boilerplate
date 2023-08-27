/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        strobe: {
          '50%': { background: 'black', color: 'white' }
        },
        
        animation: {
          strobe: 'strobe 200ms steps(1,end) infinite',
        }
      }
    },
  },
  plugins: [],
}

