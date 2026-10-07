import { SectionHeader } from "./Skills";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Fire-Monitor",
    description:
      "A satellite thermal anomaly & wildfire intelligence pipeline for NOAA-20 VIIRS data. Implements spatiotemporal persistence, geospatial feature engineering with GeoPandas and Shapely, and integrates real OpenStreetMap Overpass industrial context with geodesic distance metrics to differentiate wildfires from industrial activity.",
    tags: [
      "Python",
      "GeoPandas",
      "Shapely",
      "NOAA-20 VIIRS",
      "Overpass API",
      "Pytest",
    ],
    link: "https://github.com/Shashank163007/Fire-Monitor/",
  },
  {
    title: "Megen.Ai",
    description:
      "A local-first AI privacy proxy that detects and scrubs PII from user prompts before sending them to a local LLM. Ensures sensitive data never leaves the device while still enabling powerful AI interactions.",
    tags: ["Python", "FastAPI", "MongoDB", "Microsoft Presidio"],
    link: "https://github.com/Shashank163007",
  },
  {
    title: "Founder-Link",
    description:
      "A MERN-stack platform connecting startup founders with skilled engineers. Features a custom UI design system, advanced matching algorithms, and real-time messaging powered by Socket.io.",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io"],
    link: "https://github.com/Shashank163007",
  },
  {
    title: "RoadGuard AI",
    description:
      "A browser-based road safety assistant that performs real-time computer vision and object detection. Runs entirely client-side using TensorFlow.js and the COCO-SSD model for instant inference.",
    tags: ["TensorFlow.js", "COCO-SSD", "JavaScript", "Computer Vision"],
    link: "https://github.com/Shashank163007",
  },
  {
    title: "Phishing-Forensic",
    description:
      "An AI-powered phishing detection Chrome extension that leverages Gemini 2.0 Flash for forensic analysis of suspicious emails and URLs, protecting users from social engineering attacks.",
    tags: ["Chrome Extension", "Gemini 2.0 Flash", "JavaScript", "AI"],
    link: "https://github.com/Shashank163007",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20 bg-card-bg">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label="Work"
          title="Featured Projects"
          description="A selection of projects I've built — from satellite intelligence & privacy-first AI to real-time collaborative platforms."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const CardContent = (
    <>
      {/* Title row */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        {/* External link arrow */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-1 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        >
          <path d="M7 17l9.2-9.2M17 17V7H7" />
        </svg>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm text-muted leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-tag-bg px-2.5 py-1 text-xs font-medium text-tag-text"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.link && (
        <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-muted group-hover:text-foreground transition-colors">
          <span className="font-mono">
            {project.link.replace("https://github.com/", "github.com/")}
          </span>
          <span className="text-accent font-medium">View Repo &rarr;</span>
        </div>
      )}
    </>
  );

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col rounded-xl border border-border bg-background p-6 transition-all duration-200 hover:border-accent/40 hover:-translate-y-0.5 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label={`View ${project.title} on GitHub`}
      >
        {CardContent}
      </a>
    );
  }

  return (
    <article className="group relative flex flex-col rounded-xl border border-border bg-background p-6 transition-all duration-200 hover:border-accent/30 hover:-translate-y-0.5">
      {CardContent}
    </article>
  );
}
