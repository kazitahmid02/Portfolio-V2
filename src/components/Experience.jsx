import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

/* -------------------- EXPERIENCE CARD -------------------- */
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        border: "none",
        boxShadow: "none",
        padding: "0",
      }}
      contentArrowStyle={{ display: "none" }}
      date={experience.date}
      iconStyle={{
        background: "linear-gradient(135deg, #ec6f00, #ff8c1a)",
        boxShadow: "0 0 25px #ec6f00",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      {/* Responsive Rectangular Card */}
      <div
        className="clip-oct-rect bg-[#0b0d10]/85 border border-[#ec6f00]/60 
                   shadow-[0_0_25px_#ec6f00] hover:shadow-[0_0_50px_#ec6f00]
                   hover:border-[#ff8c1a] backdrop-blur-md 
                   transition-all duration-500 
                   p-5 sm:p-8 md:p-10 mx-auto w-[94%] sm:w-[85%] md:w-[80%] mt-8 sm:mt-6"
      >
        <h3 className="text-white text-[15px] sm:text-[18px] md:text-[22px] font-bold mb-1 text-center">
          {experience.title}
        </h3>
        <p className="text-[#ec6f00] text-[12px] sm:text-[14px] md:text-[16px] font-semibold text-center mb-3">
          {experience.company_name}
        </p>

        <ul className="list-disc ml-5 space-y-1 text-white/85 text-[11px] sm:text-[13px] md:text-[14px] leading-relaxed">
          {experience.points.map((point, index) => (
            <li key={`experience-point-${index}`} className="tracking-wide">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

/* -------------------- MAIN -------------------- */
const Experience = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      {/* 🔥 Animated Brighter Orange Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>

      {/* Header */}
      <motion.div
        variants={textVariant()}
        className="text-center z-10 mb-10 mt-28 px-4 sm:px-0"
      >
        <h2 className={`${styles.sectionHeadText} text-[#ec6f00]`}>
          Overview.
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[12px] sm:text-[13px] md:text-[15px] 
                   text-white/85 max-w-3xl leading-[22px] sm:leading-[25px] md:leading-[28px]
                   mx-auto text-center z-10 px-5 sm:px-0"
      >
        Information Systems professional with a strong foundation in IT support,
        software quality assurance, data analytics, and cybersecurity. Certified
        in Google IT Support, Data Analytics, Project Management, UX Design, and
        Cybersecurity, with practical experience testing applications,
        troubleshooting systems, and building responsive websites. Skilled in
        tools such as Jira, Selenium, Postman, and Git/GitHub, with knowledge of
        SQL, Python, and web technologies. Eager to apply a diverse skill set to
        support IT teams and deliver technology solutions. US Citizen.
      </motion.p>

      {/* Work Experience Header */}
      <motion.div
        variants={textVariant()}
        className="mt-14 sm:mt-16 text-center z-10 px-4 sm:px-0"
      >
        <h2 className={`${styles.sectionHeadText} text-[#ec6f00]`}>
          Work Experience.
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="mt-12 sm:mt-20 flex flex-col z-10 w-full">
        <VerticalTimeline
          lineColor="rgba(236,111,0,0.6)"
          className="px-2 sm:px-0"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>

      {/* ✨ Animated Orange Grid + Orb Styles */}
      <style>
        {`
          /* Clip for rectangular cards with angled corners */
          .clip-oct-rect {
            clip-path: polygon(
              6% 0%, 94% 0%, 
              100% 6%, 100% 94%, 
              94% 100%, 6% 100%, 
              0% 94%, 0% 6%
            );
          }

          /* Animated glowing grid */
          .cyber-grid {
            position: absolute;
            inset: 0;
            background: repeating-linear-gradient(
                to right,
                rgba(255,130,0,0.18) 0,
                rgba(255,130,0,0.18) 2px,
                transparent 2px,
                transparent 80px
              ),
              repeating-linear-gradient(
                to bottom,
                rgba(255,130,0,0.18) 0,
                rgba(255,130,0,0.18) 2px,
                transparent 2px,
                transparent 80px
              );
            background-size: 160px 160px;
            animation: gridmove 15s linear infinite;
            opacity: 0.55;
            filter: drop-shadow(0 0 20px rgba(255,130,0,0.4));
          }

          @keyframes gridmove {
            0% {
              transform: translateY(0) rotate(0deg);
            }
            100% {
              transform: translateY(-160px) rotate(0.3deg);
            }
          }

          /* Glowing Orbs */
          .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(160px);
            mix-blend-mode: screen;
            animation: float 25s ease-in-out infinite alternate;
          }

          .orb1 {
            width: 700px;
            height: 700px;
            top: -150px;
            left: -200px;
            background: radial-gradient(circle, rgba(255,150,0,0.6), transparent 70%);
            animation-delay: 0s;
          }

          .orb2 {
            width: 600px;
            height: 600px;
            bottom: -100px;
            right: -150px;
            background: radial-gradient(circle, rgba(255,120,0,0.55), transparent 70%);
            animation-delay: 2s;
          }

          .orb3 {
            width: 500px;
            height: 500px;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: radial-gradient(circle, rgba(255,160,40,0.5), transparent 70%);
            animation-delay: 4s;
          }

          @keyframes float {
            0% {
              transform: translate(0, 0) scale(1);
              opacity: 0.5;
            }
            50% {
              transform: translate(40px, -30px) scale(1.05);
              opacity: 0.7;
            }
            100% {
              transform: translate(-40px, 30px) scale(1);
              opacity: 0.5;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
