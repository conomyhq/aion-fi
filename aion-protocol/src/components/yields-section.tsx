import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function YieldsSection() {
  return (
    <section className="py-[clamp(3rem,6vw,5rem)] px-4 relative overflow-hidden">
      {/* Minimal background elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-300/15 to-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-300/10 to-orange-300/10 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle floating dots */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/5 w-1.5 h-1.5 bg-emerald-400/20 rounded-full"
          animate={{ y: [-8, 8, -8], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 bg-violet-400/20 rounded-full"
          animate={{
            y: [10, -10, 10],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-10"
        >
          {/* Main APY Display */}
          <motion.div
            className="relative"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-[clamp(4rem,10vw,6rem)] font-bold leading-none">
              <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                Up to 23.28%
              </span>
            </div>

            <motion.div
              className="text-[clamp(1.2rem,2.5vw,1.5rem)] text-gray-600 mt-3"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Annual Percentage Yield
            </motion.div>

            {/* Simple line */}
            <motion.div
              className="mx-auto mt-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "160px" }}
              transition={{ duration: 1.5, delay: 0.6 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Clean description */}
          <motion.div
            className="space-y-6 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-xl text-gray-700">
              With standard lockup terms
            </div>

            {/* Yield info */}
            <div className="text-gray-600 leading-relaxed">
              <div className="mb-2">
                Yields generated from merchant settlement fees
              </div>
              <div className="flex items-center justify-center gap-2">
                <motion.div
                  className="w-1.5 h-1.5 bg-orange-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent font-semibold">
                  0.5–1.5% per cycle
                </span>
              </div>
            </div>
          </motion.div>

          {/* Join Waitlist CTA */}
          <motion.div
            className="pt-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Button
                size="lg"
                onClick={() => {
                  window.open("https://twitter.com/intent/follow?screen_name=aion_fi", "_blank");
                }}
                className="h-12 px-8 bg-[#1f1f1f] hover:bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-gray-200/10"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}