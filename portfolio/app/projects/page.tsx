"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/data.json")
        const data = await response.json()
        const allProjects = data.projects.map((project: any) => ({
          id: project.title,
          title: project.title,
          description: project.overview,
          tags: project.techStack.slice(0, 5),
          slug: project.slug || project.title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, ""),
          category: "Full Stack",
        }))
        setProjects(allProjects)
      } catch (error) {
        console.error("Error fetching projects:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const categories = ["All", ...new Set(projects.map((p: any) => p.category))]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-4 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of my recent work showcasing my expertise in full-stack development, design, and
            problem-solving.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border">
        <div className="space-y-12">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium border border-border hover:border-primary hover:text-primary transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {loading ? (
            <div className="text-center text-muted-foreground">Loading projects...</div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project: any) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="project-card group flex flex-col h-full p-6 border border-border rounded-lg hover:border-primary hover:bg-muted/50 transition-all duration-300"
                >
                  {/* Project Header */}
                  <div className="space-y-3 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs font-medium text-primary/70 uppercase tracking-wide">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border mt-4">
                    {project.tags.map((tag: string) => (
                      <span key={tag} className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Details Link */}
                  <div className="flex items-center gap-2 text-primary text-sm font-medium pt-4 group-hover:gap-3 transition-all">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
