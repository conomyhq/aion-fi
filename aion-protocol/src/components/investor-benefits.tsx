import { Card } from "./ui/card";
import { motion } from "motion/react";
import Illustrations1 from "../imports/Illustrations-10-101";
import Illustrations37 from "../imports/Illustrations-37-211";
import Illustrations3 from "../imports/Illustrations-10-71";
import Illustrations4 from "../imports/Illustrations-8-341";

export function InvestorBenefits() {
  const benefits = [
    {
      title: "High yield",
      description: "23.28% APY",
      illustration: Illustrations1,
    },
    {
      title: "Low risk",
      description:
        "receivables collected directly from merchants",
      illustration: Illustrations37,
    },
    {
      title: "Transparency",
      description: "on-chain reporting",
      illustration: Illustrations3,
    },
    {
      title: "Impact",
      description: "fuel SME growth",
      illustration: Illustrations4,
    },
  ];

  return (
    <section
      id="benefits"
      className="py-[clamp(4rem,8vw,7.5rem)] px-4 bg-gradient-to-br from-zinc-50 via-gray-50 to-slate-50 relative overflow-hidden"
    >
      {/* Modern floating elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/5 w-72 h-72 bg-gradient-to-r from-emerald-200/20 to-blue-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-gradient-to-r from-violet-200/15 to-orange-200/10 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[clamp(2rem,4vw,3rem)] font-bold text-center mb-16 text-gray-900"
        >
          Investor Benefits
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IllustrationComponent = benefit.illustration;
            return (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                className="group flex flex-col items-center text-center relative"
              >
                {/* Modern glassmorphism container */}
                <motion.div
                  className="w-16 h-16 mb-6 relative"
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                >
                  {/* Gradient border on hover - OUTSIDE */}
                  <div
                    className={`absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      index === 0
                        ? "bg-gradient-to-br from-emerald-300/30 via-emerald-400/20 to-blue-300/25"
                        : index === 1
                          ? "bg-gradient-to-br from-blue-300/30 via-blue-400/20 to-violet-300/25"
                          : index === 2
                            ? "bg-gradient-to-br from-violet-300/30 via-violet-400/20 to-purple-300/25"
                            : "bg-gradient-to-br from-orange-300/30 via-orange-400/20 to-amber-300/25"
                    }`}
                  ></div>

                  {/* Main container with white background */}
                  <div className="relative w-full h-full bg-white rounded-2xl border border-white/40 group-hover:border-transparent transition-all duration-500 flex items-center justify-center">
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Icon container */}
                    <div className="w-10 h-10 relative z-10">
                      <IllustrationComponent />
                    </div>

                    {/* Animated ring on hover - thinner with gradient colors */}
                    <motion.div
                      className="absolute -inset-[1px] rounded-2xl"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(0, 0, 0, 0)",
                          `0 0 0 1px ${
                            index === 0
                              ? "rgba(52, 211, 153, 0.15)"
                              : index === 1
                                ? "rgba(59, 130, 246, 0.15)"
                                : index === 2
                                  ? "rgba(139, 92, 246, 0.15)"
                                  : "rgba(251, 146, 60, 0.15)"
                          }`,
                          "0 0 0 0 rgba(0, 0, 0, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    />
                  </div>
                </motion.div>

                {/* Content with enhanced typography */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15 + 0.3,
                  }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed max-w-xs text-sm">
                    {benefit.description}
                  </p>
                </motion.div>

                {/* Modern accent element */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                  initial={{ width: "0%", opacity: 0 }}
                  whileInView={{ width: "40%", opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15 + 0.5,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Subtle dot indicator */}
                  <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-gray-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>

                {/* Subtle background glow */}
                <div className="absolute inset-0 -m-4 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}