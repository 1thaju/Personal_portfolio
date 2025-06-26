import React from 'react'
import './Project.css'
function Project() {
  return (
    <div className='proj_list'>
      <div className="projects">
        <div className="project">
          <img src='/solesavvy.png' alt='Sole Savvy Project'/>
          <h3>Sole Savvy</h3>
          <p>A sleek shoe-selling e-commerce app with dynamic product catalog, search, shopping cart, and payment integration. Built with React, Node.js, Express, and MongoDB for a seamless shopping experience.
          </p>
          <div className="project_links">
            <a href='https://github.com/1thaju/Solesavvy' target="_blank" rel="noopener noreferrer"><button>View Code</button></a>
            {/* Add a live demo link if available */}
            {/* <a href='YOUR_LIVE_DEMO_LINK_HERE' target="_blank" rel="noopener noreferrer"><button className="demo_btn">Live Demo</button></a> */}
          </div>
        </div>
        <div className="project">
          <img src='/crud.jpg' alt='CRUD Application Project'/>
          <h3>CRUD Application</h3>
          <p>A CRUD application for efficient data management, allowing users to add, view, update, and delete records. Developed with Node.js, Express, and MongoDB, this project strengthened my back-end and database skills.
          </p>
          <div className="project_links">
            <a href='https://github.com/1thaju/CRUD-MERN' target="_blank" rel="noopener noreferrer"><button>View Code</button></a>
          </div>
        </div>
        <div className="project">
          <img src='/chatbot.png' alt='AI Chatbot Project'/>
          <h3>AI Chatbot</h3>
          <p>An AI chatbot built with React, Google's Generative AI API, and Node.js. It engages in natural conversations, answers questions, and provides relevant information, enhancing my skills in integrating AI into web applications.
          </p>
          <div className="project_links">
            <a href='https://github.com/1thaju/Chatbot_gemini' target="_blank" rel="noopener noreferrer"><button>View Code</button></a>
          </div>
        </div>
        <div className="project">
          <img src='/Chatapp.png' alt='Chat Application Project'/>
          <h3>Chat Application</h3>
          <p>A real-time chat application using HTML, CSS, JavaScript, Node.js, and Socket.io. It offers instant messaging and dynamic interactions, improving my web development and real-time data handling skills.
          </p>
          <div className="project_links">
            <a href='https://github.com/1thaju/realtime_chat_App' target="_blank" rel="noopener noreferrer"><button>View Code</button></a>
          </div>
        </div>
        <div className="project">
          <img src='/netflix.png' alt='Netflix Clone Project'/>
          <h3>Netflix Clone</h3>
          <p>A Netflix clone using React and TMDb API, mimicking its UI for browsing and searching movies/TV shows. This project improved my skills in building dynamic web applications and integrating third-party APIs.
          </p>
          <div className="project_links">
            <a href='https://github.com/1thaju/netflix_clone' target="_blank" rel="noopener noreferrer"><button>View Code</button></a>
          </div>
        </div>
        <div className="project">
          <img src='/NewsAgg.png' alt='News Aggregator Project'/>
          <h3>News Aggregator</h3>
          <p>Flash Facts, a news aggregator with React, News API, and Bootstrap. It collects and displays news articles by category, enhancing my skills in API integration and creating user-friendly, content-rich web applications.
          </p>
          <div className="project_links">
            <a href='https://github.com/1thaju/news_aggregator' target="_blank" rel="noopener noreferrer"><button>View Code</button></a>
          </div>
        </div>
        <div className="project">
          <img src='/nike.png' alt='Nike Landing Page Project'/>
          <h3>Nike Landing Page</h3>
          <p>A visually appealing Nike landing page with engaging images and interactive elements, built using HTML, CSS, and JavaScript. This project enhanced my front-end development and design skills.
          </p>
          <div className="project_links">
            <a href='https://github.com/1thaju/nike' target="_blank" rel="noopener noreferrer"><button>View Code</button></a>
          </div>
        </div>
        <div className="project">
          <img src='/olx.png' alt='OLX Clone Project'/>
          <h3>OLX Clone</h3>
          <p>An OLX clone using React and Firebase for classified ads, browsing, and item search. It enhanced my full-stack development skills and integration of cloud services.
          </p>
          <div className="project_links">
            <a href='https://github.com/1thaju/olx' target="_blank" rel="noopener noreferrer"><button>View Code</button></a>
          </div>
        </div>
      </div>
      <a href='https://github.com/1thaju' target="_blank" rel="noopener noreferrer"><h4 className='explore'>Explore More Projects</h4></a>
    </div>
  )
}

export default Project
