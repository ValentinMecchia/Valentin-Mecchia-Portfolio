import { Variants } from 'framer-motion';

// Fade in from bottom
export const fadeInUp: Variants = {
  initial: {
    opacity: 0.001,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Fade in with spring
export const fadeInSpring: Variants = {
  initial: {
    opacity: 0.001,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

// Fade in from top (hero title)
export const fadeInFromTop: Variants = {
  initial: {
    opacity: 0.001,
    y: -150,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 60,
      stiffness: 320,
      mass: 1,
      delay: 1.2,
    },
  },
};

// Simple fade in
export const fadeIn: Variants = {
  initial: {
    opacity: 0.001,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Fade in with delay - for sequential animations
export const fadeInDelayed = (delay: number): Variants => ({
  initial: {
    opacity: 0.001,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 1.2,
      delay,
    },
  },
});

// Scale and fade in
export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
