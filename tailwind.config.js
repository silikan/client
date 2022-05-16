module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                prgreen: {
                    DEFAULT: "#44F993",
                    50: "#F6FFFA",
                    100: "#E2FEEE",
                    200: "#BBFDD7",
                    300: "#93FCC1",
                    400: "#6CFAAA",
                    500: "#44F993",
                    600: "#0EF774",
                    700: "#06C65A",
                    800: "#059041",
                    900: "#035A29",
                },
                prblue: "#000A33",
            },
        },
    },
    plugins: [require("tw-elements/dist/plugin")],
};