import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sami-shahid-portfolio.vercel.app"),

  title: {
    default: "Sami Shahid | Software Engineer",
    template: "%s | Sami Shahid",
  },

  description:
    "Portfolio of Sami Shahid, a Software Engineer specializing in Next.js, React, TypeScript, Flutter, Firebase, Python, AI and Computer Vision.",

  keywords: [
    "Sami Shahid",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Flutter Developer",
    "AI Developer",
    "Python Developer",
    "Firebase Developer",
    "Software Engineer Lahore",
  ],

  authors: [
    {
      name: "Sami Shahid",
    },
  ],

  creator: "Sami Shahid",

  openGraph: {
    title: "Sami Shahid | Software Engineer",
    description:
      "Full-Stack, Flutter and AI developer building modern web, mobile and intelligent software products.",
    url: "https://sami-shahid-portfolio.vercel.app",
    siteName: "Sami Shahid Portfolio",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}