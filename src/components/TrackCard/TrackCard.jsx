import "./TrackCard.css";

function TrackCard({ imagenes }) {
  return (
    <>
      {imagenes.map((imagen) => {
        return (
          <div className="cardContainer">
            <div className="imgContainer">
              <img src={imagen} alt="imagen" className="cardImg" />
            </div>
            <div className="cardInfo">
              <h2 className="infoText trackName">Name</h2>
              <p className="infoText trackArtitst">Artist</p>
              <p className="infoText Release">
                <strong>Release Date</strong>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TrackCard;
