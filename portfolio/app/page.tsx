"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Code, User, FolderKanban, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from 'next/image';

export default function Home() {
  const profileRef = useRef(null)
  const [featuredProjects, setFeaturedProjects] = useState([])

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/data.json")
        const data = await response.json()
        const featured = data.projects
          .filter((project: any) => project.featured === "yes")
          .map((project: any) => ({
            id: project.slug,
            title: project.title,
            description: project.overview,
            tags: project.techStack.slice(0, 4),
            slug: project.slug,
          }))
        setFeaturedProjects(featured)
      } catch (error) {
        console.error("Error loading data:", error)
      }
    }
    loadData()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (profileRef.current) {
        const scrollY = window.scrollY
        profileRef.current.style.transform = `translateY(${scrollY * 0.3}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero Section with Enhanced Animations */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
        {/* Animated background element */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="space-y-8 fade-in">
          <div className="space-y-4">
            <h1
              className="text-5xl md:text-7xl font-bold text-foreground leading-tight animate-glow"
              style={{ fontFamily: "var(--font-poppins, 'Poppins'), serif" }}
            >
              <span className="gradient-text">Thajul</span> <span className="text-foreground">Niyas</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light inline-flex items-center gap-2">
              <Code className="w-5 h-5" />
              Full Stack Developer
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Building scalable and user-centric digital experiences. I specialize in modern web technologies, creating
            elegant solutions that bridge design and engineering.
          </p>

          {/* CTA Buttons with Enhanced Hover Effects */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/projects"
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-scale"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="hover-scale inline-flex items-center justify-center gap-2 px-6 py-3 border border-accent rounded-lg font-medium text-foreground hover:bg-accent/10 transition-colors"
            >
              <User className="w-4 h-4" />
              More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Creative Divider */}
      <div className="section-divider"></div>

      {/* About Preview Section with Parallax */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 slide-up">
            <h2 className="text-3xl font-bold inline-flex items-center gap-2">
              <User className="w-7 h-7 text-primary" />
              <span className="gradient-text">About</span> Me
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web technologies. I love creating
              beautiful, performant applications that solve real problems. With a strong foundation in both frontend and
              backend development, I bring ideas to life with clean, maintainable code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently focused on building scalable applications using Next.js, TypeScript, and cloud technologies.
              Always learning, always building.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all hover-scale"
            >
              Learn more about my journey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Animated Profile Section */}
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              {/* Animated glow circle */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/20 to-transparent blur-2xl animate-pulse"></div>

              {/* Profile card */}
              <div className="relative w-full h-full rounded-lg bg-muted flex items-center justify-center border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="text-center">
                <Image
                  src="/thaju.png"
                  alt="Profile photo"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>

            </div>
          </div>
        </div>
      </section>

      {/* Creative Divider */}
      <div className="section-divider"></div>

      {/* Featured Projects Section with Creative Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          <div className="space-y-2 slide-up">
            <h2 className="text-3xl font-bold inline-flex items-center gap-2">
              <FolderKanban className="w-7 h-7 text-primary" />
              <span className="gradient-text">Featured</span> Projects
            </h2>
            <p className="text-muted-foreground">A selection of my recent work and side projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="project-card group p-6 border border-border rounded-lg hover:border-accent hover:bg-muted/50 transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>

                  {/* Tech Stack Tags with Shimmer Effect */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full hover:bg-accent/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Details Link with Animation */}
                  <div className="flex items-center gap-2 text-accent text-sm font-medium pt-2 group-hover:gap-3 transition-all">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/projects"
              className="btn-primary inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all hover-scale px-4 py-2 rounded-lg border border-accent/30 hover:border-accent/60 hover:bg-accent/10"
            >
              View all projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
