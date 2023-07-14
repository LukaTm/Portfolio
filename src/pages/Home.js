import React, { useEffect, useRef, useState, useReducer } from "react";
import "./output.css";
import AnimatedHeader from "../components/AnimatedHeader";
import Projects from "../components/Projects";
import { debounce } from "lodash";

import Header from "../components/Header";

// Define initial state for the particle positions
const initialState = [
    { id: 1, x: 0, y: 0 },
    { id: 2, x: 0, y: 0 },
    { id: 3, x: 0, y: 0 },
    { id: 4, x: 0, y: 0 },
    { id: 5, x: 0, y: 0 },
    { id: 6, x: 0, y: 0 },
    { id: 7, x: 0, y: 0 },
    { id: 8, x: 0, y: 0 },
];

// Define the reducer function
function reducer(state, action) {
    switch (action.type) {
        case "MOVE_PARTICLE":
            return state.map((particle) =>
                particle.id === action.id
                    ? { ...particle, x: action.x, y: action.y }
                    : particle
            );

        case "MOVE_ALL_PARTICLES_ONE":
            return state.map((particle) => {
                return particle.id === 3 ||
                    particle.id === 4 ||
                    particle.id === 2 ||
                    particle.id === 5
                    ? { ...particle, x: action.x, y: action.y }
                    : particle;
            });
        case "MOVE_ALL_PARTICLES_TWO":
            return state.map((particle) => {
                return particle.id === 1 ||
                    particle.id === 6 ||
                    particle.id === 7 ||
                    particle.id === 8
                    ? { ...particle, x: action.x, y: action.y }
                    : particle;
            });

        case "MOVE_PARTICLES_ONE_TO_FOUR":
            return state.map((particle) => {
                return particle.id === 1 ||
                    particle.id === 2 ||
                    particle.id === 4
                    ? { ...particle, x: action.x, y: action.y }
                    : particle;
            });
        case "MOVE_ALL_PARTICLES":
            return state.map((particle) => {
                return { ...particle, x: action.x, y: action.y };
            });

        case "MOVE_PARTICLES_FIVE_TO_EIGHT":
            return state.map((particle) => {
                return particle.id === 5 ||
                    particle.id === 6 ||
                    particle.id === 3 ||
                    particle.id === 7 ||
                    particle.id === 8
                    ? { ...particle, x: action.x, y: action.y }
                    : particle;
            });
        case "RESET_PARTICLES":
            return state.map((particle) => {
                return {
                    ...particle,
                    x: action.x,
                    y: action.y,
                };
            });
        case "FIRST_PARTICLE":
            return state.map((particle) => {
                return particle.id === 1
                    ? {
                          ...particle,
                          x: action.x,
                          y: action.y,
                      }
                    : particle;
            });
        case "SECOND_PARTICLE":
            return state.map((particle) => {
                return particle.id === 2
                    ? {
                          ...particle,
                          x: action.x,
                          y: action.y,
                      }
                    : particle;
            });
        case "THIRD_PARTICLE":
            return state.map((particle) => {
                return particle.id === 3
                    ? {
                          ...particle,
                          x: action.x,
                          y: action.y,
                      }
                    : particle;
            });
        case "FOURTH_PARTICLE":
            return state.map((particle) => {
                return particle.id === 4
                    ? {
                          ...particle,
                          x: action.x,
                          y: action.y,
                      }
                    : particle;
            });
        case "FIFTH_PARTICLE":
            return state.map((particle) => {
                return particle.id === 5
                    ? {
                          ...particle,
                          x: action.x,
                          y: action.y,
                      }
                    : particle;
            });
        case "SIXTH_PARTICLE":
            return state.map((particle) => {
                return particle.id === 6
                    ? {
                          ...particle,
                          x: action.x,
                          y: action.y,
                      }
                    : particle;
            });
        case "SEVENTH_PARTICLE":
            return state.map((particle) => {
                return particle.id === 7
                    ? {
                          ...particle,
                          x: action.x,
                          y: action.y,
                      }
                    : particle;
            });
        case "EIGHT_PARTICLE":
            return state.map((particle) => {
                return particle.id === 8
                    ? {
                          ...particle,
                          x: action.x,
                          y: action.y,
                      }
                    : particle;
            });
        default:
            return state;
    }
}
function Home({
    mouseLeave,
    mouseEnter,
    setDarkMode,
    darkMode,
    handleClick,
    logo,
    darkModeClick,
    setDarkModeClick,
    isClickable,
    transitioned,
    isDropdownOpen,
    setIsDropdownOpen,
}) {
    // Use the useReducer hook to manage particle positions
    const [particlePositions, dispatch] = useReducer(reducer, initialState);
    const blocksContainer = useRef(null);
    const [isScrooling, setIsScrooling] = useState(false);
    const [multiplier, setMultiplier] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    const [firstParticleX, setFirstParticleX] = useState(0);
    const [secondParticleX, setSecondParticleX] = useState(0);
    const [thirdParticleX, setThirdParticleX] = useState(0);
    const [fourthParticleX, setFourthParticleX] = useState(0);
    const [fifthParticleX, setFifthParticleX] = useState(0);
    const [sixthParticleX, setSixthParticleX] = useState(0);
    const [seventhParticleX, setSeventhParticleX] = useState(0);
    const [eightParticleX, setEightParticleX] = useState(0);

    const [firstParticleY, setFirstParticleY] = useState(0);
    const [secondParticleY, setSecondParticleY] = useState(0);
    const [thirdParticleY, setThirdParticleY] = useState(0);
    const [fourthParticleY, setFourthParticleY] = useState(0);
    const [fifthParticleY, setFifthParticleY] = useState(0);
    const [sixthParticleY, setSixthParticleY] = useState(0);
    const [seventhParticleY, setSeventhParticleY] = useState(0);
    const [eightParticleY, setEightParticleY] = useState(0);
    const [particleScale, setParticleScale] = useState(0);
    const [opacities, setOpacities] = useState([]);
    const [runOnce, setRunOnce] = useState(true);
    // Use Animation Once on Page
    const [hasAnimationBeen, setHasAnimationBeen] = useState(false);
    const [hasAnimationBeenH1, setHasAnimationBeenH1] = useState(false);

    const projectContainersRef = useRef(null);
    const projectContainerHeaderRef = useRef(null);
    const homeH1Ref = useRef(null);

    const handleProjectsClick = (element) => {
        if (element.current) {
            element.current.click();
        }
    };

    useEffect(() => {
        const revealProject = () => {
            const projectContainers = projectContainersRef.current;
            const projectContainerHeader = projectContainerHeaderRef.current;
            const homeH1 = homeH1Ref.current;
            const windowHeight = window.innerHeight;

            // CALCULATES TO THE TOP OF THE VIEWPORT
            const containerTop = projectContainers.getBoundingClientRect().top;
            const containerTopH1 = homeH1.getBoundingClientRect().top;

            // H1 Animation
            if (containerTopH1 < windowHeight - 10 && !hasAnimationBeenH1) {
                homeH1.classList.add("visible");
                setHasAnimationBeenH1(true);
            }

            // Delay before applying the "about_description.visible" class
            if (containerTop < windowHeight - 10 && !hasAnimationBeen) {
                setTimeout(() => {
                    projectContainers.classList.add("visible");
                    projectContainerHeader.classList.add("visible");
                    setHasAnimationBeen(true);
                }, 200); // Adjust the delay time as needed
            } else if (!hasAnimationBeen) {
                projectContainers.classList.remove("visible");
                projectContainerHeader.classList.remove("visible");
            }
        };

        const debouncedRevealProject = debounce(revealProject, 100);

        function handleResize() {
            debouncedRevealProject();
        }

        window.addEventListener("scroll", debouncedRevealProject);
        window.addEventListener("resize", handleResize);

        revealProject();

        // CLEANUP
        return () => {
            window.removeEventListener("scroll", debouncedRevealProject);
            window.removeEventListener("resize", handleResize);
        };
    }, [hasAnimationBeen, hasAnimationBeenH1]);

    useEffect(() => {
        if (runOnce) {
            const containers = document.querySelectorAll('[class^="particle"]');
            containers.forEach((e) => {
                const existingOpacity = getComputedStyle(e).opacity;
                setOpacities((prev) => [...prev, existingOpacity]);
            });
            setRunOnce(false);
        }

        const changeParticleOpacity = (newOpacity) => {
            const containers = document.querySelectorAll('[class^="particle"]');
            containers.forEach((particle, index) => {
                particle.style.opacity = opacities[index] - newOpacity;
            });
        };

        const updateParticleStyles = (newOpacity, particleScale) => {
            changeParticleOpacity(newOpacity);
            setParticleScale(particleScale);
        };

        if (scrollPosition <= 50) {
            updateParticleStyles(0.03, 1.1);
            setMultiplier(0.35);
        } else if (scrollPosition <= 100) {
            updateParticleStyles(0.04, 1.16);
            setMultiplier(0.4);
        } else if (scrollPosition <= 150) {
            updateParticleStyles(0.05, 1.2);
            setMultiplier(0.45);
        } else if (scrollPosition <= 200) {
            changeParticleOpacity(0.06);
            setParticleScale(1.25);
        } else if (scrollPosition <= 250) {
            changeParticleOpacity(0.07);
            setParticleScale(1.3);
        } else if (scrollPosition <= 300) {
            changeParticleOpacity(0.06);
            setParticleScale(1.35);
        } else if (scrollPosition <= 350) {
            changeParticleOpacity(0.07);
            setParticleScale(1.4);
        } else if (scrollPosition <= 400) {
            changeParticleOpacity(0.08);
            setParticleScale(1.45);
        } else if (scrollPosition <= 450) {
            changeParticleOpacity(0.09);
            setParticleScale(1.5);
        } else if (scrollPosition <= 500) {
            changeParticleOpacity(0.09);
            setParticleScale(1.55);
        } else if (scrollPosition <= 550) {
            changeParticleOpacity(0.1);
            setParticleScale(1.6);
        } else if (scrollPosition <= 600) {
            changeParticleOpacity(0.11);
            setParticleScale(1.65);
        } else if (scrollPosition <= 650) {
            changeParticleOpacity(0.12);
            setParticleScale(1.75);
        } else if (scrollPosition <= 660) {
            changeParticleOpacity(0.13);
        } else if (scrollPosition <= 670) {
            changeParticleOpacity(0.14);
        } else if (scrollPosition <= 680) {
            changeParticleOpacity(0.15);
        } else if (scrollPosition <= 690) {
            changeParticleOpacity(0.16);
        } else if (scrollPosition <= 700) {
            changeParticleOpacity(0.17);
        } else if (scrollPosition <= 710) {
            changeParticleOpacity(0.18);
        } else if (scrollPosition <= 720) {
            changeParticleOpacity(0.19);
        } else if (scrollPosition <= 730) {
            changeParticleOpacity(0.2);
        } else if (scrollPosition <= 740) {
            changeParticleOpacity(0.21);
        } else if (scrollPosition <= 750) {
            changeParticleOpacity(0.22);
        } else if (scrollPosition <= 760) {
            changeParticleOpacity(0.23);
        } else if (scrollPosition <= 770) {
            changeParticleOpacity(0.24);
        } else {
            changeParticleOpacity(0.5);
        }

        setFirstParticleX(scrollPosition * multiplier);
        setSecondParticleX(-scrollPosition * multiplier);
        setThirdParticleX(-scrollPosition * multiplier);
        setFourthParticleX(-scrollPosition * multiplier);
        setSeventhParticleX(scrollPosition * multiplier * 0.3);
        setEightParticleX(scrollPosition * multiplier);

        setFirstParticleY(-scrollPosition * multiplier);
        setSecondParticleY(-scrollPosition * multiplier * 0.1);
        setThirdParticleY(-scrollPosition * multiplier);
        setFourthParticleY(-scrollPosition * multiplier);
        setFifthParticleY(scrollPosition * multiplier);
        setSixthParticleY(scrollPosition * multiplier);
        setSeventhParticleY(scrollPosition * multiplier);
    }, [scrollPosition, multiplier, opacities, runOnce]);

    // ----------------------------------
    useEffect(() => {
        function moveParticles() {
            setScrollPosition(window.scrollY);
            setIsScrooling(true);
        }

        function updateParticles() {
            const particleUpdates = [
                {
                    type: "FIRST_PARTICLE",
                    x: firstParticleX,
                    y: firstParticleY,
                },
                {
                    type: "SECOND_PARTICLE",
                    x: secondParticleX,
                    y: secondParticleY,
                },
                {
                    type: "THIRD_PARTICLE",
                    x: thirdParticleX,
                    y: thirdParticleY,
                },
                {
                    type: "FOURTH_PARTICLE",
                    x: fourthParticleX,
                    y: fourthParticleY,
                },
                {
                    type: "FIFTH_PARTICLE",
                    x: fifthParticleX,
                    y: fifthParticleY,
                },
                {
                    type: "SIXTH_PARTICLE",
                    x: sixthParticleX,
                    y: sixthParticleY,
                },
                {
                    type: "SEVENTH_PARTICLE",
                    x: seventhParticleX,
                    y: seventhParticleY,
                },
                {
                    type: "EIGHT_PARTICLE",
                    x: eightParticleX,
                    y: eightParticleY,
                },
            ];

            particleUpdates.forEach((update) => {
                dispatch(update);
            });
        }

        window.addEventListener("scroll", moveParticles);
        updateParticles();

        return () => {
            window.removeEventListener("scroll", moveParticles);
        };
    }, [
        dispatch,
        firstParticleX,
        firstParticleY,
        secondParticleX,
        secondParticleY,
        thirdParticleX,
        thirdParticleY,
        fourthParticleX,
        fourthParticleY,
        fifthParticleX,
        fifthParticleY,
        sixthParticleX,
        sixthParticleY,
        seventhParticleX,
        seventhParticleY,
        eightParticleX,
        eightParticleY,
    ]);

    const handleMouseMove = (event) => {
        const container = blocksContainer.current;
        // Coordinates and WIDTH | HEIGHT
        const containerRect = container.getBoundingClientRect();
        // CENTER
        const containerCenterX = containerRect.left + containerRect.width / 2;
        const containerCenterY = containerRect.top + containerRect.height / 2;

        // X and Y CLIENT coordinates
        const offsetX1 =
            (event.clientX - containerCenterX) * 0.029 + firstParticleX;
        const offsetY1 =
            (event.clientY - containerCenterY) * 0.029 + firstParticleY + 39;
        const offsetX2 =
            (event.clientX - containerCenterX) * 0.029 + secondParticleX;
        const offsetY2 =
            (event.clientY - containerCenterY) * 0.029 + secondParticleY + 39;
        const offsetX3 =
            (event.clientX - containerCenterX) * 0.008 + thirdParticleX;
        const offsetY3 =
            (event.clientY - containerCenterY) * 0.008 + thirdParticleY + 10;
        const offsetX4 =
            (event.clientX - containerCenterX) * 0.014 + fourthParticleX;
        const offsetY4 =
            (event.clientY - containerCenterY) * 0.014 + fourthParticleY + 18;
        const offsetX5 =
            (event.clientX - containerCenterX) * 0.009 + fifthParticleX;
        const offsetY5 =
            (event.clientY - containerCenterY) * 0.009 + fifthParticleY + 12;
        const offsetX6 =
            (event.clientX - containerCenterX) * 0.014 + sixthParticleX + 1;
        const offsetY6 =
            (event.clientY - containerCenterY) * 0.014 + sixthParticleY + 18;
        const offsetX7 =
            (event.clientX - containerCenterX) * 0.005 + seventhParticleX;
        const offsetY7 =
            (event.clientY - containerCenterY) * 0.005 + seventhParticleY + 6;
        const offsetX8 =
            (event.clientX - containerCenterX) * 0.014 + eightParticleX;
        const offsetY8 =
            (event.clientY - containerCenterY) * 0.014 + eightParticleY + 18;

        const dispatchParticles = (offsetX, offsetY, particle) => {
            dispatch({
                type: particle,
                x: offsetX,
                y: offsetY,
            });
        };
        dispatchParticles(offsetX1, offsetY1, "FIRST_PARTICLE");
        dispatchParticles(offsetX2, offsetY2, "SECOND_PARTICLE");
        dispatchParticles(offsetX3, offsetY3, "THIRD_PARTICLE");
        dispatchParticles(offsetX4, offsetY4, "FOURTH_PARTICLE");
        dispatchParticles(offsetX5, offsetY5, "FIFTH_PARTICLE");
        dispatchParticles(offsetX6, offsetY6, "SIXTH_PARTICLE");
        dispatchParticles(offsetX7, offsetY7, "SEVENTH_PARTICLE");
        dispatchParticles(offsetX8, offsetY8, "EIGHT_PARTICLE");
    };

    // Accessing the x and y coordinates for each particle
    const particle1 = particlePositions.find((particle) => particle.id === 1);
    const particle2 = particlePositions.find((particle) => particle.id === 2);
    const particle3 = particlePositions.find((particle) => particle.id === 3);
    const particle4 = particlePositions.find((particle) => particle.id === 4);
    const particle5 = particlePositions.find((particle) => particle.id === 5);
    const particle6 = particlePositions.find((particle) => particle.id === 6);
    const particle7 = particlePositions.find((particle) => particle.id === 7);
    const particle8 = particlePositions.find((particle) => particle.id === 8);

    return (
        <React.Fragment>
            <div
                // className="w-full flex items-center flex-col "
                ref={blocksContainer}
                onMouseMove={handleMouseMove}
                className="flex flex-col items-center"
            >
                <Header
                    logo={logo}
                    isClickable={isClickable}
                    handleClick={handleClick}
                    darkModeClick={darkModeClick}
                    setDarkModeClick={setDarkModeClick}
                    setDarkMode={setDarkMode}
                    darkMode={darkMode}
                    transitioned={transitioned}
                    isDropdownOpen={isDropdownOpen}
                    setIsDropdownOpen={setIsDropdownOpen}
                    isOnHome={true}
                ></Header>
                <div className="flex w-fullflex-col items-center">
                    <div
                        id="particle-container"
                        className=" relative flex justify-center items-center flex-col"
                    >
                        <h1
                            id="home_h1"
                            ref={homeH1Ref}
                            className={
                                "dark:bg-gradient-to-br from-white to-slate-200"
                            }
                        >
                            Hi, I'm Markuss
                        </h1>
                        <AnimatedHeader
                            className="font-semibold dark:text-white"
                            text="Full Stack Developer"
                        />

                        <div
                            className="particle1 dark:bg-white "
                            style={{
                                transform: `translate3d(${particle1.x}px, ${particle1.y}px, 0) rotate(20deg) scale(${particleScale})`,
                                transition: mouseLeave
                                    ? "transform 700ms"
                                    : isScrooling
                                    ? "transform 50ms"
                                    : "",
                            }}
                        ></div>

                        <div
                            className="particle2 dark:bg-white"
                            style={{
                                transform: `translate3d(${particle2.x}px, ${particle2.y}px, 0) rotate(-26deg) scale(${particleScale})`,
                                transition: mouseLeave
                                    ? "transform 700ms"
                                    : isScrooling
                                    ? "transform 50ms"
                                    : "",
                            }}
                        ></div>

                        <div
                            className="particle3 dark:bg-white"
                            style={{
                                // (tx, ty, tz)
                                transform: `translate3d(${particle3.x}px, ${particle3.y}px, 0) rotate(17deg) scale(${particleScale})`,
                                transition: mouseLeave
                                    ? "transform 700ms"
                                    : isScrooling
                                    ? "transform 50ms"
                                    : "",
                            }}
                        ></div>
                        <div
                            className="particle4 dark:bg-white"
                            style={{
                                // (tx, ty, tz)
                                transform: `translate3d(${particle4.x}px, ${particle4.y}px, 0) rotate(26deg) scale(${particleScale})`,
                                transition: mouseLeave
                                    ? "transform 700ms"
                                    : isScrooling
                                    ? "transform 50ms"
                                    : "",
                            }}
                        ></div>
                        <div
                            className="particle5 dark:bg-white"
                            style={{
                                // (tx, ty, tz)
                                transform: `translate3d(${particle5.x}px, ${particle5.y}px, 0) rotate(35deg) scale(${particleScale})`,
                                transition: mouseLeave
                                    ? "transform 700ms"
                                    : isScrooling
                                    ? "transform 50ms"
                                    : "",
                            }}
                        ></div>
                        <div
                            className="particle6 dark:bg-white"
                            style={{
                                // (tx, ty, tz)
                                transform: `translate3d(${particle6.x}px, ${particle6.y}px, 0) rotate(14deg) scale(${particleScale})`,
                                transition: mouseLeave
                                    ? "transform 700ms"
                                    : isScrooling
                                    ? "transform 50ms"
                                    : "",
                            }}
                        ></div>
                        <div
                            className="particle7 dark:bg-white"
                            style={{
                                // (tx, ty, tz)
                                transform: `translate3d(${particle7.x}px, ${particle7.y}px, 0) rotate(-26deg) scale(${particleScale})`,
                                transition: mouseLeave
                                    ? "transform 700ms"
                                    : isScrooling
                                    ? "transform 50ms"
                                    : "",
                            }}
                        ></div>
                        <div
                            className="particle8 dark:bg-white"
                            style={{
                                // (tx, ty, tz)
                                transform: `translate3d(${particle8.x}px, ${particle8.y}px, 0) rotate(-49deg) scale(${particleScale})`,
                                transition: mouseLeave
                                    ? "transform 700ms"
                                    : isScrooling
                                    ? "transform 50ms"
                                    : "",
                            }}
                        ></div>
                    </div>
                </div>
                <div
                    className={`project_outside ${
                        darkMode ? "darkModeFilter" : ""
                    }`}
                >
                    <div
                        ref={projectContainerHeaderRef}
                        className={`project_container dark:bg-gradient-to-bl from-slate-800 to-slate-700 dark:text-white
                            `}
                    >
                        <h3 className="about-header">ABOUT</h3>
                        <div>
                            <p
                                className="about_description"
                                ref={projectContainersRef}
                            >
                                My name is Markuss, and I'm a Full-Stack
                                developer. Web development has become my primary
                                focus and area of expertise. Starting with
                                Python and gradually transitioning into the
                                realm of web development, I have dedicated
                                myself to mastering various front-end and
                                back-end technologies.
                                <br />I am driven by a desire for continuous
                                improvement, I actively seek opportunities to
                                enhance my coding skills and avoid falling into
                                complacency with easy or repetitive tasks. I am
                                open to taking on challenging projects that push
                                me beyond my comfort zone, as they provide
                                valuable opportunities to acquire new skills and
                                expertise.
                            </p>
                        </div>
                    </div>
                </div>
                {/* PROJECTS */}
                <Projects
                    handleProjectsClick={handleProjectsClick}
                    hasAnimationBeen={hasAnimationBeen}
                />
            </div>
        </React.Fragment>
    );
}

export default Home;
