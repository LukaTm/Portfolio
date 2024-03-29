/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            boxShadow: {
                custom: "1px 1px 10px 2px rgb(11, 20, 44)",
            },
            borderRadius: "3px",
            filter: {
                "drop-shadow": "drop-shadow(-1px 3px 5px rgb(11, 20, 44))",
            },
            backgroundColor: {
                "slate-930": "#253549",
                "slate-910": "#2a3b52",
                "slate-905": "#36485e",
            },
        },
    },
    plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        require("flowbite/plugin"),
    ],

    darkMode: "class",
    // corePlugins: {
    //     preflight: false, // Disable default styles
    // },
};
