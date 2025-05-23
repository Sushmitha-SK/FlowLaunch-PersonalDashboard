"use client";
import React from "react";
import Image from "next/image";
import { projects } from "@/utils/data";
import { useTheme } from "@/context/ThemeContext";

const Projects = () => {
    const { isDarkMode } = useTheme();
    return (
        <section id="projects" className={`py-8 px-4 sm:px-6 lg:px-12 animate-fade-in ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                    Projects
                </h2>
                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    {projects.map(({ title, tech, name, description, image, link }, idx) => (
                        <div
                            key={idx}
                            className={`backdrop-blur-md rounded-2xl overflow-hidden border flex flex-col max-w-lg mx-auto ${isDarkMode
                                ? "bg-gray-800 border-gray-700 text-gray-300"
                                : "bg-white/90 border-gray-200 text-gray-700"
                                }`}
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={image}
                                    alt={name}
                                    fill
                                    className="object-cover transition-all duration-300 hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className={`text-xl font-semibold ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                                        {name}
                                    </h3>
                                    <span
                                        className={`text-xs font-normal px-2 py-1 rounded ${isDarkMode
                                            ? "text-lightPurple bg-darkPurple"
                                            : "text-darkPurple bg-lightPurple"
                                            }`}
                                    >
                                        {title || "Title not available"}
                                    </span>
                                </div>
                                <p
                                    className={`text-sm mb-4 flex-grow ${isDarkMode ? "text-gray-400" : "text-gray-700"
                                        }`}
                                >
                                    {description || "Description not available"}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                                    {tech.map((item, i) => (
                                        <span
                                            key={i}
                                            className={`text-xs px-2 py-1 rounded-full font-medium ${isDarkMode
                                                ? "bg-gray-700 text-gray-300"
                                                : "bg-gray-100 text-gray-800"
                                                }`}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block mt-auto text-center py-2 px-4 rounded-md font-medium ${isDarkMode
                                        ? "bg-lightPurple text-gray-900 hover:bg-darkPurple hover:text-gray-100"
                                        : "bg-darkPurple text-white hover:bg-secondaryColor"
                                        }`}
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Projects;
