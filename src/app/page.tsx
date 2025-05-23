"use client";
import { useState } from "react";
import Header from "@/components/Header";
import { tabs } from "@/utils/data";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const { isDarkMode } = useTheme();

  return (
    <>
      <div className={`min-h-screen flex flex-col ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"}`}>
        <Header />
        <nav
          className={`${isDarkMode
            ? "bg-gray-800 text-gray-200"
            : "bg-gray-50 text-gray-800"
            } mx-4 md:mx-20 rounded-2xl my-4 md:my-6 shadow-sm`}
        >
          <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap justify-center md:justify-between items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`cursor-pointer px-4 py-2 rounded-lg font-normal transition-colors duration-300 ${activeTab === tab.name
                  ? `${isDarkMode
                    ? "bg-darkPurple text-lightPurple font-semibold"
                    : "bg-lightPurple text-darkPurple font-semibold"
                  }`
                  : `${isDarkMode
                    ? "hover:bg-gray-700 hover:text-lightPurple text-gray-300"
                    : "hover:bg-lightPurple hover:text-darkPurple text-gray-800"
                  }`
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </nav>
        <main className={`flex-grow max-w-5xl mx-auto p-4 md:p-6 ${isDarkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}`}>
          {tabs.find((tab) => tab.name === activeTab)?.component}
        </main>
      </div>
    </>
  );
}
