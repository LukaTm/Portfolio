/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            boxShadow: {
                custom: "1px 1px 10px 2px rgb(11, 20, 44)",
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
