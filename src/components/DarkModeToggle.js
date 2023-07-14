import React, { useEffect, useRef, useState } from "react";
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
        setTimeout(() => {
            setDarkModeClick((prevDarkMode) => !prevDarkMode);
            const newDarkMode = !darkMode;
            setDarkMode(newDarkMode);
            localStorage.setItem("darkMode", newDarkMode);
            //  root element represented by the <html>
            // toggle removes it IF it exists
            document.documentElement.classList.toggle("dark");
        }, 30);
    };

    const dropdownBtnRef = useRef(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const container = dropdownBtnRef.current;
        // Coordinates and WIDTH | HEIGHT
        const containerRect = container.getBoundingClientRect();
        // CENTER
        const containerCenterX = containerRect.left + containerRect.width / 2;
        const containerCenterY = containerRect.top + containerRect.height / 2;

        // X and Y CLIENT coordinates
        const offsetX = (event.clientX - containerCenterX) * 0.08; // Adjust the sensitivity by changing the multiplication value
        const offsetY = (event.clientY - containerCenterY) * 0.08;

        setCursorPosition({ x: offsetX, y: offsetY });
    };

    return (
        <div>
            <div
                className={`dark:bg-slate-700 dark:text-white ${styles.dark_mode_container} dark_container`}
                style={{
                    pointerEvents: isClickable ? "auto" : "none",
                    transform: `translate3d(${cursorPosition.x}px, ${
                        cursorPosition.y
                    }px, 0) ${darkModeClick ? "rotateY(180deg)" : ""}`,
                }}
                onClick={() => {
                    toggleDarkMode();
                    handleClick();
                }}
                onMouseMove={handleMouseMove}
                onMouseOut={() => setCursorPosition({ x: 0, y: 0 })}
                ref={dropdownBtnRef}
            >
                <div className={`${styles.dark_mode_logo}`} tabIndex="0">
                    {logo}
                </div>
            </div>
        </div>
    );
};

export default DarkModeToggle;
