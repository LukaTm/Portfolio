import React, { useEffect, useRef, useState } from "react";
import styles from "./MainHeader.module.css";

import { NavLink } from "react-router-dom";

import DropDown from "./DropDown";

import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import DarkModeToggle from "./DarkModeToggle";

function MainHeader({ children, setDarkToggle, setMouseLeave, setMouseEnter }) {
    const [darkModeClick, setDarkModeClick] = useState(false);
    const [isClickable, setIsClickable] = useState(true);
    const [logo, setLogo] = useState(<IoMoonOutline />);
    const [darkMode, setDarkMode] = useState(false);
    const containerRef = useRef(null);

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
            setLogo(
                darkModeClick ? (
                    <div className={styles.sun_container}>
                        <FiSun />
                    </div>
                ) : (
                    <div className={styles.moon_container}>
                        <IoMoonOutline />
                    </div>
                )
            );
        }, 70);

        return () => clearTimeout(timer);
    }, [darkModeClick]);

    return (
        <div
            className={`${styles.home} ${"dark:bg-gray-800"}`}
            ref={containerRef}
            onMouseEnter={() => {
                setMouseLeave(false);
                setMouseEnter(true);
            }}
        >
            <DarkModeToggle
                logo={logo}
                isClickable={isClickable}
                handleClick={handleClick}
                darkModeClick={darkModeClick}
                setDarkModeClick={setDarkModeClick}
                setDarkMode={setDarkMode}
                darkMode={darkMode}
            />
            <DropDown />
            <div className={styles.header_visible}>
                <header>
                    <NavLink
                        className={(navData) => [
                            `
                        dark:text-slate-50
                        dark:after:bg-white
                            ${
                                navData.isActive
                                    ? `${styles.active} `
                                    : `${styles.default} `
                            }
                        `,
                        ]}
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={(navData) => [
                            `
                        dark:text-slate-50
                        dark:after:bg-white
                            ${
                                navData.isActive
                                    ? `${styles.active} `
                                    : `${styles.default} `
                            }
                        `,
                        ]}
                        to="/skills"
                    >
                        Skills
                    </NavLink>

                    <NavLink
                        className={(navData) => [
                            `
                        dark:text-slate-50
                        dark:after:bg-white
                            ${
                                navData.isActive
                                    ? `${styles.active} `
                                    : `${styles.default} `
                            }
                        `,
                        ]}
                        to="/resume"
                    >
                        Resume
                    </NavLink>
                </header>
            </div>
            {/*  ALL THE CHILDREN  */}
            <main>{children}</main>
            <footer
                className={`${styles.footer} dark:!bg-slate-900 dark:!text-white`}
            >
                <div className={styles.left}>
                    <div>Developed by Markuss Luka</div>
                </div>
                <div className={styles.right}>
                    <div className={styles.github_container}>
                        <a
                            href="https://github.com/LukaTm"
                            // OPEN IN NEW TAB
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div
                                className={`${styles.github_link} ${
                                    darkMode && styles.dark_github
                                }`}
                            ></div>
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://github.com/LukaTm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div
                                className={`${styles.linkedin_link} ${
                                    darkMode && styles.white_linkedin
                                }`}
                            ></div>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default MainHeader;
