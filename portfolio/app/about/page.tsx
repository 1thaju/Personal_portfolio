"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"
import {
  Code,
  FileCode,
  Palette,
  Server,
  Database,
  GitBranch,
  Github,
  Cloud,
  Zap,
  Globe,
  Box,
  User,
  Briefcase,
  GraduationCap,
  BookOpen,
  Loader2,
} from "lucide-react"

export default function About() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json")
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <p className="text-muted-foreground">Error loading data</p>
        </div>
      </div>
    )
  }

  const skillsArray = data.skills
  const experienceData = data.experience
  const educationData = data.education

  // Map skills to icons
  const getSkillIcon = (skill: string) => {
    const iconMap: { [key: string]: any } = {
      React: Code,
      "Next.js": FileCode,
      TypeScript: FileCode,
      "Tailwind CSS": Palette,
      "Framer Motion": Zap,
      "Node.js": Server,
      "Express.js": Server,
      PostgreSQL: Database,
      MongoDB: Database,
      "REST APIs": Globe,
      "Gemini API": Zap,
      Python: Code,
      Git: GitBranch,
      AWS: Cloud,
      Vercel: Cloud,
      GitHub: Github,
      Postman: Box,
      HTML: FileCode,
      CSS: Palette,
      JavaScript: Code,
    }
    return iconMap[skill] || Code
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-4 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground inline-flex items-center gap-3">
            <User className="w-10 h-10 text-primary" />
            About Me
          </h1>
          <p className="text-lg text-muted-foreground">
            A passionate developer building beautiful, scalable digital experiences.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground inline-flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            My Journey
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a full-stack developer with a passion for creating elegant solutions to complex problems. My journey
              in tech started with a curiosity about how things work, which evolved into a career building web
              applications that impact millions of users.
            </p>
            <p>
              With over 5 years of experience in web development, I've worked across the entire stack—from crafting
              intuitive user interfaces to architecting robust backend systems. I believe in writing clean, maintainable
              code and staying updated with the latest technologies and best practices.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community. I'm always excited about opportunities to collaborate and
              learn from talented people.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-3">
            {Array.isArray(skillsArray) &&
              skillsArray.map((skill: string) => {
                const Icon = getSkillIcon(skill)
                return (
                  <span
                    key={skill}
                    className="project-card inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {skill}
                  </span>
                )
              })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Experience</h2>
          <div className="space-y-8">
            {Array.isArray(experienceData) &&
              experienceData.map((exp: any, index: number) => (
                <div key={index} className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary mt-2" />
                    {index !== experienceData.length - 1 && <div className="w-0.5 h-24 bg-border mt-4" />}
                  </div>

                  {/* Content */}
                  <div className="pb-8 flex-1">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.duration}</p>
                      {exp.description && (
                        <p className="text-muted-foreground leading-relaxed pt-2">{exp.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Array.isArray(educationData) &&
              educationData.map((edu: any, index: number) => (
                <div key={index} className="project-card p-6 border border-border rounded-lg">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.university}</p>
                    <div className="flex justify-between text-sm text-muted-foreground pt-2">
                      <span>{edu.year}</span>
                      <span>CGPA: {edu.cgpa}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      {/* <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data.certifications &&
              Array.isArray(data.certifications) &&
              data.certifications.map((cert: string, index: number) => (
                <div
                  key={index}
                  className="project-card flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-foreground font-medium">{cert}</p>
                </div>
              ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
