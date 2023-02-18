import React, { useState } from "react";
import SignUp from "./SignUp";
import "./Form.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const formHandle = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.email === email && user.password === password) {
      console.log("I am logged in");
      // Allow user to log in by setting session variable or state
    } else {
      console.log("I am not logged in");
      // Display error message
    }
    setEmail("");
    setPassword("");
  };

  // console.log(email , password)

  return (
    <div>
      {show ? (
        <SignUp setShow={setShow}/>
      ) : (
        <form onSubmit={formHandle} className="form-container">
          <h2>Login</h2>
          <input
            type={"email"}
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-input"
          ></input>
          <input
            type={"password"}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="form-input"
          ></input>
          <button type="submit" className="form-button">
            Login
          </button>
        </form>
      )}
      {show ? (
        ""
      ) : (
        <div onClick={() => setShow(true)} className="create-container">
         Create an account
        </div>
      )}
    </div>
  );
}

export default Login;
