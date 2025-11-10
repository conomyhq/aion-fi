import { Card } from "./ui/card";
import { motion } from "motion/react";

export function MarketOpportunity() {
  const stats = [
    {
      number: "700k+",
      label: "SMEs in Chile"
    },
    {
      number: "31%",
      label: "of SME sales already digital"
    },
    {
      number: "Billions",
      label: "in yearly transactions deferred"
    }
  ];

  return (
    <section id="opportunity" className="py-[clamp(5rem,10vw,8rem)] px-4 bg-gradient-to-b from-gray-50/50 via-white to-white relative overflow-hidden">
      {/* Modern subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-emerald-100/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-gradient-to-br from-violet-100/15 to-orange-100/10 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Small visual identifier */}
          <motion.div 
            className="inline-flex items-center gap-2 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-300/60"></div>
            <div className="w-1 h-1 rounded-full bg-blue-300/60"></div>
            <div className="w-2 h-2 rounded-full bg-violet-300/60"></div>
          </motion.div>
          
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900">
            Market Opportunity
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Modern number with gradient */}
              <motion.div 
                className="relative mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-[clamp(2.5rem,6vw,4rem)] font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                
                {/* Subtle accent line */}
                <motion.div
                  className={`h-px mx-auto mt-3 bg-gradient-to-r ${
                    index === 0 ? 'from-transparent via-emerald-300/60 to-transparent' :
                    index === 1 ? 'from-transparent via-blue-300/60 to-transparent' :
                    'from-transparent via-violet-300/60 to-transparent'
                  }`}
                  initial={{ width: "0%" }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                  viewport={{ once: true }}
                />

                {/* Floating micro element */}
                <motion.div
                  className={`absolute -top-2 -right-2 w-2 h-2 rounded-full ${
                    index === 0 ? 'bg-emerald-300/40' :
                    index === 1 ? 'bg-blue-300/40' :
                    'bg-violet-300/40'
                  }`}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.8
                  }}
                />
              </motion.div>

              {/* Label with modern styling */}
              <motion.div 
                className="text-sm font-medium text-gray-500 uppercase tracking-wider"
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.div>

              {/* Subtle background glow on hover */}
              <div className="absolute -inset-8 bg-gradient-to-br from-white/50 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Modern accent element */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  i === 0 ? 'bg-emerald-300/60' :
                  i === 1 ? 'bg-blue-300/60' :
                  'bg-violet-300/60'
                }`}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}