import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { pageVariants } from '../animations/pageTransitions';
import { fadeInUp } from '../animations/appearAnimations';
import Button from '../components/common/Button';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact - Valentín Mecchia</title>
        <meta name="description" content="Get in touch with Valentín Mecchia" />
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
            Get in Touch
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <p className="text-lg text-white/75 font-figtree leading-relaxed">
              I'm always open to new opportunities and collaborations.
              Feel free to reach out!
            </p>

            <div className="flex gap-4">
              <Button href="mailto:contact@example.com">
                Email Me
              </Button>
              <Button variant="secondary" href="https://linkedin.com">
                LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;
