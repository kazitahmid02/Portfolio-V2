import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const lastScrollY = useRef(0);
  const navRefs = useRef({});

  // Handle scroll behavior (blur & hide)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 100);
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate indicator when active link changes
  useEffect(() => {
    if (navRefs.current[active]) {
      const el = navRefs.current[active];
      const rect = el.getBoundingClientRect();
      setIndicatorStyle({
        left: rect.left + window.scrollX,
        width: rect.width,
        opacity: 1,
      });
    } else {
      setIndicatorStyle({ opacity: 0 });
    }
  }, [active]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "backdrop-blur-2xl bg-transparent border-b border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.05)]"
          : "backdrop-blur-lg bg-transparent"
      } ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
      style={{
        WebkitBackdropFilter: "blur(20px)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto relative">
        {/* --- LOGO SECTION --- */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative">
            <img
              src="https://res.cloudinary.com/drvkbxl0q/image/upload/v1759183525/Headshot_nopxvq.jpg"
              alt="profile"
              className="w-12 h-12 object-cover rounded-full border-2 border-[#ec6f00] shadow-[0_4px_12px_rgba(236,111,0,0.5)] hover:shadow-[0_6px_20px_rgba(236,111,0,0.7)] transition-shadow duration-300 transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ec6f00]/20 to-transparent rounded-full opacity-50 animate-pulse"></div>
          </div>
          <p className="text-white text-[18px] font-bold cursor-pointer flex items-center">
            Tahmid Kazi&nbsp;
            <span className="sm:block hidden text-[#ec6f00]">| IT Professional</span>
          </p>
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <div className="relative hidden sm:flex flex-row items-center gap-8 list-none">
          {navLinks.map((nav) => (
            <div
              key={nav.id}
              ref={(el) => (navRefs.current[nav.title] = el)}
              className={`relative font-medium cursor-pointer text-[18px] transition-all duration-300 ${
                active === nav.title
                  ? "text-[#ec6f00]"
                  : "text-white hover:text-[#ff8c1a]"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </div>
          ))}

          {/* --- ORANGE INDICATOR --- */}
          <span
            className="absolute bottom-[-4px] h-[3px] bg-[#ec6f00] rounded-full shadow-[0_0_10px_#ec6f00] transition-all duration-500 ease-in-out"
            style={{
              ...indicatorStyle,
              position: "absolute",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          ></span>
        </div>

        {/* --- MOBILE NAVIGATION --- */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-16 right-4 mx-4 my-2 min-w-[160px] z-10 rounded-xl 
            bg-[#0b0d10]/95 border border-[#ec6f00]/20 shadow-[0_0_15px_#ec6f00]/40 backdrop-blur-xl`}
          >
            <div className="flex flex-col gap-4 w-full">
              {navLinks.map((nav) => (
                <div
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-[#ec6f00]" : "text-white"
                  } hover:text-[#ff8c1a] transition-colors duration-300`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
