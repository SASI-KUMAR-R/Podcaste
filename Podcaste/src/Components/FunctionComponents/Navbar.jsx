import { useNavigate } from "react-router-dom";
import "../CSS/Navbar.css";
import { IoIosNotifications } from "react-icons/io";
import ShinyText from "./ShinyText";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo"><a href="/" className="atag">PODCASTS</a></div>

        <div className="searchbar">
          <input type="text" placeholder="SEARCH..." className="search-input" />
        </div>

        <div className="extrasome">
          <button className="buttonstyle">
            <IoIosNotifications className="iconsstyle" />
          </button>
          <button
            className="buttonstyle2"
            onClick={() => navigate("/signup")}
          >
            <ShinyText text="GET STARTED" disabled={false} speed={3} className='custom-class' />
          </button>
        </div>
      </nav>
      
    </div>
  );
}

export default Navbar;
