import React, { useEffect } from "react";
import styles from "./Skills.module.css";

import Header from "../components/Header";

function Skills({
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
    useEffect(() => {
        const projectContainers = document.querySelectorAll(
            `.${styles.skill_container}`
        );
        const skills_h1 = document.querySelector(`#${styles.skills_h1}`);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                }
            });
        });

        projectContainers.forEach((el) => observer.observe(el));
        observer.observe(skills_h1);
    }, []);

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

            <div className="flex flex-col items-center bg-gradient-to-r from-white to-slate-100 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-800 mt-6">
                <h1
                    id={styles.skills_h1}
                    className=" mb-8 dark:bg-gradient-to-r from-white to-slate-100"
                >
                    {lang === true ? "Manas Prasmes" : "My skillset"}
                </h1>

                <div className={styles.outside_container}>
                    <section className={styles.section_container}>
                        <a
                            href="https://en.wikipedia.org/wiki/Python_(programming_language)"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                        >
                            <div className={styles.python}></div>
                            <span className="mt-2">Python</span>
                        </a>
                        <a
                            href="https://en.wikipedia.org/wiki/TypeScript"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                        >
                            <div className={styles.typescript}></div>
                            <span className="mt-3">Typescript</span>
                        </a>
                        <a
                            href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                        >
                            <div className={styles.react}></div>
                            <span className="mt-2">React</span>
                        </a>
                        <a
                            href="https://en.wikipedia.org/wiki/Redux_(JavaScript_library)"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                        >
                            <div className={styles.redux}></div>
                            <span className="mt-2">Redux</span>
                        </a>

                        <a
                            href="https://en.wikipedia.org/wiki/HTML"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.skill_container} dark:shadow-custom dark:text-white `}
                        >
                            <div className={styles.html}></div>
                            <span className="mt-1">HTML5</span>
                        </a>
                        <a
                            href="https://en.wikipedia.org/wiki/JavaScript"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                        >
                            <div className={styles.javascript}></div>
                            <span className="mt-1">JavaScript</span>
                        </a>
                        <a
                            href="https://en.wikipedia.org/wiki/CSS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                        >
                            <div className={styles.css}></div>
                            <span className="mt-2">CSS3</span>
                        </a>
                        <a
                            href="https://en.wikipedia.org/wiki/Next.js"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                        >
                            <div className={styles.nextjs}></div>
                            <span className="mt-2">Next.js</span>
                        </a>
                        <a
                            href="https://en.wikipedia.org/wiki/Express.js"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                        >
                            <div className={styles.express}></div>
                            <span className="mt-2"> Express.js</span>
                        </a>
                        <a
                            href="https://en.wikipedia.org/wiki/Node.js"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                        >
                            <div className={styles.node}></div>
                            <span className="mt-3">Node.js</span>
                        </a>
                        <a
                            href="https://en.wikipedia.org/wiki/Representational_state_transfer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                        >
                            <div className={`${styles.restful}`}></div>
                            <span className="mt-3"> RESTful API</span>
                        </a>
                        <a
                            href="https://en.wikipedia.org/wiki/Mongoose_(MongoDB)"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                        >
                            <div className={styles.mongoose}></div>
                            <span> Mongoose</span>
                        </a>
                        <a
                            href="https://en.wikipedia.org/wiki/MongoDB"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                        >
                            <div className={styles.mongodb}></div>
                            <span className="mt-1"> MongoDb</span>
                        </a>
                        <a
                            href="https://en.wikipedia.org/wiki/Git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                        >
                            <div className={styles.git}></div>
                            <span className="mt-2">Git</span>
                        </a>
                        <a
                            href="https://en.wikipedia.org/wiki/Webpack"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                        >
                            <div className={styles.webpack}></div>
                            <span className="">Webpack</span>
                        </a>
                        <a
                            href="https://en.wikipedia.org/wiki/Visual_Studio_Code"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                        >
                            <div className={styles.vsscode}></div>
                            <span className="mt-3">Visual Studio Code</span>
                        </a>

                        <a
                            href="https://en.wikipedia.org/wiki/Tailwind_CSS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                        >
                            <div className={styles.tailwind}></div>
                            <span className="">Tailwind</span>
                        </a>
                    </section>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Skills;
