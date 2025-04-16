"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <SectionHeading title="What's Next?" centered />

        <h3 className="text-4xl font-bold text-foreground mt-8 mb-4">Get In Touch</h3>

        <p className="max-w-md mx-auto mb-12">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my
          best to get back to you!
        </p>

        <a
          href="mailto:jeronorhodah@gmail.com?subject=Hello%20from%20your%20portfolio&body=Hi%20there%2C%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
          className="px-8 py-4 border border-primary text-primary rounded font-sans hover:bg-primary/10 transition-colors inline-block"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  )
}
