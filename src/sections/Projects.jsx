import { useEffect, useState } from "react";
import { ArrowUpRight, Github, X } from "lucide-react";
import { Button } from "@/components/Button";

const projects = [
  {
    title: "IT Service Desk Dashboard",
    description:
      "Financial analytics workspace with live portfolio views, KPI panels, and decision-ready charts.",
    image: "/projects/IT Service Desk.png",
    tags: ["React", "TypeScript", "Node.js"],
    link: "https://it-service-desk-dashboard.vercel.app/login",
    github: "#",
    role: "Frontend architecture, dashboard UI, chart layout, responsive states.",
    problem:
      "Finance users needed a faster way to scan portfolio health, compare key numbers, and understand movement without jumping across separate screens.",
    solution:
      "Designed a compact dashboard structure with KPI cards, filters, chart-ready layout, and clear hierarchy for repeat daily use.",
    outcomes: ["Faster scan path for core metrics", "Reusable dashboard sections", "Responsive layouts for desktop and tablet"],
  },
  {
    title: "Sample Project 02",
    description:
      "Storefront and admin workflows for catalog management, checkout, payments, and reporting.",
    image: "/projects/project5.png",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    link: "#",
    github: "#",
    role: "Storefront UI, checkout flow, product card system, admin surfaces.",
    problem:
      "The shopping flow needed to feel trustworthy while still giving store owners practical tools for managing products and orders.",
    solution:
      "Built a structured storefront experience with clear product browsing, checkout-ready calls to action, and admin-friendly layouts.",
    outcomes: ["Cleaner buying journey", "Reusable product components", "Payment-ready flow structure"],
  },
  {
    title: "Sample Project 03",
    description:
      "AI-powered writing flow that helps users draft, refine, and organize content faster.",
    image: "/projects/project5.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "#",
    github: "#",
    role: "Prompt workflow UI, editor states, response presentation, loading UX.",
    problem:
      "Users needed AI help without feeling buried in prompts, raw outputs, or confusing editing steps.",
    solution:
      "Created a guided writing interface with clear input stages, useful empty states, and response areas designed for quick iteration.",
    outcomes: ["Simpler writing workflow", "Clear AI response structure", "Better loading and revision states"],
  },
  {
    title: "Sample Project 04",
    description:
      "Collaborative workspace with task tracking, live updates, and team-friendly navigation.",
    image: "/projects/project5.png",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
    role: "Workspace navigation, task cards, team views, real-time UI states.",
    problem:
      "Teams needed a simple workspace for tracking ownership and progress without a heavy enterprise interface.",
    solution:
      "Built a task-focused interface with status clarity, compact cards, and navigation patterns made for frequent updates.",
    outcomes: ["Clearer task ownership", "Reusable collaboration patterns", "Realtime-ready interface states"],
  },
  {
    title: "Sample Project 05",
    description:
      "Collaborative workspace with task tracking, live updates, and team-friendly navigation.",
    image: "/projects/project5.png",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
    role: "Workspace navigation, task cards, team views, real-time UI states.",
    problem:
      "Teams needed a simple workspace for tracking ownership and progress without a heavy enterprise interface.",
    solution:
      "Built a task-focused interface with status clarity, compact cards, and navigation patterns made for frequent updates.",
    outcomes: ["Clearer task ownership", "Reusable collaboration patterns", "Realtime-ready interface states"],
  },
  {
    title: "Sample Project 06",
    description:
      "Collaborative workspace with task tracking, live updates, and team-friendly navigation.",
    image: "/projects/project5.png",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
    role: "Workspace navigation, task cards, team views, real-time UI states.",
    problem:
      "Teams needed a simple workspace for tracking ownership and progress without a heavy enterprise interface.",
    solution:
      "Built a task-focused interface with status clarity, compact cards, and navigation patterns made for frequent updates.",
    outcomes: ["Clearer task ownership", "Reusable collaboration patterns", "Realtime-ready interface states"],
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="px-5 py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-5">
            <span className="section-label">Featured Work</span>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Recent product builds with useful structure and visual punch.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-muted-foreground">
            A compact look at dashboards, commerce flows, AI tools, and
            collaborative software.
          </p>
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-border bg-card shadow-[0_24px_70px_rgba(22,24,29,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-primary backdrop-blur">
                  0{index + 1}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="flex flex-1 flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-2xl font-black">{project.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <a
                      href={project.link}
                      aria-label={`${project.title} live project`}
                      className="group/action relative grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary animate-bounce"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                      <span className="pointer-events-none absolute -top-11 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-bold text-background opacity-0 shadow-lg transition-all duration-200 group-hover/action:-translate-y-1 group-hover/action:opacity-100 group-focus-visible/action:-translate-y-1 group-focus-visible/action:opacity-100">
                        Live preview
                      </span>
                    </a>
                    <a
                      href={project.github}
                      aria-label={`${project.title} GitHub`}
                      className="group/action relative grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-secondary hover:bg-secondary hover:text-secondary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <Github className="h-5 w-5" />
                      <span className="pointer-events-none absolute -top-11 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-bold text-background opacity-0 shadow-lg transition-all duration-200 group-hover/action:-translate-y-1 group-hover/action:opacity-100 group-focus-visible/action:-translate-y-1 group-focus-visible/action:opacity-100">
                        View code
                      </span>
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-bold text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  className="mt-6 w-full"
                  variant="ghost"
                  onClick={() => setSelectedProject(project)}
                  type="button"
                >
                  View case study
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-background/70 p-4 backdrop-blur-md sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onMouseDown={() => setSelectedProject(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[32px] border border-border bg-card shadow-[0_30px_90px_rgba(0,0,0,0.28)]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-72 overflow-hidden bg-muted">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full min-h-72 w-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="section-label">Case Study</p>
                    <h3
                      id="project-modal-title"
                      className="mt-4 text-3xl font-black md:text-4xl"
                    >
                      {selectedProject.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {selectedProject.description}
                    </p>
                  </div>

                  <button
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close project details"
                    type="button"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-7 grid gap-4">
                  {[
                    ["Role", selectedProject.role],
                    ["Problem", selectedProject.problem],
                    ["Solution", selectedProject.solution],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-3xl bg-surface p-5">
                      <h4 className="text-sm font-black uppercase tracking-[0.14em] text-primary">
                        {label}
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-black uppercase tracking-[0.14em] text-primary">
                    Outcomes
                  </h4>
                  <ul className="mt-3 grid gap-2">
                    {selectedProject.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="rounded-2xl border border-border px-4 py-3 text-sm font-bold text-muted-foreground"
                      >
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-bold text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
