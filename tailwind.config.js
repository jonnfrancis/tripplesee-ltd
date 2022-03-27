// const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  darkMode:'class',
  theme: {
    // screens: {
    //   sm: '600px'
    // },
    // colors:{
    //   indigo: {
    //     light: '#b3bcf5',
    //     DEFAULT: '5c6ac4',
    //     dark: '#202e78' 
    //   },
    // },
    // spacing:{
    //   1: '0.35rem'
    // },
    extend: {
      // screens: {
      //   'xl': '1600px'
      // },
      backgroundImage: {
        "bg-light": "url('../src/media/grad.png')",
        "bg-dark": "url('../src/media/bg.png')",
      },
      backgroundColor: {
        "dark": "#0e0e0e",
        "blacker": '#151417'
      }, 
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
      backgroundColor: ["dark"],
  //     backgroundColor: ['active'],
    },
  },
  plugins: [
    // plugin(function({addUtilities}){
    //   const newUtilities = {
    //     '.scale-1': {
    //       transform: 'scale(5)'
    //     },
    //   }
    //   addUtilities(newUtilities,{
    //     variants:['responsive','hover']
    //   })
    // }),
    // plugin(function({addComponents}) {
    //   const button = {
    //     '.btn': {
    //       padding: '.5rem 1rem',
    //       fontWeight: '600'
    //     },
    //     '.btn-blue': {
    //       color: '#fff',
    //       '&:hover':{
    //         color: '#000',
    //       }
    //     }
    //   }
    //   addComponents(button,{
    //     variants:['hover']
    //   })
    // })
  ],
}
