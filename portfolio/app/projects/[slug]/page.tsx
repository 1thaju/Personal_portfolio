"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

export default function ProjectDetails() {
  const params = useParams()
  const slug = params.slug as string
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [allProjects, setAllProjects] = useState<any[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/data.json")
        const data = await response.json()
        setAllProjects(data.projects)

        const foundProject = data.projects.find((p: any) => {
          // Use slug field if available, otherwise generate from title
          const projectSlug = p.slug || p.title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "")
          return projectSlug === slug
        })
        setProject(foundProject)
      } catch (error) {
        console.error("Error fetching project:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="text-muted-foreground">Loading project...</p>
        </div>
        <Footer />
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Link href="/projects" className="text-primary font-medium hover:underline">
            Back to Projects
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Back Button */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </section>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6 fade-in">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{project.title}</h1>
            <p className="text-lg text-muted-foreground">{project.overview}</p>
          </div>

          {/* Banner Image */}
          {/* <div className="w-full h-96 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div> */}
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Key Features</h2>
              <ul className="space-y-3">
                {project.keyFeatures?.map((feature: string, index: number) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Solutions */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Challenges & Solutions</h2>
              <div className="space-y-6">
                {project.challengesSolutions?.map((item: any, index: number) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold text-foreground">Challenge: {item.challenge}</h3>
                    <p className="text-muted-foreground leading-relaxed">Solution: {item.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Role */}
            <div className="project-card p-6 border border-border rounded-lg">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Role</h3>
              <p className="text-lg font-medium text-foreground">{project.role}</p>
            </div>

            {/* Tech Stack */}
            <div className="project-card p-6 border border-border rounded-lg">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech: string) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="space-y-3">
              <a
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
              {/* <a
                href={project.links?.demo || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">More Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {allProjects
              .filter((p: any) => p.title !== project.title)
              .slice(0, 2)
              .map((proj: any) => {
                // Use slug field if available, otherwise generate from title
                const projSlug = proj.slug || proj.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^\w-]/g, "")
                return (
                  <Link
                    key={proj.title}
                    href={`/projects/${projSlug}`}
                    className="project-card group p-6 border border-border rounded-lg hover:border-primary hover:bg-muted/50 transition-all"
                  >
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{proj.overview}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      View Project
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
