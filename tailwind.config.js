/** @type {import('tailwindcss').Config} */
export default {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-project/' : '/',
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

