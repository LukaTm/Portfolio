import styles from "./Projecets.module.css";

function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div className={styles.container}>
                <section className={styles.section}>
                    <div className={styles.rock}>
                        <div>
                            <div className={styles.button}>Button</div>
                        </div>
                    </div>
                    <div className={styles.calc}>
                        <div>
                            <div className={styles.button}>Button</div>
                        </div>
                        {/* <div className={styles.button}>Button</div> */}
                    </div>
                    <div></div>
                    <div></div>
                    <div className={styles.todo}>
                        <div>
                            <div className={styles.button}>Button</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Projects;
