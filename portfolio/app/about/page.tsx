"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SpotlightCard } from "@/components/spotlight-card"
import { Marquee } from "@/components/marquee"
import {
  Code, FileCode, Palette, Server, Database, GitBranch,
  Github, Cloud, Zap, Globe, Box, Target
} from "lucide-react"

function AboutContent({ data }: { data: any }) {
  const containerRef = useRef(null)
  const { scrollYProgress: heroProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const yHero = useTransform(heroProgress, [0, 1], [0, 300])
  
  const bioRef = useRef(null)
  const { scrollYProgress: bioProgress } = useScroll({ target: bioRef, offset: ["start 0.9", "start 0.3"] })

  const { skills: skillsArray, experience: experienceData, education: educationData } = data

  const getSkillIcon = (skill: string) => {
    const iconMap: { [key: string]: any } = {
      React: Code, "Next.js": FileCode, TypeScript: FileCode,
      "Tailwind CSS": Palette, "Framer Motion": Zap, "Node.js": Server,
      "Express.js": Server, PostgreSQL: Database, MongoDB: Database,
      "REST APIs": Globe, "Gemini API": Zap, Python: Code,
      Git: GitBranch, AWS: Cloud, Vercel: Cloud, GitHub: Github,
      Postman: Box, HTML: FileCode, CSS: Palette, JavaScript: Code,
    }
    return iconMap[skill] || Code
  }

  const bioWords = "I'm a full-stack developer with a passion for creating elegant solutions to complex problems. With over 5 years of experience, I've worked across the entire stack—from crafting intuitive user interfaces to architecting robust backend systems. I believe in writing clean, maintainable code and staying updated with the latest technologies to build the future.".split(" ")

  return (
    <div className="min-h-screen bg-black relative selection:bg-white selection:text-black" ref={containerRef}>
      <Navbar />

      {/* Cinematic Hero */}
      <motion.section 
        className="h-[60vh] md:h-[80vh] w-full flex flex-col items-center justify-center relative border-b border-white/10"
        style={{ y: yHero }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none" />
        <div className="text-center z-10 space-y-6">
          <div className="overflow-hidden">
             <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                className="text-[4rem] md:text-[8rem] font-bold tracking-tighter text-white uppercase font-serif leading-none"
             >
               ABOUT ME
             </motion.h1>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
             <p className="text-xl md:text-2xl text-white/50 tracking-widest uppercase font-light">
                The Architect Behind The Code
             </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Bio / Text Reveal */}
      <section className="py-24 md:py-48 px-4 md:px-24 max-w-7xl mx-auto" ref={bioRef}>
         <div className="flex gap-4 items-center mb-12">
            <Target className="w-6 h-6 text-white/30" />
            <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-white/40">My Journey</h2>
         </div>
         <p className="text-2xl md:text-5xl md:leading-[1.4] font-medium text-white/10 flex flex-wrap gap-x-[0.2em] gap-y-[0.1em]">
            {bioWords.map((word, i) => {
               const step = 1 / bioWords.length
               const start = i * step
               const end = start + step
               // eslint-disable-next-line react-hooks/rules-of-hooks
               const opacity = useTransform(bioProgress, [start, end], [0.1, 1]);
               return (
                 <span key={i} className="relative">
                    <span className="absolute opacity-10">{word}</span>
                    <motion.span style={{ opacity }} className="text-white">{word}</motion.span>
                 </span>
               )
            })}
         </p>
      </section>

      {/* Dynamic Infinite Marquee for Skills */}
      <section className="py-12 border-y border-white/10 bg-[#050505] overflow-hidden">
         <Marquee className="py-8">
            {Array.isArray(skillsArray) && skillsArray.map((skill: string) => {
               const Icon = getSkillIcon(skill)
               return (
                 <div key={skill} className="flex items-center gap-4 mx-8 group">
                    <Icon className="w-8 h-8 text-white/20 group-hover:text-white transition-colors duration-500" />
                    <span className="text-3xl md:text-5xl font-bold tracking-tighter text-white/20 uppercase group-hover:text-white transition-colors duration-500">
                      {skill}
                    </span>
                 </div>
               )
            })}
         </Marquee>
      </section>

      {/* Experience & Education Grid */}
      <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto space-y-32">
         {/* Experience */}
         <div>
            <h2 className="text-3xl md:text-5xl font-serif text-white tracking-widest uppercase mb-16 border-b border-white/10 pb-4">
              Experience
            </h2>
            <div className="space-y-12 pl-4 md:pl-8 border-l border-white/10">
               {Array.isArray(experienceData) && experienceData.map((exp: any, i: number) => (
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true, margin: "-100px" }}
                    key={i} 
                    className="relative pl-8 md:pl-12"
                 >
                    {/* Glowing Timeline Node */}
                    <div className="absolute top-2 -left-[5px] w-[10px] h-[10px] rounded-full bg-white shadow-[0_0_15px_5px_rgba(255,255,255,0.3)]" />
                    <SpotlightCard className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
                       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                          <span className="px-4 py-1.5 text-xs font-semibold bg-white text-black rounded-full uppercase tracking-wider">
                            {exp.duration}
                          </span>
                       </div>
                       <p className="text-white/60 font-serif tracking-widest text-lg mb-6">{exp.company}</p>
                       {exp.description && (
                         <p className="text-white/40 leading-relaxed">{exp.description}</p>
                       )}
                    </SpotlightCard>
                 </motion.div>
               ))}
            </div>
         </div>

         {/* Education */}
         <div>
            <h2 className="text-3xl md:text-5xl font-serif text-white tracking-widest uppercase mb-16 border-b border-white/10 pb-4">
              Education
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
               {Array.isArray(educationData) && educationData.map((edu: any, i: number) => (
                 <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true, margin: "-100px" }}
                    key={i}
                 >
                    <SpotlightCard className="bg-white/5 border border-white/10 p-8 rounded-3xl h-full flex flex-col justify-between">
                       <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                          <p className="text-white/60 font-serif tracking-wide">{edu.university}</p>
                       </div>
                       <div className="flex items-center justify-between mt-8 border-t border-white/10 pt-4 text-white/40 font-semibold tracking-wider text-sm uppercase">
                          <span>{edu.year}</span>
                          <span>CGPA: <span className="text-white">{edu.cgpa}</span></span>
                       </div>
                    </SpotlightCard>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      <Footer />
    </div>
  )
}

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

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-t-2 border-white animate-spin" />
      </div>
    )
  }

  return <AboutContent data={data} />
}
