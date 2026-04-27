import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

type SkillCategory = {
  title: string;
  skills: { name: string; level: number }[];
};

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5 / CSS3", level: 92 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "TypeScript", level: 78 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 80 },
      { name: "PHP", level: 75 },
      { name: "Python", level: 70 },
      { name: "REST APIs", level: 82 },
      { name: "MySQL / PostgreSQL", level: 78 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "AI Tools", level: 82 },
      { name: "MongoDB", level: 72 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    title: "Automation",
    skills: [
      { name: "n8n", level: 78 },
      { name: "Make.com", level: 76 },
    ],
  },
];

const techBadges = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "PHP",
  "Python",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "REST API",
  "AI Tools",
  "Automation with n8n",
  "Automation with Make.com",
  "Workflow Automation",
  "Responsive Design",
];

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-[#1a1710] dark:text-[#f9f7f4] text-sm">{name}</span>
        <span className="text-[#9e9589] dark:text-[#8f8578] text-xs">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[#e8e3d8] dark:bg-[#302a21] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.9, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-[#1a1710] dark:bg-[#f9f7f4]"
        />
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 bg-[#f0ede7] dark:bg-[#181611] transition-colors duration-300">
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
              02 — Skills
            </span>
            <div className="flex-1 h-px bg-[#ddd8cf] dark:bg-[#302a21]" />
          </div>

          <h2
            className="text-4xl md:text-5xl text-[#1a1710] dark:text-[#f9f7f4] mb-4 leading-tight tracking-tight"
            style={{ fontWeight: 700 }}
          >
            Technical Expertise
          </h2>
          <p className="text-[#6b6358] dark:text-[#b8afa2] mb-14 max-w-lg">
            A curated overview of my technical skill set across the full web
            development stack.
          </p>

          {/* Skill category grids */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.12 + 0.2 }}
                className="p-7 rounded-xl bg-white dark:bg-[#11100d] border border-[#ddd8cf] dark:border-[#302a21] space-y-5"
              >
                <h3
                  className="text-[#1a1710] dark:text-[#f9f7f4] text-sm uppercase tracking-[0.15em]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  {cat.title}
                </h3>
                <div className="w-8 h-px bg-[#b5410d]" />
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={si * 0.07 + ci * 0.08 + 0.3}
                  />
                ))}
              </motion.div>
            ))}
          </div>

          {/* Tech badge cloud */}
          <div className="rounded-xl bg-white dark:bg-[#11100d] border border-[#ddd8cf] dark:border-[#302a21] p-8">
            <p
              className="text-xs text-[#9e9589] dark:text-[#8f8578] mb-5 uppercase tracking-[0.2em]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Technologies I Work With
            </p>
            <div className="flex flex-wrap gap-2">
              {techBadges.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: i * 0.035 + 0.5 }}
                  className="px-3 py-1.5 rounded-full text-sm border border-[#ddd8cf] dark:border-[#302a21] bg-[#f9f7f4] dark:bg-[#181611] text-[#6b6358] dark:text-[#b8afa2] hover:border-[#b5410d] hover:text-[#b5410d] hover:bg-[#fdf6f3] dark:hover:bg-[#211b16] transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
