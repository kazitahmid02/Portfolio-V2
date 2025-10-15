import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

/* -------------------- CATEGORY DATA -------------------- */
const categories = [
  {
    name: "Data & Analytics",
    icon: (
      <svg width="55" height="55" viewBox="0 0 100 100" fill="none">
        <rect x="20" y="40" width="10" height="30" fill="#ec6f00" />
        <rect x="45" y="25" width="10" height="45" fill="#ec6f00" />
        <rect x="70" y="10" width="10" height="60" fill="#ec6f00" />
      </svg>
    ),
    skills: ["SQL", "R", "Tableau", "Data Cleaning", "Visualization", "Dashboard Storytelling"],
  },
  {
    name: "UX & Design",
    icon: (
      <svg width="55" height="55" viewBox="0 0 100 100" fill="none">
        <rect x="20" y="25" width="60" height="50" rx="8" stroke="#ec6f00" strokeWidth="3" />
        <path d="M30 40 H70" stroke="#ec6f00" strokeWidth="3" />
        <circle cx="40" cy="60" r="5" fill="#ec6f00" />
        <circle cx="60" cy="60" r="5" fill="#ec6f00" />
      </svg>
    ),
    skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Usability Testing", "Accessibility"],
  },
  {
    name: "Cybersecurity & IT",
    icon: (
      <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#ec6f00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 6v6c0 7 5 10 9 10s9-3 9-10V6l-9-4z"></path>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
    ),
    skills: ["Python Scripting", "Linux CLI", "SQL for Security", "Intrusion Detection", "Incident Response", "SIEM Tools"],
  },
  {
    name: "Project Management",
    icon: (
      <svg width="55" height="55" viewBox="0 0 100 100" fill="none">
        <rect x="15" y="25" width="70" height="50" rx="8" stroke="#ec6f00" strokeWidth="3" />
        <path d="M30 35 H70 M30 50 H70 M30 65 H70" stroke="#ec6f00" strokeWidth="3" />
      </svg>
    ),
    skills: ["Agile & Scrum", "Kanban", "Stakeholder Communication", "Risk Management", "Jira", "ClickUp"],
  },
  {
    name: "Web Development",
    icon: (
      <svg width="55" height="55" viewBox="0 0 100 100" fill="none">
        <path d="M30 40 L45 50 L30 60" stroke="#ec6f00" strokeWidth="3" strokeLinecap="round" />
        <path d="M70 40 L55 50 L70 60" stroke="#ec6f00" strokeWidth="3" strokeLinecap="round" />
        <rect x="15" y="20" width="70" height="60" rx="8" stroke="#ec6f00" strokeWidth="3" />
      </svg>
    ),
    skills: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "REST APIs", "Firebase"],
  },
  {
    name: "Office & Business Tools",
    icon: (
      <svg width="55" height="55" viewBox="0 0 100 100" fill="none">
        <rect x="20" y="25" width="60" height="50" rx="6" stroke="#ec6f00" strokeWidth="3" />
        <path d="M30 35 H70 M30 50 H70 M30 65 H70" stroke="#ec6f00" strokeWidth="3" />
      </svg>
    ),
    skills: ["Microsoft Office", "Google Workspace", "Email Etiquette", "Calendar Scheduling", "Documentation", "Collaboration"],
  },
];

/* -------------------- STARS GENERATOR -------------------- */
const getStars = () => {
  const count = Math.floor(Math.random() * 3) + 3; // 3–5
  return "⭐".repeat(count);
};

const CategoryCard = ({ index, category }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.25, 0.75)}
    className="flex justify-center items-stretch mb-8 sm:mb-10 md:mb-14"
  >
    <Tilt options={{ max: 25, scale: 1.05, speed: 400 }}>
      <div
        className="clip-octagon bg-[#0e0e0e] border border-[#ec6f00]/70 
                   shadow-[0_0_25px_#ec6f00aa] hover:shadow-[0_0_45px_#ec6f00cc] 
                   transition-all duration-500 flex flex-col items-center 
                   justify-start
                   p-8 sm:p-10 md:p-12
                   w-[300px] sm:w-[360px] md:w-[420px]
                   h-[400px] sm:h-[440px] md:h-[480px]
                   mx-auto"
      >
        {/* icon */}
        <div className="mb-4 text-[32px] sm:text-[38px] md:text-[44px] flex justify-center">
          {category.icon}
        </div>

        {/* category title */}
        <h3 className="text-white font-bold text-[15px] sm:text-[17px] md:text-[20px] mb-3 text-center leading-tight">
          {category.name}
        </h3>

        {/* skill list */}
        <ul className="text-white/90 text-[12px] sm:text-[14px] md:text-[15px] list-disc list-inside text-left space-y-1 w-full">
          {category.skills.map((s, i) => (
            <li key={i} className="flex justify-between items-center truncate">
              <span className="truncate">{s}</span>
              <span className="text-[#ec6f00] text-[10px] sm:text-[12px] md:text-[13px] ml-2">
                {getStars()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Tilt>
  </motion.div>
);


/* -------------------- MAIN SECTION -------------------- */
const Tech = () => (
  <section
    id="tech"
    className="relative w-full min-h-screen flex flex-col justify-center items-center 
               bg-[#050505] py-24 px-4 sm:px-8 overflow-hidden"
  >
    <motion.div variants={textVariant()} className="text-center mb-14">
      <h2 className={`${styles.sectionHeadText} text-[#ec6f00]`}>
        Technical Skills
      </h2>
    </motion.div>

    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-14 
                 gap-y-14 sm:gap-y-20 justify-items-center z-10"
    >
      {categories.map((cat, i) => (
        <CategoryCard key={i} index={i} category={cat} />
      ))}
    </div>

    <style>{`
      .clip-octagon {
        clip-path: polygon(
          30% 0%, 70% 0%, 
          100% 30%, 100% 70%, 
          70% 100%, 30% 100%, 
          0% 70%, 0% 30%
        );
      }
    `}</style>
  </section>
);

export default SectionWrapper(Tech, "tech");
