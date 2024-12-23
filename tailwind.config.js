/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        mysky: '#3EDDE6',
      },
    },
  },
  plugins: [],
}

