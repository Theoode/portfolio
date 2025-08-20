import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Project from "./pages/Project.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}

export default App
