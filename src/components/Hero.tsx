"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div
          className={`space-y-6 transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="space-y-2">
            <h2 className="text-lg font-medium text-foreground/70">
              Hello, I&apos;m
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Henry Grant
            </h1>
            <p className="text-xl md:text-2xl font-medium text-foreground/90 mt-2">
              Principal Software Engineer
            </p>
          </div>

          <p className="text-foreground/80 text-lg leading-relaxed max-w-xl">
            Experienced full-stack engineer specializing in application and
            DevOps engineering with a strong focus on mobile and web
            development. Proven ability to lead teams, streamline development
            pipelines, build scalable solutions, and enhance user experiences.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="px-6 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-lg font-medium hover:bg-[var(--primary)]/90 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-foreground/20 rounded-lg font-medium hover:bg-foreground/5 transition-colors"
            >
              View My Work
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://github.com/henrygrant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/henry-grant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Replace with your profile image */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-background/80 rounded-full backdrop-blur-sm"></div>
            <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-foreground/10">
              {/* Profile image */}
              <img
                src="/053170ea-90c6-4191-a245-ae7b42e065b9.png"
                alt="Henry Grant"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
