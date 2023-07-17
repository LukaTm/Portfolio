import React, { useEffect, useRef } from "react";
import PreviewBtn from "./PreviewBtn";
import styles from "./Projecets.module.css";
import ToolsUsed from "./ToolsUsed";

function Projects({ handleProjectsClick }) {
    const projectsElementRef = useRef(null);

    useEffect(() => {
        const projectContainers = document.querySelectorAll(
            `.${styles.project_container}`
        );
        const projects_h3 = document.querySelector(`#${styles.projects_h3}`);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(`${styles.visible}`);
                }
            });
        });
        projectContainers.forEach((el) => observer.observe(el));

        observer.observe(projects_h3);
    }, []);

    return (
        <div>
            <div className={styles.title} id="projects">
                <h3
                    ref={projectsElementRef}
                    className={`${styles.projects_h3_class} dark:bg-gradient-to-br from-white to-slate-200`}
                    id={styles.projects_h3}
                >
                    Projects
                </h3>
            </div>

            <div className={styles.container}>
                <section className={styles.project_section}>
                    <div
                        className={`${styles.project_container} dark:bg-gradient-to-bl from-slate-800 to-slate-700 dark:shadow-md dark:shadow-slate-700`}
                    >
                        <div
                            className={`${styles.charades} dark:shadow-custom`}
                        ></div>
                        <div
                            className={`${styles.description} dark:text-white`}
                        >
                            Charades
                        </div>
                        <div className={styles.tools_container}>
                            <ToolsUsed tool={"MongoDb/mongoose"} />
                            <ToolsUsed tool={"React"} />
                            <ToolsUsed tool={"Next.js"} />
                            <ToolsUsed tool={"Node.js"} />
                            <ToolsUsed tool={"Tailwind"} />
                            {/* <ToolsUsed tool={"Typescript"} /> */}
                        </div>
                        <div className={styles.project_description}>
                            <p className="dark:text-white">
                                Full Stack Charades is a word generator website
                                with easy, medium, hard difficuly levels,
                                customizable word generation (1 to 50 words),
                                and support for Russian, Latvian, and English
                                languages. It includes an custom word option
                                where users can create their own words after
                                creating an account. Custom words are saved in
                                MongoDB. For creating custom words it includes
                                error handling for empty and duplicate words.
                                Sign-up form includes email validation and
                                password length check. Hosted on Vercel
                            </p>
                        </div>
                        <PreviewBtn
                            customHref={
                                "https://final-charades.vercel.app/main?lang=eng"
                            }
                            customSourceCodeHref={
                                "https://github.com/LukaTm/charades-nextjs"
                            }
                        />
                    </div>

                    <div
                        className={`${styles.project_container} dark:bg-gradient-to-bl from-slate-800 to-slate-700 dark:shadow-md dark:shadow-slate-700`}
                    >
                        <div
                            className={`${styles.spotify_yt} dark:shadow-custom`}
                        ></div>
                        <div
                            className={`${styles.descriptionSmall} mt-1 dark:text-white `}
                        >
                            Transfer Spotify songs to YouTube songs
                        </div>
                        <div className={styles.tools_container}>
                            <ToolsUsed tool={"Spotify Web API"} />
                            <ToolsUsed tool={"React"} />
                            <ToolsUsed tool={"YouTube API"} />
                            <ToolsUsed tool={"OAuth2"} />
                            <ToolsUsed tool={"Node.js"} />
                            <ToolsUsed tool={"Express.js"} />
                        </div>
                        <div className={styles.project_description}>
                            <p className="dark:text-white">
                                This app transfers liked songs from Spotify to
                                YouTube liked playlist. Click the first button
                                to log in with Spotify and provide the app with
                                your liked songs from Spotify. Then, use the
                                second button to log in with YouTube and provide
                                the app with an OAuth2 access token, enabling
                                the app to to like the spotify songs on YouTube.
                                The app uses spotify song name along with the
                                artist's name to search for YouTube videos using
                                YouTube Data API and likes the most relevant
                                video.
                            </p>
                        </div>

                        <PreviewBtn
                            // customHref={
                            //     "https://lukatm.github.io/Project-Tic-Tac-Toe/"
                            // }
                            customSourceCodeHref={
                                "https://github.com/LukaTm/Spotify-Songs-to-Youtube-Liked"
                            }
                        />
                    </div>
                    <div
                        className={`${styles.project_container} dark:bg-gradient-to-bl from-slate-800 to-slate-700 dark:shadow-md dark:shadow-slate-700`}
                    >
                        <div
                            className={`${styles.todo} dark:shadow-custom`}
                        ></div>
                        <div
                            className={`${styles.description} mt-1 dark:text-white`}
                        >
                            Todo List
                        </div>
                        <div className={`${styles.tools_container} `}>
                            <ToolsUsed tool={"Javascript"} />
                            <ToolsUsed tool={"CSS"} />
                            <ToolsUsed tool={"Webpack"} />
                            <ToolsUsed tool={"HTML"} />
                            <ToolsUsed tool={"Tailwind"} />
                        </div>
                        <div className={styles.project_description}>
                            <p className="dark:text-white">
                                Frontend todo list website
                            </p>
                        </div>
                        <PreviewBtn
                            customHref={"https://todo-app-5d8b3.web.app/"}
                            customSourceCodeHref={
                                "https://github.com/LukaTm/Project-Todo-List"
                            }
                        />
                    </div>
                    <div
                        className={`${styles.project_container} dark:bg-gradient-to-bl from-slate-800 to-slate-700 dark:shadow-md dark:shadow-slate-700`}
                    >
                        <div
                            className={`${styles.tic_tac} dark:shadow-custom`}
                        ></div>
                        <div
                            className={`${styles.description} mt-1 dark:text-white`}
                        >
                            Tic Tac Toe
                        </div>
                        <div className={styles.tools_container}>
                            <ToolsUsed tool={"Javascript"} />
                            <ToolsUsed tool={"CSS"} />
                            <ToolsUsed tool={"HTML"} />
                            <ToolsUsed tool={"Tailwind"} />
                        </div>
                        <div className={styles.project_description}>
                            <p className="dark:text-white">
                                Tic Tac Toe game against other person.
                            </p>
                        </div>

                        <PreviewBtn
                            customHref={
                                "https://lukatm.github.io/Project-Tic-Tac-Toe/"
                            }
                            customSourceCodeHref={
                                "https://github.com/LukaTm/Project-Tic-Tac-Toe"
                            }
                        />
                    </div>
                    <div
                        className={`${styles.project_container} dark:bg-gradient-to-bl from-slate-800 to-slate-700 dark:shadow-md dark:shadow-slate-700`}
                    >
                        <div
                            className={`${styles.rock} dark:shadow-custom`}
                        ></div>
                        <div
                            className={`${styles.description} mt-1 dark:text-white`}
                        >
                            Rock Paper Scissors
                        </div>
                        <div className={styles.tools_container}>
                            <ToolsUsed tool={"Javascript"} />
                            <ToolsUsed tool={"CSS"} />
                            <ToolsUsed tool={"HTML"} />
                            <ToolsUsed tool={"Tailwind"} />
                        </div>
                        <div className={styles.project_description}>
                            <p className="dark:text-white">
                                Rock paper scissors game against computer. First
                                to score 5 points wins the game.
                            </p>
                        </div>

                        <PreviewBtn
                            customHref={
                                "https://lukatm.github.io/rock-paper-scissors/"
                            }
                            customSourceCodeHref={
                                "https://github.com/LukaTm/rock-paper-scissors"
                            }
                        />
                    </div>

                    <div
                        className={`${styles.project_container} dark:bg-gradient-to-bl from-slate-800 to-slate-700 dark:shadow-md dark:shadow-slate-700`}
                    >
                        <div
                            className={`${styles.calc} dark:shadow-custom
                            `}
                        ></div>
                        <div
                            className={`${styles.description} mt-1 dark:text-white`}
                        >
                            Calculator
                        </div>
                        <div className={styles.tools_container}>
                            <ToolsUsed tool={"Javascript"} />
                            <ToolsUsed tool={"CSS"} />
                            <ToolsUsed tool={"HTML"} />
                        </div>
                        <div className={styles.project_description}>
                            <p className="dark:text-white">Basic Calculator.</p>
                        </div>

                        <PreviewBtn
                            customHref={
                                "https://lukatm.github.io/Calculator-Project/"
                            }
                            customSourceCodeHref={
                                "https://github.com/LukaTm/Calculator-Project"
                            }
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Projects;
