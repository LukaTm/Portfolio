import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MainHeader from "./pages/MainHeader";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import { useState } from "react";
import Skills from "./pages/Skills";

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
                <Route path="/skills" element={<Skills />} />
                <Route path="/resume" element={<Resume />} />
                {/* ADD NON EXISTING ROUTE */}
            </Routes>
        </MainHeader>
    );
}

export default App;
