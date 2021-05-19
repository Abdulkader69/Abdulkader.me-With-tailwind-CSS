module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: '1rem',
    //     // sm: '1rem',
    //     // lg: '2rem',
    //     // xl: '2rem',
    //   },
    // },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '980px',
      xl: '1280px',
      '2xl': '1410px',
    },
    minHeight: {
      'without-header': 'calc(100vh - 118px)',
    },
    extend: {},
  },
  corePlugins: {
    float: false,
    container: false,
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1410px',
          margin: 'auto',
          padding: '0 15px',
          '@screen sm': {
            maxWidth: '480px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '980px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
          '@screen 2xl': {
            maxWidth: '1410px',
          },
        }
      })
    }
  ],
};
