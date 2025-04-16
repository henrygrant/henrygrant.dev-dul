"use client";

import { useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  android?: string;
  ios?: string;
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: "project1",
      title: "Ally Mobile",
      description: "Ally Bank's mobile application that my team maintains.",
      image: "/placeholder-project.jpg",
      tags: ["React Native", "iOS", "Android", "GitLab", "CI/CD", "DevOps"],
      android:
        "https://play.google.com/store/apps/details?id=com.ally.MobileBanking&hl=en_US",
      ios: "https://apps.apple.com/us/app/ally-bank-auto-invest/id514374715",
    },
    {
      id: "project2",
      title: "Ridemapper",
      description:
        "Webapp that draws lines of all the bike rides I've taken on a styled map.",
      image: "/placeholder-project.jpg",
      tags: ["Sveltekit", "TypeScript", "Google Maps"],
      demoUrl: "#",
      codeUrl: "https://github.com/henrygrant/ridemapper-svelte",
    },
    {
      id: "project3",
      title: "Hanguko Helper",
      description:
        "(In development) App that integrates with Anki, ChatGPT, and ElevenLabs to generate flashcards and practice sentences for learning Korean",
      image: "/placeholder-project.jpg",
      tags: ["Expo", "React Native", "Typescript", "ChatGPT", "ElevenLabs"],
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "React Native", label: "React Native" },
    { id: "GitLab", label: "DevOps" },
    { id: "NuxtJS", label: "Web" },
    { id: "Python", label: "Backend" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                  : "bg-foreground/10 hover:bg-foreground/15"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/20 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full bg-foreground/5 overflow-hidden">
                {/* This is a placeholder. In a real project, you would use actual project images */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-16 h-16 text-foreground/20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-foreground/5 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-lg text-sm font-medium hover:bg-[var(--primary)]/90 transition-colors flex-1 text-center"
                  >
                    Live Demo
                  </a>
                )}
                {project.android && (
                  <a
                    href={project.android}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-700 text-[var(--primary-foreground)] rounded-lg text-sm font-medium hover:bg-[var(--primary)]/90 transition-colors flex-1 text-center"
                  >
                    Play Store
                  </a>
                )}
                {project.ios && (
                  <a
                    href={project.ios}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-red-400 text-[var(--primary-foreground)] rounded-lg text-sm font-medium hover:bg-[var(--primary)]/90 transition-colors flex-1 text-center"
                  >
                    App Store
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-foreground/20 rounded-lg text-sm font-medium hover:bg-foreground/5 transition-colors flex-1 text-center"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground/80 hover:text-[var(--primary)] transition-colors"
          >
            <span>View more projects on GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
