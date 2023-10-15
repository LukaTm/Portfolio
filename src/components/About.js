import React, { useEffect, useRef } from "react";
import "../../src/pages/output.css";

function About({ lang, toggleLanguageMode, text, languageSwitch }) {
    const projectContainersRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
        const projectContainers = projectContainersRef.current;
        const header = headerRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(`visible`);
                }
            });
        });

        observer.observe(projectContainers);
        observer.observe(header);
    }, []);

    return (
        <div
            className={`project_container_about dark:bg-gradient-to-bl from-slate-800 to-slate-700 dark:text-white`}
        >
            <h3 ref={headerRef} className="about-header">
                {lang === true ? "Par Mani" : "ABOUT"}
            </h3>
            <div>
                <p ref={projectContainersRef} className="about_description">
                    {lang ? (
                        <>
                            Mani sauc Markuss, un es esmu Full-Stack
                            izstrādātājs. Web attīstība ir kļuvusi par manu
                            galveno uzmanību un jomu ekspertīzi. Sākot ar Python
                            un pakāpeniski pārejot uz JavaScript, esmu veltījis
                            sevi apgūt dažādas front-end un back-end
                            tehnoloģijas.
                            <br /> Nepārtraukti pilnveidojos un aktīvi meklēju
                            iespējas uzlabot savas programmēšanas prasmes.
                            Visvairāk iemācījos no personīgajiem projektiem un
                            atradu vislielāko prieku programmējot caur tiem.
                        </>
                    ) : (
                        <>
                            My name is Markuss, and I'm a Full-Stack developer.
                            Web development has become my primary focus and area
                            of expertise. Starting with Python and gradually
                            transitioning to JavaScript, I have dedicated myself
                            to mastering various front-end and back-end
                            technologies.
                            <br />
                            Continuously improving and actively seeking
                            opportunities to enhance my coding skills. Learned
                            the most from personal projects and found the
                            greatest enjoyment in programming through them.
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}
// will only re-render the component if its props have changed
export default React.memo(About);
