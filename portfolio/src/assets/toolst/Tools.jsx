import React from 'react'
import './Tools.css'
import { motion } from 'framer-motion'


function Tools() {
  return (
    <div>
      <div  className="toolsett">
      <div  className="toolset">
            <h3>Makes use of</h3>
            <div className="tools1">
            <motion.img
            initial={{y:-50,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:.3,ease: [0.76,0,0.24,1]}}
            width="96" height="96" src="https://img.icons8.com/color/96/git.png" alt="git"/>
            <motion.img
            initial={{y:-50,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:.3,ease: [0.76,0,0.24,1]}} width="96" height="96" src="https://img.icons8.com/color/96/visual-studio-code-2019.png" alt="visual-studio-code-2019"/>
            <motion.img
            initial={{y:-50,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:.3,ease: [0.76,0,0.24,1]}} width="96" height="96" src="https://img.icons8.com/wired/100/postman-api.png" alt="postman-api"/>
            <motion.img
            initial={{y:-50,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:.3,ease: [0.76,0,0.24,1]}} width="96" height="96" src="https://img.icons8.com/fluency/96/api-settings.png" alt="api-settings"/>
            <motion.img
            initial={{y:-50,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:.3,ease: [0.76,0,0.24,1]}} width="96" height="96" src="/FramerMotion.png"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Tools
