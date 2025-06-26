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
          <p>I'm Thajul Niyas, a passionate <span>Full Stack Developer</span> with hands-on experience building scalable web applications using the MERN stack and modern tools like Prisma, JWT, and Docker. From real-time chat apps to full-fledged healthcare and e-commerce platforms, I enjoy crafting clean, secure, and user-friendly solutions.<br/><br/>Skilled in both frontend and backend development, I thrive in collaborative environments and love exploring emerging technologies such as AI integration, automation, and cloud platforms like AWS. Currently pursuing my B.E. in Computer Science, I'm always eager to learn, build, and contribute to meaningful digital products.</p>
        </div>
    </div>
    <button onClick={handleOpenPdf}>Download Cv</button>
    </div>
  )
}

export default About
