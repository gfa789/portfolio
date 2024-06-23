import React, {useState, useEffect, useRef} from 'react';
// import images from "../../assets/images";
import "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";
// import {CgProfile} from "react-icons/cg";
import LoadingBar from '../LoadingBar/LoadingBar';
// import LoginButton from '../Buttons/LoginButton';
// import SignupButton from '../Buttons/SignupButton';

// const useWindowWidth = () => {
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
//     useEffect(() => {
//       const handleResize = () => setWindowWidth(window.innerWidth);
//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return windowWidth;
//   };

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [theme, setTheme] = useState('light')
    // const [bigwidth, setBigWidth] = useState(true);

    // const windowWidth = useWindowWidth();
    // const isWidthGreaterThanX = windowWidth < 992;
    // if (windowWidth < 992){
    //     setClick(false);}

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
      }, [theme]);
    
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      };
    
    const handleClick = () => setClick(!click);
    const close = () => setClick(false);

    const [isSticky, setIsSticky] = useState(false);
    const [isOffsetReached, setIsOffsetReached] = useState(false);
    const prevScrollPos = useRef(window.scrollY);
    const [shouldShowBar, setShowBar] = useState(true);
    

  const handleScroll = () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        
         const navbarOffset = navbar.offsetTop;
         const currentScrollPos = window.scrollY;
         const isOffset = window.scrollY >= navbarOffset +100; // Offset value of 100px
         const scrollDirection = (prevScrollPos.current > currentScrollPos) ? 'up' : 'down';
         const shouldHideNavbar = scrollDirection === 'down' && currentScrollPos > 510;
         console.log(scrollDirection, prevScrollPos, currentScrollPos);
         prevScrollPos.current = currentScrollPos
         setIsOffsetReached(isOffset);
         setIsSticky(isOffset || window.scrollY >= navbarOffset);
         setShowBar(!shouldHideNavbar);
         
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <nav className ="navbar">
            <div id="navbar" className={`nav-container flex navbar-content ${shouldShowBar ? "" : "hidden"} ${isSticky ? 'sticky' : (isOffsetReached ? 'sticky-offset' : '')}`}>
                <div className="brand-and-toggler flex">
                    <a href = "/" alt = "" className="navbar-brand text-upper fw-7 fs-22 flex">
                        <span className="text-white">George</span>
                        <span className="text-white">Atkinson</span>
                    </a>
                    <button type = "button"
                    className = "navbar-show-btn text-white"
                    onClick = {() => handleClick()}>
                        <FaBars size = {26}/>
                    </button>
                </div>
                <div className={`navbar-collapse flex flex-center ${click ?"show-navbar":""}`}>
                    <button type ="button"
                    className="navbar-hide-btn text-white"
                    onClick={() => close()}>
                        <FaTimes size={32}/>
                    </button>
                    <ul className='navbar-nav fw-6 ls-1 fs-20 text-center'>
                        <li className = "nav-item">
                            <a href = "#header" className='nav-link'>
                                <p className={`${click ?"nav-item-text":"nav-item-text-inverted"} `}>home</p>
                            </a>
                        </li>
                        <li className = "nav-item">
                            <a href = "#about-me" className='nav-link'>
                            <p className={`${click ?"nav-item-text":"nav-item-text-inverted"} `}>about me</p>
                            </a>
                        </li>
                        <li className = "nav-item">
                            <a href = "#features" className='nav-link'>
                            <p className={`${click ?"nav-item-text":"nav-item-text-inverted"} `}>features</p>
                            </a>
                        </li>
                        <li className = "nav-item">
                            <a href = "#team" className='nav-link'>
                            <p className={`${click ?"nav-item-text":"nav-item-text-inverted"} `}>associates</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            {/* <a > */}
                                {/* {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                                 */}
                                 <label class="switch">
                                <input type="checkbox" onClick={toggleTheme} className='nav-link'/>
                                <span class="slider round"></span>
                                </label>
                            {/* </a> */}
                        </li>
                        {/* <li className = "nav-item">
                            <LoginButton />
                        </li>
                        <li className = "nav-item">
                            <SignupButton />
                        </li> */}
                    </ul>
                </div>
                <LoadingBar/>
            </div>
            
        </nav>
    )
}

export default Navbar;