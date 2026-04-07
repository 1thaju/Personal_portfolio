"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, FolderKanban } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SpotlightCard } from "@/components/spotlight-card"
import { Magnetic } from "@/components/magnetic"

function ProjectsContent({ projects }: { projects: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All")

  const headerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: headerRef, offset: ["start start", "end start"] })
  const yHeader = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacityHeader = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const categories = ["All", ...new Set(projects.map((p: any) => p.category))]
  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p: any) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-black relative selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <motion.section 
        ref={headerRef}
        className="h-[50vh] md:h-[70vh] w-full flex flex-col items-center justify-center relative border-b border-white/5"
        style={{ y: yHeader, opacity: opacityHeader }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        <div className="text-center z-10 space-y-4 px-4 w-full">
          <div className="overflow-hidden">
             <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                className="text-[3rem] sm:text-[6rem] md:text-[9rem] font-bold tracking-tighter text-white uppercase font-serif leading-[0.85]"
             >
               SELECTED
             </motion.h1>
          </div>
          <div className="overflow-hidden">
             <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
                className="text-[3rem] sm:text-[6rem] md:text-[9rem] font-bold tracking-tighter text-white/40 uppercase font-serif leading-[0.85]"
             >
               WORKS
             </motion.h1>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-20 bg-black">
        <div className="space-y-16">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
               <Magnetic key={category as string}>
                 <button
                   onClick={() => setActiveCategory(category as string)}
                   className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-500 border ${
                     activeCategory === category
                       ? "bg-white text-black border-white"
                       : "bg-white/5 text-white/50 border-white/10 hover:border-white/30 hover:text-white"
                   }`}
                 >
                   {category as string}
                 </button>
               </Magnetic>
            ))}
          </div>

          {/* Staggered Grid */}
          <motion.div layout className="columns-1 md:columns-2 gap-8 space-y-8">
            {filteredProjects.map((project: any, i: number) => (
              <motion.div 
                 key={project.id}
                 layout
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.8, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                 className="break-inside-avoid relative group block cursor-pointer"
              >
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <SpotlightCard className="h-full bg-white/5 border-white/10 rounded-3xl overflow-hidden p-0 relative transition-transform duration-500 group-hover:scale-[1.02]">
                    
                    {/* Visual Asset Area (Placeholder mimicking image layer) */}
                    <div className="w-full h-64 md:h-80 bg-gradient-to-tr from-black via-white/5 to-white/10 relative overflow-hidden flex items-center justify-center border-b border-white/10">
                       <FolderKanban className="w-20 h-20 text-white/20 group-hover:-translate-y-2 group-hover:text-white/40 transition-all duration-700" />
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>

                    {/* Content Box */}
                    <div className="p-8 space-y-6">
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">
                          {project.category}
                        </span>
                        <h3 className="text-3xl font-bold font-serif text-white tracking-widest group-hover:text-white/80 transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-white/60 text-lg leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.tags.map((tag: string) => (
                          <span key={tag} className="px-3 py-1 text-xs font-semibold bg-white/10 text-white rounded-full border border-white/5 backdrop-blur-sm">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-6 flex justify-end overflow-hidden">
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-500">
                           <ArrowRight className="w-5 h-5 text-white group-hover:text-black group-hover:-rotate-45 transition-all duration-500" />
                        </div>
                      </div>
                    </div>

                  </SpotlightCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

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
          category: project.featured === "yes" ? "Featured" : "Case Study",
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

  if (loading || !projects.length) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-t-2 border-white animate-spin" />
      </div>
    )
  }

  return <ProjectsContent projects={projects} />
}
