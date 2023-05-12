import styles from "./About.module.css";

function About() {
    return (
        <div>
            <h1>About me</h1>
            <div>Hi my name is Marus</div>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium, magnam dolorem necessitatibus, enim officiis vel id
                tenetur voluptatum ratione exercitationem odit architecto,
                ducimus laborum pariatur dicta fuga placeat facere dolore.
            </div>
            <div>My Skills</div>
            <div className={styles.outside_container}>
                <section>
                    <div class={styles.skill_container}>
                        <div class={styles.html}></div>
                        <div>HTML5</div>
                    </div>
                    <div class={styles.skill_container}>
                        <div className={styles.javascript}></div>
                        <div>JavaScript</div>
                    </div>
                    <div class={styles.skill_container}>
                        <div className={styles.css}></div>
                        <div>CSS3</div>
                    </div>
                    <div class={styles.skill_container}>
                        <div className={styles.express}></div>
                        <div>Expressjs</div>
                    </div>
                    <div class={styles.skill_container}>
                        <div className={styles.node}></div>
                        <div>Node</div>
                    </div>
                    <div class={styles.skill_container}>
                        <div className={styles.react}></div>
                        <div>React</div>
                    </div>
                    <div class={styles.skill_container}>
                        <div className={styles.redux}></div>
                        <div>Redux</div>
                    </div>
                    <div class={styles.skill_container}>
                        <div className={styles.git}></div>
                        <div>Git</div>
                    </div>
                    <div class={styles.skill_container}>
                        <div className={styles.webpack}></div>
                        <div>Wepback</div>
                    </div>
                    <div class={styles.skill_container}>
                        <div className={styles.vsscode}></div>
                        <div>vssode</div>
                    </div>
                    <div class={styles.skill_container}>
                        <div className={styles.restful}></div>
                        <div>RESTful API</div>
                    </div>
                    <div class={styles.skill_container}>
                        <div className={styles.mongoose}></div>
                        <div>mongoose</div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;
