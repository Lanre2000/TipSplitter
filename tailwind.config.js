/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        paperCanvas: '#F7F8F6',
        surfaceWhite: '#FFFFFF',
        charcoalInk: '#202522',
        slateText: '#69716B',
        quietBorder: '#DDE2DC',
        tipGreen: '#397A58',
        softGreenWash: '#EAF2EC',
        errorRed: '#B54747',
      },
      fontFamily: {
        display: ['Outfit_600SemiBold', 'sans-serif'],
        displayBold: ['Outfit_700Bold', 'sans-serif'],
        body: ['Outfit_400Regular', 'sans-serif'],
        bodyMedium: ['Outfit_500Medium', 'sans-serif'],
        bodySemiBold: ['Outfit_600SemiBold', 'sans-serif'],
        mono: ['GeistMono_500Medium', 'monospace'],
        monoBold: ['GeistMono_600SemiBold', 'monospace'],
      },
      borderRadius: {
        control: '14px',
        resultSurface: '16px',
        container: '20px',
      },
    },
  },
  plugins: [],
};
