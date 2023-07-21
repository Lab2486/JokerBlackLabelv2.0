import "./TrackCard.css";

function TrackCard({ tracks }) {
  return (
    <div className="cardContainer">
      {tracks.map((track, index) => (
        <div key={index} className="card">
          <div className="imgContainer">
            <img
              className="cardImg"
              src={track.imagen}
              alt={`Portada de ${track.artist}`}
            />
          </div>
          <div className="cardInfo">
            <h2 className="infoText epName">{track.name}</h2>
            <p className="infoText trackArtitst">{track.artist}</p>
            <p className="infoText Release">Release: {track.release}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
// function TrackCard({ imagenes }) {
//   return (
//     <>
//       {imagenes.map((imagen) => {
//         return (
//           <div className="cardContainer">
//             <div className="imgContainer">
//               <img src={imagen} alt="imagen" className="cardImg" />
//             </div>
//             <div className="cardInfo">
//               <h2 className="infoText trackName">Name</h2>
//               <p className="infoText trackArtitst">Artist</p>
//               <p className="infoText Release">
//                 <strong>Release Date</strong>
//               </p>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// }

export default TrackCard;
