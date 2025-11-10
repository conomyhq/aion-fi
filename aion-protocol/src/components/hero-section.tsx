import { Button } from "./ui/button";
import { motion } from "motion/react";
import Left from "../imports/Left";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden"
    >
      {/* Modern subtle background elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/6 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-violet-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-gradient-to-br from-emerald-200/35 to-orange-200/25 rounded-full blur-3xl"></div>
      </div>

      {/* Ultra-subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.006]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Left illustration integrated subtly */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div className="w-full h-full flex items-center justify-center scale-150">
          <Left />
        </div>
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/5 to-emerald-50/20" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Modern section indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-blue-400/70"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/60"></div>
            <div className="w-2 h-2 rounded-full bg-violet-400/70"></div>
          </div>
        </motion.div>

        {/* Powerful headline with highlighted APY */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight mb-6 text-gray-900 tracking-tight"
        >
          Earn{" "}
          <span className="bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 bg-clip-text text-transparent relative">
            up to 23.28% APY
            {/* Subtle accent line under APY */}
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/40 via-blue-400/40 to-violet-400/40 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </span>{" "}
          from real-world merchant payments
        </motion.h1>

        {/* Enhanced subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Deploy USDC into a low-risk liquidity protocol backed
          by receivables collected directly from merchants.
        </motion.p>

        {/* Enhanced CTA with trust signals */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <Button
            size="lg"
            onClick={() => {
              window.open("https://twitter.com/intent/follow?screen_name=aion_fi", "_blank");
            }}
            className="h-14 px-12 text-lg bg-[#1f1f1f] hover:bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium group relative overflow-hidden"
          >
            <span className="relative z-10">Join Waitlist</span>
            {/* Subtle hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center items-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400/70 rounded-full"></div>
              <span>Real-world backed</span>
            </div>
            <div className="w-px h-3 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400/70 rounded-full"></div>
              <span>Regulatory compliant</span>
            </div>
            <div className="w-px h-3 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-violet-400/70 rounded-full"></div>
              <span>USDC deposits</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating accent elements */}
        <motion.div
          className="absolute -top-4 -right-4 w-4 h-4 bg-blue-400/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
          }}
        />

        <motion.div
          className="absolute -bottom-6 -left-6 w-3 h-3 bg-emerald-400/40 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-1/3 -right-8 w-2 h-2 bg-violet-400/50 rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: 0.5,
          }}
        />
      </div>
    </section>
  );
}