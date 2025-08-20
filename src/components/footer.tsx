import {FaGithub, FaLinkedin, FaMailBulk} from "react-icons/fa";

export default function Navbar() {
    return (
        <footer className="w-full py-6 flex justify-center gap-6 bg-gray-900">
            <a href="https://github.com/Theoode" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400 transition">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/th%C3%A9o-quennehen-41939423a/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-500 transition">
                <FaLinkedin />
            </a>
            <a href="mailto:theoquennehenpro@gmail.com" className="text-white text-2xl hover:text-blue-400 transition">
                <FaMailBulk />
            </a>

        </footer>
    )
}