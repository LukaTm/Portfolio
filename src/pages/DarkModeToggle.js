import React, { useEffect } from "react";
import styles from "./MainHeader.module.css";

const DarkModeToggle = ({
    setDarkMode,
    setDarkModeClick,
    darkModeClick,
    handleClick,
    logo,
    isClickable,
    darkMode,
}) => {
    useEffect(() => {
        const isDarkMode = localStorage.getItem("darkMode") === "true";
        setDarkMode(isDarkMode);
    }, [setDarkMode]);

    const toggleDarkMode = () => {
        setDarkModeClick((prevDarkMode) => !prevDarkMode);
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem("darkMode", newDarkMode);
        //  root element represented by the <html>
        // toggle removes it IF it exists
        document.documentElement.classList.toggle("dark");
    };

    return (
        <div
            className={`dark:bg-slate-700 dark:text-white ${
                styles.dark_mode_container
            } ${darkModeClick ? styles.dark_mode_active : ""} `}
            style={{ pointerEvents: isClickable ? "auto" : "none" }}
            onClick={() => {
                toggleDarkMode();
                handleClick();
            }}
        >
            <div className={`${styles.dark_mode_logo}`} tabIndex="0">
                {logo}
            </div>
        </div>
    );
};

export default DarkModeToggle;
