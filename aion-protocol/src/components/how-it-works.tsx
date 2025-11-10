import { motion } from "motion/react";

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Investors deposit USDC",
      description:
        "Secure deposits into the protocol's smart contracts",
      color: "from-blue-250 to-blue-275",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      number: 2,
      title: "Protocol advances T+0 liquidity to merchants",
      description:
        "Instant liquidity provided to merchants for their receivables",
      color: "from-emerald-250 to-emerald-275",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      number: 3,
      title: "Acquirers settle T+2 or monthly installments",
      description:
        "Payment processors settle according to their schedules",
      color: "from-violet-250 to-violet-275",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200",
    },
    {
      number: 4,
      title: "Smart contracts redistribute principal + fees",
      description:
        "Automated distribution of returns to investors",
      color: "from-orange-250 to-orange-275",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-[clamp(4rem,8vw,7.5rem)] px-4"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[clamp(2rem,4vw,3rem)] font-bold text-center mb-20 text-gray-900"
        >
          How It Works
        </motion.h2>

        {/* Desktop Stepper */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Base Line */}
            <div className="absolute top-6 left-6 right-6 h-px bg-gray-100"></div>

            {/* Animated Gradient Line */}
            <motion.div
              className="absolute top-6 left-6 h-px bg-gradient-to-r from-blue-300 via-emerald-300 via-violet-300 to-orange-300"
              initial={{ width: "0%" }}
              whileInView={{ width: "calc(100% - 3rem)" }}
              transition={{
                duration: 4,
                delay: 1,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            />

            {/* Steps */}
            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.3,
                  }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step Circle */}
                  <motion.div
                    className="relative mb-8"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Ultra-minimal light gray circle with gradient border */}
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-700 font-medium shadow-sm hover:shadow-md transition-all duration-300 relative"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.3 + 0.5,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    >
                      {/* Gradient border */}
                      <div
                        className={`absolute inset-0 rounded-full p-px ${
                          index === 0
                            ? "bg-gradient-to-br from-emerald-300/40 via-emerald-200/30 to-blue-200/20"
                            : index === 1
                              ? "bg-gradient-to-br from-blue-300/40 via-blue-200/30 to-violet-200/20"
                              : index === 2
                                ? "bg-gradient-to-br from-violet-300/40 via-violet-200/30 to-purple-200/20"
                                : "bg-gradient-to-br from-orange-300/40 via-orange-200/30 to-amber-200/20"
                        }`}
                      >
                        <div className="w-full h-full bg-gray-50 rounded-full"></div>
                      </div>

                      {/* Content */}
                      <span className="relative z-10">
                        {step.number}
                      </span>

                      {/* Subtle inner dot for color accent */}
                      <motion.div
                        className={`absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full z-10 ${
                          index === 0
                            ? "bg-emerald-300/50"
                            : index === 1
                              ? "bg-blue-300/50"
                              : index === 2
                                ? "bg-violet-300/50"
                                : "bg-orange-300/50"
                        }`}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: index * 0.3 + 1.5,
                          duration: 0.4,
                        }}
                        viewport={{ once: true }}
                        animate={{
                          scale: [1, 1, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <motion.h3
                    className="font-bold text-gray-900 leading-tight mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.3 + 1,
                    }}
                    viewport={{ once: true }}
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    className="text-sm text-gray-500 leading-relaxed"
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.3 + 1.2,
                    }}
                    viewport={{ once: true }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Stepper */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              {/* Left: Step indicator */}
              <div className="flex flex-col items-center">
                <motion.div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-gray-700 font-medium shadow-xs`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.number}
                </motion.div>
                {index < steps.length - 1 && (
                  <motion.div
                    className="w-px h-16 bg-gray-100 mt-3"
                    initial={{ height: 0 }}
                    whileInView={{ height: "4rem" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + 0.3,
                    }}
                    viewport={{ once: true }}
                  />
                )}
              </div>

              {/* Right: Content */}
              <div className="flex-1 pb-6">
                <h3 className="font-bold text-gray-900 mb-1">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}