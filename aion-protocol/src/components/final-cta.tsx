import { Button } from "./ui/button";
import { motion } from "motion/react";
import Illustrations from "../imports/Illustrations-10-71";

export function FinalCTA() {
  return (
    <section className="py-[clamp(6rem,12vw,10rem)] px-4 bg-gray-900 relative overflow-hidden">
      {/* Modern subtle background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-emerald-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-violet-400/8 to-orange-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Ultra-subtle grid pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, transparent 20%, transparent 80%, rgba(255,255,255,0.02) 100%),
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)
          `,
          backgroundSize: "100% 100%, 64px 64px",
        }}
      ></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Modern section indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-400/60"></div>
            <div className="w-1 h-1 rounded-full bg-blue-400/50"></div>
            <div className="w-2 h-2 rounded-full bg-violet-400/60"></div>
          </div>
        </motion.div>

        {/* Simplified, powerful headline */}
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[clamp(2.5rem,6vw,4rem)] font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Ready to earn{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            23.28% APY
          </span>
          ?
        </motion.h2>

        {/* Compelling subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Join the waitlist for exclusive early access to our receivables protocol.
        </motion.p>
        
        {/* Enhanced CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <Button 
            size="lg" 
            onClick={() => {
              window.open("https://twitter.com/intent/follow?screen_name=aion_fi", "_blank");
            }}
            className="h-14 px-12 text-lg bg-white text-[#1f1f1f] hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 rounded-xl font-medium group relative overflow-hidden"
          >
            <span className="relative z-10">Join Waitlist</span>
            {/* Subtle hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/20 via-blue-50/20 to-violet-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-400/60 rounded-full"></div>
              <span>Real-world backed</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400/60 rounded-full"></div>
              <span>Regulatory compliant</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-violet-400/60 rounded-full"></div>
              <span>Limited early access</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Modern accent element */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === 0 ? 'bg-emerald-400/40' :
                  i === 1 ? 'bg-blue-400/40' :
                  'bg-violet-400/40'
                }`}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: i * 0.4
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}