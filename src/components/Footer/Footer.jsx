import React from "react";
import "./Footer.css";
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa";

const Footer = () => {
    return(
        <footer className ="footer bg-dark text-white py-6" id="footer">
            
            <div className="gradient-div-4">
                
            </div> 
            <div className="container">
                <div className="footer-content text-center">
                    <div className="footer-item-group grid">
                        <div className="footer-item">
                            <h3 className="footer-item-title text-upper">
                                portfolio
                            </h3>
                            <ul className="footer-item-links">
                                <li><a href="#test">Gallery</a></li>
                                <li><a href="#test">Projects</a></li>
                            </ul>
                        </div>
                        <div className="footer-item">
                            <h3 className="footer-item-title text-upper">
                                Contact
                            </h3>
                            <ul className="footer-social-icons flex flex-center">
                                <li><a href="https://facebook.com" className="flex flex-center"><FaFacebookF/></a></li>
                                <li><a href="https://twitter.com" className="flex flex-center"><FaTwitter/></a></li>
                                <li><a href="https://instagram.com" className="flex flex-center"><FaInstagram/></a></li>
                                <li><a href="https://linkedin.com" className="flex flex-center"><FaLinkedin/></a></li>
                            </ul>
                        </div>
                        <div className="footer-bottom-text">
                            <p className="text fs-16">
                                Copyright&copy; George Atkinson. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;