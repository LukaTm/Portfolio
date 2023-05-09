import styles from "./Projecets.module.css";

function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div className={styles.container}>
                <section className={styles.section}>
                    <div className={styles.rock}>Rock Paper</div>
                    <div className={styles.calc}>Calculator</div>
                    <div>Spotify to youtube songs</div>
                    <div>React Native app</div>
                    <div className={styles.todo}>To do App</div>
                </section>
            </div>
        </div>
    );
}

export default Projects;
