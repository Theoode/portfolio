import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Code, Gamepad2, Book, Dumbbell,Printer } from "lucide-react";

export default function About() {
    const timeline = [
        {
            year: "2024 - Aujourd'hui",
            title: "Master MIAGE en alternance",
            description:
                "Développement de compétences avancées en ingénierie des systèmes d'information. " +
                "Travail en alternance, combinant enseignements universitaires et expérience professionnelle. " +
                "Approfondissement des connaissances en gestion de projet, bases de données," +
                "méthodes agiles."
        },
        {
            year: "2024",
            title: "Stage en prototypage Figma",
            description:
                "Réalisation de maquettes interactives sous Figma pour la refonte des sites web de l’Epissos et EPSoMS. " +
                "Travail en collaboration avec une chargée de communication pour assurer la cohérence entre le design et l'identité de la société"
        },
        {
            year: "2021 - 2024",
            title: "BUT Informatique - Université d’Amiens",
            description:
                "Apprentissage des bases solides de l’algorithmique, du développement web (HTML, JavaScript, React), " +
                "et de la programmation orientée objet (Java, C#). " +
                "Mise en pratique à travers divers projets académiques :  Formation également en gestion de projet, base de données (MySQL, PostgreSQL) et qualité logicielle."
        },
        {
            year: "2019 - 2021",
            title: "BAC STI2D - Spécialité Systèmes d’Information et Numérique",
            description:
                "Baccalauréat technologique orienté vers les Systèmes d'Information et du Numérique" +
                "Découverte des environnements numériques, premières expériences de programmation (Arduino, Python). " +
                "Mise en avant de la créativité et de la rigueur technique."
        }
    ];


    const interests = [
        { icon: <Code size={36} className="text-blue-600" />, label: "Développement" },
        { icon: <Gamepad2 size={36} className="text-purple-600" />, label: "Jeux vidéo" },
        { icon: <Dumbbell size={36} className="text-pink-600" />, label: "Sport" },
        { icon: <Printer size={36} className="text-green-600" />, label: "Impression 3D" },
        { icon: <Book size={36} className="text-orange-600" />, label: "Lecture" }
    ];

    return (
        <div className="min-h-screen flex flex-col text-black bg-white relative overflow-hidden">
            <Navbar />

            <div className="flex-1 container mx-auto px-6 py-24 mt-20 relative z-10">
                <motion.h1
                    className="text-5xl font-bold text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    À propos de moi
                </motion.h1>

                {/* Texte */}
                <motion.div
                    className="max-w-4xl mx-auto text-lg leading-relaxed space-y-8 mb-14"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <p>
                        Je suis un développeur junior qui réalise différents projets aussi bien professionnels que personnels,
                        je prends plaisir à développer des applications orientées frontend et communicantes.
                        Sur mon temps libre je réalise des programmes configure des serveurs pour un usage domestique.
                    </p>
                    <p>
                        Mon parcours m’a également amené à travailler sur des projets
                        <span className="font-semibold"> backend</span> avec <span className="font-semibold">Java, PHP, C#, et MySQL</span>,
                        ce qui me donne une vision globale des applications web et mobiles.
                    </p>
                    <p>
                        Ce qui me motive ? des solutions utiles, apprendre en continu,
                        et collaborer sur des projets stimulants. 🚀
                    </p>
                </motion.div>

                {/* Soft Skills */}
                <div className=" mb-14 max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-14 text-center">Soft Skills</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            "Travail en équipe 🤝",
                            "Communication 💬",
                            "Adaptabilité 🔄",
                            "Autonomie 🚀",
                            "Organisation 📅",
                            "Création Maquettes 🛠️"
                        ].map((skill, i) => (
                            <motion.span
                                key={i}
                                className="px-6 py-3 bg-blue-100 text-blue-800 text-lg font-medium rounded-full shadow hover:bg-blue-200 transition"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>


                {/* Bouton téléchargement CV */}
                <motion.div
                    className="flex justify-center mb-28"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <a
                        href="/CV%20ThéoQuennehen.pdf"
                        download
                        className="px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition transform hover:-translate-y-1"
                    >
                        📄 Télécharger mon CV
                    </a>
                </motion.div>

                {/* Timeline */}
                <div className="mt-28 mb-28 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold mb-14 text-center">Mon parcours</h2>
                    <div className="relative border-l border-gray-300">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                className="mb-14 ml-6"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 border border-white"></div>
                                <time className="mb-2 text-sm font-normal leading-none text-gray-500">
                                    {item.year}
                                </time>
                                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                                <p className="text-base font-normal text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mes centres d'intérêt */}
                <div className="mt-28 mb-20 max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-14 text-center">Mes centres d’intérêt</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 text-center">
                        {interests.map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex flex-col items-center space-y-4 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                            >
                                {item.icon}
                                <span className="text-xl font-medium">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
