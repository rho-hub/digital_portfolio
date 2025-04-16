"use client"

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

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
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
    <>
      {/* Mobile menu button */}
      <button
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-navy-light lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-navy-light bg-opacity-95 flex flex-col items-center justify-center lg:hidden transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        <nav className="flex flex-col items-center gap-8 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "font-mono text-slate-300 hover:text-green transition-colors",
                activeSection === item.href.substring(1) ? "text-green" : "",
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            className="px-4 py-2 border border-green text-green rounded hover:bg-green hover:bg-opacity-10 transition-colors font-mono"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed left-10 top-0 h-screen items-center">
        <nav className="flex flex-col gap-8">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "font-mono text-sm text-slate-300 hover:text-green transition-colors flex items-center gap-2",
                activeSection === item.href.substring(1) ? "text-green" : "",
              )}
            >
              <span className="text-green">{`0${index + 1}.`}</span>
              {item.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            className="mt-4 px-4 py-2 border border-green text-green rounded hover:bg-green hover:bg-opacity-10 transition-colors text-sm font-mono"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </aside>
    </>
  )
}
