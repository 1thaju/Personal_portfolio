import React from 'react'
import { motion } from "framer-motion"
import './Lang.css'

function Lang() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1'  data-scroll-css-progress className='program'>
        <div className="marquee">
      <motion.h1
      initial={{x:'0'}}
      animate={{x:"-100%"}}
      transition={{repeat:Infinity , ease:'linear', duration:10}}
      >Full Stack Developer</motion.h1>
      <motion.h1
      initial={{x:'0'}}
      animate={{x:"-100%"}}
      transition={{repeat:Infinity , ease:'linear', duration:10}}
      >Full Stack Developer</motion.h1>
      <motion.h1
      initial={{x:'0'}}
      animate={{x:"-100%"}}
      transition={{repeat:Infinity , ease:'linear', duration:10}}
      >Full Stack Developer</motion.h1>
      </div>
    </div>
    
  )
}

export default Lang
