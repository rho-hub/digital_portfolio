"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)

  // Smooth scroll function
  const handleScrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setIsOpen(false) // Close mobile menu if open
    const sectionId = href.replace("#", "")
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll("section[id]")
      let currentSection = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          currentSection = section.getAttribute("id") || ""
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-primary"></Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className={cn(
                "font-poppins text-sm hover:text-primary transition-colors",
                activeSection === item.href.substring(1) ? "text-primary" : "",
              )}
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1Qq4zwnsZKacRMCxvrY7Io7tLEwzaKlzz/view?usp=sharing"
            className="px-4 py-2 border border-primary text-primary rounded font-poppins hover:bg-primary/10 transition-colors text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 rounded-full" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 flex flex-col items-center justify-center md:hidden transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
        )}
      >
        <nav className="flex flex-col items-center gap-8 text-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className={cn(
                "font-poppins text-lg hover:text-primary transition-colors",
                activeSection === item.href.substring(1) ? "text-primary" : "",
              )}
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1IwBq7JfAWV0yf0-Jc2XAVAGnMGMaulZW/view?usp=drive_link"
            className="px-6 py-3 border border-primary text-primary rounded font-poppins hover:bg-primary/10 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
