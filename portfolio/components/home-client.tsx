"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Code, User, FolderKanban, Sparkles } from "lucide-react"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { SpotlightCard } from "./spotlight-card"
import { Marquee } from "./marquee"
import { Magnetic } from "./magnetic"
import { ConnectSection } from "./connect-section"
export interface ProjectData {
  id: string
  title: string
  description: string
  tags: string[]
  slug: string
}

interface HomeClientProps {
  featuredProjects: ProjectData[]
}

function StackedCard({ project, index, progress, range, targetScale }: any) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  })
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <motion.div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0" style={{ scale, top: `calc(1vh + ${index * 30}px)` }}>
       <SpotlightCard className="w-full max-w-[1000px] h-auto min-h-[60vh] max-h-[85vh] lg:h-[75vh] bg-[linear-gradient(110deg,#1e1e1e,45%,#2a2a2a,55%,#1e1e1e)] backdrop-blur-3xl border border-white/10 rounded-[30px] md:rounded-[40px] p-6 lg:p-12 flex flex-col lg:flex-row gap-6 md:gap-8 overflow-hidden overflow-y-auto lg:overflow-hidden relative shadow-2xl shadow-black/50 mx-4">
          <div className="flex-1 flex flex-col justify-start lg:justify-center space-y-6 md:space-y-8 z-10 py-4 h-full">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-tight">{project.title}</h3>
            <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-lg">{project.description}</p>
            <div className="flex flex-wrap gap-2 pt-2 md:pt-4">
              {project.tags.map((tag: string) => (
                <span key={tag} className="px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-semibold bg-white/5 text-white rounded-full border border-white/10 uppercase tracking-widest backdrop-blur-md">
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-4 md:pt-8 pb-2">
              <Magnetic>
                  <Link href={`/projects/${project.slug}`} className="group inline-flex items-center gap-3 md:gap-4 text-black font-semibold w-fit bg-white px-6 md:px-8 py-3 md:py-4 rounded-full transition-all hover:scale-105">
                    View Case Study 
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-black flex items-center justify-center group-hover:-rotate-45 transition-transform duration-500">
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                  </Link>
              </Magnetic>
            </div>
          </div>
          <div className="lg:w-[45%] h-64 lg:h-full relative rounded-2xl lg:rounded-3xl overflow-hidden block border border-white/10 shrink-0 mt-6 lg:mt-0">
             <motion.div className="w-full h-full relative" style={{ scale: imageScale }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-white/10 z-10 mix-blend-overlay" />
                <div className="w-full h-full bg-white/5 flex items-center justify-center">
                   <FolderKanban className="w-20 h-20 md:w-32 md:h-32 text-white/20" />
                </div>
             </motion.div>
          </div>
       </SpotlightCard>
    </motion.div>
  )
}

export function HomeClient({ featuredProjects }: HomeClientProps) {
  const containerRef = useRef(null)
  
  const { scrollYProgress: heroProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const yHero = useTransform(heroProgress, [0, 1], [0, 400])
  const opacityHero = useTransform(heroProgress, [0, 0.8], [1, 0])

  const aboutRef = useRef(null)
  const { scrollYProgress: aboutProgress } = useScroll({ target: aboutRef, offset: ["start 0.8", "start 0.2"] })
  
  const projectsRef = useRef(null)
  const { scrollYProgress: projectsProgress } = useScroll({ target: projectsRef, offset: ["start start", "end end"] })

  const phrase = "I specialize in modern web technologies, creating elegant digital experiences that bridge design and engineering. Currently building scalable applications with Next.js, and always learning."
  const words = phrase.split(" ")

  return (
    <div className="min-h-screen bg-black relative selection:bg-white selection:text-black" ref={containerRef}>
      <Navbar />

      <motion.section 
        className="h-[100svh] w-full flex flex-col items-center justify-center relative overflow-hidden"
        style={{ y: yHero, opacity: opacityHero }}
      >
        <div className="absolute inset-0 z-0 opacity-70 mix-blend-screen overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-0 pointer-events-none" />
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0" />
        
        <div className="z-10 text-center space-y-4 px-4 w-full flex flex-col items-center pointer-events-none">
          <div className="overflow-hidden">
             <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                className="text-[12vw] sm:text-[8rem] md:text-[12rem] font-bold tracking-tighter text-white leading-[0.85] font-serif uppercase"
             >
               THAJUL
             </motion.h1>
          </div>
          <div className="overflow-hidden">
             <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
                className="text-[12vw] sm:text-[8rem] md:text-[12rem] font-bold tracking-tighter text-white/30 leading-[0.85] font-serif uppercase"
             >
               NIYAS
             </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
            className="pt-12"
          >
             <p className="text-xl md:text-3xl text-white/60 font-light flex items-center justify-center gap-6 tracking-wide">
               <span className="w-16 h-px bg-white/20 block hidden sm:block" />
               FULL STACK DEVELOPER
               <span className="w-16 h-px bg-white/20 block hidden sm:block" />
             </p>
          </motion.div>
        </div>
        
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 2.5, duration: 1 }}
           className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/40"
        >
           <span className="text-xs uppercase tracking-[0.3em] font-semibold">Scroll</span>
           <div className="w-px h-24 bg-gradient-to-b from-white/30 to-transparent overflow-hidden relative">
              <motion.div 
                 animate={{ y: ["-100%", "200%"] }} 
                 transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                 className="w-full h-1/2 bg-white absolute top-0"
              />
           </div>
        </motion.div>
      </motion.section>

      <section className="bg-black z-20 relative py-8 overflow-hidden flex flex-col justify-center border-y border-white/5">
        <Marquee className="py-2">
          {["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion", "GSAP", "PostgreSQL", "MongoDB"].map((tech) => (
            <span key={tech} className="text-5xl md:text-7xl font-bold tracking-tighter text-white/5 uppercase mx-12 hover:text-white/20 transition-colors duration-500">
              {tech}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="min-h-[120vh] w-full flex items-center justify-center px-6 md:px-24 bg-[#050505] relative z-20" ref={aboutRef}>
        <div className="max-w-6xl w-full">
           <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.2] font-medium text-white/10 flex flex-wrap gap-x-[0.2em] gap-y-[0.1em]">
              {words.map((word, i) => {
                 const step = 1 / words.length;
                 const start = i * step;
                 const end = start + step;
                 // eslint-disable-next-line react-hooks/rules-of-hooks
                 const opacity = useTransform(aboutProgress, [start, end], [0.1, 1]);
                 return (
                   <span key={i} className="relative">
                      <span className="absolute opacity-10">{word}</span>
                      <motion.span style={{ opacity }} className="text-white">{word}</motion.span>
                   </span>
                 )
              })}
           </p>
           
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
             className="pt-24 mt-24 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pb-12"
           >
              <div>
                 <h2 className="text-sm font-semibold text-white/40 tracking-[0.3em] uppercase mb-4">Location</h2>
                 <p className="text-2xl md:text-3xl text-white max-w-sm font-light">Based in Bangalore, Karnataka. Building digital solutions worldwide.</p>
              </div>
              <Magnetic>
                 <Link href="/about" className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-500 group relative overflow-hidden">
                    <span className="absolute inset-0 bg-white translate-y-[100%] rounded-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]" />
                    <ArrowRight className="w-10 h-10 group-hover:-rotate-45 transition-transform duration-500 relative z-10" />
                 </Link>
              </Magnetic>
           </motion.div>
        </div>
      </section>

      <section ref={projectsRef} className="bg-black relative z-20 py-24">
         <div className="max-w-6xl mx-auto px-4 py-12 mb-20">
            <h2 className="text-[4rem] md:text-[8rem] font-bold tracking-tighter text-white leading-none uppercase">Selected <br/><span className="text-white/20 italic font-serif">Works</span></h2>
         </div>
         <div className="relative w-full" style={{ height: `${(featuredProjects.length + 1) * 100}vh` }}>
            {featuredProjects.map((project, i) => {
               const targetScale = 1 - ((featuredProjects.length - i) * 0.04);
               const rangeStart = i * (1 / (featuredProjects.length || 1));
               return (
                  <StackedCard 
                     key={project.id} 
                     index={i}
                     project={project} 
                     progress={projectsProgress} 
                     range={[rangeStart, 1]} 
                     targetScale={targetScale} 
                  />
               )
            })}
         </div>
      </section>

      <ConnectSection />

      <div className="bg-[#0a0a0a] relative z-30 flex flex-col justify-end">
        <div className="w-full h-px bg-white/10" />
        <Footer />
      </div>
    </div>
  )
}
