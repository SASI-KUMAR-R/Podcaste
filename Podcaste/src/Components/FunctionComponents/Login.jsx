import React from "react";
import "../CSS/Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="Maindivuser">
      <h1 className="font">WELCOME TO PODCASTS</h1>
      <div className="User">
        <h3 className="font">Login</h3>
        <form>
          <div className="FormInput">
            <label>Email:</label>
            <input id="Email" placeholder="Enter your Email" />

            <label>Password:</label>
            <input id="Password" placeholder="Enter your Password" />
            <button class="btn" onClick={()=>{navigate("/Home")}}>Login</button>
          </div>
        </form>
        <div className="signup">
          <p>Don't have an account?</p>
          <br />
          <Link to="/signup" class="signupbtn">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
