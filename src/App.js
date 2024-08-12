import './App.css';
import {React} from 'react';
import {Route, Routes} from 'react-router-dom';
import "./assets/js/script";
import Header from "./components/Header/Header";
import AboutMe from './components/AboutMe/AboutMe';
// import Banner from './components/Banner/Banner';
import Features from './components/Features/Features';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
// import RootLayout from './layout/RootLayout';
import Error404 from './components/Error404/Error404';
import Navbar from './components/Navbar/Navbar';
// import Email from './components/Email/Email';
import {ThemeProvider} from './utilities/ThemeContext';
import {ScrollProvider} from './utilities/ScrollContext';

import {useState} from 'react';

AOS.init();

function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <ThemeProvider>
      <ScrollProvider>
      <Routes>
        <Route index element ={<><Navbar/><Header/><Team/><Features /><AboutMe/><Footer/></>}/>
        <Route path="/*" element = {<><Navbar/><Error404/></>}/>
      </Routes>
      </ScrollProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
