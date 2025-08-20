import { NavLink } from "react-router-dom"

const links = [
    { name: "HOME", path: "/" },
    { name: "PROJECT", path: "/project" },
    { name: "ABOUT", path: "/about" },
]

export default function Navbar() {
    return (
        <div className="absolute top-0 left-0 w-full flex justify-center z-2">
            <nav className="flex gap-10 py-4 font-medium text-black">
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `relative px-2 py-1 ${
                                isActive
                                    ? "after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:rounded-full after:bg-black"
                                    : ""
                            }`
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </nav>
        </div>
    )
}
