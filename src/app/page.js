"use client"
import { motion } from "framer-motion"
import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Brands from "@/components/Brands"
import KindWords from "@/components/KindWords"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Nav />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Hero />
        <About />
        <Projects />
        <Brands />
        <KindWords />
        <Contact />
      </motion.main>
      <Footer />
    </>
  )
}
