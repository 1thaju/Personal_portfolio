"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Mail } from "lucide-react"
import { useRef } from "react"
import { Magnetic } from "./magnetic"
import Link from "next/link"

export function ConnectSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  // Subtle parallax for the background glow
  const y = useTransform(scrollYProgress, [0, 1], [-100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 1, 1])

  return (
    <section 
      ref={containerRef}
      className="relative z-20 bg-black min-h-[70vh] flex flex-col items-center justify-center overflow-hidden py-24 border-t border-white/5"
    >
      {/* Background Effects */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-radial from-white/10 via-transparent to-transparent blur-[100px] pointer-events-none" 
      />
      
      <div className="max-w-7xl mx-auto px-4 w-full flex flex-col items-center justify-center text-center z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
        >
          <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-semibold tracking-[0.2em] uppercase text-white/50 backdrop-blur-md mb-8 inline-block">
            What's Next
          </span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter text-white leading-[0.9] uppercase mb-12"
        >
          Let's Work <br />
          <span className="text-white/30 italic font-serif">Together</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          className="mt-8"
        >
          <Magnetic>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=thajulniyas100@gmail.com&su=Hello%20Thaju&body=Haai%20Thaju"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-4 bg-white text-black px-10 py-6 md:px-14 md:py-8 pl-12 md:pl-16 rounded-full overflow-hidden transition-all hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-neutral-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]" />
              
              <span className="relative z-10 text-xl md:text-3xl font-semibold tracking-tight">
                Send a message
              </span>
              
              <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center group-hover:-rotate-45 transition-transform duration-500">
                <ArrowUpRight className="w-5 h-5 md:w-8 md:h-8 text-white" />
              </div>
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 1, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
           className="mt-20 sm:mt-32 w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/10 pt-12"
        >
           <div className="flex flex-col gap-2">
             <h4 className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em]">Contact Details</h4>
             <a href="https://mail.google.com/mail/?view=cm&fs=1&to=thajulniyas100@gmail.com&su=Hello%20Thaju&body=Haai%20Thaju" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-white/70 transition-colors">
               thajulniyas100@gmail.com
             </a>
             <p className="text-lg text-white/70">+917736701050</p>
           </div>
           
           <div className="flex flex-col gap-2">
             <h4 className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em]">Socials</h4>
             <div className="flex gap-6">
                <a href="https://linkedin.com/in/thajul-niyas" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-white/70 transition-colors">LinkedIn</a>
                <a href="https://github.com/1thaju" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-white/70 transition-colors">GitHub</a>
                <a href="https://www.instagram.com/thaju.n_?igsh=MXcwdXp4ZXoyMXNlOA==" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-white/70 transition-colors">Instagram</a>
             </div>
           </div>

           <div className="flex flex-col gap-2 md:items-end">
             <h4 className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em]">Local Time</h4>
             <p className="text-lg text-white/70">Bangalore, Karnataka</p>
           </div>
        </motion.div>
      </div>
    </section>
  )
}
