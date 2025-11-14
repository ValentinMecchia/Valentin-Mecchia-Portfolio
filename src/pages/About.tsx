import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { pageVariants } from '../animations/pageTransitions';
import { fadeInUp } from '../animations/appearAnimations';

function About() {
  return (
    <>
      <Helmet>
        <title>About - Valentín Mecchia</title>
        <meta name="description" content="Learn more about Valentín Mecchia" />
      </Helmet>

      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen px-6 pt-32 pb-20"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-4xl md:text-6xl font-figtree font-bold text-white mb-8"
          >
            About Me
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="prose prose-invert max-w-none"
          >
            <p className="text-lg text-white/75 font-figtree leading-relaxed mb-6">
              I'm a software engineer passionate about building innovative solutions
              with cutting-edge technologies.
            </p>

            <p className="text-lg text-white/75 font-figtree leading-relaxed">
              With expertise in AI automation and modern web development, I create
              elegant and efficient solutions for complex problems.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
