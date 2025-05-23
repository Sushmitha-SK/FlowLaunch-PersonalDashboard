"use client"
import { skills } from '@/utils/data'
import React from 'react'

const Skills = () => {
    return (
        <section id="skills" className="bg-white dark:bg-gray-900 p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Skills</h2>
            {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">{category}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
                        {items.map(({ name, icon }) => (
                            <div
                                key={name}
                                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform flex flex-col items-center space-y-2"
                            >
                                {icon}
                                <span className="text-gray-800 dark:text-gray-100 font-medium">{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Skills