import React from 'react'
import './Project.css'
function Project() {
  return (
    <div className='proj_list'>
      <div className="projects">
        <div className="project">
          <img src='/solesavvy.png'/>
          <h3>Sole Savvy</h3>
          <p>Sole Savvy is a sleek and user-friendly shoe-selling e-commerce app built with React.js, Node.js, Express.js, and MongoDB. The app features a dynamic product catalog, advanced search and filter options, a secure shopping cart, and seamless payment integration. It offers users an efficient and enjoyable shopping experience, handling everything from browsing to checkout with ease.
          </p>
          <a href='https://github.com/1thaju/Solesavvy'><button>View</button></a>
        </div>
        <div className="project">
          <img src='/crud.jpg'/>
          <h3>CRUD</h3>
          <p> a CRUD (Create, Read, Update, Delete) application using Node.js, Express, and MongoDB. The project involved creating a RESTful API that allows users to manage data efficiently. With this application, users can add new records, view existing data, update entries, and delete records. This project helped me strengthen my skills in back-end development and working with databases.
          </p>
          <a href='https://github.com/1thaju/CRUD-MERN'><button>View</button></a>
        </div>
        <div className="project">
          <img src='/chatbot.png'/>
          <h3>Ai Chatbot</h3>
          <p> AI chatbot using React, Google's Generative AI API, and Node.js. The chatbot engages in natural conversations, answers user questions, and provides relevant information. By leveraging React for the front end and Node.js for handling API requests, I created a responsive and interactive user experience. This project deepened my knowledge of integrating AI into web applications and working with modern JavaScript frameworks.
          </p>
          <a href='https://github.com/1thaju/Chatbot_gemini'><button>View</button></a>
        </div>
        <div className="project">
          <img src='/Chatapp.png'/>
          <h3>Chat Application</h3>
          <p> A real-time chat application using HTML, CSS, JavaScript, Node.js, and Socket.io. The app allows users to send and receive messages instantly, providing a seamless chatting experience. By utilizing Socket.io, I implemented real-time communication between clients and the server, ensuring efficient and dynamic interactions. This project enhanced my skills in web development and real-time data handling.
          </p>
          <a href='https://github.com/1thaju/realtime_chat_App'><button>View</button></a>
        </div>
        <div className="project">
          <img src='/netflix.png'/>
          <h3>NetFlix Clone</h3>
          <p> Netflix clone using React and The Movie Database (TMDb) API. The application mimics Netflix's user interface, allowing users to browse and search for movies and TV shows, view details, and see trending content. Leveraging React for the front end and TMDb for fetching movie data, I created a responsive and interactive user experience similar to the original platform. This project improved my skills in building dynamic web applications and integrating third-party APIs.
          </p>
          <a href='https://github.com/1thaju/netflix_clone'><button>View</button></a>
        </div>
        <div className="project">
          <img src='/NewsAgg.png'/>
          <h3>News Aggregator</h3>
          <p>  Flash Facts, a news aggregator application using React, the News API, and Bootstrap. The app collects and displays news articles from various sources, organized by categories such as technology, sports, and world news. Users can view article summaries and access full stories through external links. By utilizing React for the user interface and News API for fetching articles, I created a clean, responsive design with Bootstrap. This project enhanced my skills in working with APIs and creating user-friendly, content-rich web applications.
          </p>
          <a href='https://github.com/1thaju/news_aggregator'><button>View</button></a>
        </div>
        <div className="project">
          <img src='/nike.png'/>
          <h3>Nike landing Page</h3>
          <p>   Nike landing page using HTML, CSS, and JavaScript. The page features a visually appealing layout that highlights Nike's products and promotions with engaging images and interactive elements. Utilizing HTML for structure, CSS for styling, and JavaScript for dynamic functionality, I created a modern and responsive design that enhances user experience and showcases Nike's brand effectively. This project improved my skills in front-end development and design.
          </p>
          <a href='https://github.com/1thaju/nike'><button>View</button></a>
        </div>
        <div className="project">
          <img src='/olx.png'/>
          <h3>Olx Clone</h3>
          <p>   OLX clone using React and Firebase. The application allows users to post classified ads, browse listings, and search for items across various categories. Firebase handles user authentication, real-time database interactions, and file storage, providing a seamless and responsive experience. By leveraging React for the front end and Firebase for the back end, I created a functional and scalable platform that mimics the core features of OLX. This project enhanced my skills in building full-stack applications and integrating cloud services.
          </p>
          <a href='https://github.com/1thaju/olx'><button>View</button></a>
        </div>
      </div>
      <a href='https://github.com/1thaju'><h4 className='explore'>   Explore More Projects</h4></a>
    </div>
  )
}

export default Project
