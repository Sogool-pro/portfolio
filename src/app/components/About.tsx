import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "5+", label: "Technologies" },
  { value: "100%", label: "Commitment" },
  { value: "∞", label: "Curiosity" },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 bg-[#f9f7f4] dark:bg-[#11100d] transition-colors duration-300">
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
              01 — About
            </span>
            <div className="flex-1 h-px bg-[#ddd8cf] dark:bg-[#302a21]" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <div>
              <h2
                className="text-4xl md:text-5xl text-[#1a1710] dark:text-[#f9f7f4] mb-8 leading-tight tracking-tight"
                style={{ fontWeight: 700 }}
              >
                Building things
                <br />
                <span className="text-[#b5410d]">people use.</span>
              </h2>
              <div className="space-y-4 text-[#6b6358] dark:text-[#b8afa2] leading-relaxed">
                <p>
                  I'm a passionate full-stack web developer with hands-on
                  experience building modern web applications from the ground
                  up. I thrive on turning complex problems into elegant,
                  user-friendly solutions.
                </p>
                <p>
                  My development journey has equipped me with a solid foundation
                  in both frontend and backend technologies — from crafting
                  pixel-perfect interfaces to designing robust server-side logic
                  and database architectures.
                </p>
                <p>
                  I value clean code, meaningful collaboration, and shipping
                  products that make a real impact.
                </p>
              </div>

              {/* Info chips */}
              <div className="flex flex-wrap gap-2 mt-8">
                {[
                  { icon: MapPin, text: "Philippines" },
                  { icon: Briefcase, text: "Available for Hire" },
                  { icon: GraduationCap, text: "BS Information Technology" },
                ].map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f0ede7] dark:bg-[#1d1a15] border border-[#ddd8cf] dark:border-[#302a21] text-[#6b6358] dark:text-[#b8afa2] text-sm"
                  >
                    <Icon size={12} className="text-[#b5410d]" />
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * i + 0.3 }}
                  className="p-7 rounded-xl bg-white dark:bg-[#181611] border border-[#ddd8cf] dark:border-[#302a21] hover:border-[#c9c3b8] dark:hover:border-[#5a4634] transition-colors"
                >
                  <div
                    className="text-4xl text-[#1a1710] dark:text-[#f9f7f4] mb-2"
                    style={{
                      fontWeight: 800,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[#9e9589] dark:text-[#8f8578] text-sm">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
