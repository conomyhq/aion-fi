import React from "react";
import { Button } from "./ui/button";
import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import NavbarLogoDesktop from "./navbar-logo-desktop";
import NavbarLogoMobile from "./navbar-logo-mobile";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 40,
    restDelta: 0.001,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 30);
      
      // On mobile, hide navbar until hero section is passed
      if (window.innerWidth < 768) {
        const heroHeight = window.innerHeight; // Assuming hero is full viewport height
        setShowNavbar(scrollPosition > heroHeight - 100); // Show 100px before hero ends
      } else {
        setShowNavbar(true); // Always show on desktop
      }
    };

    checkMobile();
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ 
        y: showNavbar ? 0 : -100, 
        opacity: showNavbar ? 1 : 0 
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
      style={{ 
        pointerEvents: showNavbar ? 'auto' : 'none'
      }}
    >
      {/* Floating container */}
      <motion.div
        className={`relative max-w-6xl mx-auto transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border border-gray-100/60 shadow-lg shadow-gray-900/5 rounded-2xl"
            : "bg-white/80 backdrop-blur-lg border border-gray-50/40 shadow-sm shadow-gray-900/2 rounded-xl"
        }`}
        animate={{
          scale: isScrolled ? 0.98 : 1,
          y: isScrolled ? 4 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Ultra-smooth progress bar */}
        <motion.div
          className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-emerald-300/70 via-blue-300/70 to-violet-300/70 origin-left rounded-full overflow-hidden"
          style={{ scaleX }}
        >
          {/* Animated glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-400/40 via-blue-400/40 to-violet-400/40 blur-sm"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Subtle top glow */}
        <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

        <div className="px-6 py-5 flex items-center justify-between min-h-[60px]">
          {/* Logo with enhanced hover effect */}
          <motion.div
            className="flex items-center justify-center"
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Desktop Logo */}
            <div className="hidden md:flex h-6 w-auto items-center justify-center">
              <NavbarLogoDesktop />
            </div>
            
            {/* Mobile Logo - aligned with button */}
            <div className="flex md:hidden h-8 w-auto items-center justify-center">
              <NavbarLogoMobile />
            </div>
          </motion.div>

          {/* Enhanced navigation links */}
          <div className="hidden md:flex items-center space-x-10">
            {[
              { label: "Problem", id: "problem" },
              { label: "Market", id: "opportunity" },
              { label: "How it Works", id: "how-it-works" },
              { label: "Benefits", id: "benefits" },
              { label: "Docs", id: "docs" },
            ].map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => item.id === "docs" ? window.open("https://docs.aion.fi/", "_blank") : scrollToSection(item.id)}
                className="relative text-sm text-gray-600 hover:text-gray-900 transition-all duration-300 group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                {/* Modern gradient underline */}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400/70 via-blue-400/70 to-violet-400/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"
                  whileHover={{
                    boxShadow:
                      "0 0 8px rgba(59, 130, 246, 0.3)",
                  }}
                />
                {/* Subtle background glow on hover */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-50/50 via-blue-50/50 to-violet-50/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
              </motion.button>
            ))}
          </div>

          {/* Premium CTA button */}
          <motion.div
            className="flex items-center justify-center"
            whileHover={{ scale: 1.06, rotate: 1 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Button
              onClick={() => {
                window.open("https://twitter.com/intent/follow?screen_name=aion_fi", "_blank");
              }}
              size="sm"
              className="h-10 px-8 text-sm bg-[#1f1f1f] hover:bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-gray-200/10"
            >
              <span className="relative z-10 font-medium">
                Join Waitlist
              </span>
              {/* Premium gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/15 via-blue-600/15 to-violet-600/15 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                initial={false}
              />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}