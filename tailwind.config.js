/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      LightRed: "hsl(0, 100%, 67%)",
      OrangeyYellow: "hsl(39, 100%, 56%)",
      GreenTeal: "hsl(166, 100%, 37%)",
      CobaltBlue: "hsl(234, 85%, 45%)",
      LightRedA: "hsla(0, 100%, 67%,0.05)",
      OrangeyYellowA: "hsla(39, 100%, 56%,0.05)",
      GreenTealA: "hsla(166, 100%, 37%,0.05)",
      CobaltBlueA: "hsla(234, 85%, 45%,0.05)",
      LightSlateBlue: "hsl(252, 100%, 67%)",
      LightRoyalBlue: "hsl(241, 81%, 54%)",
      VioletBlue: "hsla(256, 72%, 46%, 1)",
      PersianBlue: "hsla(241, 72%, 46%, 0)",
      White: "hsl(0, 0%, 100%)",
      PaleBlue: "hsl(221, 100%, 96%)",
      LightLavender: "hsl(241, 100%, 89%)",
      DarkGrayBlue: "hsl(224, 30%, 27%)",
      DarkGrayBlueA: "hsl(224, 30%, 27%,0.5)",
    },
  },
  plugins: [],
};
