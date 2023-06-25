import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Register.css';
import Login from "../login/Login";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("priyaEmail", JSON.stringify(email));
      localStorage.setItem(
        "priyaPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <>
 
        <div className="register">
          {" "}
          {login ? (
            <form className="registerForm" onSubmit={handleFormSubmit}>
              <h1 className="registertitle">Register</h1><br/>

              <div>
                <label><b>Name</b></label><br/>
                <input
                  type="text"
                  className="rinput"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div >
                <label><b>Email</b></label><br/>
                <input
                  type="email"
                  className="rinput"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div>
                <label><b>Password</b></label><br/>
                <input
                  type="password"
                  className="rinput"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div>
                <label><b>Phone No.</b></label><br/>
                <input
                  type="Phone"
                  className="rinput"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

              <button type="submit" className="rbutton" onClick={navigate('/login')}>
                Register
              </button>
              <p onClick={handleClick} className="forgot-password text-right">
                <b>Already registered{" "}?</b><a href="./login">Login</a>
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
    
    </>
  );
}

export default Register;