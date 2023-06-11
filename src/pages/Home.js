import React, { useEffect, useRef, useState, useReducer } from "react";
import "./output.css";
import AnimatedHeader from "./AnimatedHeader";

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
                    ? { id: particle.id, x: action.x, y: action.y }
                    : particle
            );

        case "MOVE_ALL_PARTICLES":
            return state.map((particle) => {
                return {
                    ...particle,
                    x: action.x,
                    y: action.y,
                };
            });

        case "MOVE_PARTICLES_ONE_TO_FOUR":
            return state.map((particle) => {
                return particle.id === 1 ||
                    particle.id === 2 ||
                    particle.id === 3 ||
                    particle.id === 4
                    ? { ...particle, x: action.x, y: action.y }
                    : particle;
            });

        case "MOVE_PARTICLES_FIVE_TO_EIGHT":
            return state.map((particle) => {
                return particle.id === 5 ||
                    particle.id === 6 ||
                    particle.id === 7 ||
                    particle.id === 8
                    ? { ...particle, x: action.x, y: action.y }
                    : particle;
            });

        default:
            return state;
    }
}

function Home() {
    // Use the useReducer hook to manage particle positions
    const [particlePositions, dispatch] = useReducer(reducer, initialState);
    const blocksContainer = useRef(null);

    const handleMouseMove = (event) => {
        const container = blocksContainer.current;
        // Coordinates and WIDTH | HEIGHT
        const containerRect = container.getBoundingClientRect();
        // CENTER
        const containerCenterX = containerRect.left + containerRect.width / 2;
        const containerCenterY = containerRect.top + containerRect.height / 2;

        console.log(event.clientX);
        console.log(containerCenterX);

        // X and Y CLIENT coordinates
        const offsetX = (event.clientX - containerCenterX) * 0.07; // Adjust the sensitivity by changing the multiplication value
        const offsetY = (event.clientY - containerCenterY) * 0.07;
        // 4-8 PARTICLES
        const secondOffsetX = (event.clientX - containerCenterX) * 0.05; // Adjust the sensitivity by changing the multiplication value
        const secondOffsetY = (event.clientY - containerCenterY) * 0.05;

        dispatch({
            type: "MOVE_PARTICLES_ONE_TO_FOUR",
            x: offsetX,
            y: offsetY,
        });
        dispatch({
            type: "MOVE_PARTICLES_FIVE_TO_EIGHT",
            x: secondOffsetX,
            y: secondOffsetY,
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

    console.log("Particle 1 - x:", particle1.x, "y:", particle1.y);

    return (
        <div className="flex flex-col justify-center items-center">
            {/* <Link to="/about">About</Link> */}
            <h1> HI, I'm Markuss.</h1>
            <AnimatedHeader className="font-bold" text="Full Stack Developer" />
            <div>
                LASSLDLASLLAS l slaLd al lsa lsal dsal dad lal sal lasl dlal
                dlsa as l lal dla l dl ll al alasd aslj dsa hd aushd sklau hlka
                uh aulhd ash aush da hau hsl hdlukah l h1h 1lduh1lkh ud12
                hd1dh12uklh 1lk h1d l1k hdl1hd 1lh 1uh 1k2u h1 1 1
            </div>
            <div>
                KHAGKGIOPJAPI iwajoivjao dawoivnao oj81j o1jv1wo 9j1v1pviodjapw
                djawdvpo1jd 901jv1 1jv1iopjc1wp09 jd1vpdj1vd1dio j1vj1wvp1
                kjvp91vjk1 pjv1vj1v1v
            </div>
            <h2>FIND ME ON</h2>
            <div
                className="particle-wrapper h-80 w-96"
                ref={blocksContainer}
                onMouseMove={handleMouseMove}
            >
                {/* div.particle$*8 */}
                <div
                    className="particle1 "
                    style={{
                        // (tx, ty, tz)
                        transform: `translate3d(${particle1.x}px, ${particle1.y}px, 0) rotate(51deg)`,
                    }}
                ></div>
                <div
                    className="particle2"
                    style={{
                        // (tx, ty, tz)
                        transform: `translate3d(${particle2.x}px, ${particle2.y}px, 0) rotate(20deg)`,
                    }}
                ></div>
                <div
                    className="particle3"
                    style={{
                        // (tx, ty, tz)
                        transform: `translate3d(${particle3.x}px, ${particle3.y}px, 0) rotate(-17deg)`,
                    }}
                ></div>
                <div
                    className="particle4"
                    style={{
                        // (tx, ty, tz)
                        transform: `translate3d(${particle4.x}px, ${particle4.y}px, 0) rotate(26deg)`,
                    }}
                ></div>
                <div
                    className="particle5"
                    style={{
                        // (tx, ty, tz)
                        transform: `translate3d(${particle5.x}px, ${particle5.y}px, 0) rotate(-11deg)`,
                    }}
                ></div>
                <div
                    className="particle6"
                    style={{
                        // (tx, ty, tz)
                        transform: `translate3d(${particle6.x}px, ${particle6.y}px, 0) rotate(14deg)`,
                    }}
                ></div>
                <div
                    className="particle7"
                    style={{
                        // (tx, ty, tz)
                        transform: `translate3d(${particle7.x}px, ${particle7.y}px, 0) rotate(-14deg)`,
                    }}
                ></div>
                <div
                    className="particle8"
                    style={{
                        // (tx, ty, tz)
                        transform: `translate3d(${particle8.x}px, ${particle8.y}px, 0) rotate(17deg)`,
                    }}
                ></div>
            </div>
        </div>
    );
}

export default Home;
