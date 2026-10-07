const skills = [
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "FastAPI",
  "Python",
  "GeoPandas & Geospatial Data",
  "MongoDB",
  "TypeScript",
  "Tailwind CSS",
  "WebSockets (Socket.io)",
  "Local LLMs (Ollama)",
  "Pytest",
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label="Technologies"
          title="Skills & Tools"
          description="The stack I work with across frontend, backend, real-time systems, AI, and geospatial intelligence pipelines."
        />

        <div className="mt-10 flex flex-wrap gap-3 justify-center md:justify-start">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-tag-bg px-4 py-2 text-sm font-medium text-tag-text border border-border transition-colors hover:bg-border"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Reusable section header ── */
export function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
        {label}
      </p>
      <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mt-3 text-base text-muted leading-relaxed">{description}</p>
    </div>
  );
}
