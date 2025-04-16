"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react"

export default function SocialLinks() {
  return (
    <>
      {/* Left side vertical social links (desktop) */}
      <motion.div
        className="hidden lg:flex fixed left-10 bottom-0 flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <ul className="flex flex-col gap-6 mb-8">
          <li>
            <a
              href="https://github.com/rho-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green transform hover:-translate-y-1 transition-all duration-200 inline-block"
            >
              <Github size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rhodah-jerono-5236ab2a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green transform hover:-translate-y-1 transition-all duration-200 inline-block"
            >
              <Linkedin size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/rhodahjerono?t=0m6-hmYRYWVbk8-9-HjLKg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green transform hover:-translate-y-1 transition-all duration-200 inline-block"
            >
              <Twitter size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jerono.__?igsh=cHdmNTN4cWFoZ2J2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green transform hover:-translate-y-1 transition-all duration-200 inline-block"
            >
              <Instagram size={20} />
            </a>
          </li>
        </ul>
        <div className="h-24 w-px bg-slate-400"></div>
      </motion.div>

      {/* Right side email link (desktop) */}
      <motion.div
        className="hidden lg:flex fixed right-10 bottom-0 flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <a
          href="mailto:jeronorhodah@gmail.com"
          className="font-mono text-slate-400 hover:text-green tracking-widest transform hover:-translate-y-1 transition-all duration-200 [writing-mode:vertical-rl]"
        >
          jeronorhodah@gmail.com
        </a>
        <div className="h-24 w-px bg-slate-400 mt-8"></div>
      </motion.div>

      {/* Bottom social links (mobile) */}
      <div className="flex lg:hidden justify-center gap-6 py-8">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-green"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-green"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-green"
        >
          <Twitter size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-green"
        >
          <Instagram size={20} />
        </a>
        <a href="mailto:jeronorhodah@gmail.com" className="text-slate-400 hover:text-green">
          <Mail size={20} />
        </a>
      </div>
    </>
  )
}
