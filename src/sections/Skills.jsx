import { Braces, Database, Figma, Server, Wrench } from "lucide-react";

const skillGroups = [
  {
    icon: Braces,
    title: "Frontend",
    skills: ["React", "JavaScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Supabase", "REST APIs", "Authentication"],
  },
  
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel", "CI Basics"],
  },
  {
    icon: Figma,
    title: "Product UI",
    skills: ["Design Systems", "Accessibility", "UX Polish", "Prototyping", "Performance"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="px-5 py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div className="space-y-5">
            <span className="section-label">Skills</span>
            <h2 className="max-w-2xl text-4xl font-black leading-tight md:text-6xl">
              The stack I use to turn ideas into polished interfaces.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted-foreground">
            I focus on modern frontend delivery, with enough backend and tooling
            knowledge to ship complete, maintainable web experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[28px] border border-border bg-card p-5 shadow-[0_20px_60px_rgba(22,24,29,0.06)]"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-muted text-primary">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-black">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-bold text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
