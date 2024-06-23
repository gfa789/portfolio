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
import Signin from './components/Signin/Signin';
import AOS from "aos";
import "aos/dist/aos.css";
// import RootLayout from './layout/RootLayout';
import Error404 from './components/Error404/Error404';
import Register from './components/Register/Register';
import CallbackPage from "./components/CallbackPage/callback-page";
import Navbar from './components/Navbar/Navbar';
import Email from './components/Email/Email';

import {useState} from 'react';

AOS.init();

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className={`app ${showPopup ? "freeze" : ""}`}>
      <Routes>
        <Route index element ={<><Navbar/><Header onButtonClick={togglePopup}/><Email show={showPopup} onClose={togglePopup} /><Team/><Features /><AboutMe/><Footer/></>}/>
        <Route path="/sign-in" element ={<><Navbar/><Signin /></>}/>
        <Route path="/register" element ={<><Navbar/><Register /></>}/>
        <Route path="/callback" element ={<><Navbar/><CallbackPage /></>}/>
        <Route path="/*" element = {<><Navbar/><Error404/></>}/>
      </Routes>
    </div>
  );
}

export default App;
