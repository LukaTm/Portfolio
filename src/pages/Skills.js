import { useEffect, useState } from "react";
import styles from "./Skills.module.css";

function Skills() {
    useEffect(() => {
        const projectContainers = document.querySelectorAll(
            `.${styles.skill_container}`
        );

        function revealProject() {
            const windowHeight = window.innerHeight;

            projectContainers.forEach((container) => {
                // CALCULATES TO THE TOP OF THE VIEWPORT
                const containerTop = container.getBoundingClientRect().top;

                if (containerTop < windowHeight - 15) {
                    container.classList.add(styles.visible);
                } else {
                    container.classList.remove(styles.visible);
                }
            });
        }

        function handleResize() {
            revealProject();
        }

        window.addEventListener("scroll", revealProject);
        window.addEventListener("resize", handleResize);
        revealProject();

        // CLEANUP
        return () => {
            window.removeEventListener("scroll", revealProject);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col items-center bg-gradient-to-r from-white to-slate-100 dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-800 ">
            <h1 className="mb-8 dark:bg-gradient-to-r from-white to-slate-100">
                My skillset
            </h1>

            <div className={styles.outside_container}>
                <section className={styles.section_container}>
                    <a
                        href="https://en.wikipedia.org/wiki/HTML"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                    >
                        <div className={styles.html}></div>
                        HTML5
                    </a>
                    <a
                        href="https://en.wikipedia.org/wiki/JavaScript"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                    >
                        <div className={styles.javascript}></div>
                        JavaScript
                    </a>
                    <a
                        href="https://en.wikipedia.org/wiki/CSS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                    >
                        <div className={styles.css}></div>
                        CSS3
                    </a>
                    <a
                        href="https://en.wikipedia.org/wiki/Express.js"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                    >
                        <div className={styles.express}></div>
                        Express.js
                    </a>
                    <a
                        href="https://en.wikipedia.org/wiki/Node.js"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                    >
                        <div className={styles.node}></div>
                        Node.js
                    </a>
                    <a
                        href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                    >
                        <div className={styles.react}></div>
                        React
                    </a>
                    <a
                        href="https://en.wikipedia.org/wiki/Redux_(JavaScript_library)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                    >
                        <div className={styles.redux}></div>
                        Redux
                    </a>
                    <a
                        href="https://en.wikipedia.org/wiki/Git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                    >
                        <div className={styles.git}></div>
                        Git
                    </a>
                    <a
                        href="https://en.wikipedia.org/wiki/Webpack"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                    >
                        <div className={styles.webpack}></div>
                        Webpack
                    </a>
                    <a
                        href="https://en.wikipedia.org/wiki/Visual_Studio_Code"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                    >
                        <div className={styles.vsscode}></div>
                        Visual Studio Code
                    </a>
                    <a
                        href="https://en.wikipedia.org/wiki/Representational_state_transfer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                    >
                        <div className={`${styles.restful}`}></div>
                        RESTful API
                    </a>
                    <a
                        href="https://en.wikipedia.org/wiki/Mongoose_(MongoDB)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.skill_container} dark:shadow-custom dark:text-white`}
                    >
                        <div className={styles.mongoose}></div>
                        Mongoose
                    </a>
                </section>
            </div>
        </div>
    );
}

export default Skills;
