import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  MousePointer2,
  Sparkles,
} from "lucide-react";

const skills = [
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Node.js",
  "Supabase",
  "Vercel",
  "Prisma",
  "UX Systems",
];

const stats = [
  { value: "3+", label: "Years building web products" },
  { value: "50+", label: "Completed Projects" },
  
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden px-5 pb-14 pt-28 lg:pt-32">
      <div className="container mx-auto">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-8">
            <div className="eyebrow-pill animate-fade-in">
              <Sparkles className="h-4 w-4 text-highlight" />
              Frontend developer for polished product experiences
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-normal text-foreground animate-fade-in animation-delay-100 md:text-6xl lg:text-7xl">
                I build crisp React interfaces that feel fast, clear, and
                human.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground animate-fade-in animation-delay-200">
                Frontend developer specializing in React and Tailwind. I turn
                product ideas into responsive, maintainable web experiences
                with a strong eye for interaction, structure, and performance.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 animate-fade-in animation-delay-300">
              <Button href="#contact" size="lg">
                Contact Me <ArrowRight className="h-5 w-5" />
              </Button>
              <AnimatedBorderButton href="/Sid_Priyanjitha_CV.pdf" download>
                <Download className="h-5 w-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            <div className="flex flex-wrap items-center gap-3 animate-fade-in animation-delay-400">
              {[
                { icon: Github, href: "https://github.com/sidpriyanjitha", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
              <span className="ml-1 text-sm font-bold text-muted-foreground">
                Open to freelance and full-time roles
              </span>
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300">
            <div className="absolute right-5 top-5 z-10 hidden rounded-full bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground shadow-xl md:flex">
              Available now
            </div>

            <div className="grid gap-4 sm:grid-cols-[0.72fr_1fr] lg:grid-cols-1 xl:grid-cols-[0.72fr_1fr]">
              <div className="order-2 grid gap-4 sm:order-1 lg:order-2 xl:order-1">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[28px] border border-border bg-card p-5 shadow-[0_20px_60px_rgba(22,24,29,0.08)]"
                  >
                    <div className="text-4xl font-black text-primary">
                      {stat.value}
                    </div>
                    <p className="mt-2 text-sm font-bold leading-5 text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="order-1 overflow-hidden rounded-[36px] border border-border bg-card p-3 shadow-[0_28px_80px_rgba(22,24,29,0.14)] sm:order-2 lg:order-1 xl:order-2">
                <div className="relative overflow-hidden rounded-[28px] bg-secondary">
                  <img
                    src="/profile-photo.png"
                    alt="Sid Priyanjitha"
                    className="aspect-[4/5] h-full w-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 rounded-3xl bg-card/90 p-4 backdrop-blur">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-black">Sid Priyanjitha</p>
                        <p className="text-xs font-bold text-muted-foreground">
                          React / Tailwind / FrontEnd Developer
                        </p>
                      </div>
                      <MousePointer2 className="h-5 w-5 text-highlight" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden border-y border-border py-5">
          <div className="flex animate-marquee">
            {[...skills, ...skills].map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="flex-shrink-0 px-7 text-sm font-black uppercase tracking-[0.16em] text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
