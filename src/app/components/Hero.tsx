import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-[#f9f7f4] dark:bg-[#11100d] overflow-hidden transition-colors duration-300"
    >
      {/* Subtle texture dots */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Warm blob accent */}
      <div className="absolute top-20 right-0 w-[480px] h-[480px] rounded-full bg-[#f0e8dc] dark:bg-[#3a2419] blur-3xl opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-20">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-[#2d9e4a] animate-pulse" />
          <span className="text-sm text-[#6b6358] dark:text-[#b8afa2]">Open to opportunities</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-14">
          {/* Left: text */}
          <div className="flex-1 min-w-0">
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(3rem,8vw,6.5rem)] text-[#1a1710] dark:text-[#f9f7f4] leading-[0.95] tracking-tight mb-8"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}
            >
              Neljhan
              <br />
              <span className="text-[#b5410d]">Fullstack</span>
              <br />
              Developer
            </motion.h1>

            {/* Divider row */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-24 h-px bg-[#1a1710] dark:bg-[#f9f7f4] mb-8 origin-left"
            />

            {/* ATS-friendly intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base text-[#6b6358] dark:text-[#b8afa2] max-w-lg mb-12 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Results-driven web developer specializing in responsive, scalable
              web applications. Proficient in modern JavaScript frameworks,
              RESTful API development, and full-stack technologies — focused on
              clean code and exceptional user experiences.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mb-16"
            >
              <button
                onClick={() => handleScroll("#projects")}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#1a1710] dark:bg-[#f9f7f4] hover:bg-[#2e2720] dark:hover:bg-white text-[#f9f7f4] dark:text-[#1a1710] text-sm transition-all"
              >
                View My Projects
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#c9c3b8] dark:border-[#41382d] hover:border-[#1a1710] dark:hover:border-[#f9f7f4] text-[#1a1710] dark:text-[#f9f7f4] text-sm transition-all hover:bg-[#f0ede7] dark:hover:bg-[#1d1a15]"
              >
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex items-center gap-5"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/complidev",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/neljhan",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:neljhan@email.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[#9e9589] dark:text-[#8f8578] hover:text-[#1a1710] dark:hover:text-[#f9f7f4] transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-shrink-0 flex flex-col items-center gap-3"
          >
            {/* Photo frame */}
            <div className="relative w-64 h-72 lg:w-72 lg:h-80">
              {/* Decorative offset border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-[#b5410d]/30" />
              {/* Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#ddd8cf] dark:border-[#41382d] bg-[#f0ede7] dark:bg-[#1d1a15]">
                <img
                  src="/projects/photo.jpg"
                  alt="Profile photo — swap with your own"
                  className="w-full h-full object-cover object-top"
                />
                {/* Swap hint overlay */}
              </div>
            </div>
            {/* Name label */}
            <p className="text-xs text-[#9e9589] dark:text-[#8f8578] tracking-widest uppercase">
              Neljhan · Developer
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={() => handleScroll("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.85 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#9e9589] dark:text-[#8f8578] hover:text-[#1a1710] dark:hover:text-[#f9f7f4] transition-colors"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
