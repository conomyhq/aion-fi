'use client';

import * as React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation';

type Level = 'root' | 'dashboard' | 'settings';
type Variant = 'crossfade' | 'slide' | 'scale' | 'mask';

function useRouteKey(level: Level) {
  // En el root: 1er segmento global (/dashboard, /login, etc.)
  const [first] = useSelectedLayoutSegments();
  // En layouts internos: segmento local (overview, pool, settings, kyc, etc.)
  const local = useSelectedLayoutSegment();
  if (level === 'root') return first ?? 'root';
  return local ?? 'index';
}

const variantsMap: Record<Variant, (reduced: boolean, level: Level) => any> = {
  crossfade: (reduced) => ({
    initial: { opacity: reduced ? 1 : 0 },
    animate: { opacity: 1, transition: { duration: 0.36 } },
    exit:    { opacity: reduced ? 1 : 0, transition: { duration: 0.34 } },
  }),
  slide: (reduced, level) => {
    // Dashboard entra desde la izquierda (-20px en X)
    if (level === 'dashboard') {
      return {
        initial: { opacity: reduced ? 1 : 0, x: reduced ? 0 : -20 },
        animate: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 28, mass: 0.8 } },
        exit:    { opacity: reduced ? 1 : 0, x: reduced ? 0 : 50, transition: { duration: 0, ease: 'easeIn' } },
      };
    }
    // Settings entra desde arriba (-20px en Y)
    if (level === 'settings') {
      return {
        initial: { opacity: reduced ? 1 : 0, y: reduced ? 0 : -20 },
        animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 40, mass: 0.8 } },
        exit:    { opacity: reduced ? 1 : 0, y: reduced ? 0 : 10, transition: { duration: 0, ease: 'easeIn' } },
      };
    }
    // Otros niveles (default)
    const dxIn  = 12;
    const dxOut = -10;
    return {
      initial: { opacity: reduced ? 1 : 0, x: reduced ? 0 : dxIn },
      animate: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 200, damping: 100, mass: 0.6 } },
      exit:    { opacity: reduced ? 1 : 0, x: reduced ? 0 : dxOut, transition: { duration: 0.2, ease: 'easeInOut' } },
    };
  },
  scale: (reduced) => ({
    initial: { opacity: reduced ? 1 : 0, scale: reduced ? 1 : 0.985 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.18, ease: 'easeOut' } },
    exit:    { opacity: reduced ? 1 : 0, scale: reduced ? 1 : 0.985, transition: { duration: 0.12, ease: 'easeIn' } },
  }),
  mask: (reduced) => ({
    initial: { opacity: 1, clipPath: reduced ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)' },
    animate: { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 0.5, ease: 'easeOut' } },
    exit:    { opacity: 0, clipPath: reduced ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)', transition: { duration: 0, ease: 'easeIn' } },
  }),
};

export function RouteTransition({
  children,
  level,
  variant = 'crossfade',
  className,
  disableInitialExit = true,
}: {
  children: React.ReactNode;
  level: Level;
  variant?: Variant;
  className?: string;
  disableInitialExit?: boolean;
}) {
  const reduced = useReducedMotion();
  const key = useRouteKey(level);
  const v = variantsMap[variant](reduced ?? false, level);

  // evitar exit en el primer paint (reduce flash)
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const exitProp = mounted || !disableInitialExit ? 'exit' : undefined;

  return (
    <div className={className}>
      <AnimatePresence mode="popLayout" >
        <motion.div
          key={key}
          initial="initial"
          animate="animate"
          {...(exitProp ? { exit: 'exit' } : {})}
          variants={v}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/** animación simple para secciones internas */
export function SectionFade({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string; }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}