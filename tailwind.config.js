/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: '#fbbf24',
          purple: '#7c3aed',
        },
        gray: {
          custom: '#1f2937',
          light: '#f3f4f6',
        }
      },
      spacing: {
        'button-x': '1.25rem', 
        'button-y': '0.5rem',  
        'nav-gap': '0.5rem',   
      },
      borderRadius: {
        button: '0.375rem',
        circle: '9999px',   
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
        cardHover: '0 4px 6px rgba(0,0,0,0.1)',
      },
      transitionProperty: {
        all: 'all',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-primary-yellow',
    'bg-primary-purple'
  ],
}
