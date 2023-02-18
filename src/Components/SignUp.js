import React, { useState } from "react";
import "./Form.css";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const{setShow}=props

  

  const formHandler = (e) => {
    e.preventDefault();
    if(email===""||password===""||name===""){
        alert('Form is not submitted')
    }
    else{
        localStorage.setItem("user", JSON.stringify({ email, password, name }));
    }
    
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <>
    <div className="sign-container">
        
    <button className="sign-button" onClick={()=>setShow(false)}>Sign In</button>
    <p>Already have an account?</p>
    </div>
    
    <form onSubmit={formHandler} className="form-container">
      <h2>Create Game Account</h2>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-input"
        
      />
      <input
        type="email"
        placeholder="Enter Your Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="form-input"
      ></input>
      <input
        type="password"
        placeholder="Enter Your Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="form-input"
      ></input>
      <button type="submit" className="form-button" >
        Sign Up
      </button>
    </form>
    </>
  );
}

export default SignUp;
