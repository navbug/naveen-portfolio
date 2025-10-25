import { Download, Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = ({ onContactClick }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "navbar-glass shadow-lg border-b-2 border-border"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-700 rounded-lg flex items-center justify-center cursor-pointer text-white font-bold text-xl shadow-lg hover:bg-surface transition-all icon-rotate">
              NB
            </div>
            <span className="text-xl font-bold gradient-text"> Portfolio</span>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/navbug"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-0.5 hover:bg-surface rounded-lg transition-all hover:scale-110 icon-rotate"
            >
              <Github className="w-5 h-5 text-text-primary" />
            </a>
            <a
              href="https://linkedin.com/naveenbugalia512"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-0.5 hover:bg-surface rounded-lg transition-all hover:scale-110 icon-rotate"
            >
              <Linkedin className="w-5 h-5 text-text-primary" />
            </a>
            <button className="btn-primary btn-ripple cursor-pointer">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-medium">
                Resume
              </span>
            </button>
            <button onClick={onContactClick} className="bp-2 hover:bg-surface rounded-lg transition-all hover:scale-110 smooth-transition cursor-pointer">
              <Mail className="w-5 h-5" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-surface rounded-lg transition-all hover:scale-110 smooth-transition"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-text-primary" />
              ) : (
                <Sun className="w-5 h-5 text-primary-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
