import React, { useEffect, useRef } from "react";
import "../src/pages/output.css";

function About() {
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
                ABOUT
            </h3>
            <div>
                <p ref={projectContainersRef} className="about_description">
                    My name is Markuss, and I'm a Full-Stack developer. Web
                    development has become my primary focus and area of
                    expertise. Starting with Python and gradually transitioning
                    into the realm of web development, I have dedicated myself
                    to mastering various front-end and back-end technologies.
                    <br />I am driven by a desire for continuous improvement, I
                    actively seek opportunities to enhance my coding skills and
                    avoid falling into complacency with easy or repetitive
                    tasks. I am open to taking on challenging projects that push
                    me beyond my comfort zone, as they provide valuable
                    opportunities to acquire new skills and expertise.
                </p>
            </div>
        </div>
    );
}

export default About;
