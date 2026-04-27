import "../styles/fonts.css";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div
      className="min-h-screen bg-[#f9f7f4] dark:bg-[#11100d] transition-colors duration-300"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((mode) => !mode)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
