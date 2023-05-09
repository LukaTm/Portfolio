import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Expierience from "./pages/Experience";
import MainHeader from "./pages/MainHeader";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {
    return (
        <MainHeader>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/expierience" element={<Expierience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </MainHeader>
    );
}

export default App;
