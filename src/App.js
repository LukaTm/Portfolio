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

    const [darkModeClick, setDarkModeClick] = useState(false);
    const [isClickable, setIsClickable] = useState(true);
    const [logo, setLogo] = useState(<IoMoonOutline />);

    const handleClick = () => {
        if (isClickable) {
            setIsClickable(false);

            setTimeout(() => {
                setIsClickable(true);
            }, 200);
        }
    };

    const [transitioned, setTransitioned] = useState(false);

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

    return (
        <div>
            <div
                className={`${isDropdownOpen ? "darker_background" : ""} `}
            ></div>
            <MainFooter
                setMouseLeave={setMouseLeave}
                setMouseEnter={setMouseEnter}
                darkMode={darkMode}
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
                            />
                        }
                    />
                    <Route
                        path="/resume"
                        element={
                            <Resume
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
