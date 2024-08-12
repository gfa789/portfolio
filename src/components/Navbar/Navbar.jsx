import React, { useState, useEffect } from 'react';
import { useTheme } from '../../utilities/ThemeContext';
import { useScroll } from '../../utilities/ScrollContext';
import './Navbar.css';
import LoadingBar from '../LoadingBar/LoadingBar';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { toggleScroll } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        toggleScroll(); // Re-enable scrolling if resized to desktop while menu was open
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen, toggleScroll]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    toggleScroll(); // Toggle scroll when opening/closing mobile menu
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="navbar-container">
        <a href = "/" alt = "" className="navbar-brand text-upper fw-7 fs-22 flex">
                        <span className="text-white">George</span>
                        <span className="text-white">Atkinson</span>
        </a>
        
        
        {isMobile ? (
            <button type = "button"
            className = "menu-toggle"
            onClick = {toggleMobileMenu}>
                <FaBars size = {26}/>
            </button>
        //   <button className="menu-toggle" onClick={toggleMobileMenu}>
        //     {isMobileMenuOpen ? 'Close' : 'Menu'}
        //   </button>
        ) : (
          <div className="navbar-links">
            <a className = "nav-item-text" href="#header">Home</a>
            <a className = "nav-item-text" href="#overview">Overview</a>
            <a className = "nav-item-text" href="#projects">Projects</a>
            <a className = "nav-item-text" href="#experience">Experience</a>
            <a className='nav-item-text'>
            <label class="switch">
            <input type="checkbox" onClick={toggleDarkMode} className='nav-link'/>
            <span class="slider round"></span>
            </label></a>
          </div>
        )}

        
      </div>

      {isMobile && isMobileMenuOpen && (
        <div className="mobile-menu">
          <a className = "nav-item-text" href="#header" onClick={toggleMobileMenu}>Home</a>
            <a className = "nav-item-text" href="#overview" onClick={toggleMobileMenu}>Overview</a>
            <a className = "nav-item-text" href="#projects" onClick={toggleMobileMenu}>Projects</a>
            <a className = "nav-item-text" href="#experience" onClick={toggleMobileMenu}>Experience</a>
          <label class="switch">
            <input type="checkbox" onClick={toggleDarkMode} className='nav-link'/>
            <span class="slider round"></span>
            </label>
        </div>
      )}
      <LoadingBar />
    </nav>
  );
};

export default Navbar;