// EmailPopup.js
import React, { useState, useEffect} from 'react';

import './Email.css';

const Email = ({ show, onClose }) => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isntValidEmail, setnotValidEmail] = useState(true)

  const [isntValidSubject, setnotValidSubject] = useState(true)
  const [isntValidMessage, setnotValidMessage] = useState(true)

  useEffect(() => {
    if (show) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function to remove the class when the component is unmounted
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [show]);

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const bodyRegex = /[a-zA-Z]+/; 
const handleChange = (e) =>{
    const isValidEmail = (emailRegex.test(email));
    setnotValidEmail(!(isValidEmail));
    const isValidSubject = (bodyRegex.test(subject));
    setnotValidSubject(!(isValidSubject));
    const isValidMessage = (bodyRegex.test(message));
    setnotValidMessage(!(isValidMessage));
  }

  const handleSubmit = (e) => {
    const isValidEmail = emailRegex.test(email);
    const isValidSubject = (bodyRegex.test(subject));
    const isValidMessage = (bodyRegex.test(message));
    e.preventDefault();
    // Handle form submission (e.g., send email via an API)
    console.log({ email, subject, message });
    if (isValidEmail & isValidSubject & isValidMessage){
    onClose();
    setEmail('')
    setSubject('')
    setMessage('')}
  };

  if (!show) {
    return null;
  }

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="popup" onClick={handleBackgroundClick}>
      <div className="popup-content text-white" onClick={console.log("")}>
        <h2 className='title'>Contact Me</h2>
        <form className="form-div" onSubmit={handleSubmit} onChange={handleChange}>
          <div>
            <input
              type="email"
              placeholder='Your Email*'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          <p className={`${isntValidEmail ? "email-error" : ""} error`}>Must enter a valid email</p>
          </div>
          <div>
            <input
              type="text"
              placeholder='Subject*'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          <p className={`${isntValidSubject ? "subject-error" : ""} error`}>Must enter a subject</p>
          </div>
          <div>
            <textarea
              value={message}
              placeholder='Your Message*'
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          <p className={`${isntValidMessage ? "message-error" : ""} error`}>Must enter a message</p>
          </div>
          <div className="button-1">
                      <a href = "#test" className ="btn btn-dark" onClick={handleSubmit}>Send</a>
                      </div>
          <div className="button-1">
          <a href = "#test" className ="btn btn-dark" onClick={onClose}>Close</a>
          </div>
          <p>* = Required Field</p>
        </form>
      </div>
    </div>
  );
};

export default Email;
