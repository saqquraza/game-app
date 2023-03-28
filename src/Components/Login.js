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
      navigate(routes.gameCart);
    } else {
      alert("Check the input or first create an account ");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="parent-cont">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrMiqGHRoWF-NFHDJQaY_lNPKhdyJEU_HL6aDzugPeQ&usqp=CAU&ec=48600112"
        alt="game event"
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
