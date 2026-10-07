export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center px-6 pt-24 pb-16"
    >
      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Location pill */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-border bg-card-bg px-4 py-1.5 text-xs font-medium text-muted mb-8">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Bengaluru, India
        </div>

        {/* Heading */}
        <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
          Hi, I&rsquo;m Shashank.V
        </h1>

        <p className="animate-fade-in-up animate-delay-200 mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
          A full-stack developer building{" "}
          <span className="text-foreground font-medium">web applications</span>,{" "}
          <span className="text-foreground font-medium">privacy solutions</span>, and{" "}
          <span className="text-foreground font-medium">
            two-sided marketplaces — and many more driven by experience and a will to explore
          </span>
          .
        </p>

        <p className="animate-fade-in-up animate-delay-300 mt-4 text-sm text-muted">
          Computer Science with Artificial Intelligence & Machine Learning &middot; Intellipaat School of Technology X S-Vyasa Deemed to be university  &middot;
          Batch of 2029
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-in-up animate-delay-400 mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            id="hero-cta-projects"
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            View Projects
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
          <a
            id="hero-cta-contact"
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card-bg px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-tag-bg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
