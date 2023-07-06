import React, { useRef } from "react";
import styles from "./MainHeader.module.css";

function MainHeader({
    children,
    setMouseLeave,
    setMouseEnter,
    darkMode,
    isDropdownOpen,
}) {
    const containerRef = useRef(null);

    return (
        <div
            className={`${styles.home} dark:bg-gray-800 ${styles.dark_mode_active} `}
            ref={containerRef}
            onMouseEnter={() => {
                setMouseLeave(false);
                setMouseEnter(true);
            }}
        >
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
                            href="https://www.linkedin.com/in/markuss-luka%C5%A1ins-890180282/"
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
