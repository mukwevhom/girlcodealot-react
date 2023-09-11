/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            "hero-section": "url('https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e58c0997219ec01eb6_background-bg-min.png')"
        }
    },
  },
  plugins: [],
}

