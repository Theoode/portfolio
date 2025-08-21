import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
    return (
        <div className="min-h-screen text-white flex flex-col bg-[#F9F9F9]">
            <section className="mb-20">
                <div className="wave">
                    <span></span>
                    <span></span>
                    <span></span>
                    <Navbar/>
                    <div className="content">
                        <div className="flex-1 flex items-start justify-center pt-24 ">

                            {/* Conteneur avec deux enfants */}
                            <div className="flex w-full max-w-6xl gap-4 flex-col md:flex-row items-center sm:mt-24">

                                {/* Conteneur gauche */}
                                <div className="flex-1 text-black p-6 rounded-lg flex flex-col items-center md:items-start text-center md:text-left ">
                                    <h2 className="text-5xl font-bold mb-4 opacity-0 animate-fadeIn delay-100">
                                        Bienvenue sur mon portfolio !
                                    </h2>
                                    <div className="flex text-xl flex-col gap-5 mt-5 opacity-0 animate-fadeIn delay-200">
                                        <p>
                                            Bonjour, je m'appelle Théo et je suis développeur junior.
                                        </p>
                                        <p>
                                            Sur ce portfolio, tu pourras découvrir mes projets, explorer mes compétences techniques et créatives, et savoir comment me contacter.
                                        </p>
                                        <p>
                                            Je serais ravi que l'on puisse collaborer sur de nouveaux projets stimulants !
                                        </p>

                                    </div>
                                    <a href="/project"
                                        className="text-2xl font-bold mt-8 flex items-center gap-2 text-black opacity-0 animate-fadeIn delay-300"
                                    >
                                        Voir mes projets <FaArrowRight />
                                    </a>

                                </div>

                                {/* Conteneur droit */}
                                <div className="flex-1 p-6 rounded-lg flex items-center justify-center opacity-0 animate-fadeIn delay-400">
                                    <img
                                        src="/Avatar.png"
                                        alt="avatar"
                                        className="w-56 sm:w-60 md:w-74 lg:w-90 xl:w-100 h-auto rounded-full border border-black bg-white shadow "
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Footer avec réseaux sociaux */}
            <div className="opacity-0 animate-fadeIn delay-800 ">
                <Footer/>
            </div>
        </div>
    );
}
