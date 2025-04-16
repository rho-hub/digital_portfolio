"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"

// Define skill categories and items
const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["HTML5", "CSS3", "TypeScript", "JavaScript", "SQL", "Python", "Java", "Kotlin", "Dart"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Django", "Flask", "FastAPI", "Tailwind CSS", "ShadcnUI", "WebSockets"],
  },
  {
    title: "Databases & Backend Services",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "Firebase", "Supabase"],
  },
  {
    title: "Data Science & Machine Learning",
    skills: [
      "Scikit-learn",
      "Pandas",
      "NumPy", "LSTM",
      "Decision Trees",
      "Random Forest",
      "Hyperparameter Tuning",
      "Matrix Factorization",
      "Predictive Modeling",
      "Jupyter Notebooks",
    ],
  },
  {
    title: "Project & Visualization Tools",
    skills: ["Power BI", "Tableau", "Recharts", "Trello", "Asana", "Jira", "Kaggle"],
  },
  {
    title: "APIs & Integrations",
    skills: ["RESTful Services", "Context API", "M-Pesa API", "SMS Integration", "Email Services", "GIS"],
  },
  {
    title: "Cloud & DevOps Tools",
    skills: ["Git", "Docker", "AWS", "Microsoft Azure"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <SectionHeading title="About Me" />

      <div className="grid md:grid-cols-3 gap-12 mt-12">
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mb-4">
            A versatile, problem-solving developer with a strong interest in how AI and machine learning can enhance the way we build and interact with technology. I have a passion for project management and recently started exploring the world of data analysis.
          </p>
          <p className="mb-4">
          I'm proficient in web development (React, Next.js, HTML & CSS), Android development (Java, Kotlin), and the backend side of things (Django, MongoDB, Supabase). I use tools like Jira, Asana, and GitHub Projects to track and manage projects effectively.
          </p>
          <p className="mb-4">
          Currently, I'm diving deeper into data analysis and visualization using Python, Pandas, SQL, Matplotlib, and beginning to experiment with machine learning model training using scikit-learn and TensorFlow.
          </p>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-card/80 rounded-lg p-6 border border-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
