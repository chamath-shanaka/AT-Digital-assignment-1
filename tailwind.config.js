/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter'],
        'Poppins': ['Poppins'],
        'Lato': ['Lato'],
      },
      screens: {
        's1200px': '1200px'
      },
      spacing: {
        '275': '275px',
        '630': '630px',
        '896': '896px',
        '1064': '1064px',
      },
      colors: {
        "blueishPurple": "#6B3CC9",
        "lightBlueishPurple": "#FAF8FF",
        "yuzuJam": "#F28D35",
        "iceIceBaby": "#6A44F2",
        "richBlue": "#1CBDDD",
        "electricIndigo": "#52378C",
        "interstellarBlue": "#4DCA79",
        "tricornBlack": "#2F2F2F",
        "acier": "#434C55",
        "wizardWhite": "#F1F5FC",
        "cuddlyYarn": "#FFF7DE",
        "hornetSting": "#FF0000",
        "frog": "#6EC71E",
      },
    },
  },
  plugins: [],
}

