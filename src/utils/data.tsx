
import ProfessionalInfo from "@/components/ProfessionalInfo";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Academics from "@/components/Academics";
import GoalsHobbies from "@/components/GoalsHobbies";
import {
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiPhp,
    SiReact,
    SiNodedotjs,
    SiRedux,
    SiTailwindcss,
    SiBootstrap,
    SiMui,
    SiMysql,
    SiMongodb,
    SiGit,
    SiPostman,
    SiNextdotjs
} from "react-icons/si";
import { FaBullseye, FaStar } from 'react-icons/fa';
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandVscode, TbSettingsCheck, TbApi } from "react-icons/tb";
import { BiSolidUserDetail } from "react-icons/bi";
import { PiCodeBlock } from "react-icons/pi";
import { RiFileSettingsLine } from "react-icons/ri";
import profilePic from '../assets/profile.png';
import acquirespace from "../assets/acquirespace.jpg";
import ecommerce from "../assets/shopspace.jpg";
import bugtrace from "../assets/BugTrace.jpg";
import foodynest from "../assets/Foody_Nest.jpg";

export const tabs = [
    { name: "Profile", component: <Profile /> },
    { name: "Professional Info", component: <ProfessionalInfo /> },
    { name: "Academics", component: <Academics /> },
    { name: "Skills", component: <Skills /> },
    { name: "Projects", component: <Projects /> },
    { name: "Certifications", component: <Certifications /> },
    { name: "Goals & Hobbies", component: <GoalsHobbies /> },

];

export const profile = {
    name: "Sushmitha S",
    photo: profilePic,
    bio: "Frontend developer passionate about building user-centric applications.",
    location: "Udupi, IN",
    contact: {
        email: "sushmitaudupi@gmail.com",
        linkedin: "https://www.linkedin.com/in/sushmithass/",
        github: "https://github.com/Sushmitha-SK"
    },
};


export const experiences = [
    {
        title: "Tester",
        date: "June 2011 – March 2013",
        company: "Robosoft Technologies Pvt. Ltd",
        location: "Udupi, Karnataka, India",
        responsibilities: [
            "Collaborated with cross-functional teams to ensure high-quality, bug-free applications.",
            "Performed System, Integration, and Functional Testing to validate software performance and usability.",
            "Maintained and updated test plans, cases, and environments throughout the SDLC.",
            "Tracked software defects using defect-tracking tools, ensuring timely reporting and resolution.",
            "Contributed to enhancing test coverage and streamlining processes to meet organizational standards.",
        ],
    },
    {
        title: "Intern",
        date: "December 2010 – March 2011",
        company: "Manipal Digital Systems",
        location: "Manipal, Karnataka, India",
        responsibilities: [
            "Designed and developed interactive UIs for desktop application using Adobe Flex 3, ensuring seamless user experience.",
            "Implemented backend functionalities using ASP.NET C-Sharp and SQL Server 2005.",
            "Performed maintenance, testing, and integration of updates for desktop applications.",
        ],
    },
];

export const academics = [
    {
        degree: "Master of Computer Applications (M.C.A)",
        date: "Dec 2014",
        institution: "Indira Gandhi National Open University",
        location: "Mangaluru, KA, IN",
    },
    {
        degree: "Bachelor of Computer Applications (B.C.A)",
        date: "May 2011",
        institution: "Milagres College, Kallianpur Udupi",
        location: "KA, IN",
    },
];



