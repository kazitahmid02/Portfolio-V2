import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../style.js";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion.js";

const achievements = [
  // 🧾 CERTIFICATIONS
  {
    title: "Google Data Analytics Specialization",
    institution: "Coursera",
    issued: "Issued Apr 2025",
    id: "WXZ2KYBWOLES",
    link: "https://www.coursera.org/account/accomplishments/specialization/WXZ2KYBWOLES",
    logo: "https://res.cloudinary.com/drvkbxl0q/image/upload/v1759184476/7123025_logo_google_g_icon_s88nso.png",
  },
  {
    title: "Google IT Support",
    institution: "Coursera",
    issued: "Issued Apr 2025",
    id: "2763XUOYN6S9",
    link: "https://www.coursera.org/account/accomplishments/specialization/2763XUOYN6S9",
    logo: "https://res.cloudinary.com/drvkbxl0q/image/upload/v1759184476/7123025_logo_google_g_icon_s88nso.png",
  },
  {
    title: "Google Project Management",
    institution: "Coursera",
    issued: "Issued Apr 2025",
    id: "HKFSHV9XP1P5",
    link: "https://www.coursera.org/account/accomplishments/specialization/HKFSHV9XP1P5",
    logo: "https://res.cloudinary.com/drvkbxl0q/image/upload/v1759184476/7123025_logo_google_g_icon_s88nso.png",
  },
  {
    title: "Google UX Design",
    institution: "Coursera",
    issued: "Issued Apr 2025",
    id: "4JW9MLEEY0MB",
    link: "https://www.coursera.org/account/accomplishments/specialization/4JW9MLEEY0MB",
    logo: "https://res.cloudinary.com/drvkbxl0q/image/upload/v1759184476/7123025_logo_google_g_icon_s88nso.png",
  },
  {
    title: "Google Cybersecurity Specialization",
    institution: "Coursera",
    issued: "Issued Nov 2024",
    id: "K99FECFZCAF2",
    link: "https://www.coursera.org/account/accomplishments/specialization/K99FECFZCAF2",
    logo: "https://res.cloudinary.com/drvkbxl0q/image/upload/v1759184476/7123025_logo_google_g_icon_s88nso.png",
  },
  {
    title: "Certificate of Quality Assurance Mastery",
    institution: "Careerist",
    issued: "Issued Oct 2024",
    link: "https://careerist.com/",
    logo: "https://res.cloudinary.com/drvkbxl0q/image/upload/v1760250820/logo-careerist-black_ks6e7i.svg",
  },
  // 🎓 EDUCATION
  {
    title: "Bachelor of Science in Information Systems",
    institution: "CUNY School of Professional Studies",
    issued: "Expected Graduation: June 2026",
    link: "https://sps.cuny.edu/academics/undergraduate-programs/bs-information-systems",
    logo: "https://res.cloudinary.com/drvkbxl0q/image/upload/v1760250404/CUNY_yfrfjm.png",
  },
  {
    title: "Associate of Science in Business Administration",
    institution: "CUNY Borough of Manhattan Community College",
    issued: "Graduated: 2023",
    link: "https://www.bmcc.cuny.edu/academics/departments/business/associate-degree-programs/business-administration/",
    logo: "https://res.cloudinary.com/drvkbxl0q/image/upload/v1760250404/CUNY_yfrfjm.png",
  },
];

const CertCard = ({ index, title, institution, issued, id, link, logo }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.25, 0.75)}
      className="w-[90%] sm:w-[320px] mx-auto"
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.02}
        transitionSpeed={450}
        className="relative w-full h-auto group"
      >
        <div
          className="clip-rect-oct bg-[#0b0d10]/85 border border-[#ec6f00]/30 
                     shadow-[0_0_12px_#ec6f00,inset_0_0_8px_#ec6f00]
                     hover:shadow-[0_0_25px_#ec6f00,inset_0_0_15px_#ec6f00]
                     backdrop-blur-md flex flex-col justify-center items-center text-center 
                     px-4 sm:px-6 py-6 sm:py-8 transition-all duration-500"
        >
          {/* Logo */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#1a1a1a] rounded-full flex justify-center items-center shadow-[0_0_10px_#ec6f00] mb-3 sm:mb-4">
            <img
              src={logo}
              alt={`${institution} Logo`}
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="text-white text-[14px] sm:text-[18px] font-semibold leading-snug px-2 sm:px-3 mb-1 sm:mb-2">
            {title}
          </h3>

          {/* Institution */}
          <p className="text-white/70 text-[12px] sm:text-[13px] leading-tight mb-1">
            {institution}
          </p>

          {/* Issued & ID */}
          <div className="text-white/70 text-[11px] sm:text-[13px] leading-tight mb-2 sm:mb-3">
            <p>{issued}</p>
            {id && (
              <p className="text-white/50 text-[10px] sm:text-[12px] mt-1">
                Credential ID: {id}
              </p>
            )}
          </div>

          {/* Button */}
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="mt-2 sm:mt-3 px-4 py-1.5 sm:px-5 sm:py-2 rounded-md bg-[#ec6f00] 
                       text-white text-[11px] sm:text-[13px] font-medium 
                       shadow-[0_0_8px_#ec6f00] hover:shadow-[0_0_20px_#ec6f00] hover:bg-[#ff8c1a] 
                       transition-all"
          >
            View Credential
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#0a0a0a] via-[#111111] to-[#ec6f00]/10 opacity-90" />

      {/* Header */}
      <motion.div
        variants={textVariant()}
        className="text-center z-10 mb-10 sm:mb-16 mt-16 sm:mt-24"
      >
        <h2
          className={`${styles.sectionHeadText} text-[#ec6f00] text-[24px] sm:text-[40px]`}
        >
          Certifications & Education.
        </h2>
      </motion.div>

      {/* Cards Layout */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-6 sm:gap-12 px-4 sm:px-8 pb-16 sm:pb-24 max-w-[1300px]">
        {achievements.map((item, index) => (
          <CertCard key={index} index={index} {...item} />
        ))}
      </div>

      {/* Octagonal Shape */}
      <style>
        {`
          .clip-rect-oct {
            clip-path: polygon(
              8% 0%, 92% 0%, 
              100% 8%, 100% 92%, 
              92% 100%, 8% 100%, 
              0% 92%, 0% 8%
            );
          }
        `}
      </style>
    </div>
  );
};

export default SectionWrapper(About, "about");
