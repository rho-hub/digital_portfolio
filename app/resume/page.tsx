import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-card shadow-lg rounded-lg overflow-hidden">
        {/* Back button */}
        <div className="p-4 border-b border-muted">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>

        {/* Resume header */}
        <div className="p-6 bg-primary/5 border-b border-muted">
          <h1 className="text-3xl font-bold text-foreground">RHODAH JERONO KIPNG'ENO</h1>
          <div className="mt-2 text-foreground/80">
            <p>+254 708 847 933</p>
            <p>P.O. Box 9156, Eldoret, Kenya</p>
            <p>rhodahjerono@gmail.com</p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/rho-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                github.com/rho-hub
              </a>
              <a
                href="https://linkedin.com/in/rhodahjerono"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                linkedin.com/in/rhodahjerono
              </a>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="p-6 border-b border-muted">
          <h2 className="text-xl font-semibold text-foreground mb-2">PROFILE</h2>
          <p className="text-foreground/80">
            Versatile and problem-solving developer with a strong interest in leveraging AI and machine learning to
            enhance technological interactions. Passionate about project management and data analysis, with a
            comprehensive understanding of the entire development lifecycle. Proficient in designing and implementing
            products, managing production processes, handling server-side logic, and working with data to deliver
            efficient and impactful solutions.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="p-6 border-b border-muted">
          <h2 className="text-xl font-semibold text-foreground mb-4">PROFESSIONAL EXPERIENCE</h2>

          <div className="mb-4">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-foreground">RESEARCH AND TECHNOLOGY INTERN</h3>
              <span className="text-primary">Signvrse, 2024</span>
            </div>
            <ul className="mt-2 list-disc pl-5 text-foreground/80">
              <li>Developed and maintained responsive web interfaces using React, Next.js, and Tailwind CSS.</li>
              <li>Integrated and managed backend services using Supabase, Node.js, and REST APIs.</li>
              <li>Contributed to building AI-powered sign language tools like Terp360.</li>
              <li>Participated in project planning, sprint reviews, and feature scoping.</li>
              <li>Conducted research and experimentation with new features, including AI, ML, and data integration.</li>
            </ul>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="p-6 border-b border-muted">
          <h2 className="text-xl font-semibold text-foreground mb-4">TECHNICAL SKILLS</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-foreground mb-2">Programming Languages:</h3>
              <p className="text-foreground/80">Python, JavaScript, TypeScript, Java, Kotlin, Dart, HTML5, CSS3, SQL</p>
            </div>

            <div>
              <h3 className="font-medium text-foreground mb-2">Libraries and Frameworks:</h3>
              <p className="text-foreground/80">
                React, Next.js, Tailwind CSS, Django, Flask, FastAPI, Pandas, NumPy, Scikit-learn, Recharts, Power BI,
                Tableau, Excel, Context API, RESTful APIs, WebSockets
              </p>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-medium text-foreground mb-2">Tools & Platforms:</h3>
              <p className="text-foreground/80">
                Git, Docker, Jupyter Notebooks, Supabase, Firebase, MySQL, PostgreSQL, Netlify, Vercel, MongoDB, Oracle,
                Trello, Asana, Jira, Daraja, SMS/Email Integration, GIS Tools
              </p>
            </div>
          </div>
        </div>

        {/* Notable Projects */}
        <div className="p-6 border-b border-muted">
          <h2 className="text-xl font-semibold text-foreground mb-4">NOTABLE PROJECTS</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-foreground">MomHive</h3>
              <p className="text-foreground/80">Developed a supportive community platform for young mothers.</p>
              <p className="text-primary/80">Technologies Used: Flutter, Flask, Kafka, Redis</p>
            </div>

            <div>
              <h3 className="font-medium text-foreground">BloomEra Website</h3>
              <p className="text-foreground/80">
                Created an e-commerce website skeleton for a small flower business with complete payment integration.
              </p>
              <p className="text-primary/80">Technologies Used: HTML/CSS, JavaScript, Flask, Daraja</p>
            </div>

            <div>
              <h3 className="font-medium text-foreground">Data Analysis and Visualization</h3>
              <p className="text-foreground/80">
                Conducted data cleaning and exploratory data analysis on various datasets to facilitate data-driven
                decisions.
              </p>
              <p className="text-primary/80">Technologies Used: Excel, MySQL, SQL, Tableau, PowerBI</p>
            </div>

            <div>
              <h3 className="font-medium text-foreground">KSL Recognition Model</h3>
              <p className="text-foreground/80">
                Loaded data, pre-processed, and trained a model to recognize Kenyan Sign Language and translate it to
                text.
              </p>
              <p className="text-primary/80">Technologies Used: Python, OpenCV, MediaPipe, LSTM</p>
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">EDUCATION & CERTIFICATIONS</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-foreground">KABARAK UNIVERSITY - KENYA</h3>
              <p className="text-foreground/80">Bachelor of Science in Information Technology</p>
              <p className="text-primary/80">Anticipated graduation - 2025</p>
            </div>

            <div>
              <h3 className="font-medium text-foreground">COURSERA</h3>
              <p className="text-foreground/80">Project Management Certificate, 2024</p>
            </div>

            <div>
              <h3 className="font-medium text-foreground">ASANA ACADEMY</h3>
              <p className="text-foreground/80">Workflow specialist certificate, 2025</p>
            </div>

            <div>
              <h3 className="font-medium text-foreground">ALEX ANALYTICS</h3>
              <p className="text-foreground/80">Data analysis Bootcamp, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
