"use client"
import { useTheme } from '@/context/ThemeContext';
import { certifications } from '@/utils/data'
import React from 'react'
import { FaCertificate } from 'react-icons/fa'

const Certifications = () => {
    const { isDarkMode } = useTheme();
    return (
        <section
            id="certifications"
            className={`p-10 rounded-xl max-w-3xl mx-auto animate-fade-in ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}>
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                Certifications
            </h2>
            <div
                className={`p-6 rounded-lg shadow-md transition-all duration-300 border-t-4 ${isDarkMode
                    ? "bg-gray-800 border-lightPurple"
                    : "bg-white border-darkPurple"
                    }`}
            >
                <ul className="space-y-6">
                    {certifications.map(({ title, provider, link }, idx) => (
                        <li
                            key={idx}
                            className={`flex items-start p-6 rounded-lg shadow ${isDarkMode
                                ? "bg-gray-700 text-gray-300"
                                : "bg-white text-gray-700"
                                }`}
                        >
                            <div className={`text-3xl mr-4 ${isDarkMode ? "text-yellow-400" : "text-yellow-500"}`} >
                                <FaCertificate />
                            </div>
                            <div>
                                <h3 className={`text-xl font-semibold ${isDarkMode ? "text-lightPurple" : "text-darkPurple"}`}>
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`block hover:underline ${isDarkMode ? "text-lightPurple" : "text-darkPurple"
                                            }`}
                                    >
                                        {title}
                                    </a>
                                </h3>
                                <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                    {provider}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Certifications