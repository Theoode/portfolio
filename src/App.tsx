import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
