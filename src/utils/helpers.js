import { Code, Briefcase, Wrench, GraduationCap, Award } from "lucide-react";
import ProjectsTab from "../components/ProjectsTab";
import ExperienceTab from "../components/ExperienceTab";
import SkillsTab from "../components/SkillsTab";
import EducationTab from "../components/EducationTab";
import AchievementsTab from "../components/AchievementsTab";

export const tabs = [
  { id: "projects", label: "Projects", component: ProjectsTab, icon: Code },
  { id: 'experience', label: 'Experience', component: ExperienceTab, icon: Briefcase },
  { id: 'skills', label: 'Skills', component: SkillsTab, icon: Wrench },
  { id: 'education', label: 'Education', component: EducationTab, icon: GraduationCap },
  { id: 'achievements', label: 'Achievements', component: AchievementsTab, icon: Award }
];

export const projects = [
  {
    id: 1,
    name: "Shop Kar",
    thumbnail:
      "https://res.cloudinary.com/dkvbeylph/image/upload/v1761296578/Screenshot_2025-10-22_215400_tmvuf2.png",
    technologies: ["ReactJS", "Redux Toolkit", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
    description:
      `Full-stack e-commerce platform with role based access, sorting/filtering, and admin dashboard. Features include product management, user authentication, shopping cart functionality, and integrated payment processing.`,
    liveLink: "https://e-commerce-mern-frontend-mu.vercel.app/",
    codeLink: "https://github.com/navbug/e-commerce-mern-frontend",
  },
  {
    id: 2,
    name: "Privyr CRM Clone",
    thumbnail:
      "https://res.cloudinary.com/dkvbeylph/image/upload/v1761296578/Screenshot_2025-10-24_143146_qdi9lh.png",
    technologies: ["ReactJS", "GoogleAPI", "Tailwind", "Node.js"],
    description:
      "A fullstack CRM(Customer Relationship Management) platform where team member can manage their clients, create content templates(message,files). Members can also import/export clients via csv file.",
    liveLink: "https://the-crm-app.vercel.app/",
    codeLink: "https://github.com/navbug/The-CRM-App",
  },
  {
    id: 3,
    name: "Fitness Tracker App",
    thumbnail:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=500&fit=crop",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    description:
      "Cross-platform mobile app for tracking workouts, nutrition, and progress with social features. Includes workout plans, calorie tracking, progress charts, and community challenges.",
    liveLink: "https://example.com",
    codeLink: "https://github.com",
  },
  {
    id: 4,
    name: "Real Estate Dashboard",
    thumbnail:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
    technologies: ["Vue.js", "Django", "PostgreSQL", "Mapbox"],
    description:
      "Comprehensive real estate management with property listings, maps, and analytics dashboard. Features advanced search filters, virtual tours, market analytics, and agent management tools.",
    liveLink: "https://example.com",
    codeLink: "https://github.com",
  },
];