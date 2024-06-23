import React, {useState} from 'react';
import images from '../../constants/images';
import{BsFillArrowRightSquareFill, BsFillArrowLeftCircleFill} from "react-icons/bs";
import {BiSolidCircle} from "react-icons/bi";
import "./Banner.css";

function modulus(x,y){
    if (x < 0) {
        console.log(x)
        return x+y;
    } else return x;
}

const Banner = () => {
    const slides = [
        images.Split,
        images.Prague,
        images.Beers,
        images.Thekla
    ];

    const[currentIndex, setCurrentIndex] = useState(0);

    const increase = () => setCurrentIndex((currentIndex+1)%4);
    const decrease = () => setCurrentIndex(modulus(currentIndex-1,4))

    return(
        <section className ="banner py-6" id = "about-me">
            <div className="banner-box">
                <div>
                    <button type ="button"
                    className="left-arrow"
                    onClick={() => decrease()}>
                        <BsFillArrowLeftCircleFill/>
                    </button>
                    <button type ="button"
                    className="right-arrow"
                    onClick={() => increase()}>
                        <BsFillArrowRightSquareFill/>
                    </button>
                    </div>
                <div className='slide'>
                    <img src = {slides[currentIndex]}alt = ""/>    
                </div>
                <div className ="dots-container">
                        {slides.map((slide,slideIndex) => (
                            <div className="dots" key={slideIndex} onClick={() => setCurrentIndex(slideIndex)}>
                                <BiSolidCircle/>
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    )

}

export default Banner;