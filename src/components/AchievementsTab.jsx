import { Award, BookOpen, Code, Trophy, Zap } from "lucide-react";

const AchievementsTab = () => {
  const achievements = [
    {
      title: 'II position in NCO',
      description: 'Secured 2nd position in National Cyber Olympiad in class 11th at School Level',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: '235+ DSA problems on Leetcode',
      description: 'Solved 235+ DSA problems on Leetcode platform',
      icon: Code,
      color: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <div className="py-6 animate-fadeIn">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={index} 
                className="card hover-lift  p-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-text-primary mb-2">{achievement.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AchievementsTab;