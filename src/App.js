import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MainFooter from "./components/MainFooter";
import Resume from "./pages/Resume";
import { useEffect, useState } from "react";
import Skills from "./pages/Skills";
import styles from "../src/components/MainHeader.module.css";

import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";

function App() {
    const [mouseLeave, setMouseLeave] = useState(false);
    const [mouseEnter, setMouseEnter] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [transitioned, setTransitioned] = useState(false);
    const [darkModeClick, setDarkModeClick] = useState(false);
    const [isClickable, setIsClickable] = useState(true);
    const [logo, setLogo] = useState(<IoMoonOutline />);

    // TRUE for LV | False for ENG
    const [lang, setLang] = useState(
        localStorage.getItem("lang") === "LV" ? true : false
    );
    const [languageSwitch, setLanguageSwitch] = useState(false);
    const [text, setText] = useState(
        localStorage.getItem("lang") === "LV" ? "LV" : "ENG"
    );
    useEffect(() => {
        setLang(localStorage.getItem("lang") === "LV" ? true : false);
    }, [languageSwitch]);

    useEffect(() => {
        setTransitioned(true);
    }, []);

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
        }, 80);

        return () => clearTimeout(timer);
    }, [darkModeClick, setLogo]);

    const handleClick = () => {
        if (isClickable) {
            setIsClickable(false);

            setTimeout(() => {
                setIsClickable(true);
            }, 200);
        }
    };

    const toggleLanguageMode = () => {
        const textString = text === "V⅃" ? "ENG" : text === "LV" ? "ӘИƎ" : "V⅃";
        setLanguageSwitch((prevLang) => !prevLang);
        localStorage.setItem("lang", textString === "V⅃" ? "LV" : "ENG");
        setTimeout(() => {
            // LV mirrored cause of 180 transform
            setText(textString);
        }, 90);
    };

    return (
        <div>
            <div
                className={`${isDropdownOpen ? "darker_background" : ""} `}
            ></div>
            <MainFooter
                setMouseLeave={setMouseLeave}
                setMouseEnter={setMouseEnter}
                darkMode={darkMode}
                lang={lang}
            >
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                mouseLeave={mouseLeave}
                                mouseEnter={mouseEnter}
                                setDarkMode={setDarkMode}
                                darkMode={darkMode}
                                handleClick={handleClick}
                                logo={logo}
                                setLogo={setLogo}
                                darkModeClick={darkModeClick}
                                setDarkModeClick={setDarkModeClick}
                                isClickable={isClickable}
                                transitioned={transitioned}
                                isDropdownOpen={isDropdownOpen}
                                setIsDropdownOpen={setIsDropdownOpen}
                                toggleLanguageMode={toggleLanguageMode}
                                text={text}
                                languageSwitch={languageSwitch}
                                lang={lang}
                            />
                        }
                    />
                    <Route
                        path="/skills"
                        element={
                            <Skills
                                setDarkMode={setDarkMode}
                                darkMode={darkMode}
                                mouseLeave={mouseLeave}
                                mouseEnter={mouseEnter}
                                handleClick={handleClick}
                                logo={logo}
                                setLogo={setLogo}
                                darkModeClick={darkModeClick}
                                setDarkModeClick={setDarkModeClick}
                                isClickable={isClickable}
                                transitioned={transitioned}
                                isDropdownOpen={isDropdownOpen}
                                setIsDropdownOpen={setIsDropdownOpen}
                                toggleLanguageMode={toggleLanguageMode}
                                text={text}
                                languageSwitch={languageSwitch}
                                lang={lang}
                            />
                        }
                    />

                    {/* ADD NON EXISTING ROUTE */}
                </Routes>
            </MainFooter>
        </div>
    );
}

export default App;
