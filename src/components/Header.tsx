"use client"
import { useTheme } from '@/context/ThemeContext';
import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { FiSun, FiMoon } from 'react-icons/fi';

const Header = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-4 px-6">
            <nav className="flex justify-between items-center">
                <h1 className="flex items-center text-2xl font-semibold">
                    <MdDashboard className="w-8 h-8 mr-2 text-darkPurple" />
                    Personal Dashboard
                </h1>
                <button
                    onClick={toggleTheme}
                    className="p-2 text-gray-800 dark:text-gray-200 cursor-pointer"
                >
                    {isDarkMode ? <FiSun className="w-6 h-6 text-yellow-500" /> : <FiMoon className="w-6 h-6 text-gray-700" />}
                </button>
            </nav>
        </header>
    )
}

export default Header