import { Code2, Layers3, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Build systems",
    description:
      "Reusable components, predictable state, and frontends that stay easy to extend.",
  },
  {
    icon: Rocket,
    title: "Ship fast",
    description:
      "Performance-aware implementation with practical decisions and clean delivery.",
  },
  {
    icon: Users,
    title: "Work clearly",
    description:
      "Close collaboration with designers, product teams, and stakeholders.",
  },
  {
    icon: Layers3,
    title: "Polish details",
    description:
      "Responsive layouts, accessible controls, and interactions that feel considered.",
  },
];

export const About = () => {
  return (
    <section id="about" className="px-5 py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-5">
            <span className="section-label ">About</span>
            <h2 className="max-w-xl text-4xl font-black leading-tight text-foreground md:text-6xl">
              I design the frontend layer where product strategy becomes usable
              software.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
            <p>
              I am a frontend developer focused on React, Tailwind, and the
              craft of turning fuzzy ideas into sharp product screens. My work
              blends engineering discipline with a designer's sensitivity for
              spacing, hierarchy, and flow.
            </p>
            <p>
              I care about interfaces that are calm to use and simple to
              maintain: clean components, responsive structure, fast feedback,
              and just enough motion to make an experience feel alive.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group rounded-[28px] border border-border bg-card p-6 shadow-[0_20px_60px_rgba(22,24,29,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              style={{ animationDelay: `${(index + 1) * 80}ms` }}
            >
              <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[32px] bg-secondary p-7 text-secondary-foreground md:p-10">
          <p className="max-w-4xl text-2xl font-black leading-tight md:text-4xl animate-pulse">
            "My goal is to make the product feel obvious to users and
            dependable to the team that has to keep building it."
          </p>
        </div>
      </div>
    </section>
  );
};
