import "../CSS/SignUp.css";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="Maindiv">
      <h1 className="font">WELCOME TO PODCASTS</h1>
      <div className="maindiv">
        <h1 className="font">SIGN UP</h1>
        <form>
          <div className="inputdiv">
            <label>USERNAME :</label>
            <input type="text" name="username" placeholder="Enter Username" />

            <label>EMAILID :</label>
            <input type="email" name="email" placeholder="Enter Emailid" />

            <label>PASSWORD :</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
            />

            <label>PhoneNumber :</label>
            <input
              type="number"
              name="confirmPassword"
              placeholder="PhoneNumber"
            />
            <br />
            <button type="submit" className="signuptag" onClick={()=>{navigate("/")}}>
              SignUp
            </button>
          </div>
        </form>
        <div className="logindiv">
          <p>Already a Account Holder??</p>
          <Link to="/" className="Linktag">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
