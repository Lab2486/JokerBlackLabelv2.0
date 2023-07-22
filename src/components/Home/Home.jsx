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
      release: "July 1, 2023 ",
    },
    {
      name: "Paranormal (EP)",
      artist: "Dykstra, Yanacone, KOLD, KØDA",
      imagen: "https://f4.bcbits.com/img/a1543935304_16.jpg",
      release: "May 12, 2023",
    },
    {
      name: "Rider of Hell (EP)",
      artist: "Dark Saw",
      imagen: "https://f4.bcbits.com/img/a4073176033_16.jpg",
      release: "March 23, 2023",
    },
    {
      name: "Tucibi (EP) ",
      artist: "Eddy JB",
      imagen: "https://f4.bcbits.com/img/a3410050518_16.jpg",
      release: "March 10, 2023 ",
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
