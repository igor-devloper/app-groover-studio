/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        blue: {
          700: '#1A2980'
        },
        cyan: {
          500: '#26D0CE'
        },
        gray: {
          600: '#424147'
        }
    },
    backgroundImage: {
      'blur': "url(./assets/blur.png)"
    },
    fontFamily: {
      'head': ['Poppins', 'sans-serif'],
      'main' : ['Abel', 'sans-serif'], 
    },
   
    }
    
  },
  plugins: [],
}
