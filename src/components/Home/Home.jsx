import "./Home.css";
import Carousel from "../Carousel/Carousel";
function Home() {
  const mockImagenes = [
    "https://f4.bcbits.com/img/a0172221191_16.jpg",
    "https://f4.bcbits.com/img/a1543935304_16.jpg",
    "https://f4.bcbits.com/img/a4073176033_16.jpg",
  ];
  return (
    <div className="HomeContainer">
      <div className="TitleContainer">
        <h1 className="Title">Minimal Techno</h1>
        <h2 className="Title">Independent Music Label </h2>
      </div>
      <div className="CarouselContainer">
        <Carousel imagenes={mockImagenes} />
      </div>
    </div>
  );
}

export default Home;
