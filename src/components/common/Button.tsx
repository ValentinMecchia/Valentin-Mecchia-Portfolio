import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { buttonHover } from '../../animations/variants';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string;
}

function Button({ children, onClick, variant = 'primary', href, className = '' }: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-lg font-figtree font-medium transition-colors duration-200';
  const variantClasses = {
    primary: 'bg-white text-black hover:bg-white/90',
    secondary: 'border border-white/30 text-white hover:border-white/60',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        variants={buttonHover}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      variants={buttonHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
    >
      {children}
    </motion.button>
  );
}

export default Button;
