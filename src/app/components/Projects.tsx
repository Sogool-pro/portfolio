import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  featured: boolean;
  category: "web" | "fullstack" | "backend";
  year: string;
  image: string;
  images?: string[];
};

const projectAsset = (fileName: string) =>
  `${import.meta.env.BASE_URL}projects/${fileName}`;

const projects: Project[] = [
  {
    title: "FireGuard Project",
    description:
      "A real-time fire safety platform integrated with IoT sensors to monitor room temperature, humidity, smoke/gas, and carbon monoxide levels, with smart alerts, logs, reports, and emergency contact access.",
    tags: ["React JS", "Node.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/complidev",
    demo: "https://fireguard-mu.vercel.app/",
    featured: true,
    category: "fullstack",
    year: "2024",
    image: projectAsset("fireguard-login.svg"),
    images: [
      projectAsset("fireguard-login.svg"),
      projectAsset("fireguard-dashboard.svg"),
      projectAsset("fireguard-active.svg"),
    ],
  },
  {
    title: "TaskFlow",
    description:
      "A task management system built with PHP, HTML, CSS, and JavaScript, integrated with Google Workspace to support organized workflows, collaboration, and task tracking.",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "Google Workspace"],
    github: "https://github.com/complidev",
    demo: "https://taskflow.mensaheko.com/landing.php",
    featured: true,
    category: "fullstack",
    year: "2024",
    image: projectAsset("taskflow-landing.png"),
    images: [
      projectAsset("taskflow-landing.png"),
      projectAsset("taskflow-dashboard.svg"),
    ],
  },
  {
    title: "Savouramen",
    description:
      "A restaurant website for Savouramen, presenting the ramen shop's menu, brand, and customer-facing information for diners in Panabo City.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/complidev",
    featured: false,
    category: "web",
    year: "2024",
    image: projectAsset("savouramen.png"),
  },
  {
    title: "Panabo City Park",
    description:
      "A Google Sites project highlighting Panabo City Park with organized location details, public information, and a clean browsable page structure.",
    tags: ["Google Sites", "Web Design", "Content", "Public Info"],
    demo: "https://sites.google.com/dnsc.edu.ph/whereabouts-panabocity-park/home?authuser=0",
    github: "https://github.com/complidev",
    featured: false,
    category: "web",
    year: "2023",
    image: projectAsset("googlesites.png"),
  },
  {
    title: "BookFi",
    description:
      "A book management system for organizing records, tracking book details, and supporting everyday library or collection management workflows.",
    tags: ["Java", "MySQL"],
    github: "https://github.com/complidev",
    featured: false,
    category: "fullstack",
    year: "2023",
    image: projectAsset("bookfi.png"),
  },
  {
    title: "Inventory Management System",
    description:
      "An inventory management system focused on MySQL-backed records, query-driven reporting, and practical product stock management.",
    tags: ["MySQL", "SQL Queries", "Inventory", "Database"],
    github: "https://github.com/complidev",
    featured: false,
    category: "fullstack",
    year: "2024",
    image: projectAsset("inventory.png"),
  },
];

const filters = ["All", "Web", "Full-Stack", "Backend"] as const;
type Filter = (typeof filters)[number];

const categoryMap: Record<Filter, Project["category"] | null> = {
  All: null,
  Web: "web",
  "Full-Stack": "fullstack",
  Backend: "backend",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const previewImages = project.images ?? [project.image];
  const previewGridClass =
    previewImages.length === 3
      ? "grid grid-cols-2 grid-rows-2"
      : previewImages.length > 1
        ? "grid grid-rows-2"
        : "";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-xl bg-white dark:bg-[#181611] border border-[#ddd8cf] dark:border-[#302a21] hover:border-[#b5410d]/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#b5410d]/5 flex flex-col"
    >
      {/* Project image */}
      <div className="relative h-44 overflow-hidden bg-[#f0ede7] dark:bg-[#1d1a15]">
        <div className={`h-full ${previewGridClass}`}>
          {previewImages.map((image, imageIndex) => (
            <img
              key={image}
              src={image}
              alt={project.title}
              className={`w-full h-full min-h-0 object-cover transition-transform duration-500 group-hover:scale-105 ${
                previewImages.length === 3 && imageIndex === 0
                  ? "col-span-2"
                  : ""
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1710]/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className="text-xs text-white/80 tabular-nums bg-[#1a1710]/50 px-2 py-0.5 rounded-full backdrop-blur-sm">
            {project.year}
          </span>
          {project.featured && (
            <span className="px-2 py-0.5 rounded-full text-[11px] bg-[#b5410d] text-white">
              Featured
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md bg-white/80 backdrop-blur-sm text-[#1a1710] hover:bg-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={14} />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md bg-white/80 backdrop-blur-sm text-[#b5410d] hover:bg-white transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3
            className="text-[#1a1710] dark:text-[#f9f7f4] mb-2 group-hover:text-[#b5410d] transition-colors"
          style={{ fontWeight: 600 }}
        >
          {project.title}
        </h3>
        <p className="text-[#6b6358] dark:text-[#b8afa2] text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#f0ede7] dark:border-[#302a21]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs bg-[#f9f7f4] dark:bg-[#11100d] text-[#6b6358] dark:text-[#b8afa2] border border-[#e8e3d8] dark:border-[#302a21]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    categoryMap[activeFilter] === null
      ? projects
      : projects.filter((p) => p.category === categoryMap[activeFilter]);

  return (
    <section id="projects" className="py-28 bg-[#f9f7f4] dark:bg-[#11100d] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-14">
            <span
              className="text-xs text-[#b5410d] tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              03 — Projects
            </span>
            <div className="flex-1 h-px bg-[#ddd8cf] dark:bg-[#302a21]" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2
                className="text-4xl md:text-5xl text-[#1a1710] dark:text-[#f9f7f4] leading-tight tracking-tight"
                style={{ fontWeight: 700 }}
              >
                Things I've Built
              </h2>
              <p className="text-[#6b6358] dark:text-[#b8afa2] mt-3 max-w-md">
                Web applications and coding projects across the full stack.
              </p>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                    activeFilter === f
                      ? "bg-[#1a1710] dark:bg-[#f9f7f4] text-[#f9f7f4] dark:text-[#1a1710]"
                      : "border border-[#ddd8cf] dark:border-[#302a21] text-[#6b6358] dark:text-[#b8afa2] hover:border-[#1a1710] dark:hover:border-[#f9f7f4] hover:text-[#1a1710] dark:hover:text-[#f9f7f4]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Project grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-14 flex items-center justify-center"
          >
            <a
              href="https://github.com/complidev"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[#6b6358] dark:text-[#b8afa2] hover:text-[#1a1710] dark:hover:text-[#f9f7f4] text-sm transition-colors border-b border-[#ddd8cf] dark:border-[#302a21] hover:border-[#1a1710] dark:hover:border-[#f9f7f4] pb-0.5"
            >
              <Github size={15} />
              See more on GitHub
              <ArrowUpRight
                size={13}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
