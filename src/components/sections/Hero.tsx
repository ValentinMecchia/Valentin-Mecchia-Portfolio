import { motion } from 'framer-motion';
import { fadeInFromTop, fadeIn } from '../../animations/appearAnimations';
import Button from '../common/Button';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          variants={fadeInFromTop}
          initial="initial"
          animate="animate"
          className="text-5xl md:text-7xl font-figtree font-bold text-white mb-6"
        >
          Valentín Mecchia
        </motion.h1>

        <motion.p
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="text-xl md:text-2xl text-white/75 font-figtree mb-8"
        >
          Software Engineer & AI Specialist
        </motion.p>

        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button href="/contact">Get in Touch</Button>
          <Button variant="secondary" href="/about">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
