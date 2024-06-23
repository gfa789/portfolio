import React from 'react';
import images from "../../constants/images";
import "./Header.css";
import {FaPaperPlane} from 'react-icons/fa';
// import {useState, useEffect, useRef} from 'react';
// import Email from "./Email";
// import images from "../../assets/images";

const Header = ({ onButtonClick }) => {
    return ( 
        <header className="header flex" id ="header">
            <div className="container">
                <div className="header-content grid text-center py-6 text-white">
                    <div className = "header-content-left" data-aos="fade-right">
                        <h1 className ="text-upper">
                            Hi, I am George.
                        </h1>
                        <p>I have recently finished graduate study, after completing BSc Computer Science at University of Bristol. Upon this conclusion, I am eager to purse
                            a career as a machine learning engineer. Explore this site to get an idea of my prior education and experience, as well as learn a bit more about me personally. </p>
                        {/* <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                        <a href = "#test" className ="btn btn-dark" onClick={onButtonClick}>
                            <span>Contact Me</span> <FaPaperPlane />
                        </a>
                    </div>
                    <div className= "header-content-right" data-aos="fade-left">
                        <img src={images.Profile_pub} alt = ""/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;