import React from "react";
import data from "../../constants/data";
import "./Features.css";


const Features = () => {
    return(
        <section className="features py-6" id = "features">
            <div className="gradient-div-2">
            
            </div>
            <div className="container">
                <div className="section-title bg-dark">
                    <h2 className ="text-upper text-center text-white">
                        My Features
                    </h2>
                    </div>
                    <div className="features-content grid py-6">
                        {
                            data.features.map((feature, index) => {
                                return(
                                    
                                    <div className="features-item text-center" data-aos="zoom-in" key ={index}>
                                            
                                        <div className="features-item-text">
                                            <div className="features-item-image">
                                                <img src={feature.image} alt ="" className="mx-auto"/>
                                             </div>
                                            <h2> {feature.title}</h2>
                                            <p className = "text mx-auto">{feature.paragraph}</p>
                                        </div>
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                
            </div>
        
        </section>
    )
}

export default Features;