"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scrollspy: detect active section
      const sections = ["skills", "projects", "experience", "contact"];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-3.5 transition-all duration-300">
      <div
        className={`mx-auto max-w-4xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border border-border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]"
            : "bg-white/60 backdrop-blur-sm border border-border/60"
        }`}
      >
        <nav
          className="flex items-center justify-between px-4 sm:px-5 py-2.5"
          aria-label="Main Navigation"
        >
          {/* Logo with monogram & status dot */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-decoration-none"
            aria-label="Shashank.V portfolio home"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground text-white font-mono text-xs font-bold transition-transform duration-200 group-hover:scale-105">
              S
            </div>
            <span className="text-sm font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
              Shashank.V
            </span>
          </a>

          {/* Desktop Nav Items with Active State Pill */}
          <ul className="hidden md:flex items-center gap-1 bg-tag-bg/60 p-1 rounded-full border border-border/50">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-card-bg text-foreground shadow-xs font-semibold"
                        : "text-muted hover:text-foreground hover:bg-white/50"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://github.com/Shashank163007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card-bg px-3 py-1.5 text-xs font-medium text-muted hover:text-foreground hover:border-accent/40 transition-all duration-200"
              aria-label="GitHub profile"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-white hover:bg-accent-hover transition-colors shadow-xs"
            >
              <span>Connect</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card-bg text-foreground hover:bg-tag-bg transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="flex flex-col gap-1 w-4">
              <span
                className={`block h-0.5 w-full bg-foreground transition-all duration-200 ${
                  mobileOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-foreground transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-foreground transition-all duration-200 ${
                  mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border px-4 py-3 bg-white/95 backdrop-blur-md rounded-b-2xl">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${
                        isActive
                          ? "bg-tag-bg text-foreground font-semibold"
                          : "text-muted hover:text-foreground hover:bg-tag-bg/50"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      )}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2 border-t border-border/70 mt-1 flex gap-2">
                <a
                  href="https://github.com/Shashank163007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 text-xs font-medium border border-border rounded-lg text-foreground hover:bg-tag-bg transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href="#contact"
                  className="flex-1 text-center py-2 text-xs font-medium bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Connect &rarr;
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
