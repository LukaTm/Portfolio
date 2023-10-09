import React, { useEffect, useRef } from "react";
import PreviewBtn from "./PreviewBtn";
import styles from "./Projecets.module.css";
import ToolsUsed from "./ToolsUsed";

function Projects({
    handleProjectsClick,
    toggleLanguageMode,
    text,
    languageSwitch,
    lang,
}) {
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
                    {lang === true ? "Projekti" : "Projects"}
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
                            {lang === true ? "Mēmais šovs" : "Charades"}
                        </div>
                        <div className={styles.tools_container}>
                            <ToolsUsed tool={"MongoDb/mongoose"} />
                            <ToolsUsed tool={"Javascript"} />
                            <ToolsUsed tool={"React"} />
                            <ToolsUsed tool={"Next.js"} />
                            <ToolsUsed tool={"Node.js"} />
                            <ToolsUsed tool={"CSS"} />
                            <ToolsUsed tool={"Tailwind"} />
                            {/* <ToolsUsed tool={"Typescript"} /> */}
                        </div>
                        <div className={styles.project_description}>
                            <p className="dark:text-white">
                                {lang ? (
                                    <>
                                        Full Stack Mēmā šova vārdu ģenerators ir
                                        mājaslapa ar vieglu, vidēju, grūtu
                                        grūtību, ar izvēli ģēnerēt no 1 līdz 50
                                        vārdiem un atbalsta krievu, latviešu un
                                        angļu valodu. Ietver izvēli izveidot
                                        savu vārdu, kas tiek saglabāti MongoDB
                                        databāzē. Veidojot savu vārdu ir kļūdu
                                        pārbaude tukšiem un atkārtotiem vārdiem.
                                        Pierakstīšanās forma ietver e-pasta
                                        kļūdu pārbaudi un paroles garuma
                                        pārbaudi. Mājaslapa izvietota Vercel
                                    </>
                                ) : (
                                    <>
                                        Full Stack Charades is a word generator
                                        website with easy, medium, hard
                                        difficuly levels, customizable word
                                        generation (1 to 50 words), and support
                                        for Russian, Latvian, and English
                                        languages. It includes an custom word
                                        option where users can create their own
                                        words after creating an account. Custom
                                        words are saved in MongoDB. For creating
                                        custom words it includes error handling
                                        for empty and duplicate words. Sign-up
                                        form includes email validation and
                                        password length check. Hosted on Vercel
                                    </>
                                )}
                            </p>
                        </div>
                        <PreviewBtn
                            customHref={
                                "https://memais-sovs.vercel.app/?lang=lv"
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
                            {lang === true
                                ? "Pārsūtiet Spotify dziesmas uz YouTube dziesmām"
                                : "Transfer Spotify songs to YouTube songs"}
                        </div>
                        <div className={styles.tools_container}>
                            <ToolsUsed tool={"Spotify Web API"} />
                            <ToolsUsed tool={"Javascript"} />
                            <ToolsUsed tool={"React"} />
                            <ToolsUsed tool={"YouTube API"} />
                            <ToolsUsed tool={"OAuth2"} />
                            <ToolsUsed tool={"Node.js"} />
                            <ToolsUsed tool={"Express.js"} />
                            <ToolsUsed tool={"CSS"} />
                        </div>
                        <div className={styles.project_description}>
                            <p className="dark:text-white">
                                {lang ? (
                                    <>
                                        Šī lietotne pārsūta patīkamās dziesmas
                                        no Spotify uz YouTube Patīk sarakstu.
                                        Pirmās pogas klikšķis, piesakās Spotify
                                        un nodod lietotnei jūsu patīkamās
                                        dziesmas no Spotify. Pēc tam izmantojot
                                        otru pogu, piesakās pakalpojumā YouTube
                                        un nodrošina lietotnei OAuth2 piekļuvi,
                                        ļaujot lietotnei sākt atzīmēt attiecīgas
                                        dziesmas ar "Patīk" vietnē YouTube.
                                        Lietotne izmanto spotify dziesmas
                                        nosaukumu kopā ar izpildītāja vārdu, lai
                                        meklētu YouTube videoklipus(dziesmas),
                                        izmantojot YouTube Data API un atzīmē
                                        Patīk visatbilstošākos video.
                                    </>
                                ) : (
                                    <>
                                        This app transfers liked songs from
                                        Spotify to YouTube liked playlist. The
                                        first button logs in with Spotify and
                                        provides the app with your liked songs
                                        from Spotify. Then, the second button
                                        logs in with YouTube and provides the
                                        app with an OAuth2 access token,
                                        enabling the app to to like the spotify
                                        songs on YouTube. The app uses spotify
                                        song name along with the artist's name
                                        to search for YouTube videos using
                                        YouTube Data API and likes the most
                                        relevant video.
                                    </>
                                )}
                            </p>
                        </div>

                        <PreviewBtn
                            customSourceCodeHref={
                                "https://github.com/LukaTm/Spotify-Songs-to-Youtube-Liked"
                            }
                            noLiveBtn={true}
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
                                {lang ? (
                                    <>Frontend uzdevumu saraksta vietne</>
                                ) : (
                                    <>Frontend todo list website</>
                                )}
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
                            {lang ? (
                                <>Krustiņi un Nullītes</>
                            ) : (
                                <>Tic Tac Toe </>
                            )}
                        </div>
                        <div className={styles.tools_container}>
                            <ToolsUsed tool={"Javascript"} />
                            <ToolsUsed tool={"CSS"} />
                            <ToolsUsed tool={"HTML"} />
                            <ToolsUsed tool={"Tailwind"} />
                        </div>
                        <div className={styles.project_description}>
                            <p className="dark:text-white">
                                {lang ? (
                                    <>
                                        Krustiņi un Nullītes spēle pret citu
                                        personu.
                                    </>
                                ) : (
                                    <>Tic Tac Toe game against other person.</>
                                )}
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
                            {lang ? (
                                <>Akmens Šķēres Papīrīts</>
                            ) : (
                                <>Rock Paper Scissors </>
                            )}
                        </div>
                        <div className={styles.tools_container}>
                            <ToolsUsed tool={"Javascript"} />
                            <ToolsUsed tool={"CSS"} />
                            <ToolsUsed tool={"HTML"} />
                            <ToolsUsed tool={"Tailwind"} />
                        </div>
                        <div className={styles.project_description}>
                            <p className="dark:text-white">
                                {lang ? (
                                    <>
                                        Akmens Šķēres Papīrīts spēle pret
                                        datoru. Pirmais, kurš iegūst 5 punktus,
                                        uzvar spēli.
                                    </>
                                ) : (
                                    <>
                                        Rock paper scissors game against
                                        computer. First to score 5 points wins
                                        the game.
                                    </>
                                )}
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
                            {lang ? <>Kalkulators</> : <>Calculator</>}
                        </div>
                        <div className={styles.tools_container}>
                            <ToolsUsed tool={"Javascript"} />
                            <ToolsUsed tool={"CSS"} />
                            <ToolsUsed tool={"HTML"} />
                        </div>
                        <div className={styles.project_description}>
                            <p className="dark:text-white">
                                {lang ? (
                                    <>Vienkāršs Kalkulators</>
                                ) : (
                                    <>Basic Calculator.</>
                                )}
                            </p>
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
