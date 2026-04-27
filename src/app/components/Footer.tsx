import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1a1710] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <span
            className="text-[#f9f7f4] tracking-tight"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
          >
            neljhan<span className="text-[#b5410d]">.</span>
          </span>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(`#${item}`)}
                className="text-sm text-[#9e9589] hover:text-[#f9f7f4] capitalize transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/complidev", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/neljhan", label: "LinkedIn" },
              { icon: Mail, href: "mailto:neljhan@email.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#6b6358] hover:text-[#f9f7f4] transition-colors"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#2e2720] text-center text-[#6b6358] text-xs">
          © 2024 Neljhan. Built with React & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
