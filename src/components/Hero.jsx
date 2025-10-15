import { motion } from "framer-motion";
import { styles } from "../style.js";
import { ComputersCanvas } from "./canvas";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(2px)" },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 * i },
  }),
};

const scrollCue = {
  animate: {
    y: [0, 10, 0],
    opacity: [0.6, 1, 0.6],
    transition: {
      y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
      opacity: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
    },
  },
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-10">
        <ComputersCanvas />
      </div>

      {/* Content */}
      <div className="absolute inset-0 top-[110px] sm:top-[120px] flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start gap-6 sm:gap-10 px-5 sm:px-16 max-w-7xl mx-auto z-20 pointer-events-none">

        {/* Orange Line */}
        <div className="hidden sm:flex flex-col justify-start items-center mt-4 pointer-events-auto">
          <div className="w-4 h-4 rounded-full bg-[#ec6f00]" />
          <div className="w-1 sm:h-72 h-40 bg-gradient-to-b from-[#ec6f00] to-transparent" />
        </div>

        {/* Main Card */}
<motion.div
  className="relative clip-rect bg-[#0b0d10]/90 border border-[#ec6f00]/70 
             shadow-[0_0_25px_#ec6f00] hover:shadow-[0_0_50px_#ec6f00]
             backdrop-blur-md transition-all duration-500
             p-8 sm:p-10 md:p-12 pb-16 sm:pb-20 pointer-events-auto
             flex flex-col items-center text-center 
             w-[90%] sm:w-[540px] md:w-[1200px] max-w-[95vw]"
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
>

          {/* Heading */}
          <motion.h1
            className={`${styles.heroHeadText} text-white leading-tight 
                       text-[24px] xs:text-[26px] sm:text-[34px] md:text-[44px] lg:text-[52px]
                       drop-shadow-[0_0_20px_rgba(236,111,0,0.4)]`}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Hi, I&apos;m <span className="text-[#ec6f00]">Kazi</span>
          </motion.h1>

          {/* Summary */}
          <motion.p
            className="mt-3 text-white/90 text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] 
                       leading-relaxed max-w-[90%] sm:max-w-2xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Junior IT Specialist skilled in IT support, web development, testing, and data analytics.
            Certified in Google IT Support, Data Analytics, Project Management, UX Design, and Cybersecurity.
          </motion.p>

          

          {/* Buttons with icons */}
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <a
              href="mailto:tahmidkazi.jobs@gmail.com"
              className="flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg bg-[#ec6f00] text-white font-medium 
                         shadow-[0_0_20px_rgba(236,111,0,0.4)] hover:shadow-[0_0_30px_rgba(236,111,0,0.7)] 
                         hover:scale-105 transform transition text-sm sm:text-base"
            >
              <MdEmail className="text-lg sm:text-xl" /> Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/tahmidkazi25/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg bg-[#ec6f00] text-white font-medium 
                         shadow-[0_0_20px_rgba(236,111,0,0.4)] hover:shadow-[0_0_30px_rgba(236,111,0,0.7)] 
                         hover:scale-105 transform transition text-sm sm:text-base"
            >
              <FaLinkedin className="text-lg sm:text-xl" /> LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

     {/* Scroll Cue (hidden on small screens) */}
<motion.div
  className="hidden sm:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none"
  variants={scrollCue}
  animate="animate"
>
  <div
    className="bg-[#0b0d10] border border-[#ec6f00]/40 flex items-center justify-center"
    style={{
      clipPath:
        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      width: "56px",
      height: "64px",
      boxShadow:
        "0 0 20px rgba(236,111,0,0.3), inset 0 0 15px rgba(236,111,0,0.2)",
    }}
  >
    <svg
      className="w-8 h-8 text-[#ec6f00]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  </div>
</motion.div>



      {/* Octagon Clip Shape */}
      <style>
  {`
    .clip-rect {
      clip-path: polygon(
        4% 0%, 96% 0%, 
        100% 6%, 100% 94%, 
        96% 100%, 4% 100%, 
        0% 94%, 0% 6%
      );
    }
  `}
</style>
    </section>
  );
};

export default Hero;
