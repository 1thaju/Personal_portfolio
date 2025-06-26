import React from "react";
import "./Knowledge.css";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};



export function Card({ emoji }) {
  

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background:"black" }} />
      <motion.div className="card" variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
}

export default function Knowledge({ children }) {
  return (
    <div className="knowledge_main_container">
        <h1>My Skills & Knowledge</h1>
        <div data-scroll data-scroll-speed="-0.2"className="knowledge-container">{children}</div>
        
    </div>
)
}
