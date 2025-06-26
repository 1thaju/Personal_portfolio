import React, { useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './assets/NavBar/Navbar';
import Land from './assets/Land/Land';
import Lang from './assets/Language/Lang';
import About from './assets/About/About';
import Knowledge, { Card } from './assets/Knowledge/Knowledge';
import Tools from './assets/toolst/Tools';
import Contact from './assets/Contact/Contact';
import Project from './assets/Project/Project';

function MainContent() {
    const scrollContainerRef = useRef(null);
    const locomotiveScrollRef = useRef(null);
    const portfolioRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const tool = [
        [<img width="144" height="144" src="https://img.icons8.com/color/144/html-5--v1.png" alt="html-5--v1" />, 60, 90],
        [<img width="144" height="144" src="https://img.icons8.com/color/144/css3.png" alt="css3" />, 80, 120],
        [<img width="144" height="144" src="https://img.icons8.com/fluency/144/javascript.png" alt="javascript" />, 100, 140],
        [<img width="144" height="144" src="https://img.icons8.com/color/144/react-native.png" alt="react-native" />, 205, 245],
        [<img width="144" height="144" src="https://img.icons8.com/fluency/144/bootstrap.png" alt="bootstrap" />, 260, 290],
        [<img width="144" height="144" src="https://img.icons8.com/color/144/nodejs.png" alt="nodejs" />, 290, 320],
        [<img width="144" height="144" src="https://img.icons8.com/color/144/mongo-db.png" alt="mongo-db" />, 340, 10],
        [<img width="144" height="144" src="https://img.icons8.com/fluency/144/python.png" alt="python" />, 20, 40],
    ];

    useEffect(() => {
        locomotiveScrollRef.current = new LocomotiveScroll({
            el: scrollContainerRef.current,
            smooth: true,
        });

        return () => {
            locomotiveScrollRef.current.destroy();
        };
    }, []);

    const handleSectionClick = (section) => {
        let targetRef = null;

        switch (section) {
            case "Portfolio":
                targetRef = portfolioRef;
                break;
            case "About Me":
                targetRef = aboutRef;
                break;
            case "Contact":
                targetRef = contactRef;
                break;
            default:
                return;
        }

        if (targetRef && targetRef.current && locomotiveScrollRef.current) {
            locomotiveScrollRef.current.scrollTo(targetRef.current);
        }
    };

    return (
        <div id="scroll-container" ref={scrollContainerRef}>
            <Navbar onSectionClick={handleSectionClick} />
            <div data-scroll-section ref={portfolioRef}>
                <Land />
            </div>
            <div data-scroll-section>
                <Lang />
            </div>
            <div data-scroll-section ref={aboutRef}>
                <About />
            </div>
            <div data-scroll-section>
                <h1 className='head'>Core Competencies</h1>
            </div>
            <div data-scroll-section>
                <Knowledge>
                    {tool.map(([emoji, hueA, hueB], index) => (
                        <Card emoji={emoji} hueA={hueA} hueB={hueB} key={index} />
                    ))}
                </Knowledge>
            </div>
            <div data-scroll-section>
                <Tools />
            </div>
            <div data-scroll-section ref={contactRef}>
                <Contact />
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainContent />} /> {/* Main content at the root path */}
                <Route path="/project" element={<Project />} /> {/* Project on a separate page */}
            </Routes>
        </Router>
    );
}

export default App;
