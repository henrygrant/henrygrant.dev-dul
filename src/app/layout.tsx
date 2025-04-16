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
  title: "Henry Grant | Principal Software Engineer",
  description:
    "Personal website of Henry Grant, a Principal Software Engineer specializing in application and DevOps engineering with a focus on mobile and web development.",
  keywords: [
    "principal software engineer",
    "mobile development",
    "web development",
    "react native",
    "typescript",
    "javascript",
    "go",
    "python",
    "devops",
    "aws",
    "gitlab",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
