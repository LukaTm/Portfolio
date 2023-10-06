import React, { useRef, useState } from "react";
import styles from "./MainHeader.module.css";

const LanguageToggle = ({
    handleClick,
    isClickable,
    text,
    languageSwitch,
    toggleLanguageMode,
    lang,
}) => {
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
                className={`dark:bg-slate-700 dark:text-white ${styles.language_container}`}
                style={{
                    pointerEvents: isClickable ? "auto" : "none",
                    transform: `translate3d(${cursorPosition.x}px, ${
                        cursorPosition.y
                    }px, 0) rotateY(${languageSwitch ? "180deg" : "0"})`,
                }}
                onClick={() => {
                    handleClick();
                    toggleLanguageMode();
                }}
                onMouseMove={handleMouseMove}
                onMouseOut={() => setCursorPosition({ x: 0, y: 0 })}
                ref={dropdownBtnRef}
            >
                <div
                    className={`${
                        lang
                            ? styles.language_text_lv
                            : styles.language_text_eng
                    }`}
                    tabIndex="0"
                    style={{
                        transform: `rotateY(${
                            languageSwitch ? "180deg" : "0"
                        })`,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default LanguageToggle;
