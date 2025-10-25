import { Briefcase, Calendar, MapPin, Star } from "lucide-react";

const ExperienceTab = () => {
  const experiences = [
    {
      company: 'Groot Software',
      role: 'Fullstack Developer',
      duration: 'Sept 2024 - Present',
      location: 'Remote',
      description: [
        'Improved applications performance by 35% through implementation of modular reusable components, lazy loading strategies, and React memoization techniques, resulting in enhanced user experience and reduced bounce rates',
        'Streamlined development workflow by creating custom React hooks and config-driven form systems, reducing form development time by 50% and ensuring consistent validation patterns across the application',
        'Enhanced application security by implementing robust authentication system with JWT tokens, OAuth 2.0 integration, and role-based access control, ensuring secure user data handling',
        'Delivered feature-rich admin dashboard enabling efficient management of users, content, and analytics; implemented real-time updates and data filtering/sorting functionalities',
        'Developed RESTful APIs using Node.js and Express.js with proper error handling, input validation, and middleware for authentication; enhanced user experience by implementing responsive designs using TailwindCSS'
      ],
      highlights: ['Built scalable React applications', 'Improved performance by 40%']
    }
  ];

  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-4 space-y-6">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="card hover-lift"
          >
            <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary-600" />
                    {exp.role}
                  </h3>
                  <p className="text-lg text-text-secondary font-medium mt-1">{exp.company}</p>
                </div>
                <div className="text-sm text-text-tertiary mt-2 sm:mt-0 space-y-1">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2 mb-4">
                {exp.description.map((point, i) => (
                  <li key={i} className="text-text-secondary flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight, i) => (
                  <span key={i} className="badge flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTab;