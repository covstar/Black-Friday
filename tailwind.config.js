/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}',
            './**/*.{html,js}',],
 theme: {
     backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '6rem',
    },
    extend: {
      // font family
    fontFamily:{
      'Oswald': ['Oswald'],
      'Lato': ['Lato'],
      'Raleway': ['Raleway'],
    },
    dropShadow: {
        'red': '0 1px 2px rgb(185, 28, 28)',
        'black': '0 3px 2px rgb(0, 0, 0)',
      },
      padding: {
        '3%': '3%',
        '5%': '5%',
        '10%': '10%',
        '15%': '15%',
        '17%': '17%',
        '20%': '20%',
        '22%': '22%',
        '27%': '27%',
        '25%': '25%',
        '24%': '24%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
      },
      
    // media quries
       screens: {
      'xs': {'max': '440px'},
      'sm': {'max': '720px'},
      // => @media (max-width: 639px) { ... }
      'tb': {'min': '721px', 'max': '1290px'},
      // => @media (min-width: 768px and max-width: 1023px)
      'md': '722px',
      // => @media (min-width: 768px) { ... }
    },
    backgroundImage: {
        'img': "url('../images/bg-pattern.svg')",
        'headImg': "url('../images/pattern-circles.svg')",

      }
    },
  },
  plugins: [],
}