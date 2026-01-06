"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [mounted, setMounted] = useState(false);

  const targetDate = new Date("2026-02-14T00:00:00").getTime();

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#5052b5] via-[#3e4094] to-[#2d2f6b] flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-fjord mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5052b5] via-[#3e4094] to-[#2d2f6b] flex items-center justify-center p-4">
      <motion.div
        className="max-w-4xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-fjord text-5xl md:text-6xl lg:text-7xl text-white mb-4"
          variants={itemVariants}
        >
          Countdown to February 14, 2026
        </motion.h1>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12"
          variants={containerVariants}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
              key={timeLeft.days}
              variants={numberVariants}
              initial="hidden"
              animate="visible"
            >
              {timeLeft.days}
            </motion.div>
            <div className="text-sm md:text-base text-white/80 uppercase tracking-wider">
              Days
            </div>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
              key={timeLeft.hours}
              variants={numberVariants}
              initial="hidden"
              animate="visible"
            >
              {timeLeft.hours}
            </motion.div>
            <div className="text-sm md:text-base text-white/80 uppercase tracking-wider">
              Hours
            </div>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
              key={timeLeft.minutes}
              variants={numberVariants}
              initial="hidden"
              animate="visible"
            >
              {timeLeft.minutes}
            </motion.div>
            <div className="text-sm md:text-base text-white/80 uppercase tracking-wider">
              Minutes
            </div>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
              key={timeLeft.seconds}
              variants={numberVariants}
              initial="hidden"
              animate="visible"
            >
              {timeLeft.seconds}
            </motion.div>
            <div className="text-sm md:text-base text-white/80 uppercase tracking-wider">
              Seconds
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
