import Header from "../Header/Header";
import styles from "./Center.module.css";
import { useState, useEffect } from "react";
import useSpotify from "../../hooks/useSpotify";
import { signOut, useSession } from "next-auth/react";

const Center = () => {
  const spotifyApi = useSpotify();

  const { data: session, status } = useSession();

  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getNewReleases({ limit: 30 }).then((data) => {
        console.log(data.body.albums.items);
        setPlaylists(data.body.albums.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <div className={styles.centerContainer}>
      <Header />
      {playlists &&
        playlists.map((x) => (
          <div key={x.id}>
            <img src={x.images[2].url} alt="song image" />
            <h1>{x.artists.name}</h1>
            <h2>{x.name}</h2>
          </div>
        ))}
    </div>
  );
};

export default Center;
