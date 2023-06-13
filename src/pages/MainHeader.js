import React, { useEffect, useRef, useState } from "react";
import styles from "./MainHeader.module.css";

import { NavLink } from "react-router-dom";

import DropDown from "./DropDown";

import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";

function MainHeader({ children, setDarkToggle, setMouseLeave, setMouseEnter }) {
    const [darkModeClick, setDarkModeClick] = useState(false);
    const [isClickable, setIsClickable] = useState(true);
    const [logo, setLogo] = useState(<IoMoonOutline />);
    const [darkMode, setDarkMode] = useState(false);
    const containerRef = useRef(null);

    const toggleDarkMode = () => {
        setDarkModeClick((prevDarkMode) => !prevDarkMode);
    };
    const handleClick = () => {
        if (isClickable) {
            setIsClickable(false);

            setTimeout(() => {
                setIsClickable(true);
            }, 200);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLogo(darkModeClick ? <FiSun /> : <IoMoonOutline />);
        }, 70);

        return () => clearTimeout(timer);
    }, [darkModeClick]);

    const DarkModeToggle = () => {
        useEffect(() => {
            const isDarkMode = localStorage.getItem("darkMode") === "true";
            setDarkMode(isDarkMode);
        }, []);

        const toggleDarkMode = () => {
            const newDarkMode = !darkMode;
            setDarkMode(newDarkMode);
            localStorage.setItem("darkMode", newDarkMode);
            document.documentElement.classList.toggle("dark");
        };

        return (
            <button
                className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                onClick={toggleDarkMode}
            >
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        );
    };

    return (
        <div
            className={`${styles.home} ${darkMode ? "dark" : ""}`}
            ref={containerRef}
            onMouseEnter={() => {
                setMouseLeave(false);
                setMouseEnter(true);
                setTimeout(() => {
                    setMouseEnter(false);
                }, 200);
            }}
        >
            {/* <DarkModeToggle /> */}
            <div
                className={`${styles.dark_mode_container} ${
                    darkModeClick ? styles.dark_mode_active : ""
                } `}
                style={{ pointerEvents: isClickable ? "auto" : "none" }}
                onClick={() => {
                    toggleDarkMode();
                    handleClick();
                }}
            >
                <div
                    className={`${styles.dark_mode_logo} dark:bg-black`}
                    tabIndex="0"
                >
                    {logo}
                </div>
            </div>
            <DropDown />
            <div className={styles.header_visible}>
                <header>
                    <NavLink
                        className={(navData) => [
                            navData.isActive ? styles.active : styles.default,
                        ]}
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={(navData) => [
                            navData.isActive ? styles.active : styles.default,
                        ]}
                        to="/about"
                    >
                        About
                    </NavLink>
                    <NavLink
                        className={(navData) => [
                            navData.isActive ? styles.active : styles.default,
                        ]}
                        to="/expierience"
                    >
                        Expierience
                    </NavLink>
                    <NavLink
                        className={(navData) => [
                            navData.isActive ? styles.active : styles.default,
                        ]}
                        to="/projects"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        className={(navData) => [
                            navData.isActive ? styles.active : styles.default,
                        ]}
                        to="/resume"
                    >
                        Resume
                    </NavLink>
                </header>
            </div>
            {/*  ALL THE CHILDREN  */}
            <main>{children}</main>
            <footer className={styles.footer}>
                <div className={styles.left}>
                    <div>Developed by Marus Luka</div>
                </div>
                <div className={styles.right}>
                    <div className={styles.github_container}>
                        <a
                            href="https://github.com/LukaTm"
                            // OPEN IN NEW TAB
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className={styles.github_link}></div>
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://github.com/LukaTm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className={styles.linkedin_link}></div>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default MainHeader;
