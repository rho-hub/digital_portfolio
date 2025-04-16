"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import SectionHeading from "./section-heading"

// Replace with your own experience data
const experienceData = [
  {
    company: "Signvrse",
    url: "https://Signvrse.com",
    title: "Research and Technology Intern",
    range: "2025 - Present",
    responsibilities: [
      "Developed and maintained responsive web interfaces using React, Next.js, and Tailwind CSS",
      "Integrated and managed backend services using Supabase, Node.js, and REST APIs",
      "Contributed to building AI-powered sign language tools like Terp360, aligning tech with accessibility goals",
      "Participated in project planning, sprint reviews, and feature scoping",
      "Conducted research and experimentation with new features including AI, ML, and data integration for continuous product improvement",
    ],
    technologies: ["React", "TypeScript", "Supabase", "ThreeJS", "Model Training","APIs"],
  },

]

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24">
      <SectionHeading title="Where I've Worked" />

      <div className="mt-12 flex flex-col md:flex-row gap-4">
        {/* Tab buttons */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-muted">
          {experienceData.map((item, index) => (
            <button
              key={index}
              className={cn(
                "px-4 py-3 font-sans text-sm whitespace-nowrap transition-colors",
                "hover:text-primary hover:bg-muted/50",
                activeTab === index
                  ? "text-primary border-primary md:border-l-2 border-b-2 md:border-b-0"
                  : "text-foreground/70 border-transparent md:border-l-2 border-b-2 md:border-b-0",
              )}
              onClick={() => setActiveTab(index)}
            >
              {item.company}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="py-2 px-5">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeTab === index ? 1 : 0,
                y: activeTab === index ? 0 : 20,
                display: activeTab === index ? "block" : "none",
              }}
              transition={{ duration: 0.3 }}
              className="min-h-[320px]"
            >
              <h3 className="text-xl text-foreground mb-1">
                {item.title}{" "}
                <span className="text-primary">
                  @
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="ml-1 hover:underline">
                    {item.company}
                  </a>
                </span>
              </h3>

              <p className="font-sans text-sm mb-4">{item.range}</p>

              <ul className="space-y-2">
                {item.responsibilities.map((responsibility, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-muted/30 rounded-full text-xs font-sans">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
