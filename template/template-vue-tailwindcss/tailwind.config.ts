import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'
import { THEMES } from './src/constans/themes'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: THEMES
  },
  plugins: [daisyui]
} satisfies Config
