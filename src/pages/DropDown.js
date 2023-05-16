import styles from "./MainHeader.module.css";

import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function DropDown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            // is not in current container
            !dropdownRef.current.contains(event.target)
        ) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.dropdown_container} ref={dropdownRef}>
            <div
                className={styles.dropdown_logo}
                onClick={handleDropdownClick}
                tabIndex="0"
            >
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {isDropdownOpen && (
                <div className={styles.dropdown}>
                    <header>
                        <ul>
                            <li>
                                <NavLink
                                    className={(navData) => [
                                        navData.isActive
                                            ? styles.active
                                            : styles.default,
                                    ]}
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={(navData) => [
                                        navData.isActive
                                            ? styles.active
                                            : styles.default,
                                    ]}
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={(navData) => [
                                        navData.isActive
                                            ? styles.active
                                            : styles.default,
                                    ]}
                                    to="/expierience"
                                >
                                    Expierience
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={(navData) => [
                                        navData.isActive
                                            ? styles.active
                                            : styles.default,
                                    ]}
                                    to="/projects"
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={(navData) => [
                                        navData.isActive
                                            ? styles.active
                                            : styles.default,
                                    ]}
                                    to="/resume"
                                >
                                    Resume
                                </NavLink>
                            </li>
                        </ul>
                    </header>
                </div>
            )}
        </div>
    );
}

export default DropDown;
