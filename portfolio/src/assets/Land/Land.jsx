import React from 'react';
import { MdWavingHand } from "react-icons/md";
import { motion } from 'framer-motion';
import './Land.css';

function Land() {
  return (
    <div data-scroll data-scroll-speed="-0.1" className="landing">
      <div className="intro">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.76,0,0.24,1] }}
        >
          Hi, I'm <MdWavingHand />
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.76,0,0.24,1] }}
        >
          Thajul Niyas
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.76,0,0.24,1] }}
        className="into_img"
      >
        <img src="/introImg.png" alt="intro_img" className="img1" />
      </motion.div>
    </div>
  );
}

export default Land;
