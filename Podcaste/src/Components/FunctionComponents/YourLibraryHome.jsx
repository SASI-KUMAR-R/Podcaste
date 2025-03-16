import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { useUser } from "../FunctionComponents/UserContext";
import "../CSS/YourLibraryHome.css";

function YourLibraryHome() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("User ID from context:", user?.userid); // Debugging log
  
    const fetchUserPodcasts = async () => {
      if (!user?.userid) {
        console.error("User ID is missing. Cannot fetch podcasts.");
        setError("User ID not found. Please log in.");
        setLoading(false);
        return;
      }
  
      try {
        const response = await axios.get(
          `https://test-podcast.onrender.com/getUserPodcasts/${user.userid}`
        );
        console.log("API Response:", response.data); // Debugging log
        setPodcasts(response.data);
      } catch (error) {
        console.error("Error fetching user podcasts:", error);
        setError("Failed to fetch your podcasts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchUserPodcasts();
  }, [user]);
  

  const filteredPodcasts = podcasts.filter((podcast) =>
    podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDetailPage = (id) => {
    navigate(`/userdetail/${id}`);
  };

  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="MAINDIVOFPOD">
        <div className="addpodcast">
          <h1>
            <Link to="/addpod" className="lokshaa">
              ADD YOUR PODCAST
            </Link>
          </h1>
        </div>
        <div className="deletepodcast">
          <h1>
            <Link to="/deletepod" className="lokshaa2">
              DELETE YOUR PODCAST
            </Link>
          </h1>
        </div>

        {loading ? (
          <p>Loading podcasts...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <div className="main">
            {filteredPodcasts.map((podcast) => (
              <div
                className="audio"
                key={podcast._id}
                onClick={() => handleDetailPage(podcast._id)}
              >
                <img
                  src={podcast.image.startsWith("data:image") ? podcast.image : `data:image/png;base64,${podcast.image}`}
                  alt={podcast.title}
                />
                <h2>{podcast.title}</h2>
                <p>{podcast.description}</p>
                <Link to={`/detail/${podcast._id}`}>View Details</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default YourLibraryHome;
