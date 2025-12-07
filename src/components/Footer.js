"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="wrapper purple-alt xl:ml-[25em]" ref={ref}>
      <div className="inner text-sm text-center">
        <motion.p
          className="!mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          This site was built by me using{" "}
          <motion.a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noreferrer noopener"
            whileHover={{ scale: 1.05 }}
            className="underline decoration-2 underline-offset-2"
          >
            Visual Studio Code
          </motion.a>
          ,{" "}
          <motion.a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer noopener"
            whileHover={{ scale: 1.05 }}
            className="underline decoration-2 underline-offset-2"
          >
            Next.js
          </motion.a>{" "}
          and{" "}
          <motion.a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer noopener"
            whileHover={{ scale: 1.05 }}
            className="underline decoration-2 underline-offset-2"
          >
            Tailwind CSS
          </motion.a>
          , and deployed with{" "}
          <motion.a
            href="https://vercel.com/"
            target="_blank"
            rel="noreferrer noopener"
            whileHover={{ scale: 1.05 }}
            className="underline decoration-2 underline-offset-2"
          >
            Vercel
          </motion.a>
          .
        </motion.p>
      </div>
    </footer>
  );
}