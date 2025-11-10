import { motion } from "motion/react";
import Illustrations from "../imports/Illustrations-10-119";

export function ProblemSection() {
  const problems = [
    "Merchants wait T+2 or up to 12 months in installments.",
    "Banks charge 2–5% extra for early settlement.",
    "SMEs face recurring cash flow gaps."
  ];

  return (
    <section id="problem" className="py-[clamp(4rem,8vw,7.5rem)] px-4 relative overflow-hidden">
      {/* Modern subtle background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/6 w-48 h-48 bg-gradient-to-br from-blue-100/30 to-violet-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/8 w-56 h-56 bg-gradient-to-br from-emerald-100/20 to-orange-100/15 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle dot pattern - REMOVED for cleaner look */}
      {/* <div 
        className="absolute inset-0 opacity-[0.008]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      ></div> */}

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Modern section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Subtle identifier dots */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-300/60"></div>
                <div className="w-1 h-1 rounded-full bg-violet-300/50"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-300/60"></div>
              </div>
              
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900">
                The Problem
              </h2>
            </motion.div>
            
            {/* Modern problem list */}
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div 
                  key={index} 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Modern indicator */}
                  <div className="flex items-start gap-5">
                    <motion.div 
                      className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${
                        index === 0 ? 'bg-blue-400/90' :
                        index === 1 ? 'bg-emerald-400/90' :
                        'bg-violet-400/90'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    />
                    
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {problem}
                      </p>
                      
                      {/* Subtle accent line */}
                      <motion.div
                        className={`h-px mt-4 bg-gradient-to-r ${
                          index === 0 ? 'from-blue-200/40 via-blue-300/20 to-transparent' :
                          index === 1 ? 'from-emerald-200/40 via-emerald-300/20 to-transparent' :
                          'from-violet-200/40 via-violet-300/20 to-transparent'
                        }`}
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>

                  {/* Hover background glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-white/60 via-gray-50/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Visual illustration with modern treatment */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Modern illustration container */}
              <motion.div 
                className="w-64 h-64 relative"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {/* Main illustration with enhanced opacity */}
                <div className="relative z-10 w-full h-full flex items-center justify-center opacity-80">
                  <Illustrations />
                </div>

                {/* Floating accent elements with enhanced colors */}
                <motion.div
                  className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400/60 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: 0.5
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-3 -left-3 w-2 h-2 bg-emerald-400/60 rounded-full"
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 0.9, 0.5]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: 1.2
                  }}
                />
              </motion.div>
              
              {/* Modern subtle grid behind illustration */}
              <div 
                className="absolute inset-0 opacity-[0.02] rounded-full"
                style={{
                  backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%), 
                                   linear-gradient(-45deg, rgba(0,0,0,0.1) 25%, transparent 25%)`,
                  backgroundSize: "8px 8px",
                }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}