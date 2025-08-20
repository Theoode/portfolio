import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
    const timeline = [
        {
            year: "2021 - 2022",
            title: "Licence Informatique",
            description: "Découverte des bases de l’algorithmique, du développement web et de la programmation orientée objet."
        },
        {
            year: "2022 - 2023",
            title: "Stage Développeur Fullstack",
            description: "Participation à la création d’une application de gestion de stock avec Java, MySQL et React."
        },
        {
            year: "2023 - 2024",
            title: "Projets Universitaires",
            description: "Réalisation de projets académiques tels qu’un site de réservation de cinéma (Frontend & Backend)."
        },
        {
            year: "2024 - Aujourd’hui",
            title: "Développement Personnel",
            description: "Création de mon portfolio, apprentissage continu sur React, Tailwind et bonnes pratiques en développement web."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col text-black bg-white relative overflow-hidden">
            {/* Blobs décoratifs */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute top-60 -right-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

            <Navbar />

            <div className="flex-1 container mx-auto px-6 py-16 mt-20 relative z-10">
                <motion.h1
                    className="text-4xl font-bold text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    À propos de moi
                </motion.h1>

                <motion.div
                    className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <p>
                        Salut 👋 Je m'appelle <span className="font-semibold">Théo</span>,
                        je suis un <span className="text-blue-600 font-semibold">développeur front-end</span> passionné,
                        spécialisé dans la création d’expériences utilisateur modernes et intuitives avec
                        <span className="font-semibold"> React</span> et <span className="font-semibold">TailwindCSS</span>.
                    </p>

                    <p>
                        Mon parcours m’a également amené à travailler sur des projets
                        <span className="font-semibold"> backend</span> avec <span className="font-semibold">Java, PHP, C#, et MySQL</span>,
                        ce qui me donne une vision globale des applications web et mobiles.
                    </p>

                    <p>
                        Ce qui me motive ? Construire des solutions utiles, apprendre en continu,
                        et collaborer sur des projets stimulants. 🚀
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="mt-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Mon parcours</h2>
                    <div className="relative border-l border-gray-300">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                className="mb-10 ml-6"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 border border-white"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                                    {item.year}
                                </time>
                                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                                <p className="text-base font-normal text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <a
                        href="/projects"
                        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition transform hover:-translate-y-1"
                    >
                        Voir mes projets
                    </a>
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}
