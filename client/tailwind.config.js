/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      width: {
        "mainWidth": "1366px",
        "banner": "1100px",
        "card": "185px",
        "image": "160px"
      },
      colors: {
        "mainRed": "#e4282c",
        "burgundy": "#be1f23",
        "forFooter": "#252525"
      },
      fontSize: {
        "fontHeader": "27px",
        "fontMenu": "22px"
      },
      boxShadow: {
        "shadow-x-black": "-10px 0 20px -5px black, 10px 0 20px -5px black",
        "shadow-line": "2px 0px 5px black",
        "innerR": "inset 7px 7px 10px black, inset -7px -7px 10px black"
      },
      skew: {
        "30": "30deg"
      },
      height: {
        "content": "516px",
        "banner": "500px",
        "card": "185px",
        "image": "100px",
        "footer": "342px"
      },
      fontFamily: {
        "mainFont": ["Helvetica Neue", "sans-serif"]
      }
    }
  },
  plugins: []
};