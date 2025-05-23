"use client";
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { experiences } from "../utils/data";
import { useTheme } from "@/context/ThemeContext";

const ProfessionalInfo = () => {
    const { isDarkMode } = useTheme();

    return (
        <section
            id="professional-info"
            className={`p-6 md:p-10 rounded-xl max-w-3xl mx-auto animate-fade-in ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}>
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                Professional Information
            </h2>
            <div className="flex flex-col gap-8">
                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className={`p-6 rounded-lg shadow-md transition-all duration-300 border-t-4 ${isDarkMode
                            ? "bg-gray-800 text-gray-200 border-lightPurple"
                            : "bg-white text-gray-700 border-darkPurple"
                            }`}
                    >
                        <div className="flex items-start space-x-4">
                            <FaBriefcase className={isDarkMode ? "text-lightPurple text-3xl" : "text-darkPurple text-3xl"} />
                            <div>
                                <h3 className={`text-2xl font-semibold ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>
                                    {exp.title}
                                </h3>
                                <time className={`block text-base mb-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                    {exp.date}
                                </time>
                                <p className={`text-lg font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                                    {exp.company}
                                </p>
                                <p className={`italic ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                    {exp.location}
                                </p>
                            </div>
                        </div>
                        <ul className={`mt-4 list-disc list-inside space-y-2 ml-10 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                            {exp.responsibilities.map((responsibility, i) => (
                                <li key={i}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProfessionalInfo;
