module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: '"Nunito Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    colors: {
      'dark-grey': '#353535',
      'light-grey': '#E2E2E2',
      'dark-blue': '#1F97D8',
      'light-blue': '#7E9BFF',
      black: '#000000',
      white: '#FFFFFF',
      red: '#FF0000',
    },
    container: {
      padding: {},
    },
    extend: {},
  },

  plugins: [],
}
