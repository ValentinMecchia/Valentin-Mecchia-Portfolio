import { Variants } from 'framer-motion';

// Button hover animation
export const buttonHover: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  tap: {
    scale: 0.95,
  },
};

// Card hover animation
export const cardHover: Variants = {
  rest: {
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// Link hover animation
export const linkHover: Variants = {
  rest: {
    opacity: 0.75,
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};
