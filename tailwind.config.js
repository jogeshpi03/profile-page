module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            green: {
                light: '#b8d5cd',
                DEFAULT: '#5ca',
                dark: '#006a4a'
            },
            pink: {
                light: '#f6ebeb',
                DEFAULT: '#fc8fa8',
                dark: '#ff3083'
            }
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
