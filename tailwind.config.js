const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.plugin(),
  ],
  theme: {
    colors: {
      'abang': '#1C5DDC',
      'betawi': '#19AE5D',
      'gigi': '#FEB52B',
      'bis': '#FC351C',
      'none': '#EB30A2',
      'pesisir': '#00AAFF'
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ],
  darkMode: ['class','media'],
}

