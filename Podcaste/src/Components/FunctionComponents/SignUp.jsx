import "../CSS/SignUp.css"
import React from 'react' 
import { Link } from "react-router-dom";

const SignUp = () => {
  return(
    <div className="maindiv">
      <h1 className="font">SIGN UP</h1>
      <form>
        <div className="inputdiv">
          <label>USERNAME :</label>
          <input type="text" name="username" placeholder="Enter Username" />

          <label>EMAILID :</label>
          <input type="email" name="email" placeholder="Enter Emailid" />

          <label>PASSWORD :</label>
          <input type="password" name="password" placeholder="Enter Password" />

          <label>PhoneNumber :</label>
          <input type="number" name="confirmPassword" placeholder="PhoneNumber" />
          <br />  
          <button type="submit" className="signuptag">SignUp</button>
        </div>
      </form>
      <div className="logindiv">
        <p>Already a Account Holder??</p>
        <Link to="/login" className="Linktag">Login</Link>
      </div>
    </div>
  )
}

export default SignUp
