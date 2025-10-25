import { Calendar, GraduationCap, Trophy } from "lucide-react";

const EducationTab = () => {
  const education = [
    {
      degree: "Bachelor in Computer Application",
      institution: "Jaipur National University, Jaipur",
      year: "2020 - 2023",
      grade: "Percentage: 70%",
    },
    {
      degree: "Senior Secondary (XII)",
      institution: "Gudha International School, Gudha Gorji",
      year: "2018 - 2019",
      grade: "Percentage: 75%",
    },
    {
      degree: "Secondary (X)",
      institution: "Gudha International School, Gudha Gorji",
      year: "2016 - 2017",
      grade: "Percentage: 90%",
    },
  ];

  return (
    <div className="py-6 animate-fadeIn">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative">
          <div className="timeline-connector absolute left-6 top-0 bottom-0 w-1 rounded-full"></div>
          <div className="space-y-8 ml-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-8"
                style={{
                  animation: `slideRight 0.6s ease-out ${
                    index * 0.15
                  }s backwards`,
                }}
              >
                <div className="absolute left-0 top-3 w-5 h-5 bg-primary-600 rounded-full border-4 border-background shadow-lg pulse-glow"></div>
                <div className="card hover-lift p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text-primary">
                        {edu.degree}
                      </h3>
                      <p className="text-text-secondary font-medium mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-center gap-3 mb-3">
                    <span className="text-text-tertiary text-sm flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </span>
                    <span className="text-green-600 dark:text-green-400 font-semibold bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full text-sm">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationTab;
