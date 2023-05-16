import React, { useEffect } from "react";
import styles from "./Projecets.module.css";

function Projects() {
    useEffect(() => {
        const projectContainers = document.querySelectorAll(
            `.${styles.project_container}`
        );

        function revealProject() {
            projectContainers.forEach((container) => {
                const containerTop = container.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (containerTop < windowHeight - 30) {
                    container.classList.add(styles.visible);
                } else {
                    container.classList.remove(styles.visible);
                }
            });
        }

        window.addEventListener("scroll", revealProject);
        revealProject();

        return () => {
            window.removeEventListener("scroll", revealProject);
        };
    }, []);

    return (
        <div>
            <div className={styles.title}>
                <h1>Projects</h1>
            </div>

            <div className={styles.container}>
                <section className={styles.project_section}>
                    <div
                        className={`${styles.project_container} ${styles.visible}`}
                    >
                        <div className={styles.rock}></div>
                        <a
                            className={styles.btn}
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Demo
                        </a>
                        <div className={styles.description}>
                            This is a rock paper scissors
                        </div>
                    </div>

                    <div
                        className={`${styles.project_container} ${styles.visible}`}
                    >
                        <div className={styles.calc}></div>
                        <a
                            className={styles.btn}
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Demo
                        </a>
                        <div className={styles.description}>
                            This is a calculator
                        </div>
                    </div>

                    <div
                        className={`${styles.project_container} ${styles.visible}`}
                    >
                        <div>h</div>
                        <a
                            className={styles.btn}
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Demo
                        </a>
                        <div className={styles.description}>
                            This is something also
                        </div>
                    </div>

                    <div
                        className={`${styles.project_container} ${styles.visible}`}
                    >
                        <div></div>
                        <a
                            className={styles.btn}
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Demo
                        </a>
                        <div className={styles.description}>
                            This is something
                        </div>
                    </div>

                    <div
                        className={`${styles.project_container} ${styles.visible}`}
                    >
                        <div className={styles.todo}></div>
                        <a
                            className={styles.btn}
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Demo
                        </a>
                        <div className={styles.description}>This is a Todo</div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Projects;
