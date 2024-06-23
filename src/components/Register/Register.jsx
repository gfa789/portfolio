import React, {useState} from "react";
import "./Register.css";
import {useNavigate} from "react-router-dom";

const Register = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePassword2Change = (e) => {
    setPassword2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle register logic here (e.g., API call, validation, etc.)
    console.log('Name:', name)
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Password 2: ', password2)
    const message = {name, email, password, password2};
    fetch('http://localhost:8000/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Registration successful!', data);
        // Handle successful registration, show a success message, or redirect the user to a new page, etc.
        navigate('/success');
      })
      .catch((error) => {
        console.error('Registration failed:', error);
        // Handle errors, show an error message, or redirect the user to a new page, etc.
      });
  };

    return(
      <div className="register-body">
        <div className="register-cont bg-orange flex">
            <div className="register-card bg-white text-dark">
                <h1>Register</h1>
                <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name"><h2>Name</h2></label>
              <input
                    type="name"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                    className="register-input"
                />
        
               <label htmlFor="email"><h2>Email</h2></label>
              <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className="register-input"
                />
                </div>
                <div className="form-group">
                <label htmlFor="password"><h2>Password</h2></label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    className="register-input"
                />
                </div>
                <div className="form-group">
                <label htmlFor="password"><h2>Repeat Password</h2></label>
                <input
                    type="password"
                    id="password2"
                    name="password2"
                    value={password2}
                    onChange={handlePassword2Change}
                    required
                    className="register-input"
                />
                </div>
                
                <button type="submit" className="btn btn-dark text-white">Register</button>
                <div className="form-group">
                <a  href="/sign-in"><p className="forgot-pass-button">Have an account? Sign in</p></a>
                </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Register;