"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="font-poppins text-primary mb-5">Hi, my name is</p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold text-foreground mb-4"
      >
        Rhodah Jerono.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl md:text-3xl font-bold text-foreground/55 mb-8"
      >
        Web Developer | AI & ML | Data Scientist
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-xl text-lg mb-12"
      >
        I specialize in all things development! from designing and implementing products, to managing production processes, handling server-side logic, and working with data. I take pride in overseeing the entire development lifecycle, ensuring that each layer of a product is thoughtfully crafted, efficient, and impactful.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a
          href="#projects"
          className="px-7 py-4 border border-primary text-primary rounded font-poppins hover:bg-primary/10 transition-colors"
        >
          Check out my work!
        </a>
      </motion.div>
    </section>
  )
}
