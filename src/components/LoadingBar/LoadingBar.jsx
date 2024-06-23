import React, {useState, useEffect} from 'react';
import "./LoadingBar.css"


const LoadingBar = () => {     
  const [scrollPercentage, setScrollPercentage] = useState(0);
          useEffect(() => {
              const handleScroll = () => {
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const scrollDistance = documentHeight - windowHeight;
                const scrolled = (scrollTop / scrollDistance) * 100;
                setScrollPercentage(scrolled);
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);
        
        return (
            <div className='loading-bar' style={{ width: `${scrollPercentage}%` }}/>
        )
        }

export default LoadingBar;