import "../CSS/Home.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Home() {
  const containerRef = useRef(null);
  return (
    <div className="Hometag">
      <h1>WELCOME TO THE PODCASTS</h1>
      <h2>
        GO TO{" "}
        <Link to="/pod" className="TAGA">
          LIBRARY
        </Link>
      </h2>
    </div>
  );
}

export default Home;
