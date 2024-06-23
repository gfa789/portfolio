import React from "react";
import data from "../../constants/data";
// import data from"../../constants/data";
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <section className ="about-me bg-medium py-6" id = "about-me">
            <div className="gradient-div-1">
            
            </div>
            <div className="container">
                <div className="section-title text-center bg-dark">
                    <h2 className="text-upper text-white">
                        about me
                    </h2>
                </div>
                {data.about_me.map((whatItem, index) => {
                    return(
                    <div className="about-me-item grid text-center" key ={index}>
                        <div className="about-me-item-left" data-aos="fade-left">
                            <img src ={whatItem.image} alt="" className="mx-auto"/>
                        </div>    
                        <div className="about-me-item-right text-center" data-aos="fade-right">
                            <h4 className=" text-upper fs-20"> {whatItem.title}</h4>
                            <p className="text mx-auto"> {whatItem.paragraph} </p>
                            <a href = "#test" className="btn btn-dark"> view more</a>
                        </div>
                    </div>)
                })
                }
            </div>
        </section>
    )
}

export default AboutMe;