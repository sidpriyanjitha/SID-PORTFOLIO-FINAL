import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/sidpriyanjitha", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-5 pb-8">
      <div className="container mx-auto rounded-[32px] border border-border bg-card px-6 py-7">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-black tracking-normal">
              Sid Priyanjitha<span className="text-primary">.</span>
            </a>
            <p className="mt-2 text-sm font-bold text-muted-foreground">
              © {currentYear} Frontend portfolio. Built with React and Tailwind.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
