// See the Tailwind configuration guide for advanced usage
// https://tailwindcss.com/docs/configuration
module.exports = {
  

  // add daisyUI plugin
  plugins: [
   
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ],
  

  // config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: false,
    rtl: false,
  },
  theme: {
    extend: {
      colors: require('daisyui/colors'),
    },
  },
  
  content: ['./js/**/*.js',
           '../lib/*_web.ex',
           '../lib/*_web/**/*.*ex'],

}
  
  
  
  

 
