"use client"
import { useTheme } from '@/context/ThemeContext';
import { goalsandhobbies } from '@/utils/data'
import React from 'react'

const GoalsHobbies = () => {
    const { isDarkMode } = useTheme();

    return (
        <section
            id="goals-hobbies"
            className={`p-12 rounded-2xl max-w-6xl mx-auto mb-12 animate-fade-in ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}>
            <h2
                className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                Goals and Hobbies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {goalsandhobbies.map(({ icon, title, content }, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col items-center p-8 rounded-lg shadow-md border-t-4 ${isDarkMode
                            ? "bg-gray-800 text-gray-200 border-lightPurple"
                            : "bg-white text-gray-900 border-darkPurple"
                            }`}>
                        <div
                            className={`text-xl mb-5 p-4 rounded-full shadow-lg ${isDarkMode
                                ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-gray-100"
                                : "bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
                                }`}>
                            {icon}
                        </div>
                        <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? "text-lightPurple" : "text-gray-900"}`}>
                            {title}
                        </h3>
                        <div className={`text-left leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                            {content}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default GoalsHobbies