import styles from "./Projecets.module.css";

function Projects() {
    return (
        <div>
            <div className={styles.title}>
                <h1>Projects</h1>
            </div>

            <div className={styles.container}>
                <section className={styles.section}>
                    <div className={styles.project_container}>
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

                    <div className={styles.project_container}>
                        <div className={styles.calc}></div>
                        <a
                            className={styles.btn}
                            href="https://lukatm.github.io/Calculator-Project/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Demo
                        </a>
                        <div className={styles.description}>
                            This is a calculator
                        </div>
                    </div>

                    <div className={styles.project_container}>
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

                    <div className={styles.project_container}>
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
                    <div className={styles.project_container}>
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
