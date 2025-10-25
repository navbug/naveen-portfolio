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
    thumbnail: "https://res.cloudinary.com/dkvbeylph/image/upload/v1761296578/Screenshot_2025-10-22_215400_tmvuf2.png",
    technologies: ["ReactJS", "Redux Toolkit", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
    description: [
      "Built a full-stack e-commerce website using MERN stack with Redux Toolkit for state management, featuring user authentication, admin dashboard to manage orders, products & customers",
      "Developed responsive UI with ShimmerUI loading patterns and implemented advanced product filtering/sorting functionality, optimized performance using React code-splitting/lazy loading, and memoization techniques",
      "Engineered secure RESTful APIs with JWT authentication, protected routes, and comprehensive error handling; integrated Formik and Yup for robust form validation and file handling with proper loading/error states",
      "Designed modular and scalable architecture following clean code principles, enabling easy maintenance and feature expansion while ensuring separation of concerns across frontend and backend components"
    ],
    liveLink: "https://e-commerce-mern-frontend-mu.vercel.app/",
    codeLink: "https://github.com/navbug/e-commerce-mern-frontend"
  },
  {
    id: 2,
    name: "Privyr CRM Clone",
    thumbnail: "https://res.cloudinary.com/dkvbeylph/image/upload/v1761296578/Screenshot_2025-10-24_143146_qdi9lh.png",
    technologies: ["ReactJS", "GoogleAPI", "Tailwind", "Node.js"],
    description: [
      "Developed a full-stack CRM web application clone of Privyr using MERN stack, featuring client management, follow-up scheduling, activity tracking, and team dashboard for clients/leads management",
      "Built messaging system with customizable content templates for streamlined communication, integrated CSV import/export for bulk data operations and implemented full authentication flow with Google Sign-In for secure authentication",
      "Integrated Cloudinary API for cloud-based asset management and file handling, other features include search functionality, breadcrumb navigation system for intuitive user experience across nested pages"
    ],
    liveLink: "https://the-crm-app.vercel.app/",
    codeLink: "https://github.com/navbug/The-CRM-App"
  }
];

// Full-stack e-commerce platform with role based access, sorting/filtering, and admin dashboard. Features include product management, user authentication, shopping cart functionality, and integrated payment processing.
// A fullstack CRM(Customer Relationship Management) platform where team member can manage their clients, create content templates(message,files). Members can also import/export clients via csv file.