import React from "react";
import "./Team.css";
import data from "../../constants/data";

const Team = () => {
    return(
        <section className ="team py-6 bg-white" id = "team">
            <div className="gradient-div-3">
            
            </div>
            <div className = "container">
                <div className ="section-title bg-dark">
                    <h2 className = "text-upper text-white text-center">
                        My Experience
                    </h2>
                </div>
                <div className="team-content py-6 grid">
                    {
                        data.team.map((item,index) => {
                            return(
                                <div className="team-item text-center text-dark" key = {index} data-aos="flip-up">
                                    <img src= {item.image} alt="" className="mx-auto"/>
                                    <p className="text-upper fw-7"> {item.name}</p>
                                    <span className="text-upper">
                                        {item.post}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Team;