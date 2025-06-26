import React, { useState } from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

function Navbar({ onSectionClick }) {
    const elements = [
        { name: "Portfolio", action: () => onSectionClick("Portfolio") },
        { name: "About Me", action: () => onSectionClick("About Me") },
        { name: "Project", route: "/project" } // Project has a route
    ];
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleMenuItemClick = (action) => {
        if (action) {
            action();
        }
        setIsOpen(false);
    };

    return (
        <div>
            <nav className='mainnav'>
                <div className="logo">
                    <label>TJ</label>
                </div>
                <div className='elements'>
                    {elements.map((element, index) => (
                        element.route ? (
                            <NavLink
                                key={index}
                                to={element.route}
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={() => setIsOpen(false)}
                            >
                                {element.name}
                            </NavLink>
                        ) : (
                            <a
                                key={index}
                                onClick={() => handleMenuItemClick(element.action)}
                            >
                                {element.name}
                            </a>
                        )
                    ))}
                </div>
                <button onClick={() => onSectionClick("Contact")}>Contact Me</button>
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </nav>
            <motion.nav
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`menu ${isOpen ? 'open' : ''}`}>
                <ul className='hamelem'>
                    {elements.map((element, index) => (
                        element.route ? (
                            <li key={index}>
                                <NavLink
                                    to={element.route}
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {element.name}
                                </NavLink>
                            </li>
                        ) : (
                            <li key={index}>
                                <a onClick={() => handleMenuItemClick(element.action)}>{element.name}</a>
                            </li>
                        )
                    ))}
                    <li><button onClick={() => handleMenuItemClick(() => onSectionClick("Contact"))}>Contact</button></li>
                </ul>
            </motion.nav>
        </div>
    )
}

export default Navbar;
