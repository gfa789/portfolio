import React from "react";
import data from "../../constants/data";
import "./Features.css";
import { useTheme } from "../../utilities/ThemeContext";
import { FaDownload } from "react-icons/fa";

const Features = () => {

    const {isDarkMode, toggleDarkMode} = useTheme()

    const handlePdf = (pdfPath, fileName) => {
        return () => {
            const fullPath = `${process.env.PUBLIC_URL}${pdfPath}`;
            
            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = fullPath;
            link.target = '_blank';
            link.download = fileName;
            
            // Append to the body, click programmatically, and then remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    };

    return (
        <section className={`features py-6 ${isDarkMode ? 'dark' : 'light'}`} id="projects">
            <div className="gradient-div-2"></div>
            <div className="container">
                <div className="section-title bg-dark">
                    <h2 className="text-upper text-center text-white">
                        My Projects
                    </h2>
                </div>
                <div className="features-content grid py-6">
                    {data.features.map((feature, index) => (
                        <div className="features-item text-center" data-aos="zoom-in" key={index}>
                            <div className="features-item-text">
                                <div className="features-item-image">
                                    <img src={feature.image} alt="" className="mx-auto"/>
                                </div>
                                <h2>{feature.title}</h2>
                                <p className="text mx-auto">{feature.paragraph}</p>
                                <button 
                                    className="btn btn-blue" 
                                    onClick={handlePdf(feature.link, feature.filename)}
                                >
                                    See More <FaDownload />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;