"use client"
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { academics } from "@/utils/data";
import { useTheme } from "@/context/ThemeContext";

const Academics = () => {
    const { isDarkMode } = useTheme();
    return (
        <section
            id="academics"
            className={`p-6 md:p-10 rounded-xl max-w-6xl mx-auto animate-fade-in ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}>
            <h2 className={`text-3xl mb-12 font-bold text-center ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                Academics
            </h2>

            <div className={`p-10 rounded-xl shadow-md transition-all duration-300 border-t-4 
                ${isDarkMode ? "bg-gray-800 text-gray-200 border-lightPurple" : "bg-white text-gray-700 border-darkPurple"}`}>
                <div className={`relative border-l-2 pl-8 transition-colors duration-300 ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>
                    {academics.map(({ degree, date, institution, location }, idx) => (
                        <div key={idx} className="mb-12 relative group">
                            <span
                                className={`absolute -left-5 top-2 rounded-full p-2 transition-all duration-300 ${isDarkMode
                                    ? "bg-gray-800 border-2 border-gray-500 text-lightPurple group-hover:border-lightPurple"
                                    : "bg-white border-2 border-gray-400 text-darkPurple group-hover:border-darkPurple"
                                    }`}
                            >
                                <FaGraduationCap size={20} />
                            </span>
                            <div className="pl-8">
                                <h3 className={`text-xl font-semibold ${isDarkMode ? "text-lightPurple" : "text-darkPurple"}`}>
                                    {degree}
                                </h3>
                                <time className={`block text-md mb-2 italic ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                    {date}
                                </time>
                                <p className={`font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                                    {institution}
                                </p>
                                <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                    {location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Academics;

