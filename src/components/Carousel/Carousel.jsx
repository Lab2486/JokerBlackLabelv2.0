import React, { useState } from "react";
import "./Carousel.css";

function Carousel({ imagenes }) {
  const [imagenActual, setImagen] = useState(0);
  const cantidad = imagenes?.length;
  if (!Array.isArray(imagenes) || cantidad === 0) return;

  const siguienteImagen = () => {
    setImagen(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };
  const anteriorImagen = () => {
    setImagen(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };
  return (
    <div className="CarouselContainer">
      <div className="CarouselTitle">
        <h2>Latest Releases</h2>
      </div>
      <div className="Carousel">
        <button className="btn" onClick={anteriorImagen}>
          ←
        </button>
        {imagenes.map((imagen, index) => {
          return (
            <div onClick={anteriorImagen}>
              {imagenActual === index && (
                <img key={index} src={imagen} alt="imagen" className="imagen" />
              )}
            </div>
          );
        })}
        <button className="btn" onClick={siguienteImagen}>
          →
        </button>
      </div>
    </div>
  );
}

export default Carousel;
