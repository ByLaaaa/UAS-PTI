const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/dist/esm/**/*.js',
    flowbite.content(),
  ],
  theme: {
    colors: {
      'abang': '#1C5DDC',
      'betawi': '#19AE5D',
      'gigi': '#FEB52B',
      'bis': '#FC351C',
      'none': '#EB30A2',
      'pesisir': '#00AAFF',
      'soft-dark' : '#262524',
      'white-oat' : '#c3c6b1'
    },
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    }
  },
  plugins: [
    flowbite.plugin(),
    require('flowbite/plugin'),
    require("daisyui")
  ],
  darkMode: ['class','media'],
}

