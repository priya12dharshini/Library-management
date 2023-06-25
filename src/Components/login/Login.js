import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Home from "../home/Home";
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");

  const [flag, setFlag] = useState(false);
  const [main, setMain] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("priyaPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("priyaEmail").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setMain(!main);
      setFlag(false);
      navigate("/home"); // Navigate to the Home component
    }
  }

  return (
    <div className="login">
      {main ? (
        <form className="loginForm" onSubmit={handleLogin}>
          <h3 className="loginTitle">Login</h3>
          <div>&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-user"></i>&nbsp;&nbsp;
            <label><b>Email</b></label><br/>
            <input
              type="email"
              className="linput"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            /><br/><br/>
          </div>

          <div>
            &nbsp;&nbsp;&nbsp;<i class="fa-solid fa-lock"></i>&nbsp;&nbsp;
            <label><b>Password</b></label><br/>
            <input
              type="password"
              className="linput"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            /><br/><br/>
          </div>

          <button type="submit" className="lbutton">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;




/*import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "../home/Home";
import './Login.css';

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [main, setMain] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("priyaPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("priyaEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setMain(!main);
      setFlag(false);
    }
  }

  return (
    <div className="login">
      {main ? (
        <form className="loginForm" onSubmit={handleLogin}>
          <h3 className="loginTitle">Login</h3>
          <div>&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-user"></i>&nbsp;&nbsp;
            <label><b>Email</b></label><br/>
            <input
              type="email"
              className="linput"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            /><br/><br/>
          </div>

          <div>
            &nbsp;&nbsp;&nbsp;<i class="fa-solid fa-lock"></i>&nbsp;&nbsp;
            <label><b>Password</b></label><br/>
            <input
              type="password"
              className="linput"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            /><br/><br/>
          </div>

          <button type="submit" className="lbutton">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;*/