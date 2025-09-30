/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      
      spacing: {
        'header-x': '5rem', 
      },
      
      colors: {
        'primary': {
          yellow: '#fbbf24', 
          purple: '#7c3aed', 
        },
        'gray': {
          custom: '#1f2937', 
        }
      },
     
      padding: {
        'button-x': '1.25rem', 
        'button-y': '0.5rem', 
      },
     
      borderRadius: {
        'button': '0.375rem', 
      }
    },
  },
  plugins: [],
}