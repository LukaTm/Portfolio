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
                        <div className={styles.rock}>
                            <div className={styles.button}>Button</div>
                        </div>
                    </div>

                    <div className={styles.project_container}>
                        <div className={styles.calc}>
                            <div className={styles.button}>Button</div>
                        </div>
                    </div>

                    <div className={styles.project_container}>
                        <div></div>
                    </div>

                    <div className={styles.project_container}>
                        <div></div>
                    </div>
                    <div className={styles.project_container}>
                        <div className={styles.todo}>
                            <div className={styles.button}>Button</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Projects;
