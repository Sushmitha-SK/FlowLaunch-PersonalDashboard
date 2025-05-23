import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Personal Dashboard",
  description: "Personal dashboard showcasing professional experience, academic background, technical skills, projects, certifications, and career goals. Built with Next.js and Tailwind CSS.",
  keywords: [
    "Personal Dashboard",
    "Frontend Developer Portfolio",
    "Next.js Portfolio",
    "Tailwind CSS",
    "React Developer",
    "Professional Experience",
    "Technical Skills",
    "Projects",
    "Certifications",
    "Career Goals",
    "Sushmitha S"
  ],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#A453F5",
  openGraph: {
    title: "Personal Dashboard",
    description: "Explore the professional portfolio and skills of a passionate frontend developer.",
    url: "https://your-live-url.com",
    siteName: "Personal Dashboard",
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en" className={poppins.className}>
        <body className='antialiased'>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
