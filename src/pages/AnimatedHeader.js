import React, { useEffect, useState } from "react";

function AnimatedHeader({ text }) {
    const [animatedText, setAnimatedText] = useState("");

    useEffect(() => {
        let timeout;

        const typeText = (currentIndex) => {
            if (currentIndex < text.length) {
                const currentChar = text[currentIndex];
                setAnimatedText((prevText) => prevText + currentChar);
                timeout = setTimeout(() => typeText(currentIndex + 1), 100);
            }
        };

        typeText(0);

        return () => clearTimeout(timeout);
    }, [text]);

    return <h2>{animatedText}</h2>;
}

export default AnimatedHeader;
