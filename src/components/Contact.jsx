import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const calendlyLink = "https://calendly.com/tahmidkazi-jobs/30min"; // 🔁 replace with your actual Calendly URL

  return (
    <div
      className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden relative"
    >
      {/* 🟧 Calendly Card */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        whileHover={{ scale: 1.0 }}
        className="relative clip-octo bg-[#0b0d10]/85 border border-[#ec6f00]/70 
                   shadow-[0_0_25px_#ec6f00] hover:shadow-[0_0_40px_#ec6f00]/80
                   backdrop-blur-md transition-all duration-500 
                   p-10 sm:p-12 w-full flex-[0.75] flex flex-col justify-center items-center"
      >
        
        <h2 className={`${styles.sectionHeadText} text-[#ec6f00] text-center mb-2`}>
          Let's Connect!
        </h2>

        {/* Calendly Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="https://res.cloudinary.com/drvkbxl0q/image/upload/v1760397625/Calendly_idA4lPSDzF_1_fpqvgj.png"
            alt="Calendly Logo"
            className="w-40 h-40 object-contain drop-shadow-[0_0_25px_#ec6f00]"
          />
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => window.open(calendlyLink, "_blank")}
          className="py-4 px-10 bg-[#ec6f00] text-white font-bold text-lg rounded-lg 
                     shadow-[0_0_25px_#ec6f00] hover:shadow-[0_0_45px_#ec6f00]
                     transition-all duration-300"
        >
          Book via Calendly
        </motion.button>

        {/* Optional small text */}
        {/* Optional small text */}
<p
  className="relative clip-octo bg-[#0b0d10]/85 border border-[#ec6f00]/70 
           shadow-[0_0_25px_#ec6f00] hover:shadow-[0_0_40px_#ec6f00]/80
           backdrop-blur-md transition-all duration-500 
           p-10 sm:p-12 w-full flex-[0.75] flex flex-col justify-center items-center">
  Click above to schedule a 1-on-1 session with me directly through Calendly.
</p>

      </motion.div>

      {/* 🌍 Earth Canvas (Right Side) */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      {/* 🟧 Styles */}
      <style>
        {`
          .clip-octo {
            clip-path: polygon(
              30% 0%, 70% 0%, 
              100% 30%, 100% 70%, 
              70% 100%, 30% 100%, 
              0% 70%, 0% 30%
            );
          }

          .clip-octo:hover {
            border-color: #ec6f00;
            box-shadow: 0 0 30px rgba(236, 111, 0, 0.7),
                        inset 0 0 10px rgba(236, 111, 0, 0.5);
          }
        `}
      </style>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
