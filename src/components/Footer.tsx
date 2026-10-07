"use client";

import { useState, useEffect } from "react";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted">
          &copy; {year ?? "2026"} Shashank.V. Built with Next.js &amp; Tailwind
          CSS.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Shashank163007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="mailto:shashank316007@gmail.com"
            className="text-xs text-muted transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
