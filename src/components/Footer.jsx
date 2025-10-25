import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-900 via-accent-900 to-primary-900 text-white py-6 mt-8 border-t-4 border-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-100 text-sm">© 2025 Naveen Bugalia. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/navbug" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-200 hover:text-white transition-colors transform hover:scale-110 icon-rotate"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/naveenbugalia512/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-200 hover:text-white transition-colors transform hover:scale-110 icon-rotate"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p className="text-primary-100 text-sm">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;