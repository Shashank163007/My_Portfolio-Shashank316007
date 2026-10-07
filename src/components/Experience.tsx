import { SectionHeader } from "./Skills";

const highlights = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Hackathon Competitor",
    description:
      "Active participant in competitive hackathons and engineering sprints (like Smart India Hackathon problem statements), consistently building end-to-end prototypes with strict data contracts and reproducible outputs.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "MVP-First Approach",
    description:
      "A track record of shipping fast — scoping features aggressively, architecting resilient data pipelines and apps, and iterating based on real-world benchmarks.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Full-Stack & Systems Builder",
    description:
      "End-to-end ownership — from geospatial data pipelines, satellite anomaly detection, and AI proxies to performant frontends and real-time sockets.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label="Background"
          title="Experience & Hackathons"
          description="Competitive technical environments, rapid hackathon sprints, and complex data foundations shape how I build software."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card-bg p-6 transition-colors hover:border-accent/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-tag-bg text-accent">
                {item.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
