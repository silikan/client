module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                prgreen: {
                    50: "#D4FADE",
                    100: "#6cffbb",
                    200: "#62ffb1",
                    300: "#58ffa7",
                    400: "#4eff9d",
                    500: "#44f993",
                    600: "#1cd16b",
                    700: "#1abf5c",
                    800: "#18b74d",
                    900: "#16a53e",
                },

                prblue: {
                    50: "#002EEB",
                    100: "#002AD6",
                    200: "#0022AD",
                    300: "#001A85",
                    400: "#00125C",
                    500: "#000A33",
                    600: "#000000",
                    700: "#000000",
                    800: "#000000",
                    900: "#000000",
                },
            },
        },
    },
    plugins: [require("tw-elements/dist/plugin")],
    darkMode: "class",
};