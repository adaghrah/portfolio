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
  title: "Ahmad Daghrah - Staff Frontend Engineer",
  description: "Portfolio of Ahmad Daghrah, a Staff Frontend Engineer specializing in React, TypeScript, and AI-powered interfaces. Expert in frontend architecture, performance optimization, and building scalable applications.",
  keywords: [
    "Staff Frontend Engineer",
    "React Developer",
    "TypeScript Expert",
    "Frontend Architecture",
    "AI Integration",
    "Performance Optimization",
    "Ahmad Daghrah"
  ].join(", "),
  authors: [{ name: "Ahmad Daghrah" }],
  openGraph: {
    title: "Ahmad Daghrah - Staff Frontend Engineer",
    description: "Portfolio of Ahmad Daghrah, a Staff Frontend Engineer specializing in React, TypeScript, and AI-powered interfaces.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Daghrah - Staff Frontend Engineer",
    description: "Staff Frontend Engineer specializing in React, TypeScript, and AI-powered interfaces",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== 'undefined') {
                  const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                }
              })()
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
