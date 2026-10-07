import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shashank.V — Full-Stack Developer & AI Builder",
  description:
    "Developer portfolio of Shashank.V — building full-stack web applications, satellite intelligence pipelines, AI tools, privacy solutions, and two-sided marketplaces. Computer Science (AI & ML) at Intellipaat School of Technology X S-Vyasa, Bengaluru.",
  keywords: [
    "Shashank.V",
    "full-stack developer",
    "Fire-Monitor",
    "Python",
    "GeoPandas",
    "React",
    "Next.js",
    "Node.js",
    "AI tools",
    "privacy solutions",
    "portfolio",
  ],
  authors: [{ name: "Shashank.V" }],
  openGraph: {
    title: "Shashank.V — Full-Stack Developer & AI Builder",
    description:
      "Building full-stack web applications, satellite intelligence pipelines, AI tools, and two-sided marketplaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
