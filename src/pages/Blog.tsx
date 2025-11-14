import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { pageVariants } from '../animations/pageTransitions';
import { fadeInUp } from '../animations/appearAnimations';

function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog - Valentín Mecchia</title>
        <meta name="description" content="Read the latest articles and insights" />
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
            Blog
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-lg text-white/75 font-figtree"
          >
            Coming soon...
          </motion.p>
        </div>
      </motion.div>
    </>
  );
}

export default Blog;
