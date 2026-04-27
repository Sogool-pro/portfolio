import { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

type NavbarProps = {
  darkMode: boolean;
  onToggleTheme: () => void;
};

export function Navbar({ darkMode, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f9f7f4]/95 dark:bg-[#15130f]/95 backdrop-blur-md border-b border-[#ddd8cf] dark:border-[#302a21]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
          className="text-[#1a1710] dark:text-[#f9f7f4] tracking-tight"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
        >
          neljhan<span className="text-[#b5410d]">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm text-[#6b6358] dark:text-[#b8afa2] hover:text-[#1a1710] dark:hover:text-[#f9f7f4] transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#ddd8cf] dark:border-[#302a21] text-[#6b6358] dark:text-[#f1e9dc] hover:border-[#b5410d]/50 hover:text-[#b5410d] transition-colors"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="mailto:neljhan@email.com"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-[#1a1710] dark:bg-[#f9f7f4] hover:bg-[#2e2720] dark:hover:bg-white text-[#f9f7f4] dark:text-[#1a1710] transition-colors"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-[#6b6358] dark:text-[#b8afa2] hover:text-[#1a1710] dark:hover:text-[#f9f7f4] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#f9f7f4]/98 dark:bg-[#15130f]/98 backdrop-blur-md border-b border-[#ddd8cf] dark:border-[#302a21]"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left px-3 py-2 text-sm text-[#6b6358] dark:text-[#b8afa2] hover:text-[#1a1710] dark:hover:text-[#f9f7f4] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <button
                  type="button"
                  onClick={onToggleTheme}
                  className="mb-2 flex w-full items-center justify-center gap-2 px-4 py-2 text-sm rounded-md border border-[#ddd8cf] dark:border-[#302a21] text-[#6b6358] dark:text-[#f1e9dc] transition-colors"
                >
                  {darkMode ? <Sun size={15} /> : <Moon size={15} />}
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
                <a
                  href="mailto:neljhan@email.com"
                  className="block text-center px-4 py-2 text-sm rounded-md bg-[#1a1710] dark:bg-[#f9f7f4] text-[#f9f7f4] dark:text-[#1a1710] transition-colors"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
