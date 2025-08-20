import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
    return (
        <div className="min-h-screen text-white flex flex-col">
            <section>
                <div className="wave">
                    <span></span>
                    <span></span>
                    <span></span>
                    <Navbar/>
                    <div className="content">
                        <div className="flex-1 flex items-start justify-center pt-24 ">

                            {/* Conteneur avec deux enfants */}
                            <div className="flex w-full max-w-6xl gap-4 flex-col md:flex-row items-center">

                                {/* Conteneur gauche */}
                                <div className="flex-1 text-black p-6 rounded-lg flex flex-col items-center md:items-start text-center md:text-left">
                                    <h2 className="text-5xl font-bold mb-4 opacity-0 animate-fadeIn delay-100">
                                        Bienvenue sur mon portfolio !
                                    </h2>
                                    <div className="flex flex-col gap-5 mt-5  opacity-0 animate-fadeIn delay-200">
                                        <p>
                                            Je m'appelle Théo et je suis développeur, j'aime aussi les designs modernes et les expériences utilisateur soignées.
                                        </p>
                                        <p>
                                            Sur ce site, tu pourras découvrir mes projets, mes compétences et comment me contacter, on pourrait sûrement travailler ensemble !
                                        </p>
                                    </div>
                                    <a href="/project" className="text-2xl font-bold mt-8 flex items-center gap-2 text-black opacity-0 animate-fadeIn delay-300">
                                        Voir mes projets <FaArrowRight />
                                    </a>
                                </div>

                                {/* Conteneur droit */}
                                <div className="flex-1 p-6 rounded-lg flex items-center justify-center opacity-0 animate-fadeIn delay-400">
                                    <img src="/Avatar.png" alt="avatar"
                                        className="max-w-full h-auto rounded-full border-1 border-black bg-white shadow"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Footer avec réseaux sociaux */}
            <div className="opacity-0 animate-fadeIn delay-800">
                <Footer/>
            </div>
        </div>
    );
}
