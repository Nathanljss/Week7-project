import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function SongsPage() {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    getMusic();
  }, []);

  async function getMusic() {
    const response = await fetch("http://localhost:8080/music");
    const data = await response.json();
    setMusic(data);
  }

  return (
    <div>
      <h1>🎵 Music is the spice of life 🎵</h1>
      <p>Discover new music and share yours!</p>
      <h2>BEHOLD! TUNES!</h2>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <Link to="/">Return Home</Link> |{" "}
      <Link to="/ArtistsPage">Show artists only</Link> |{" "}
      <Link to="/AlbumsPage">Show albums only</Link> |{" "}
      <Link to="/SongsPage">Show songs only</Link>
      {music.map(function (music) {
        return (
          <h3 className="entries" key={music.id}>
            {music.song}
          </h3>
        );
      })}
    </div>
  );
}