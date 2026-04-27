import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";

const contactEmail = "neljhan.p.redondo@gmail.com";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: contactEmail,
      href: `mailto:${contactEmail}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/complidev",
      href: "https://github.com/complidev",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/neljhan",
      href: "https://linkedin.com/in/neljhan",
    },
  ];

  return (
    <section id="contact" className="py-28 bg-[#f0ede7] dark:bg-[#181611] transition-colors duration-300">
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
              04 — Contact
            </span>
            <div className="flex-1 h-px bg-[#ddd8cf] dark:bg-[#302a21]" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <h2
                className="text-4xl md:text-5xl text-[#1a1710] dark:text-[#f9f7f4] mb-5 leading-tight tracking-tight"
                style={{ fontWeight: 700 }}
              >
                Let's work
                <br />
                <span className="text-[#b5410d]">together.</span>
              </h2>
              <p className="text-[#6b6358] dark:text-[#b8afa2] mb-10 leading-relaxed">
                Have a project in mind or an opportunity you'd like to discuss?
                I'd love to hear from you — I'm currently available for
                full-time roles, freelance work, and open-source collaborations.
              </p>

              <div className="space-y-4">
                {contacts.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white dark:bg-[#11100d] border border-[#ddd8cf] dark:border-[#302a21] flex items-center justify-center group-hover:border-[#b5410d]/40 group-hover:bg-[#fdf6f3] dark:group-hover:bg-[#211b16] transition-colors">
                      <Icon
                        size={16}
                        className="text-[#6b6358] dark:text-[#b8afa2] group-hover:text-[#b5410d] transition-colors"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#9e9589] dark:text-[#8f8578] uppercase tracking-widest mb-0.5">
                        {label}
                      </p>
                      <p className="text-[#1a1710] dark:text-[#f9f7f4] text-sm group-hover:text-[#b5410d] transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#6b6358] dark:text-[#b8afa2] uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-[#11100d] border border-[#ddd8cf] dark:border-[#302a21] text-[#1a1710] dark:text-[#f9f7f4] text-sm placeholder-[#c9c3b8] dark:placeholder-[#6f665c] focus:outline-none focus:border-[#b5410d]/50 focus:ring-1 focus:ring-[#b5410d]/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#6b6358] dark:text-[#b8afa2] uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-[#11100d] border border-[#ddd8cf] dark:border-[#302a21] text-[#1a1710] dark:text-[#f9f7f4] text-sm placeholder-[#c9c3b8] dark:placeholder-[#6f665c] focus:outline-none focus:border-[#b5410d]/50 focus:ring-1 focus:ring-[#b5410d]/20 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#6b6358] dark:text-[#b8afa2] uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-[#11100d] border border-[#ddd8cf] dark:border-[#302a21] text-[#1a1710] dark:text-[#f9f7f4] text-sm placeholder-[#c9c3b8] dark:placeholder-[#6f665c] focus:outline-none focus:border-[#b5410d]/50 focus:ring-1 focus:ring-[#b5410d]/20 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1a1710] dark:bg-[#f9f7f4] hover:bg-[#2e2720] dark:hover:bg-white text-[#f9f7f4] dark:text-[#1a1710] text-sm transition-all active:scale-[0.98]"
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} />
                    Opening Email App
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
