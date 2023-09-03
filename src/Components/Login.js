import React, { useState } from "react";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import { routes } from "../routes";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const formHandle = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.email === email && user?.password === password) {
      console.log("I am logged in");
      navigate(routes.loggedIn);
    } else {
      alert("Check the input or first create an account ");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="parent-cont">
      <img
      src="data:image/png;base64,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"
        alt="Loggin"
      />
      <div>
        {show ? (
          <SignUp setShow={setShow} />
        ) : (
          <>
         
          <h2>Login</h2>
          <p style={{margin:"10px",color:"blue"}}>Enter the following details to login</p>
         
            <form onSubmit={formHandle} className="form-container">
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
          </>
        )}
        {show ? (
          ""
        ) : (
          <div onClick={() => setShow(true)} className="create-container">
            Create an account
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
