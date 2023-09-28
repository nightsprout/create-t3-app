import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@tyrannosaurustech/ui/src/**/*.{js,ts,jsx,tsx}",
  ], // important to include location of core package to tell tailwind to regenerate css for classes used in our package
  presets: [require("@tyrannosaurustech/ui/tailwind.config.js")], // use the CORE preset
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: `#40C057`,
          neg: "#2F9E44",
          100: "#69DB7C",
          200: "#B2F2BB",
          300: "#EBFBEE",
        },
      },
    },
  plugins: [],
}
} satisfies Config;

