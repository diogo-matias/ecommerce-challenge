import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["roboto", "sans-serif"],
            },
            colors: {
                primary: {
                    DEFAULT: "#E57200",
                    light: "#F89B3D",
                    dark: "#B35900",
                },
                secondary: {
                    DEFAULT: "#80276C",
                    light: "#A34891",
                    dark: "#5C1D4E",
                },
                accent: {
                    DEFAULT: "#9A1A80",
                    light: "#B2489A",
                    dark: "#70125C",
                },
                gray_scale: {
                    DEFAULT: "#F8F8F8",
                    "60": "#EBEBEB",
                },
                divider: {
                    DEFAULT: "#707372",
                },
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
} satisfies Config;
