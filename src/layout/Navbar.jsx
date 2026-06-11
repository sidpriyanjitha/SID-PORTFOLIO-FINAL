import { Button } from "@/components/Button";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = ({ theme, onToggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-5">
        <a
          href="#"
          className="flex items-center gap-3 rounded-full bg-secondary px-3 py-2 text-sm font-black text-secondary-foreground shadow-[0_16px_36px_rgba(22,24,29,0.16)]"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-highlight text-foreground">
            S
          </span>
          <span className="hidden sm:inline">Sid Priyanjitha</span>
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-border bg-card/80 p-1 shadow-[0_18px_50px_rgba(22,24,29,0.08)] backdrop-blur md:flex">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            type="button"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button href="#contact" size="sm">
            
           
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            type="button"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            type="button"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="mx-5 mt-3 rounded-[28px] border border-border bg-card p-4 shadow-[0_20px_60px_rgba(22,24,29,0.14)] md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-bold text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}

            <Button
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 w-full"
            >
              Start a project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
