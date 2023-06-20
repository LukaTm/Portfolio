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
    const [closingDropdown, setClosingDropdown] = useState(false);
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
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                // is not in current container
                !dropdownRef.current.contains(event.target) &&
                !dropdownBtnRef.current.contains(event.target)
            ) {
                setTimeout(() => {
                    closeDropdown();
                }, 400);
                setClosingDropdown(true);
            }
        };

        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className={isDropdownOpen && styles.darker_background}>
            <div
                className={`${styles.dropdown_container} dark:bg-slate-700 `}
                id={isDropdownOpen ? styles.active : ""}
                onMouseMove={handleMouseMove}
                onMouseOut={() => setCursorPosition({ x: 0, y: 0 })}
                onClick={() => {
                    handleDropdownClick();
                    setClosingDropdown();
                }}
                ref={dropdownBtnRef}
                style={{
                    // (tx, ty, tz)
                    transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
                }}
            >
                <div
                    className={styles.dropdown_logo}
                    onClick={() => {
                        handleDropdownClick();
                        setClosingDropdown();
                    }}
                    tabIndex="0"
                >
                    <div className={`${styles.line} dark:bg-white`}></div>
                    <div className={`${styles.line} dark:bg-white`}></div>
                    <div className={`${styles.line} dark:bg-white`}></div>
                </div>
            </div>
            {isDropdownOpen && (
                <div
                    ref={dropdownRef}
                    className={`${styles.dropdown} ${
                        !closingDropdown ? "" : styles.closing
                    } dark:bg-slate-800 dark:shadow-md dark:shadow-slate-900 `}
                >
                    <div
                        onClick={() => {
                            setTimeout(() => {
                                closeDropdown();
                            }, 500);
                            setClosingDropdown(true);
                        }}
                        className={`${styles.closeBtnContainer} dark:rounded-xl dark:hover:bg-slate-700`}
                    >
                        <div className="relative w-full h-full dark:hover:bg-slate-700 dark:rounded-xl">
                            <div
                                className={`${styles.closeBtn} dark:after:bg-white dark:before:bg-white`}
                            ></div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center  ">
                        <ul className="flex flex-col items-center">
                            <li>
                                <NavLink
                                    className={(navData) => [
                                        navData.isActive
                                            ? `${styles.active} dark:after:bg-white`
                                            : `${styles.default} dark:after:bg-white`,
                                    ]}
                                    to="/"
                                >
                                    <div className="inline-flex justify-center items-center dark:text-white ">
                                        <Icon icon={homeIcon} /> Home
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <div>
                                    <NavLink
                                        className={(navData) => [
                                            navData.isActive
                                                ? `${styles.active} dark:after:bg-white`
                                                : `${styles.default} dark:after:bg-white`,
                                        ]}
                                        to="/skills"
                                    >
                                        <div className="inline-flex justify-center items-center dark:text-white">
                                            <FiUser /> Skills
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <NavLink
                                        className={(navData) => [
                                            navData.isActive
                                                ? `${styles.active} dark:after:bg-white`
                                                : `${styles.default} dark:after:bg-white`,
                                        ]}
                                        to="/experience"
                                    >
                                        <div className="justify-center items-center inline-flex dark:text-white">
                                            <Icon icon={briefcaseIcon} />{" "}
                                            Experience
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <NavLink
                                        className={(navData) => [
                                            navData.isActive
                                                ? `${styles.active} dark:after:bg-white`
                                                : `${styles.default} dark:after:bg-white`,
                                        ]}
                                        to="/projects"
                                    >
                                        <div className="inline-flex justify-center items-center dark:text-white ">
                                            <FiFolder /> Projects
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <NavLink
                                        className={(navData) => [
                                            navData.isActive
                                                ? `${styles.active} dark:after:bg-white`
                                                : `${styles.default} dark:after:bg-white`,
                                        ]}
                                        to="/resume"
                                    >
                                        <div className="inline-flex justify-center items-center dark:text-white">
                                            <FiFile /> Resume
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DropDown;
