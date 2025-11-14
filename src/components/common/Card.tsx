import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cardHover } from '../../animations/variants';

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      className={`bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm ${className}`}
      variants={cardHover}
      initial="rest"
      whileHover="hover"
    >
      {children}
    </motion.div>
  );
}

export default Card;
