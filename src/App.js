import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

import MainHeader from "./pages/MainHeader";

function App() {
    return (
        <MainHeader>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </MainHeader>
    );
}

export default App;
