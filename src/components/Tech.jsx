import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

/* -------------------- CATEGORIES -------------------- */
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
    skills: [
      { name: "SQL", level: 93 },
      { name: "R", level: 87 },
      { name: "Tableau", level: 88 },
      { name: "Data Cleaning", level: 90 },
      { name: "Visualization", level: 89 },
      { name: "Dashboard Storytelling", level: 91 },
    ],
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
    skills: [
      { name: "Figma", level: 90 },
      { name: "User Research", level: 88 },
      { name: "Wireframing", level: 84 },
      { name: "Prototyping", level: 86 },
      { name: "Usability Testing", level: 88 },
      { name: "Accessibility", level: 85 },
    ],
  },
  {
    name: "Cybersecurity & IT",
    icon: (
      <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#ec6f00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 6v6c0 7 5 10 9 10s9-3 9-10V6l-9-4z"></path>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
    ),
    skills: [
      { name: "Python Scripting", level: 89 },
      { name: "Linux CLI", level: 91 },
      { name: "SQL for Security", level: 87 },
      { name: "Intrusion Detection", level: 84 },
      { name: "Incident Response", level: 86 },
      { name: "SIEM Tools", level: 83 },
    ],
  },
  {
    name: "Project Management",
    icon: (
      <svg width="55" height="55" viewBox="0 0 100 100" fill="none">
        <rect x="15" y="25" width="70" height="50" rx="8" stroke="#ec6f00" strokeWidth="3" />
        <path d="M30 35 H70 M30 50 H70 M30 65 H70" stroke="#ec6f00" strokeWidth="3" />
      </svg>
    ),
    skills: [
      { name: "Agile & Scrum", level: 90 },
      { name: "Kanban", level: 85 },
      { name: "Stakeholder Communication", level: 88 },
      { name: "Risk Management", level: 86 },
      { name: "Jira", level: 87 },
      { name: "ClickUp", level: 84 },
      { name: "Project Documentation", level: 82 },
    ],
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
    skills: [
      { name: "React", level: 92 },
      { name: "Vite", level: 86 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 84 },
      { name: "REST APIs", level: 88 },
      { name: "Firebase", level: 87 },
    ],
  },
  {
    name: "Office & Business Tools",
    icon: (
      <svg width="55" height="55" viewBox="0 0 100 100" fill="none">
        <rect x="20" y="25" width="60" height="50" rx="6" stroke="#ec6f00" strokeWidth="3" />
        <path d="M30 35 H70 M30 50 H70 M30 65 H70" stroke="#ec6f00" strokeWidth="3" />
      </svg>
    ),
    skills: [
      { name: "Microsoft Office (Excel, Word, PowerPoint)", level: 92 },
      { name: "Google Workspace", level: 88 },
      { name: "Email Etiquette", level: 86 },
      { name: "Calendar Scheduling", level: 84 },
      { name: "Documentation", level: 88 },
      { name: "Remote Collaboration", level: 86 },
    ],
  },
];

/* -------------------- COMPONENTS -------------------- */
const SkillBar = ({ level }) => (
  <div className="w-[75%] mx-auto bg-gray-800 h-2 rounded-full mt-1 overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${level * 0.75}%` }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="h-2 bg-[#ec6f00] rounded-full"
    />
  </div>
);

const CircuitBoard = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h, nodes;
    const spacing = 80;
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      nodes = [];
      for (let x = 0; x < w; x += spacing)
        for (let y = 0; y < h; y += spacing)
          nodes.push({ x, y, offset: Math.random() * Math.PI * 2 });
    };
    const draw = (time) => {
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, w, h);
      ctx.lineWidth = 1;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#ec6f00";
      nodes.forEach((n) => {
        const pulse = Math.sin(time * 0.002 + n.offset) * 0.5 + 0.5;
        const glow = 0.3 + pulse * 0.7;
        ctx.strokeStyle = `rgba(236,111,0,${glow})`;
        if (n.x + spacing < w) {
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(n.x + spacing, n.y);
          ctx.stroke();
        }
        if (n.y + spacing < h) {
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(n.x, n.y + spacing);
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5 + pulse * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(236,111,0,${glow})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };
    resize();
    window.addEventListener("resize", resize);
    requestAnimationFrame(draw);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

const CategoryCard = ({ category, index }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
    <Tilt options={{ max: 25, scale: 1.05, speed: 400 }}>
      <div
        className="relative group 
        w-[98%] sm:w-[460px] md:w-[500px] lg:w-[520px]
        min-h-[460px] sm:min-h-[520px] md:min-h-[560px] 
        px-7 sm:px-8 py-8 sm:py-10 clip-octagon 
        bg-[#0b0d10]/88 border border-[#ec6f00]/60 
        shadow-[0_0_25px_#ec6f00] hover:shadow-[0_0_55px_#ec6f00]/80
        hover:border-[#ff8c1a] backdrop-blur-lg 
        flex flex-col items-center justify-start transition-all duration-500"
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-7 sm:mb-9">
          {category.icon}
          <h3 className="text-[17px] sm:text-[20px] md:text-[22px] lg:text-[24px] mt-4 font-semibold text-white text-center leading-tight">
            {category.name}
          </h3>
        </div>

        {/* Skills */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full pb-4 sm:pb-6">
          {category.skills.map((s, i) => (
            <div key={i}>
              <div className="flex justify-between text-[12px] sm:text-[13px] md:text-[14px] text-white/90 px-5 sm:px-6">
                <span>{s.name}</span>
                <span>{s.level}%</span>
              </div>
              <SkillBar level={s.level} />
            </div>
          ))}
        </div>
      </div>
    </Tilt>
  </motion.div>
);



/* -------------------- MAIN -------------------- */
const Tech = () => (
  <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505]">
    <CircuitBoard />
    <motion.div variants={textVariant()} className="text-center z-10 mb-14 mt-28 px-4">
      <p className={`${styles.sectionSubText} text-white/80`}>Tools & Technologies</p>
      <h2 className={`${styles.sectionHeadText} text-[#ec6f00]`}>Technical Skills.</h2>
    </motion.div>

    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-14 sm:gap-y-20 px-5 sm:px-10 pb-28 justify-items-center">
      {categories.map((cat, i) => (
        <CategoryCard key={i} category={cat} index={i} />
      ))}
    </div>

    <style>
      {`
        .clip-octagon {
          clip-path: polygon(
            18% 0%, 82% 0%, 
            100% 18%, 100% 82%, 
            82% 100%, 18% 100%, 
            0% 82%, 0% 18%
          );
        }
      `}
    </style>
  </div>
);

export default SectionWrapper(Tech, "tech");
