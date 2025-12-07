"use client"; // Required for Next.js interactive components

import { motion } from "framer-motion";

export default function Navbar() {
  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="sidebar">
      <div className="inner">
        <motion.a
          href="#intro"
          className="logo"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span className="font-fjord">alissa.dev</span>
        </motion.a>
        <nav>
          <motion.ul
            className="uppercase"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={navItemVariants}>
              <a href="#intro" className="intro scrolly active">
                Welcome
              </a>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <a href="#projects" className="projects scrolly">
                Projects
              </a>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <a href="#experience" className="experience scrolly">
                Brands
              </a>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <a href="#recommendations" className="recommendations scrolly">
                Recommendations
              </a>
            </motion.li>
          </motion.ul>
        </nav>
      </div>
    </section>
  );
}