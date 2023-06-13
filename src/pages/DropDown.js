import styles from "./MainHeader.module.css";
import { useEffect, useRef, useState } from "react";

import { NavLink } from "react-router-dom";
import {
    FiHome,
    FiUser,
    FiInfo,
    FiBriefcase,
    FiFolder,
    FiFile,
} from "react-icons/fi";
import { Icon, InlineIcon } from "@iconify/react";
import homeIcon from "@iconify-icons/ri/home-4-line";
import userIcon from "@iconify-icons/ri/user-line";
import briefcaseIcon from "@iconify-icons/ri/briefcase-line";
import folderIcon from "@iconify-icons/ri/folder-line";
import fileIcon from "@iconify-icons/ri/file-line";

function DropDown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const dropdownBtnRef = useRef(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // IS OPEN
    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            // is not in current container
            !dropdownRef.current.contains(event.target) &&
            !dropdownBtnRef.current.contains(event.target)
        ) {
            setIsDropdownOpen(false);
        }
    };

    const handleMouseMove = (event) => {
        const container = dropdownBtnRef.current;
        // Coordinates and WIDTH | HEIGHT
        const containerRect = container.getBoundingClientRect();
        // CENTER
        const containerCenterX = containerRect.left + containerRect.width / 2;
        const containerCenterY = containerRect.top + containerRect.height / 2;

        // X and Y CLIENT coordinates
        const offsetX = (event.clientX - containerCenterX) * 0.07; // Adjust the sensitivity by changing the multiplication value
        const offsetY = (event.clientY - containerCenterY) * 0.07;

        setCursorPosition({ x: offsetX, y: offsetY });
    };

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div
                className={styles.dropdown_container}
                id={isDropdownOpen ? styles.active : ""}
                onMouseMove={handleMouseMove}
                onMouseOut={() => setCursorPosition({ x: 0, y: 0 })}
                onClick={handleDropdownClick}
                ref={dropdownBtnRef}
                style={{
                    // (tx, ty, tz)
                    transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
                }}
            >
                <div
                    className={styles.dropdown_logo}
                    onClick={handleDropdownClick}
                    tabIndex="0"
                >
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            </div>
            {isDropdownOpen && (
                <div ref={dropdownRef} className={styles.dropdown}>
                    <div
                        className={styles.closeBtn}
                        onClick={closeDropdown}
                    ></div>
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
                                    <Icon icon={homeIcon} /> Home
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
                                    <FiUser /> About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={(navData) => [
                                        navData.isActive
                                            ? styles.active
                                            : styles.default,
                                    ]}
                                    to="/experience"
                                >
                                    <Icon icon={briefcaseIcon} /> Experience
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
                                    <FiFolder /> Projects
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
                                    <FiFile /> Resume
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
