import { motion } from "motion/react";

interface LoadingProps {
  variant?: "fullscreen" | "inline" | "button";
  message?: string;
  submessage?: string;
  size?: "sm" | "md" | "lg";
  overlay?: "none" | "blur" | "dark" | "light" | "blur-dark" | "blur-light";
}

export function Loading({ 
  variant = "inline", 
  message, 
  submessage,
  size = "md",
  overlay = "none"
}: LoadingProps) {
  const dotSize = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-5 h-5"
  };

  const gapSize = {
    sm: "gap-1",
    md: "gap-1.5",
    lg: "gap-3"
  };

  const LoadingSpinner = () => (
    <div className={`flex items-center justify-center ${gapSize[size]}`}>
      {/* Animated dots */}
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${dotSize[size]} rounded-full flex-shrink-0`}
          style={{
            background: index === 0 
              ? 'var(--brand-primary)' 
              : index === 1 
                ? 'var(--brand-secondary)' 
                : 'var(--brand-tertiary)'
          }}
          animate={{
            scale: [0.6, 1.2, 0.6],
            opacity: [0.4, 1, 0.4],
            y: [0, -8, 0]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: index * 0.15,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  const LoadingContent = () => (
    <div className="flex flex-col items-center gap-6">
      <LoadingSpinner />
      {message && (
        <div className="text-center space-y-2 max-w-sm">
          <p className="text-[var(--text)] font-medium tracking-tight">{message}</p>
          {submessage && (
            <p className="text-[var(--muted)] text-sm tracking-tight">{submessage}</p>
          )}
        </div>
      )}
    </div>
  );

  if (variant === "fullscreen") {
    // Overlay classes based on prop
    const overlayClasses = {
      none: "pointer-events-none",
      blur: "backdrop-blur-sm",
      dark: "bg-black/20",
      light: "bg-white/50",
      "blur-dark": "backdrop-blur-sm bg-black/10",
      "blur-light": "backdrop-blur-sm bg-white/30"
    };

    return (
      <motion.div 
        className={`fixed inset-0 z-[9999] flex items-center justify-center ${overlayClasses[overlay]}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 25
          }}
          className={overlay === "none" ? "pointer-events-auto" : ""}
        >
          <LoadingContent />
        </motion.div>
      </motion.div>
    );
  }

  return <LoadingContent />;
}