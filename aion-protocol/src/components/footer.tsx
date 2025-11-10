import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative py-16 px-4 bg-white overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-100/40 to-violet-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-emerald-100/35 to-orange-100/25 rounded-full blur-3xl"></div>
      </div>

      {/* Ultra-subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: `linear-gradient(180deg, 
            rgba(31, 31, 31, 0.08) 0%,
            rgba(31, 31, 31, 0.04) 25%,
            rgba(31, 31, 31, 0.02) 50%,
            rgba(255, 255, 255, 0.3) 75%,
            rgba(255, 255, 255, 0.8) 100%
          )`,
        }}
      ></div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Modern section indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-300/60"></div>
            <div className="w-1 h-1 rounded-full bg-emerald-300/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-violet-300/60"></div>
          </div>
        </motion.div>

        {/* Credits */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-sm text-gray-500 leading-relaxed">
            Made with <span className="text-red-400 mx-1">❤️</span> by{" "}
            <a 
              href="https://conomyhq.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              conomyhq
            </a>
          </p>
          
          <p className="text-xs text-gray-400">
            © {currentYear} CononomyHQ. All rights reserved.
          </p>
        </motion.div>

        {/* Floating accent elements */}
        <motion.div
          className="absolute -top-4 -right-4 w-3 h-3 bg-blue-300/30 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute -bottom-6 -left-6 w-2 h-2 bg-emerald-300/40 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            delay: 2
          }}
        />
      </div>
    </motion.footer>
  );
}