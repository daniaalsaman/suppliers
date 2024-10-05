import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'gradient-radial': `radial-gradient(${'var(--tw-gradient-stops)'})`,
      'gradient-conic': `conic-gradient(from 180deg at 50% 50%, ${'var(--tw-gradient-stops)'})`,
    },
  },
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#f50c44",
            foreground: "#fff",
          },
          focus: "#f50c44",
        },
      },
    },
  })],
}
export default config
