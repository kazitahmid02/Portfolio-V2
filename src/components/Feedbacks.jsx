import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedbackCard = ({ testimonial, name, designation, company }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", 0.3, 0.75)}
      whileHover={{ scale: 1.02 }}
      className="relative bg-[#0b0d10]/85 border border-[#ec6f00]/60 
                 shadow-[0_0_25px_#ec6f00] hover:shadow-[0_0_50px_#ec6f00]/90
                 hover:border-[#ff8c1a] backdrop-blur-md 
                 transition-all duration-500 ease-in-out
                 w-[90%] sm:w-[500px] md:w-[600px] lg:w-[700px]
                 px-6 sm:px-10 py-8 sm:py-12 md:py-14
                 mx-auto flex flex-col justify-center items-center sm:items-center text-left sm:text-center
                 rounded-[25px] overflow-visible"
    >
      {/* Quote mark */}
      <p className="text-[#ec6f00] font-black text-[32px] sm:text-[42px] leading-none mb-6 sm:mb-8 self-center sm:self-auto">
        “
      </p>

      {/* Testimonial text */}
      <p
        className="text-white/85 italic tracking-wide 
                   text-[12px] sm:text-[15px] md:text-[17px]
                   leading-relaxed sm:leading-relaxed 
                   mb-6 sm:mb-10 w-full max-w-[90%] sm:max-w-md text-left sm:text-center"
      >
        {testimonial}
      </p>

      {/* Author info */}
      <div className="flex flex-col items-start sm:items-center gap-1 sm:gap-2 mt-6 sm:mt-8">
        <p className="yellow-gradient font-semibold text-[13px] sm:text-[16px]">
          {name}
        </p>
        <p className="yellow-gradient text-[10px] sm:text-[13px] opacity-90">
          {designation} — {company}
        </p>
      </div>
    </motion.div>
  );
};



/* -------------------- PARTICLE BACKGROUND -------------------- */
const ParticleNetwork = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h;
    let particles = [];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const count = window.innerWidth < 640 ? 40 : 70;
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: 1 + Math.random() * 1.5,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(5,5,5,1)";
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "#ec6f00";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ec6f00";
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(236,111,0,${1 - dist / 120})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);
  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
  );
};

/* -------------------- MAIN -------------------- */
const Feedbacks = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 1500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505] py-24 sm:py-32 px-5 sm:px-10">
      <ParticleNetwork />

      {/* Header */}
      <motion.div variants={textVariant()} className="z-10 mb-10 sm:mb-16 mt-20 sm:mt-28 text-center">
        <p className={`${styles.sectionSubText} text-white/80`}>
          What others say
        </p>
        <h2 className={`${styles.sectionHeadText} text-[#ec6f00]`}>
          Testimonials.
        </h2>
      </motion.div>

      {/* Carousel */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial) => (
            <FeedbackCard key={testimonial.name} {...testimonial} />
          ))}
        </Slider>
      </div>

      <style>
        {`
          .yellow-gradient {
            background: linear-gradient(90deg, #ffd700, #ffae00);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .slick-dots li button:before {
            color: #ec6f00 !important;
            font-size: 12px;
            transition: all 0.3s ease;
          }
          .slick-dots li.slick-active button:before {
            color: #ffae00 !important;
            opacity: 1;
            transform: scale(1.3);
          }
        `}
      </style>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");
