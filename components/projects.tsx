"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Folder } from "lucide-react"
import SectionHeading from "./section-heading"

const otherProjects = [
  {
    title: "MomHive",
    description: "A supportive community platform for young mothers.",
    technologies: ["Flutter", "Flask", "Kafka", "Redis"],
    github: "https://github.com/yourusername/web-dev-platform",
    external: null,
  },
  {
    title: "BloomEra website",
    description: "E-commerce website skeleton for a small flower business with complete payment integration.",
    technologies: ["HTML/ CSS", "Javascript","Flask", "Daraja"],
    github: "https://github.com/rho-hub/bloomera.git",
    external: null,
  },
  {
    title: "Data Analysis and visualisation",
    description: "Conducted data cleaning and exploratory data analysis on data sets to make data driven decisions.",
    technologies: ["Python","Excell", "MySQL","Tableau","PowerBI",],
    github: "https://github.com/rho-hub/Data_analysis.git",
    external: null,
  },
  {
    title: "KSL recognition model",
    description: "Loaded data, Pre-processed and trained a model to recognize KSL and translate it to text.",
    technologies: ["Python", "OpenCV","MediaPipe", "LSTM"],
    github: "https://github.com/rho-hub/Data_analysis.git",
    external: null,
  },
  {
    title: "Terp360",
    description: "Contributed to Signvse's AI-powered sign language interpretation technology.",
    technologies: ["React", "ThreeJs", "Supabase", "RestfulAPI"],
    github: null,
    external: "https://terp.signvrse.com/",
  },
  {
    title: "Signvrse Website ",
    description: "Developed the company's website from the design phase to the deployment.",
    technologies: ["React", "Tyoescript","ShadCN UI",],
    github: null,
    external: "https://signvrse.com/",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <SectionHeading title="Projects" />

      {/* Other Projects */}
      <div className="mt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-md p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-between items-center mb-6">
                <Folder className="text-primary" size={40} />
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h4 className="text-xl font-semibold text-foreground mb-2">{project.title}</h4>
              <p className="text-sm mb-6 flex-grow">{project.description}</p>

              <ul className="flex flex-wrap gap-2 text-xs font-sans mt-auto">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
