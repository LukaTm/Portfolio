import styles from "./MainHeader.module.css";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
    FiHome,
    FiClipboard,
    FiMail,
    FiUser,
    FiFile,
    FiFileText,
} from "react-icons/fi";

import { Link } from "react-scroll";
import { Icon } from "@iconify/react";
import homeIcon from "@iconify-icons/ri/home-4-line";

function DropDown({
    isDropdownOpen,
    setIsDropdownOpen,
    isOnHome,
    RouteToHomeAndProjects,
    RouteToHomeAndContact,
}) {
    const [closingDropdown, setClosingDropdown] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const dropdownRef = useRef(null);
    const dropdownBtnRef = useRef(null);
    const homePageRef = useRef(null);

    // IS OPEN
    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
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

    const CloseDropdown = () => {
        setIsDropdownOpen(false);
        setClosingDropdown(true);
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
                    setIsDropdownOpen(false);
                }, 300);
                setClosingDropdown(true);
            }
        };

        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [setIsDropdownOpen]);

    return (
        <div>
            <div
                className={`${styles.dropdown_container} dark:bg-slate-700 `}
                id={isDropdownOpen ? styles.active : ""}
                onMouseMove={handleMouseMove}
                onMouseOut={() => setCursorPosition({ x: 0, y: 0 })}
                onClick={() => {
                    handleDropdownClick();
                    setClosingDropdown();
                    setIsDropdownOpen(true);
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
                                setIsDropdownOpen(false);
                            }, 350);
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
                        <ul className="flex flex-col items-center m-0 ">
                            <li>
                                <NavLink
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        CloseDropdown();
                                    }}
                                    className={(navData) => [
                                        navData.isActive
                                            ? `${styles.active} dark:after:bg-white`
                                            : `${styles.default} dark:after:bg-white`,
                                    ]}
                                    to="/"
                                >
                                    <div className="inline-flex justify-center items-center dark:text-white ">
                                        <Icon
                                            icon={homeIcon}
                                            style={{
                                                marginRight: "0.2rem",
                                            }}
                                        />
                                        Home
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <div>
                                    <NavLink
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            CloseDropdown();
                                        }}
                                        className={(navData) => [
                                            navData.isActive
                                                ? `${styles.active} dark:after:bg-white`
                                                : `${styles.default} dark:after:bg-white`,
                                        ]}
                                        to="/skills"
                                    >
                                        <div className="inline-flex justify-center items-center dark:text-white">
                                            <FiClipboard
                                                style={{
                                                    marginRight: "0.2rem",
                                                }}
                                            />
                                            Skills
                                        </div>
                                    </NavLink>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <Link
                                        id="contact_section"
                                        className={`${styles.default} dark:text-slate-50
                            dark:after:bg-white`}
                                        to={isOnHome ? "contact-form" : ""}
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            CloseDropdown();
                                            if (isOnHome) {
                                                RouteToHomeAndContact();
                                            }
                                        }}
                                        smooth={true}
                                        duration={1000}
                                    >
                                        <div className="inline-flex justify-center items-center dark:text-white">
                                            <FiMail
                                                style={{
                                                    marginRight: "0.2rem",
                                                }}
                                            />
                                            Contact
                                        </div>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link
                                        id="projects_section"
                                        className={`${styles.default} dark:text-slate-50
                            dark:after:bg-white`}
                                        to={isOnHome ? "projects" : ""}
                                        // onClick={
                                        //     isOnHome
                                        //         ? null
                                        //         : RouteToHomeAndProjects
                                        // }
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            CloseDropdown();
                                            if (isOnHome) {
                                                RouteToHomeAndProjects();
                                            }
                                        }}
                                        smooth={true}
                                        duration={1000}
                                    >
                                        <div className="inline-flex justify-center items-center dark:text-white">
                                            <FiUser
                                                style={{
                                                    marginRight: "0.2rem",
                                                }}
                                            />
                                            Projects
                                        </div>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <NavLink
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            CloseDropdown();
                                        }}
                                        className={(navData) => [
                                            navData.isActive
                                                ? `${styles.active} dark:after:bg-white`
                                                : `${styles.default} dark:after:bg-white`,
                                        ]}
                                        to="/resume"
                                    >
                                        <div className="inline-flex justify-center items-center dark:text-white">
                                            <FiFile
                                                style={{
                                                    marginRight: "0.2rem",
                                                }}
                                            />{" "}
                                            Resume
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
