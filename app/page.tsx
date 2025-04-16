import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import SocialSidebar from "@/components/social-sidebar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-24 lg:py-16 lg:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <footer className="mt-24 pb-8 text-center text-sm">
          <p>Designed & Built by Rhodah Jerono.</p>
          <p>
            Inspo by{" "}
            <a className="ml-1 hover:underline" href="https://brittanychiang.com/">
              {" "}
              Brittany Chiang{" "}
            </a>
          </p>
        </footer>
      </main>
      <SocialSidebar />
    </div>
  )
}
