import React, { useEffect, useRef, useState, useReducer } from "react";
import "./output.css";
import AnimatedHeader from "./AnimatedHeader";
import Projects from "./Projects";

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
function Home({ mouseLeave, mouseEnter }) {
    // Use the useReducer hook to manage particle positions
    const [particlePositions, dispatch] = useReducer(reducer, initialState);
    const blocksContainer = useRef(null);
    const [isScrooling, setIsScrooling] = useState(false);
    const [multiplier, setMultiplier] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [offsetXTwo, setOffsetXTwo] = useState(0);
    const [offsetYTwo, setOffsetYTwo] = useState(0);
    const [secondOffsetX, setSecondOffsetX] = useState(0);
    const [secondOffsetY, setSecondOffsetY] = useState(0);

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

    useEffect(() => {
        if (runOnce) {
            const containers = document.querySelectorAll('[class^="particle"]');
            containers.forEach((e) => {
                const existingOpacity = getComputedStyle(e).opacity;
                setOpacities((prev) => [...prev, existingOpacity]);
            });
            setRunOnce(false);
        }
        console.log(opacities);

        const changeParticleOpacity = (newOpacity) => {
            const containers = document.querySelectorAll('[class^="particle"]');
            containers.forEach((particle, index) => {
                particle.style.opacity = opacities[index] - newOpacity;
            });
        };
        if (scrollPosition <= 50) {
            setMultiplier(0.35);
            setParticleScale(1.1);
            changeParticleOpacity(0.03);
        } else if (scrollPosition <= 100) {
            setMultiplier(0.4);
            setParticleScale(1.16);
            changeParticleOpacity(0.04);
        } else if (scrollPosition <= 150) {
            setMultiplier(0.45);
            setParticleScale(1.2);
            changeParticleOpacity(0.05);
        } else if (scrollPosition <= 200) {
            setParticleScale(1.25);
            changeParticleOpacity(0.06);
        } else if (scrollPosition <= 250) {
            setParticleScale(1.3);
            changeParticleOpacity(0.07);
        } else if (scrollPosition <= 300) {
            setParticleScale(1.35);
            changeParticleOpacity(0.06);
        } else if (scrollPosition <= 350) {
            setParticleScale(1.4);
            changeParticleOpacity(0.07);
        } else if (scrollPosition <= 400) {
            setParticleScale(1.45);
            changeParticleOpacity(0.08);
        } else if (scrollPosition <= 450) {
            setParticleScale(1.5);
            changeParticleOpacity(0.09);
        } else if (scrollPosition <= 500) {
            setParticleScale(1.55);
            changeParticleOpacity(0.09);
        } else if (scrollPosition <= 550) {
            changeParticleOpacity(0.1);
            setParticleScale(1.6);
        } else if (scrollPosition <= 600) {
            changeParticleOpacity(0.11);
            setParticleScale(1.65);
        } else if (scrollPosition <= 650) {
            changeParticleOpacity(0.12);
            setParticleScale(1.75);
        } else if (scrollPosition <= 700) {
            // changeParticleOpacity(0.13);
            // setParticleScale(1.85);
            dispatch({
                type: "MOVE_ALL_PARTICLES",
                x: 0,
                y: 0,
            });
        } else {
            // dispatch({
            //     type: "MOVE_ALL_PARTICLES",
            //     x: 0,
            //     y: 0,
            // });
            changeParticleOpacity(0.4);
        }

        setOffsetXTwo(scrollPosition * multiplier);
        setOffsetYTwo(scrollPosition * multiplier);
        setSecondOffsetX(-scrollPosition * multiplier);
        setSecondOffsetY(-scrollPosition * multiplier);

        setFirstParticleX(scrollPosition * multiplier);
        setSecondParticleX(-scrollPosition * multiplier);
        setThirdParticleX(-scrollPosition * multiplier);
        setFourthParticleX(-scrollPosition * multiplier);
        setSeventhParticleX(scrollPosition * multiplier);
        setEightParticleX(scrollPosition * multiplier);

        setFirstParticleY(-scrollPosition * multiplier);
        setSecondParticleY(-scrollPosition * multiplier * 0.1);
        setThirdParticleY(-scrollPosition * multiplier);
        setFourthParticleY(-scrollPosition * multiplier);
        setFifthParticleY(scrollPosition * multiplier);
        setSixthParticleY(scrollPosition * multiplier);
        setSeventhParticleY(scrollPosition * multiplier);
    }, [scrollPosition, multiplier, opacities, runOnce]);

    useEffect(() => {
        function moveParticles() {
            setScrollPosition(window.scrollY);
            setIsScrooling(true);
        }

        function updateParticles() {
            dispatch({
                type: "FIRST_PARTICLE",
                x: firstParticleX,
                y: firstParticleY,
            });
            dispatch({
                type: "SECOND_PARTICLE",
                x: secondParticleX,
                y: secondParticleY,
            });
            dispatch({
                type: "THIRD_PARTICLE",
                x: thirdParticleX,
                y: thirdParticleY,
            });
            dispatch({
                type: "FOURTH_PARTICLE",
                x: fourthParticleX,
                y: fourthParticleY,
            });
            dispatch({
                type: "FIFTH_PARTICLE",
                x: fifthParticleX,
                y: fifthParticleY,
            });
            dispatch({
                type: "SIXTH_PARTICLE",
                x: sixthParticleX,
                y: sixthParticleY,
            });
            dispatch({
                type: "SEVENTH_PARTICLE",
                x: seventhParticleX,
                y: seventhParticleY,
            });
            dispatch({
                type: "EIGHT_PARTICLE",
                x: eightParticleX,
                y: eightParticleY,
            });
            setTimeout(() => {
                setIsScrooling(false);
            }, 500);
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
            (event.clientX - containerCenterX) * 0.02 + firstParticleX;
        const offsetY1 =
            (event.clientY - containerCenterY) * 0.02 + firstParticleY;
        const offsetX2 =
            (event.clientX - containerCenterX) * 0.02 + secondParticleX;
        const offsetY2 =
            (event.clientY - containerCenterY) * 0.02 + secondParticleY;
        const offsetX3 =
            (event.clientX - containerCenterX) * 0.02 + thirdParticleX;
        const offsetY3 =
            (event.clientY - containerCenterY) * 0.02 + thirdParticleY;
        const offsetX4 =
            (event.clientX - containerCenterX) * 0.02 + fourthParticleX;
        const offsetY4 =
            (event.clientY - containerCenterY) * 0.02 + fourthParticleY;
        const offsetX5 =
            (event.clientX - containerCenterX) * 0.02 + fifthParticleX;
        const offsetY5 =
            (event.clientY - containerCenterY) * 0.02 + fifthParticleY;
        const offsetX6 =
            (event.clientX - containerCenterX) * 0.02 + sixthParticleX;
        const offsetY6 =
            (event.clientY - containerCenterY) * 0.02 + sixthParticleY;
        const offsetX7 =
            (event.clientX - containerCenterX) * 0.02 + seventhParticleX;
        const offsetY7 =
            (event.clientY - containerCenterY) * 0.02 + seventhParticleY;
        const offsetX8 =
            (event.clientX - containerCenterX) * 0.02 + eightParticleX;
        const offsetY8 =
            (event.clientY - containerCenterY) * 0.02 + eightParticleY;

        dispatch({
            type: "FIRST_PARTICLE",
            x: offsetX1,
            y: offsetY1,
        });
        dispatch({
            type: "SECOND_PARTICLE",
            x: offsetX2,
            y: offsetY2,
        });
        dispatch({
            type: "THIRD_PARTICLE",
            x: offsetX3,
            y: offsetY3,
        });
        dispatch({
            type: "FOURTH_PARTICLE",
            x: offsetX4,
            y: offsetY4,
        });
        dispatch({
            type: "FIFTH_PARTICLE",
            x: offsetX5,
            y: offsetY5,
        });
        dispatch({
            type: "SIXTH_PARTICLE",
            x: offsetX6,
            y: offsetY6,
        });
        dispatch({
            type: "SEVENTH_PARTICLE",
            x: offsetX7,
            y: offsetY7,
        });
        dispatch({
            type: "EIGHT_PARTICLE",
            x: offsetX8,
            y: offsetY8,
        });
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
                className="w-full flex items-center flex-col"
                ref={blocksContainer}
                onMouseMove={handleMouseMove}
            >
                <div className="mt-24">
                    <div
                        id="particle-container"
                        className=" relative flex justify-center items-center flex-col"
                    >
                        {/* div.particle$*8 */}
                        <h1
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
                                    ? "transform 200ms"
                                    : mouseEnter
                                    ? "transform 100ms"
                                    : "none",
                            }}
                        ></div>

                        <div
                            className="particle2 dark:bg-white"
                            style={{
                                transform: `translate3d(${particle2.x}px, ${particle2.y}px, 0) rotate(-26deg) scale(${particleScale})`,
                                transition: mouseLeave
                                    ? "transform 700ms"
                                    : isScrooling
                                    ? "transform 200ms"
                                    : mouseEnter
                                    ? "transform 100ms"
                                    : "none",
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
                                    ? "transform 200ms"
                                    : mouseEnter
                                    ? "transform 100ms"
                                    : "none",
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
                                    ? "transform 200ms"
                                    : mouseEnter
                                    ? "transform 100ms"
                                    : "none",
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
                                    ? "transform 200ms"
                                    : mouseEnter
                                    ? "transform 100ms"
                                    : "none",
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
                                    ? "transform 200ms"
                                    : mouseEnter
                                    ? "transform 100ms"
                                    : "none",
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
                                    ? "transform 200ms"
                                    : mouseEnter
                                    ? "transform 100ms"
                                    : "none",
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
                                    ? "transform 200ms"
                                    : mouseEnter
                                    ? "transform 100ms"
                                    : "none",
                            }}
                        ></div>
                    </div>
                </div>
                <Projects />
            </div>
        </React.Fragment>
    );
}

export default Home;
