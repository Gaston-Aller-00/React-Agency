module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',

  ],
  theme: {
    extend: {
      colors: {
        "brandPrimary": "#4CAF4F",
        "neutralDGrey": "#4D4D4D",
        "neutralGrey": "#717171",
        "neutralSilver": "#F5F7FA",
        "gray900": "#18191F",
        "neutralBlack": "#263238",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
