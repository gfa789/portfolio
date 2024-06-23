import React, {useState} from "react";
import "./Signin.css";

const Signin = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here (e.g., API call, validation, etc.)
    console.log('Email:', email);
    console.log('Password:', password);
    // const message = {email, password};
    fetch('http://localhost:8000/api/auth', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },

    })
  };

    return(
      <div className="sign-in-body">
        <div className="sign-in-cont bg-orange flex">
            <div className="sign-in-card bg-white text-dark">
                <h1>Sign in</h1>
                <form className="sign-in-form" onSubmit={handleSubmit}>
                <div className="form-group">
               <label htmlFor="email"><h2>Email</h2></label>
              <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className="sign-in-input"
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
                    className="sign-in-input"
                />
                <a  href="/forgot-password"><p className="forgot-pass-button">Forgot Password</p></a>
                </div>
                
                <button type="submit" className="btn btn-dark text-white">Sign In</button>
                <a  href="/register"><p className="forgot-pass-button">Register</p></a>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Signin;