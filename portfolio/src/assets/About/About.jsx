import React from 'react'
import './About.css'
function About() {
  const handleOpenPdf = () => {
    window.open('/THAJUL RESUME.pdf', '_blank');
  };
  return (
    <div className='main_about'>
    <div data-scroll data-scroll-speed='0.1' className='about'>
        <div className="snap">
          <img src='/about.png' alt='image'></img>
        </div>
        <div className="text">
          <p>Hi, I'm Thajul Niyas, a <span>Full Stack web developer</span> currently pursuing a B.E. in Computer Science at J.C.T. College of Engineering and Technology in Coimbatore. I have a strong passion for creating dynamic and engaging web applications. I'm always eager to explore new ideas and bring them to life through my work. Let's connect and create something extraordinary together!</p>
        </div>
    </div>
    <button onClick={handleOpenPdf}>Download Cv</button>
    </div>
  )
}

export default About
