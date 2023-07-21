import "./Home.css";
import Carousel from "../Carousel/Carousel";
import TrackCard from "../TrackCard/TrackCard";
import { Link } from "react-router-dom";

function Home() {
  const tracks = [
    {
      name: "Twin Flames (EP)",
      artist: "JØKR",
      imagen: "https://f4.bcbits.com/img/a0172221191_16.jpg",
      release: "mayo 5 2022",
    },
    {
      name: "Paranormal (EP)",
      artist: "Dykstra, Yanacone, KOLD, KØDA",
      imagen: "https://f4.bcbits.com/img/a1543935304_16.jpg",
      release: "mayo 5 2022",
    },
    {
      name: "Rider of Hell (EP)",
      artist: "Dark Saw",
      imagen: "https://f4.bcbits.com/img/a4073176033_16.jpg",
      release: "mayo 5 2022",
    },
    {
      artist: "jokr",
      imagen: "https://f4.bcbits.com/img/a3410050518_16.jpg",
      release: "mayo 5 2022",
    },
  ];

  const mockImagenes = [
    "https://f4.bcbits.com/img/a0172221191_16.jpg",
    "https://f4.bcbits.com/img/a1543935304_16.jpg",
    "https://f4.bcbits.com/img/a4073176033_16.jpg",
    "https://f4.bcbits.com/img/a3410050518_16.jpg",
  ];
  return (
    <div className="HomeContainer">
      <div className="TitleContainer">
        <h1 className="homeTitle">Minimal Techno</h1>
        <h2 className="homeTitle">Independent Music Label </h2>
      </div>
      <div className="CarouselContainer">
        <Carousel imagenes={mockImagenes} />
      </div>
      <section className="homeTracks">
        <h1 className="Title tracksTitle">EPs</h1>
        <div className="tracksContainer">
          <TrackCard tracks={tracks} />
        </div>
        <div className="tracksLink">
          <Link className="viewAllLink" to="/tracks">
            <h3>View All</h3>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
