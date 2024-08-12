import React, {useState} from 'react';
import { useTheme } from '../../utilities/ThemeContext';
import { useScroll } from '../../utilities/ScrollContext';
import images from "../../constants/images";
import "./Header.css";
import {FaPaperPlane} from 'react-icons/fa';
import ContactPopup from '../ContactPopup/ContactPopup';
// import {useState, useEffect, useRef} from 'react';
// import Email from "./Email";
// import images from "../../assets/images";

const Header = () => {
    
  const { isDarkMode, toggleDarkMode } = useTheme();
  const {toggleScroll} = useScroll();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    toggleScroll();
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    toggleScroll();
  };


    return ( 
        <header className={`header flex ${isDarkMode ? 'dark' : 'light'}`} id ="header">
            <div className="container">
                <div className="header-content grid text-center py-6 text-white">
                    <div className = "header-content-left" data-aos="fade-right">
                        <h1 className ="text-upper">
                            Hi, I am George.
                        </h1>
                        <p>I have recently finished graduate study, after completing BSc Computer Science at University of Bristol. Upon this conclusion, I am eager to purse
                            a career in software, data, or machine learning.. Explore this site to get an idea of my prior education and experience. </p>
                        {/* <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                        {/* <a href = "#test" className ="btn btn-dark" onClick={openPopup}>
                            <span>Contact Me</span> <FaPaperPlane />
                        </a>
                        {isPopupOpen && <ContactPopup onClose={closePopup} />} */}
                    </div>
                    <div className= "header-content-right" data-aos="fade-left">
                        <img src={images.HeadShot} alt = ""/>
                    </div>
                    
                </div>
            </div>
            
            <div className='gradient-div'></div>
        </header>
    )
}

export default Header;