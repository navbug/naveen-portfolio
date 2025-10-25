import {
  Download,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Menu,
  X,
  CodeXml,
} from "lucide-react";
import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import naveen_resume from "../assets/naveen_resume.pdf";

const Navbar = ({ onContactClick }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = naveen_resume;
    link.download = "Naveen_Bugalia_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-700 rounded-lg flex items-center justify-center cursor-pointer text-white font-bold text-xl shadow-lg hover:bg-surface transition-all icon-rotate">
              NB
            </div>
            <span className="text-xl font-bold gradient-text"> Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://github.com/navbug"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-0.5 hover:bg-surface rounded-lg transition-all hover:scale-110 icon-rotate"
            >
              <Github className="w-5 h-5 text-text-primary" />
            </a>
            <a
              href="https://linkedin.com/in/naveenbugalia512"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-0.5 hover:bg-surface rounded-lg transition-all hover:scale-110 icon-rotate"
            >
              <Linkedin className="w-5 h-5 text-text-primary" />
            </a>
            <a
              href="https://leetcode.com/u/naveenbugalia512/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-0.5 hover:bg-surface rounded-lg transition-all hover:scale-110 icon-rotate"
            >
              <CodeXml className="w-6 h-6 text-text-primary" />
            </a>
            <button
              onClick={handleResumeDownload}
              className="btn-primary btn-ripple cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-medium">
                Resume
              </span>
            </button>
            <button
              onClick={onContactClick}
              className="p-2 hover:bg-surface rounded-lg transition-all hover:scale-110 smooth-transition cursor-pointer"
            >
              <Mail className="w-5 h-5 text-text-primary" />
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-surface rounded-lg transition-all"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-text-primary" />
              ) : (
                <Sun className="w-5 h-5 text-primary-400" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-surface rounded-lg transition-all"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden animate-fadeIn"
          style={{ animation: "slideRight 0.3s ease-out" }}
        >
          <div className="px-4 pt-2 pb-4 space-y-3 bg-surface border-t-2 border-border shadow-lg">
            <a
              href="https://github.com/navbug"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="flex items-center space-x-3 p-3 hover:bg-surface-elevated rounded-lg transition-all"
            >
              <Github className="w-5 h-5 text-text-primary" />
              <span className="text-text-primary font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/naveenbugalia512"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="flex items-center space-x-3 p-3 hover:bg-surface-elevated rounded-lg transition-all"
            >
              <Linkedin className="w-5 h-5 text-text-primary" />
              <span className="text-text-primary font-medium">LinkedIn</span>
            </a>
            <a
              href="https://leetcode.com/u/naveenbugalia512/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="flex items-center space-x-3 p-3 hover:bg-surface-elevated rounded-lg transition-all"
            >
              <CodeXml className="w-5 h-5 text-text-primary" />
              <span className="text-text-primary font-medium">Leetcode</span>
            </a>
            <button
              onClick={() => {
                handleResumeDownload();
                closeMobileMenu();
              }}
              className="flex items-center space-x-3 p-3 hover:bg-surface-elevated rounded-lg transition-all w-full text-left"
            >
              <Download className="w-5 h-5 text-text-primary" />
              <span className="text-text-primary font-medium">
                Download Resume
              </span>
            </button>
            <button
              onClick={() => {
                onContactClick();
                closeMobileMenu();
              }}
              className="flex items-center space-x-3 p-3 hover:bg-surface-elevated rounded-lg transition-all w-full text-left"
            >
              <Mail className="w-5 h-5 text-text-primary" />
              <span className="text-text-primary font-medium">Contact Me</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
