module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                prgreen: {
                    DEFAULT: "#44F993",
                    50: "#D4FADE",
                    100: "#6cffbb",
                    200: "#62ffb1",
                    300: "#58ffa7",
                    400: "#4eff9d",
                    500: "#44f993",
                    600: "#1cd16b",
                    700: "#30e57f",
                    800: "#26db75",
                    900: "#1cd16b",
                },
                prblue: "#000A33",
            },
        },
    },
    plugins: [require("tw-elements/dist/plugin")],
};