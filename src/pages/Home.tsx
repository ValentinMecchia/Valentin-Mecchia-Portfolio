import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { pageVariants } from '../animations/pageTransitions';
import Hero from '../components/sections/Hero';

function Home() {
  return (
    <>
      <Helmet>
        <title>Valentín Mecchia Portfolio</title>
        <meta
          name="description"
          content="Xtract is a modern AI automation agency Framer template, perfect for AI startups and tech businesses. It's sleek, responsive, SEO-friendly, and designed to showcase AI solutions with a clean layout, smooth animations, and a conversion-focused approach."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Valentín Mecchia Portfolio" />
        <meta
          property="og:description"
          content="Xtract is a modern AI automation agency Framer template, perfect for AI startups and tech businesses. It's sleek, responsive, SEO-friendly, and designed to showcase AI solutions with a clean layout, smooth animations, and a conversion-focused approach."
        />
        <meta
          property="og:image"
          content="https://framerusercontent.com/images/HMAXl2OBQIIUUaPBbnSBuo5EQYE.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Valentín Mecchia Portfolio" />
        <meta
          name="twitter:description"
          content="Xtract is a modern AI automation agency Framer template, perfect for AI startups and tech businesses. It's sleek, responsive, SEO-friendly, and designed to showcase AI solutions with a clean layout, smooth animations, and a conversion-focused approach."
        />
        <meta
          name="twitter:image"
          content="https://framerusercontent.com/images/HMAXl2OBQIIUUaPBbnSBuo5EQYE.png"
        />
      </Helmet>

      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Hero />
      </motion.div>
    </>
  );
}

export default Home;
