import { Wrench } from "lucide-react";

const SkillsTab = () => {
  const skills = {
    'Frontend': [
      'React',
      'JavaScript',
      'HTML/CSS',
      'Tailwind CSS',
      'Redux Toolkit'
    ],
    'Backend': [
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose'
    ],
    'Tools & Others': [
      'Git',
      'Data Structure & Algorithms',
      'Responsive Design',
      'Generative AI tools',
      'Problem Solving'
    ]
  };

  return (
    <div className="py-6 animate-fadeIn">
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        {Object.entries(skills).map(([category, skillList], catIndex) => (
          <div 
            key={category}
            style={{ animation: `slideRight 0.5s ease-out ${catIndex * 0.1}s backwards` }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
              <Wrench className="w-6 h-6 text-primary-600" />
              {category}
            </h3>
            <div className="card p-6">
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill, index) => (
                  <span
                    key={index}
                    className="badge badge-glow"
                    style={{ animation: `scaleIn 0.3s ease-out ${index * 0.05}s backwards` }}
                  >
                    {skill}
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

export default SkillsTab;