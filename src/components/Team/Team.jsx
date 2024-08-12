import React from "react";
import "./Team.css";
import data from "../../constants/data";
import { useTheme } from '../../utilities/ThemeContext';

const Team = () => {
    
  const { isDarkMode, toggleDarkMode } = useTheme();
    return(
        <section className ={`team py-6 bg-white ${isDarkMode ? 'dark' : 'light'}`} id = "overview">
            {/* <div className="gradient-div-3">
            
            </div> */}
            <div className = "container">
                <div className ="section-title bg-dark">
                    <h2 className = "text-upper text-white text-center">
                        Experience Overview
                    </h2>
                </div>
                <div className="team-content py-6 grid">
                    {
                        data.team.map((item,index) => {
                            return(
                                <div className="team-item text-center text-dark" key = {index} data-aos="flip-up">
                                    <img src= {item.image} alt="" className="mx-auto logo"/>
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