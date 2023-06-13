import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Expierience from "./pages/Experience";
import MainHeader from "./pages/MainHeader";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import { useState } from "react";

function App() {
    const [mouseLeave, setMouseLeave] = useState(false);
    const [mouseEnter, setMouseEnter] = useState(true);
    return (
        <MainHeader setMouseLeave={setMouseLeave} setMouseEnter={setMouseEnter}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home mouseLeave={mouseLeave} mouseEnter={mouseEnter} />
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="/expierience" element={<Expierience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </MainHeader>
    );
}

export default App;
