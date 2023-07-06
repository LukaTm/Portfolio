import "./output.css";
import styles from "./MainHeader.module.css";
import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";
import DarkModeToggle from "./DarkModeToggle";

export default function Header({
    setDarkMode,
    darkMode,
    logo,
    isClickable,
    handleClick,
    darkModeClick,
    setDarkModeClick,
    transitioned,
    isDropdownOpen,
    setIsDropdownOpen,
}) {
    return (
        <div
            className={` ${styles.header_container} ${
                transitioned ? styles.transitioned : ""
            } `}
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
            <DropDown
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
            />
            <div>
                <div className={`${styles.header_visible} dark:bg-gray-800`}>
                    <header className="flex w-full">
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
            </div>
        </div>
    );
}
