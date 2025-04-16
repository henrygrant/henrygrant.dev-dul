export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">My Background</h3>
            <p className="text-foreground/80 leading-relaxed">
              I&apos;m a Principal Software Engineer specializing in application
              and DevOps engineering with a strong focus on mobile and web
              development.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I have a proven ability to lead teams, streamline development
              pipelines, build scalable solutions, and enhance user experiences.
              I&apos;m adept at mentoring engineers and driving measurable
              improvements in product performance and team efficiency.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              My expertise spans across multiple technologies including
              TypeScript, JavaScript, Go, Python, Kotlin, and mobile development
              for both Android and iOS platforms. I&apos;m passionate about
              creating elegant, high-performance solutions to complex problems.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border border-foreground/10 rounded-lg p-4 hover:border-foreground/20 transition-colors">
                  <h4 className="font-medium">Bachelors in Computer Science</h4>
                  <p className="text-foreground/70 text-sm">
                    College of Charleston, 2017
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
              <div className="space-y-4">
                <div className="border border-foreground/10 rounded-lg p-4 hover:border-foreground/20 transition-colors">
                  <h4 className="font-medium">Principal Software Engineer</h4>
                  <p className="text-foreground/70 text-sm">
                    Ally Financial, Aug 2021-Present
                  </p>
                  <ul className="text-foreground/80 text-sm mt-2 list-disc list-inside">
                    <li>Lead strategic initiatives for the Mobile Platform</li>
                    <li>
                      Implemented monorepo architecture supporting 15+ teams
                    </li>
                    <li>
                      Spearheaded React Native integration into native mobile
                      apps
                    </li>
                    <li>Designed GitLab pipelines for app deployment</li>
                    <li>Improved feature development velocity by 40%</li>
                  </ul>
                </div>
                <div className="border border-foreground/10 rounded-lg p-4 hover:border-foreground/20 transition-colors">
                  <h4 className="font-medium">Senior Software Engineer</h4>
                  <p className="text-foreground/70 text-sm">
                    Specbooks, Aug 2020-Aug 2021
                  </p>
                  <ul className="text-foreground/80 text-sm mt-2 list-disc list-inside">
                    <li>Led team developing the Marketplace Platform</li>
                    <li>Built applications with NuxtJS and Vue.js</li>
                    <li>Launched 30 custom e-commerce sites for clients</li>
                  </ul>
                </div>
                <div className="border border-foreground/10 rounded-lg p-4 hover:border-foreground/20 transition-colors">
                  <h4 className="font-medium">Software Engineer II</h4>
                  <p className="text-foreground/70 text-sm">
                    Conrex (Now Brookfield), Aug 2017-Aug 2020
                  </p>
                  <ul className="text-foreground/80 text-sm mt-2 list-disc list-inside">
                    <li>
                      Developed property acquisition and management application
                    </li>
                    <li>Created APIs with Python Flask</li>
                    <li>Enhanced AngularJS frontend application</li>
                    <li>Managed MySQL database with optimized queries</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
