import { Briefcase, Calendar, MapPin, Star } from "lucide-react";

const ExperienceTab = () => {
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      role: 'Senior Frontend Developer',
      duration: 'Jan 2023 - Present',
      location: 'Remote',
      description: 'Led frontend development for multiple high-traffic applications. Mentored junior developers and implemented best practices.',
      highlights: ['Built scalable React applications', 'Improved performance by 40%', 'Mentored 5 junior developers']
    },
    {
      company: 'Digital Innovations Ltd.',
      role: 'React Developer',
      duration: 'Jun 2021 - Dec 2022',
      location: 'Bangalore, India',
      description: 'Developed and maintained React-based web applications. Collaborated with backend team to design RESTful APIs.',
      highlights: ['Delivered 10+ projects on time', 'Implemented CI/CD pipelines', 'Reduced bug reports by 35%']
    }
  ];

  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-4 space-y-6">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="card hover-lift"
            style={{ animation: `slideRight 0.5s ease-out ${index * 0.1}s backwards` }}
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
              <p className="text-text-secondary mb-4">{exp.description}</p>
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