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
                        <div className={styles.btn}>Demo</div>
                        <div className={styles.description}>
                            This is a rock paper scissors
                        </div>
                    </div>

                    <div className={styles.project_container}>
                        <div className={styles.calc}></div>
                        <div className={styles.btn}>Demo</div>
                        <div className={styles.description}>
                            This is a calculator
                        </div>
                    </div>

                    <div className={styles.project_container}>
                        <div>h</div>
                        <div className={styles.btn}>Demo</div>
                        <div className={styles.description}>
                            This is something also
                        </div>
                    </div>

                    <div className={styles.project_container}>
                        <div></div>
                        <div className={styles.btn}>Demo</div>
                        <div className={styles.description}>
                            This is something
                        </div>
                    </div>
                    <div className={styles.project_container}>
                        <div className={styles.todo}></div>
                        <div className={styles.btn}>Demo</div>
                        <div className={styles.description}>This is a Todo</div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Projects;
