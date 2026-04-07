"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Mail } from "lucide-react"
import { Magnetic } from "./magnetic"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ]

  return (
    <>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <nav className="hidden md:flex items-center gap-2 p-2 bg-card/60 backdrop-blur-2xl border border-border/30 rounded-full shadow-2xl shadow-black/50">
          <Magnetic>
            <Link href="/" className="px-5 py-2 font-bold text-foreground hover:text-white transition-colors rounded-full font-serif tracking-widest">
              TN
            </Link>
          </Magnetic>
          
          <div className="w-px h-6 bg-border/50 mx-2" />
          
          {navItems.map((item) => (
             <Magnetic key={item.href}>
                <Link
                  href={item.href}
                  className={`px-5 py-2 flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                    pathname === item.href ? "bg-white text-black" : "text-muted-foreground hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
             </Magnetic>
          ))}
          
          <div className="w-px h-6 bg-border/50 mx-2" />
          
          <Magnetic>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=thajulniyas100@gmail.com&su=Hello%20Thaju&body=Haai%20Thaju"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-2 bg-white text-black rounded-full text-sm font-semibold hover:scale-105 transition-transform"
            >
              <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Let's Connect
            </a>
          </Magnetic>
        </nav>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden fixed top-0 w-full z-50 p-4">
         <div className="flex items-center justify-between bg-card/80 backdrop-blur-2xl border border-border/30 rounded-2xl p-4 shadow-2xl shadow-black/50">
            <Link href="/" className="text-xl font-bold font-serif tracking-widest text-white">TN</Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
         </div>
         
         <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="mt-2 bg-card/95 backdrop-blur-xl border border-border/30 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl shadow-black/50"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 rounded-xl transition-colors font-medium ${
                      pathname === item.href
                        ? "bg-white text-black"
                        : "text-muted-foreground hover:bg-white/10 hover:text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=thajulniyas100@gmail.com&su=Hello%20Thaju&body=Haai%20Thaju"
                  target="_blank"
                  className="mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-white text-black rounded-xl font-semibold hover:opacity-90 active:scale-95 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail className="w-4 h-4" /> Let's Connect
                </a>
              </motion.div>
            )}
         </AnimatePresence>
      </div>
    </>
  )
}
