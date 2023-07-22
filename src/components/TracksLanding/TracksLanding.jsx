import Iframe from "react-iframe";
import "./TracksLanding.css";

const tracks = [
  {
    name: "Twin Flames (Original Mix)",
    artist: "JØKR",
    url: "https://bandcamp.com/EmbeddedPlayer/album=902096618/size=large/bgcol=333333/linkcol=ffffff/minimal=true/track=1935722819/transparent=true/",
  },
  {
    name: "And the Queen (Original Mix)",
    artist: "JØKR",
    url: "https://bandcamp.com/EmbeddedPlayer/album=902096618/size=large/bgcol=333333/linkcol=ffffff/minimal=true/track=1324750353/transparent=true/",
  },
  {
    name: "Paranormal (Original Mix)",
    artist: "Dykstra",
    url: "https://bandcamp.com/EmbeddedPlayer/album=222335900/size=large/bgcol=333333/linkcol=ffffff/minimal=true/track=1960869958/transparent=true/",
  },
  {
    name: "Paranormal (Yanacone Remix)",
    artist: "Yanacone",
    url: "https://bandcamp.com/EmbeddedPlayer/album=222335900/size=large/bgcol=333333/linkcol=ffffff/minimal=true/track=3970650530/transparent=true/",
  },
  {
    name: "Paranormal (K​Ø​DA Remix)",
    artist: "K​Ø​DA",
    url: "https://bandcamp.com/EmbeddedPlayer/album=222335900/size=large/bgcol=333333/linkcol=ffffff/minimal=true/track=3195922246/transparent=true/",
  },
  {
    name: "Paranormal (Kold Remix)",
    artist: "Kold",
    url: "https://bandcamp.com/EmbeddedPlayer/album=222335900/size=large/bgcol=333333/linkcol=ffffff/minimal=true/track=2200633402/transparent=true/",
  },
  {
    name: "Rider of Hell (Original Mix)",
    artist: "Dark Saw",
    url: "https://bandcamp.com/EmbeddedPlayer/album=2355660743/size=large/bgcol=333333/linkcol=ffffff/minimal=true/track=4086598237/transparent=true/",
  },
  {
    name: "Sally (Original Mix)",
    artist: "Dark Saw",
    url: "https://bandcamp.com/EmbeddedPlayer/album=2355660743/size=large/bgcol=333333/linkcol=ffffff/minimal=true/track=3014891731/transparent=true/",
  },
  {
    name: "Tucibi (Original Mix)",
    artist: "Eddy JB",
    url: "https://bandcamp.com/EmbeddedPlayer/album=1144548600/size=large/bgcol=333333/linkcol=ffffff/minimal=true/track=819764854/transparent=true/",
  },
  {
    name: "Destroy (Original Mix)",
    artist: "Eddy JB",
    url: "https://bandcamp.com/EmbeddedPlayer/album=1144548600/size=large/bgcol=333333/linkcol=ffffff/minimal=true/track=3958817297/transparent=true/",
  },
];

function TracksLanding() {
  return (
    <div className="tracksLandingContainer">
      <div className="titleContainer">
        <h1 className="trackLTitle">Tracks</h1>
      </div>
      <div className="iframesContainer">
        {tracks.map((track, index) => (
          <div>
            <Iframe
              key={index}
              className="iframe"
              url={track.url}
              width="300px"
              height="300px"
              frameBorder={0}
            />
            <h4 className="trackName trackInfo">{track.name}</h4>
            <p className="trackArtist trackInfo">by {track.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TracksLanding;
