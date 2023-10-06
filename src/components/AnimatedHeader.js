import React, { useEffect, useState } from "react";
import "../pages/output.css";

function AnimatedHeader({ text, className, id }) {
    const [animatedText, setAnimatedText] = useState("");

    useEffect(() => {
        let timeout;

        const typeText = (currentIndex) => {
            if (currentIndex === 0) setAnimatedText("");
            if (currentIndex < text.length) {
                const currentChar = text[currentIndex];
                setAnimatedText((prevText) => prevText + currentChar);
                timeout = setTimeout(() => typeText(currentIndex + 1), 100);
            }
        };

        typeText(0);

        return () => clearTimeout(timeout);
    }, [text]);

    return (
        <h2 id="home_h2_id" className={className}>
            {animatedText}
        </h2>
    );
}

export default AnimatedHeader;
