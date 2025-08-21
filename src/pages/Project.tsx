import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function Project() {
    const projects = [
        {
            title: "Portfolio",
            description: "Un site moderne en React/Tailwind pour présenter mes compétences et projets.",
            github: "https://github.com/Theoode/portfolio",
            type: "Frontend",
            tech: ["React"]
        },
        {
            title: "Site e-commerce",
            description: "Site de vente de vêtement en ligne avec panel admin et paiement via api.",
            github: "https://github.com/Theoode/ecommerce",
            type: "Fullstack",
            tech: ["PHP","Laravel"]
        },
        {
            title: "Logiciel de gestion de stock magasin",
            description: "Application permettant de gérer le stock d'un magasin et de le relier à un serveur siège pour les mises a jours.",
            github: "https://github.com/Theoode/Bricomerlin",
            type: "Backend",
            tech: ["Java","MySQL"]
        },
        {
            title: "Partie Backend du site de reservation pour un cinema",
            description: "Site web permettant de réserver des places pour une seance de cinéma, c'est un projet réalisé dans le cadre de mes études universitaires",
            github: "https://github.com/Theoode/UniversiteDomain",
            type: "Backend",
            tech: ["C#","MySQL"]
        },
        {
            title: "Partie Frontend du site de reservation pour un cinema",
            description: "Site web permettant de réserver des places pour une seance de cinéma, c'est un projet réalisé dans le cadre de mes études universitaires",
            github: "https://github.com/Theoode/",
            type: "Frontend",
            tech: ["React"]
        },
        {
            title: "Application de voyage Android",
            description: "Réalisation d'une application permettant de retracer et partager l'itinéraire d'un voyage grace à des points GPS",
            github: "https://github.com/Theoode/ProjetAndroid",
            type: "Backend",
            tech: ["Java"]
        }
    ];

    const allTypes = ["Tous", ...new Set(projects.map(p => p.type))];
    const allTechs = ["Tous", ...new Set(projects.flatMap(p => p.tech))];

    const [activeType, setActiveType] = useState("Tous");
    const [activeTech, setActiveTech] = useState("Tous");

    const filteredProjects = projects.filter(p =>
        (activeType === "Tous" || p.type === activeType) &&
        (activeTech === "Tous" || p.tech.includes(activeTech))
    );

    return (
        <div className="min-h-screen text-white flex flex-col">
            <Navbar />

            <div className="flex-1 container mx-auto px-6 py-16">

                <p className="text-center text-black text-2xl mb-10 max-w-2xl mx-auto animate-fadeIn delay-100">
                    Voici une sélection de projets que j’ai réalisés.
                    Utilisez les filtres ci-dessous pour explorer selon le type
                    ou selon les technologies utilisées.
                </p>

                {/* Filtres */}
                <div className="flex flex-col gap-4 mb-12">
                    {/* Ligne des types */}
                    <div className="flex flex-wrap justify-center gap-3 animate-fadeIn delay-300 opacity-0">
                        {allTypes.map((type, index) => (
                            <button
                                key={`type-${index}`}
                                onClick={() => setActiveType(type)}
                                className={`px-4 py-2 rounded-full border transition ${
                                    activeType === type
                                        ? "bg-blue-600 border-blue-600"
                                        : "bg-gray-800 border-gray-600 hover:bg-gray-700"
                                }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    {/* Ligne des technos */}
                    <div className="flex flex-wrap justify-center gap-3 animate-fadeIn delay-400 opacity-0">
                        {allTechs.map((tech, index) => (
                            <button
                                key={`tech-${index}`}
                                onClick={() => setActiveTech(tech)}
                                className={`px-4 py-2 rounded-full border transition ${
                                    activeTech === tech
                                        ? "bg-green-600 border-green-600"
                                        : "bg-gray-800 border-gray-600 hover:bg-gray-700"
                                }`}>
                                {tech}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grille des projets */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl opacity-0 animate-fadeIn"
                            style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
                        >
                            <div>
                                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                                <p className="text-gray-300 mb-6">{project.description}</p>

                                <span className="inline-block px-3 py-1 mb-3 text-sm bg-blue-700 rounded-full">{project.type}</span>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-2 py-1 text-sm bg-gray-700 rounded-lg">{t}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex mt-auto">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                                >
                                    <FaGithub /> Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <Footer />
        </div>
    );
}
