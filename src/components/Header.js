import "../pages/output.css";
import styles from "./MainHeader.module.css";
import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";
import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-scroll";
import { useRef } from "react";
import LanguageToggle from "./LanguageToggle";

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
    isOnHome,
    toggleLanguageMode,
    text,
    languageSwitch,
    lang,
}) {
    const homePageRef = useRef(null);

    const RouteToHomeAndProjects = () => {
        if (homePageRef.current) {
            homePageRef.current.click();
            setTimeout(() => {
                const project = document.querySelector("#projects_section");
                project.click();
            }, 100);
        }
    };
    const RouteToHomeAndContact = () => {
        if (homePageRef.current) {
            homePageRef.current.click();
            setTimeout(() => {
                const project = document.querySelector("#contact_section");
                project.click();
            }, 100);
        }
    };

    return (
        <div
            className={` ${styles.header_container} ${
                transitioned ? styles.transitioned : ""
            } bg-gradient-to-r from-white to-slate-100 `}
        >
            <LanguageToggle
                isClickable={isClickable}
                handleClick={handleClick}
                languageSwitch={languageSwitch}
                text={text}
                toggleLanguageMode={toggleLanguageMode}
                lang={lang}
            />
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
                isOnHome={true}
                RouteToHomeAndProjects={RouteToHomeAndProjects}
                RouteToHomeAndContact={RouteToHomeAndContact}
                handleClick={handleClick}
                isClickable={isClickable}
                languageSwitch={languageSwitch}
                toggleLanguageMode={toggleLanguageMode}
                lang={lang}
            />
            <div>
                <div className={`${styles.header_visible} dark:bg-gray-800`}>
                    <header className="flex w-full">
                        <NavLink
                            ref={homePageRef}
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
                            {lang === true ? "Mājas" : "Home"}
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
                            {lang === true ? "Prasmes" : "Skills"}
                        </NavLink>
                        <Link
                            id="projects_section"
                            className={`${styles.default} dark:text-slate-50
                            dark:after:bg-white`}
                            to={isOnHome ? "projects" : ""}
                            onClick={isOnHome ? null : RouteToHomeAndProjects}
                            smooth={true}
                            duration={1000}
                        >
                            {lang === true ? "Projekti" : "Projects"}
                        </Link>
                        <Link
                            id="contact_section"
                            className={`${styles.default} dark:text-slate-50
                            dark:after:bg-white`}
                            to={isOnHome ? "contact-form" : ""}
                            onClick={isOnHome ? null : RouteToHomeAndContact}
                            smooth={true}
                            duration={1000}
                        >
                            {lang === true ? "Kontakti" : "Contact"}
                        </Link>
                    </header>
                </div>
            </div>
        </div>
    );
}
