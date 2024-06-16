import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import { THEMES } from "./src/lib/constans";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: THEMES,
    },
    plugins: [daisyui],
} satisfies Config;
