/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
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
