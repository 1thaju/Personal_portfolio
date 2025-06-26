import React, { useState } from 'react'
import './Contact.css'
import { FaMapLocationDot } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
function Contact() {
    const [message,setMessage] = useState('')
    const handleClick =()=>{
        window.location.href = `mailto:thajulniyaspvt@gmail.com?subject=Connect%20 With %20Thaju&body=${message}`;
    }
    const handleInput = (e)=>{
        e.preventDefault()
        setMessage(e.target.value)
    }
  return (
    <div data-scroll data-scroll-speed="0.7" className='contact'>
      <h1>Keep connected</h1>
      <div className="main_cont">
      <textarea  placeholder='Share your thoughts' onChange={handleInput}/>
        <button onClick={handleClick}>Connect</button>
      </div>
      <div className='social_media'>
        <a href="https://www.linkedin.com/in/thajul-niyas/">linkedin</a>
        <a href="https://github.com/1thaju">github</a>
        <a href="https://www.instagram.com/thaju________________?igsh=MXcwdXp4ZXoyMXNlOA==">InstaGram</a>
      </div>
      <div className='detail_cont'>
      <div className="address">
        <h2>Location <FaMapLocationDot /></h2>
        <label>Wayanad</label>
        <label>Kerala</label>
        <label>India</label>
      </div>
      <div className="education">
        <h2>Education <IoBookSharp /></h2>
        <label>JCT College Of Engineering And Technology   2021-2025</label>
        <label>Computer Science And Engineering</label>
      </div>
      </div>
      
    </div>
  )
}

export default Contact
