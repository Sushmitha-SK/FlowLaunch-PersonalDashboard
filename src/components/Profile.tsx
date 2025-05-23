"use client";
import Image from "next/image";
import { profile } from "../utils/data";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

const Profile = () => {
    const { isDarkMode } = useTheme();

    return (
        <section
            id="profile"
            className={`p-6 sm:p-10 rounded-xl max-w-3xl mx-auto text-center flex flex-col items-center animate-fade-in 
                ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}>
            <h2 className={`text-3xl mb-12 font-bold text-center ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                Profile
            </h2>

            <div className={`p-8 text-center flex flex-col items-center rounded-lg ${isDarkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-700"}`}>
                <Image
                    src={profile.photo}
                    alt={`Profile picture of ${profile.name}`}
                    width={128}
                    height={128}
                    className="rounded-full mb-4 shadow-lg"
                    priority
                />
                <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
                <p className={`max-w-md mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {profile.bio}
                </p>
                <div className="flex flex-col space-y-2 mb-6 max-w-md">
                    {profile.location && (
                        <div className="flex items-center justify-center space-x-2">
                            <FaMapMarkerAlt className={isDarkMode ? "text-lightPurple" : "text-darkPurple"} />
                            <span>{profile.location}</span>
                        </div>
                    )}
                </div>

                <div className="flex space-x-4 mt-4">
                    <a
                        href={`mailto:${profile.contact.email}`}
                        className={`flex items-center  text-sm ${isDarkMode ? "text-lightPurple hover:text-secondaryColor" : "text-darkPurple hover:text-secondaryColor"
                            } transform hover:scale-105 transition-transform duration-200`}
                    >
                        <FaEnvelope className="mr-2" />
                        Email
                    </a>
                    <a
                        href={profile.contact.linkedin}
                        className={`flex items-center text-sm ${isDarkMode ? "text-lightPurple hover:text-secondaryColor" : "text-darkPurple hover:text-secondaryColor"
                            } transform hover:scale-105 transition-transform duration-200`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="mr-2" />
                        LinkedIn
                    </a>
                    <a
                        href={profile.contact.github}
                        className={`flex items-center text-sm ${isDarkMode ? "text-lightPurple hover:text-secondaryColor" : "text-darkPurple hover:text-secondaryColor"
                            } transform hover:scale-105 transition-transform duration-200`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="mr-2" />
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Profile;
