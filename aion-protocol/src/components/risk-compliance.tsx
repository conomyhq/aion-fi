import { Card } from "./ui/card";
import { motion } from "motion/react";
import Illustrations from "../imports/Illustrations-8-341";

export function RiskCompliance() {
  return (
    <section id="risk" className="py-[clamp(4rem,8vw,7.5rem)] px-4 bg-white relative overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-100/30 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-violet-100/25 to-transparent"></div>
        <motion.div 
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-100/40 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
      
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main content with striking typography */}
          <div className="space-y-8">
            {/* Subtle section indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-emerald-200"></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-emerald-200"></div>
              </div>
            </motion.div>
            
            {/* Main message with animated underline */}
            <div className="relative">
              <motion.div 
                className="text-2xl md:text-3xl text-gray-900 leading-relaxed max-w-3xl mx-auto font-medium"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Credit risk is <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent font-semibold">minimal</span>
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 rounded-full block"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                  />
                  {/* Subtle glow effect */}
                  <motion.span 
                    className="absolute -inset-1 bg-gradient-to-r from-emerald-200/20 via-blue-200/20 to-violet-200/20 rounded-lg blur-sm opacity-0 block"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    viewport={{ once: true }}
                  />
                </span> since funds are collected directly from merchants.
              </motion.div>
            </div>
            
            {/* Compliance statement with elegant styling */}
            <motion.div
              className="relative"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Fully aligned with Chile's Fintech Law (AML/KYC enforced).
              </p>
              
              {/* Decorative accent below */}
              <motion.div 
                className="flex justify-center mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-px bg-gradient-to-r from-orange-300 to-emerald-300 opacity-60"></div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}