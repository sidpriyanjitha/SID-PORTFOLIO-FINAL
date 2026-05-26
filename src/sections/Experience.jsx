const experiences = [
  {
    period: "2022 - Present",
    role: "Frontend Engineer",
    company: "MihinTech Pvt Ltd",
    description:
      "Leading frontend architecture for fintech products, improving bundle performance, and mentoring developers across reusable UI patterns.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    current: true,
  },
  {
    period: "2020 - 2022",
    role: "IT Support Engineer/Software Developer",
    company: "YOGO Lanka pvt Ltd",
    description:
      "Built and maintained React applications for enterprise clients, with a focus on testing, accessibility, and reliable delivery.",
    technologies: ["React", "Redux", "Jest", "Cypress"],
    current: false,
  },
  
  {
    period: "2018 - 2020",
    role: "Freelance Developer",
    company: "Self-Employed",
    description:
      "Delivered custom websites and web applications for small businesses, covering design, frontend implementation, and deployment.",
    technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="px-5 py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="section-label">Experience</span>
            <h2 className="mt-5 max-w-lg text-4xl font-black leading-tight md:text-6xl">
              Practical frontend growth across products, teams, and deadlines.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
              A timeline of roles shaped by product delivery, design
              collaboration, performance work, and maintainable component
              systems.
            </p>
          </div>

          <div className="relative space-y-4">
            <div className="timeline-glow absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-primary via-highlight to-transparent" />
            {experiences.map((exp) => (
              <article
                key={`${exp.role}-${exp.company}`}
                className="relative pl-14"
              >
                <div
                  className={`absolute left-[14px] top-7 h-4 w-4 rounded-full border-4 border-background ${
                    exp.current ? "bg-primary" : "bg-highlight"
                  }`}
                >
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary opacity-60 animate-ping" />
                  )}
                </div>

                <div className="rounded-[30px] border border-border bg-card p-6 shadow-[0_22px_70px_rgba(22,24,29,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-8">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.14em] text-primary">
                        {exp.period}
                      </p>
                      <h3 className="mt-3 text-2xl font-black">{exp.role}</h3>
                      <p className="mt-1 font-bold text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                    {exp.current && (
                      <span className="w-fit rounded-full bg-secondary px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-secondary-foreground">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
                    {exp.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-muted px-3 py-1.5 text-xs font-bold text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
