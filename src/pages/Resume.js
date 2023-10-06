import React from "react";

import Header from "../components/Header";

function Resume({
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
    toggleLanguageMode,
    text,
    languageSwitch,
    lang,
}) {
    return (
        <React.Fragment>
            <Header
                logo={logo}
                isClickable={isClickable}
                handleClick={handleClick}
                darkModeClick={darkModeClick}
                setDarkModeClick={setDarkModeClick}
                setDarkMode={setDarkMode}
                darkMode={darkMode}
                transitioned={transitioned}
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
                isOnHome={false}
                toggleLanguageMode={toggleLanguageMode}
                text={text}
                languageSwitch={languageSwitch}
                lang={lang}
            ></Header>
            <div>
                <div>Resume</div>
            </div>
        </React.Fragment>
    );
}

export default Resume;
