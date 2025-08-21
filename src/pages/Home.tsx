import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-[#F9F9F9]">
            <section className="mb-20 w-full relative">
                <div className="wave absolute inset-0">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <Navbar />

                <div className="content relative z-10 flex-1 flex items-start justify-center px-4 sm:px-6 lg:px-8">

                    {/* Conteneur avec deux enfants */}
                    <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-6">

                        {/* Conteneur gauche */}
                        <div className="flex-1 text-black flex flex-col items-center md:items-start text-center md:text-left px-4 sm:px-0">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-fadeIn delay-100">
                                Bienvenue sur mon portfolio !
                            </h2>
                            <div className="flex flex-col gap-4 sm:gap-5 mt-4 sm:mt-5 text-base sm:text-lg md:text-xl opacity-0 animate-fadeIn delay-200">
                                <p>Bonjour, je m'appelle Théo et je suis développeur junior.</p>
                                <p>
                                    Sur ce portfolio, tu pourras découvrir mes projets, explorer mes compétences techniques et créatives, et savoir comment me contacter.
                                </p>
                                <p>Je serais ravi que l'on puisse collaborer sur de nouveaux projets stimulants !</p>
                            </div>
                            <NavLink
                                to="/project"
                                className="mt-6 sm:mt-8 text-lg sm:text-2xl font-bold flex items-center gap-2 text-black opacity-0 animate-fadeIn delay-300"
                            >
                                Voir mes projets <FaArrowRight />
                            </NavLink>
                        </div>

                        {/* Conteneur droit */}
                        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0 p-4 sm:p-6 rounded-lg opacity-0 animate-fadeIn delay-400">
                            <img
                                src="/Avatar.png"
                                alt="avatar"
                                className="w-40 sm:w-48 md:w-60 lg:w-72 xl:w-80 2xl:w-96 h-auto rounded-full border border-black bg-white shadow"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer avec réseaux sociaux */}
            <div className="opacity-0 animate-fadeIn delay-800">
                <Footer />
            </div>
        </div>
    );
}
