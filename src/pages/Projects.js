import React, { useEffect } from "react";
import styles from "./Projecets.module.css";

function Projects() {
    useEffect(() => {
        const projectContainers = document.querySelectorAll(
            `.${styles.project_container}`
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
        <div>
            <div className={styles.title}>
                <h3
                    className={`${styles.h3} dark:bg-gradient-to-br from-white to-slate-200`}
                >
                    Projects
                </h3>
            </div>

            <div className={styles.container}>
                <section className={styles.project_section}>
                    <div
                        className={`${styles.project_container} dark:bg-gradient-to-bl from-slate-800 to-slate-700 dark:shadow-md dark:shadow-slate-700`}
                    >
                        <div className={styles.todo}></div>
                        <a
                            className={`${styles.btn} dark:bg-slate-700 dark:border dark:border-black dark:shadow-none dark:text-white dark:hover:bg-slate-600 dark:rounded-[3px]`}
                            href="https://todo-app-5d8b3.web.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Demo
                        </a>
                        <div
                            className={`${styles.description} mt-1 dark:text-white`}
                        >
                            Todo List
                        </div>
                    </div>
                    <div
                        className={`${styles.project_container} dark:bg-gradient-to-bl from-slate-800 to-slate-700 dark:shadow-md dark:shadow-slate-700`}
                    >
                        <div className={styles.charades}></div>
                        <a
                            className={`${styles.btn} dark:bg-slate-700 dark:border dark:border-black dark:shadow-none dark:text-white dark:hover:bg-slate-600 dark:rounded-[3px]`}
                            href="https://final-charades.vercel.app/main?lang=eng"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Demo
                        </a>
                        <div
                            className={`${styles.description} mt-1 dark:text-white`}
                        >
                            Charades
                        </div>
                    </div>

                    <div
                        className={`${styles.project_container} dark:bg-gradient-to-bl from-slate-800 to-slate-700 dark:shadow-md dark:shadow-slate-700`}
                    >
                        <div className={styles.tic_tac}></div>
                        <a
                            className={`${styles.btn} dark:bg-slate-700 dark:border dark:border-black dark:shadow-none dark:text-white dark:hover:bg-slate-600 dark:rounded-[3px]`}
                            href="https://lukatm.github.io/Project-Tic-Tac-Toe/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Demo
                        </a>
                        <div
                            className={`${styles.description} mt-1 dark:text-white`}
                        >
                            TIC TAC TOE
                        </div>
                    </div>
                    <div
                        className={`${styles.project_container} dark:bg-gradient-to-bl from-slate-800 to-slate-700 dark:shadow-md dark:shadow-slate-700`}
                    >
                        <div className={styles.rock}></div>
                        <a
                            className={`${styles.btn} dark:bg-slate-700 dark:border dark:border-black dark:shadow-none dark:text-white dark:hover:bg-slate-600 dark:rounded-[3px]`}
                            href="https://lukatm.github.io/rock-paper-scissors/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className={styles.project_text}>Demo</span>
                        </a>
                        <div
                            className={`${styles.description} mt-1 dark:text-white`}
                        >
                            Rock paper scissors
                        </div>
                    </div>

                    <div
                        className={`${styles.project_container} dark:bg-gradient-to-bl from-slate-800 to-slate-700 dark:shadow-md dark:shadow-slate-700`}
                    >
                        <div className={styles.calc}></div>
                        <a
                            className={`${styles.btn} dark:bg-slate-700 dark:border dark:border-black dark:shadow-none dark:text-white dark:hover:bg-slate-600 dark:rounded-[3px]`}
                            href="https://lukatm.github.io/Calculator-Project/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Demo
                        </a>
                        <div
                            className={`${styles.description} mt-1 dark:text-white`}
                        >
                            Calculator
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Projects;
