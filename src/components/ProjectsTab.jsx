import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { projects } from "../utils/helpers";

const ProjectsTab = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const currentProject = projects[currentIndex];

  return (
    <div className="py-6 animate-slideRight">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          <div
            className={`card overflow-hidden transition-all duration-500 ${
              isAnimating ? "scale-99 opacity-70" : "scale-100 opacity-100"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-0" style={{ minHeight: '350px' }}>
              <div className="relative md:h-auto overflow-hidden group">
                <img
                  src={currentProject.thumbnail}
                  alt={currentProject.name}
                  loading="lazy"
                  className="w-full h-full object-center transform group-hover:scale-105 transition-transform smooth-transition duration-700"
                />
                <div className="project-image-overlay absolute inset-0"></div>
              </div>

              <div className="p-6 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-text-primary flex-1">
                    {currentProject.name}
                  </h3>
                  <div className="flex gap-2 flex-shrink-0">
                    <a
                      href={currentProject.liveLink}
                      target="_blank"
                      className="btn-primary flex-1 flex items-center justify-center gap-2 text-sm"
                      style={{ padding: "3px 12px", height: "40px" }}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    <a
                      href={currentProject.codeLink}
                      target="_blank"
                      className="btn-secondary flex-1 flex items-center justify-center gap-2 text-sm"
                      style={{ padding: "3px 12px", height: "40px" }}
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentProject.technologies.map((tech, idx) => (
                    <span key={idx} className="badge badge-glow">
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="flex-1 overflow-y-auto custom-scrollbar pr-2"
                  style={{ maxHeight: "200px" }}
                >
                  <ul className="space-y-2">
                    {currentProject.description.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-text-secondary text-sm leading-relaxed">
                        <span className="text-primary-600 mt-1 flex-shrink-0">●</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 btn-secondary p-2 shadow-lg disabled:opacity-50 cursor-pointer"
            style={{ padding: "8px", borderRadius: "100%" }}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 btn-secondary p-2 rounded-full shadow-lg disabled:opacity-50 cursor-pointer"
            style={{ padding: "8px", borderRadius: "100%" }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              disabled={isAnimating}
              className={`transition-all duration-300 rounded-full disabled:cursor-not-allowed ${
                idx === currentIndex
                  ? "w-8 h-2 bg-gradient-to-r from-primary-600 to-accent-600"
                  : "w-2 h-2 bg-primary-600 hover:bg-primary-400 hover:scale-125"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectsTab;
