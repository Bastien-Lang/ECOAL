import React, { useState, useEffect } from "react"
import '../css/SingUp.css'


const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', { username, email, password });
    alert('Account creation logic would be implemented here ');
  };

  return (
    <>
    <div className="logo">
        <img src="../../public/EXP.png" style={{ height: '150%' }}/>
    </div>
    <div className="signup-container">
      <div >
        <h2 className="signup-title">Sign Up</h2>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          className="form-input"   
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="submit-btn">
          Create account
        </button>
      </form>
    </div>
    </>
  );
};

export default SignUpPage;