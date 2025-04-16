"use client";

import { useEffect, useState } from "react";

type Skill = {
  name: string;
  level: number;
  category: "frontend" | "backend" | "mobile" | "tools";
};

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const skills: Skill[] = [
    // Frontend
    { name: "TypeScript", level: 95, category: "frontend" },
    { name: "JavaScript", level: 95, category: "frontend" },
    { name: "Tailwind", level: 90, category: "frontend" },
    { name: "Next.js", level: 90, category: "frontend" },
    { name: "Vue.js", level: 85, category: "frontend" },

    // Backend
    { name: "Go", level: 85, category: "backend" },
    { name: "Python", level: 85, category: "backend" },
    { name: "NodeJS", level: 90, category: "backend" },
    { name: "SQL", level: 85, category: "backend" },

    // Mobile
    { name: "React Native", level: 90, category: "mobile" },
    { name: "Expo", level: 85, category: "mobile" },
    { name: "Android", level: 80, category: "mobile" },
    { name: "iOS", level: 70, category: "mobile" },
    { name: "Kotlin", level: 75, category: "mobile" },
    { name: "Swift", level: 70, category: "mobile" },

    // Tools
    { name: "AWS", level: 85, category: "tools" },
    { name: "GCP", level: 80, category: "tools" },
    { name: "Terraform", level: 85, category: "tools" },
    { name: "GitLab CI/CD", level: 95, category: "tools" },
    { name: "Github Actions", level: 85, category: "tools" },
    { name: "Bash", level: 85, category: "tools" },
    { name: "AI Tools", level: 90, category: "tools" },
  ];

  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "mobile", name: "Mobile" },
    { id: "tools", name: "Tools & DevOps" },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-foreground/5">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Skills & Expertise
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category) => (
            <div key={category.id} className="space-y-6">
              <h3 className="text-xl font-semibold">{category.name}</h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-foreground/70">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            opacity: isVisible ? 1 : 0,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Other Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "OpenAI",
              "Supabase",
              "Vercel",
              "CI/CD",
              "Docker",
              "Debian",
              "System Administration",
              "Mobile UI/UX",
              "REST APIs",
              "Agile",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-foreground/10 rounded-full text-sm font-medium hover:bg-foreground/15 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
