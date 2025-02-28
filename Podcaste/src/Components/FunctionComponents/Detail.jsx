import { useParams } from "react-router-dom";
import "../CSS/Detail.css";
import Player from "./AudioPlayer";
import Navbar from "./Navbar";
// Data for different podcasts
const podcastData = {
  1: {
    title: "SQUARE FLYER",
    image: "/IMAGE/img1.jpg", 
    description: `Podcast Flyer: "Echo Waves"\n
    📅 Date of Join: March 15, 2023\n
    🎧 Total Episodes: 50+\n
    🌎 Category: Tech & Innovation\n
    📜 Podcast History: "Echo Waves" started as a small tech podcast in early 2023,\n
    bringing insights into emerging technology, AI trends, and digital innovations.`,
    audio: "/song1.mp3"
  },
  2: {
    title: "PASSION PODCASTS",
    image: "/IMAGE/img9.jpeg",
    description: `Podcast Flyer: "Passion Podcasts"\n
    📅 Date of Join: January 10, 2022\n
    🎧 Total Episodes: 75+\n
    🌎 Category: Self-Improvement & Motivation\n
    📜 Podcast History: "Passion Podcasts began as a platform to inspire and motivate individuals to pursue their dreams. It features interviews with successful entrepreneurs, artists, and creators.`,
    audio: "/song4.mp3"
  },
  3: {
    title: "BRIGHT FUTURE PODCASTS",
    image: "/IMAGE/img3.jpg",
    description: `Podcast Flyer: Bright Future Podcasts\n
    📅 Date of Join: July 25, 2021\n
    🎧 Total Episodes: 100+\n
    🌎 Category: Education & Career\n
    📜 Podcast History: Bright Future Podcasts was launched with the goal of helping students and professionals navigate career choices, industry trends, and personal development.`,
    audio: "/song3.mp3"
  },
  4: {
    title: "ARE WE LIVE IN AIR? POD",
    image: "/IMAGE/img4.jpeg",
    description: `Podcast Flyer: Are We Live In Air?\n
    📅 Date of Join: November 5, 2023\n
    🎧 Total Episodes: 20+\n
    🌎 Category: Comedy & Satire\n
    📜 Podcast History: Are We Live In Air? started as a fun, unscripted talk show where hosts discuss viral internet moments, pop culture, and absurd conspiracy theories with a humorous twist.`,
    audio: "/song3.mp3"
  },
  5: {
    title: "PODCASTS",
    image: "/IMAGE/img5.jpeg",
    description: `Podcast Flyer: PODCASTS\n
    📅 Date of Join: March 1, 2020\n
    🎧 Total Episodes: 200+\n
    🌎 Category: General & Variety\n
    📜 Podcast History: PODCASTS is an all-in-one show that covers everything from entertainment, lifestyle, business, and science. It’s a go-to destination for knowledge and fun!`,
    audio: "/song3.mp3"
  },
  6: {
    title: "PABLO ESCOBAR POD",
    image: "/IMAGE/img6.jpeg",
    description: `Podcast Flyer: Pablo Escobar Pod\n
    📅 Date of Join: September 14, 2022\n
    🎧 Total Episodes: 40+\n
    🌎 Category: True Crime & History\n
    📜 Podcast History: Pablo Escobar Pod explores the life, legacy, and myths surrounding the infamous drug lord. It dives deep into historical accounts, interviews, and hidden truths.`,
    audio: "/song3.mp3"
  },
  7: {
    title: "MONEY TALK",
    image: "/IMAGE/img.jpeg",
    description: `Podcast Flyer: Money Talk\n
    📅 Date of Join: May 20, 2019\n
    🎧 Total Episodes: 150+\n
    🌎 Category: Finance & Business\n
    📜 Podcast History: Money Talk is a podcast focused on personal finance, investment strategies, and economic trends. Experts and entrepreneurs share insights on building wealth and financial freedom.`,
    audio: "/song3.mp3"
  }
};

function Detail() {
  const { id } = useParams();
  const podcast = podcastData[id] || podcastData[1]; // Default if invalid ID

  return (
    <div>
      <Navbar/>
      <div className="mainproject">
      <div className="project1">
        <img src={podcast.image} alt={podcast.title} />
        <h1 className="h1tagdirect">{podcast.title}</h1>
        <p className="p1tagdirect">
          {podcast.description.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
      <Player src={podcast.audio} />
    </div>
    </div>
  );
}

export default Detail;
