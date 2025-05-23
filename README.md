# Personal Dashboard Web App

## 🚀 Project Overview

This personal dashboard web application is developed using **Next.js** and **Tailwind CSS**, combining modern frontend technologies to deliver a seamless and performant user experience. The app presents academic achievements, professional experiences, and personal details through a clean, intuitive, and fully responsive interface. Additionally, it features a comprehensive display of technical skills, career goals, certifications, and hobbies, offering a well-rounded digital profile that is both visually appealing and easy to navigate across devices.

---

## 🌐 Live URL & Repository

- **Live Application**: [https://localhost:3000](https://localhost:3000)
- **GitHub Repository**: [https://github.com/Sushmitha-SK/FlowLaunch-PersonalDashboard.git](https://github.com/Sushmitha-SK/FlowLaunch-PersonalDashboard.git)

---

## ✨ Features

- **Profile Section**: Displays essential personal information including name, profile photo, a brief bio, location, and contact links such as email, LinkedIn, and GitHub, enabling easy connection and communication.

- **Professional Info**: Organized timeline highlighting career progression with detailed roles, companies, durations, locations, and key responsibilities, showcasing professional expertise.

- **Academics**: Timeline-style presentation of educational background, including degrees earned, completion dates, institutions, and locations, providing a clear overview of academic history.

- **Skills**: Categorized display of technical and soft skills, covering programming languages, frameworks, databases, tools, and testing methodologies, with proficiency levels to illustrate strengths.

- **Projects**: Features selected projects with descriptive overviews, technologies used, and links to live demos or repositories, demonstrating hands-on experience and practical application of skills.

- **Certifications**: Highlights relevant certifications, including titles, issuing organizations, and direct verification links, emphasizing ongoing professional development.

- **Goals and Hobbies**: Presents clear career objectives alongside personal hobbies and interests, adding depth and personality to the profile.

- **Local Data Management**: All content is fetched from a simple local JSON object, allowing easy updates and maintenance without the need for external databases or APIs.

- **Responsive Design**: Fully optimized for consistent appearance and functionality across desktop and mobile devices, ensuring an excellent user experience on all platforms.

- **Dark/Light Mode**: Provides an intuitive theme switching feature with smooth transitions, allowing users to select dark or light modes for comfortable viewing in different environments.

- **Smooth Animations & Transitions**: Incorporates subtle animations and transitions to enhance engagement while maintaining fast performance and usability.

---

## 🛠️ Tech Stack

### Core Technologies:

- **Frontend Framework**: Next.js
- **Styling**: Tailwind CSS
- **Icons**: react-icons

### Deployment:

- Hosted on [Vercel](https://vercel.com/) for fast, reliable, and scalable deployment.

---

## 📂 Project Structure

```
root
├── public                 # Static files (images, favicon, etc.)
├── src                    # Source files and global styles
│   ├── app                # Application-level files and global layout
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── assets             # Static assets like images, icons, fonts
│   ├── components         # Reusable UI components
│   │   ├── Academics.tsx
│   │   ├── Certifications.tsx
│   │   ├── GoalsandHobbies.tsx
│   │   ├── Header.tsx
│   │   ├── ProfessionalInfo.tsx
│   │   ├── Profile.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── context            # React context files for state management
│   │   └── ThemeContext.tsx
│   └── utils              # Utility files and helper data
│       └── data.tsx
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── packagelock.json
├── package.json           # Project dependencies and scripts
├── postcss.config.mjs
├── README.md              # Project Documentation
└── tsconfig.json

```

## 🚀 Getting Started

### Prerequisites:

- Node.js installed on your system

### Setup:

1. Clone the repository:
   ```bash
   git clone https://github.com/Sushmitha-SK/FlowLaunch-PersonalDashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd repository-name
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.