export const skills = {
    Languages: [
        { name: "TypeScript", icon: <SiTypescript size={24} color="#3178C6" /> },
        { name: "JavaScript", icon: <SiJavascript size={24} color="#F7DF1E" /> },
        { name: "HTML", icon: <SiHtml5 size={24} color="#E34F26" /> },
        { name: "CSS", icon: <SiCss3 size={24} color="#1572B6" /> },
        { name: "PHP", icon: <SiPhp size={24} color="#777BB4" /> },
    ],
    Technologies: [
        { name: "React", icon: <SiReact size={24} color="#61DAFB" /> },
        { name: "React Native", icon: <SiReact size={24} color="#61DAFB" /> },
        { name: "Next.js", icon: <SiNextdotjs size={24} /> },
        { name: "Node.js", icon: <SiNodedotjs size={24} color="#339933" /> },
        { name: "Express", icon: <SiNodedotjs size={24} /> },
        { name: "Redux", icon: <SiRedux size={24} color="#764ABC" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={24} color="#38B2AC" /> },
        { name: "Bootstrap", icon: <SiBootstrap size={24} color="#7952B3" /> },
        { name: "Material UI", icon: <SiMui size={24} color="#007FFF" /> },
        { name: "RESTful APIs", icon: <TbApi size={24} /> },
        { name: "Firebase", icon: <IoLogoFirebase size={24} color="#FFCA28" /> },
    ],
    Databases: [
        { name: "MongoDB", icon: <SiMongodb size={24} color="#47A248" /> },
        { name: "MySQL", icon: <SiMysql size={24} color="#4479A1" /> },
    ],
    Tools: [
        { name: "Git", icon: <SiGit size={24} color="#F05032" /> },
        { name: "Postman", icon: <SiPostman size={24} color="#FF6C37" /> },
        { name: "VS Code", icon: <TbBrandVscode size={24} color="#007ACC" /> },
    ],
    Testing: [
        { name: "Manual Testing", icon: <BiSolidUserDetail size={24} /> },
        { name: "Functional Testing", icon: <TbSettingsCheck size={24} /> },
        { name: "Integration Testing", icon: <PiCodeBlock size={24} /> },
        { name: "Regression Testing", icon: <RiFileSettingsLine size={24} /> },
    ],
};


export const projects = [
    {
        title: "Real Estate Management System",
        tech: ["React", "TypeScript", "Redux", "Tailwind", "Node.js", "MongoDB"],
        name: "AcquireSpace",
        description:
            "A modern platform for real estate listings, management, and bookings with a seamless UI/UX.",
        image: acquirespace,
        link: "https://acquirespace-real-estate.vercel.app/",
    },
    {
        title: "Ecommerce Web Application",
        tech: ["React", "TypeScript", "Redux", "Tailwind", "Stripe"],
        name: "ShopSpace",
        description:
            "Full-featured ecommerce site with cart, checkout, payments, and product filtering.",
        image: ecommerce,
        link: "https://shop-space-ecommerce.vercel.app/",
    },
    {
        title: "Bug Tracking System",
        tech: ["React", "Redux", "Express"],
        name: "Bug Trace",
        description:
            "Agile bug tracking tool with team collaboration, comment threads, and progress tracking.",
        image: bugtrace,
        link: "https://bug-trace-bugtrackingsystem-demo-app.vercel.app/",
    },
    {
        title: "Food Ordering System",
        tech: ["React", "Redux", "Node", "MongoDB", "Stripe"],
        name: "Foody Nest",
        description:
            "Slick food delivery system for users to browse, order, and track meals in real time.",
        image: foodynest,
        link: "https://foody-nest.vercel.app/home",
    },
];


export const certifications = [
    {
        title: "Full Stack Web Development with React Certificate",
        provider: "Coursera (The Hong Kong University of Science and Technology)",
        link: "https://www.coursera.org/account/accomplishments/specialization/DUMFTL78V9JX",
    },
    {
        title: "Advanced React Certificate",
        provider: "Coursera (Meta)",
        link: "https://www.coursera.org/account/accomplishments/verify/WTUVR828EWDW",
    },
    {
        title: "TailwindCSS from A to Z: Master TailwindCSS Quickly Certificate",
        provider: "Udemy",
        link: "https://www.udemy.com/certificate/UC-e913d8cf-e37a-49d2-ab9a-d2f55979951b/",
    },
];


export const goalsandhobbies = [
    {
        icon: <FaBullseye />,
        title: "Goals",
        content: "My ultimate goal is to excel as a Frontend Developer, mastering modern frameworks and building user-friendly, impactful applications that make a difference.",
    },
    {
        icon: <FaStar />,
        title: "Hobbies",
        content: (
            <>
                <div>Here are some of my hobbies:</div>
                <ul className="list-disc list-inside">
                    <li>Exploring the art of photography.</li>
                    <li>Diving into books across genres.</li>
                    <li>Expressing myself through singing.</li>
                    <li>Experimenting with emerging technologies.</li>
                </ul>
            </>
        ),
    },
];

