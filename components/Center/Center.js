import Header from "../Header/Header";
import styles from "./Center.module.css";
import { useState, useEffect } from "react";
import useSpotify from "../../hooks/useSpotify";
import { signOut, useSession } from "next-auth/react";

const Center = () => {
  const spotifyApi = useSpotify();

  const { data: session, status } = useSession();

  const [songs, setSongs] = useState([]);

  const [playlist, setPlaylist] = useState([]);

  const categories = [
    "37i9dQZF1DX1X23oiQRTB5",
    "37i9dQZF1DWYVURwQHUqnN",
    "37i9dQZF1DX4WpYT2fah9c",
    "37i9dQZF1DWVuV87wUBNwc",
    "37i9dQZF1DX4sJFeoGlF41",
  ];

  const fetching = () => {
    // réinitialise le tableau à chaque appel
    // setPlaylist([]);
    // // récupère les playlists selon un id donnée
    // categories.map((x) => {
    //   spotifyApi
    //     .getPlaylist(x)
    //     .then((data) => {
    //       console.log("Body de la playlist ", x, ": ", data.body);
    //       setPlaylist((prev) => [...prev, data.body]);
    //       console.log(playlist);
    //     })
    //     .catch((err) => console.log(err));
    // });
    // console.log(playlist);
  };

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getNewReleases({ limit: 8 }).then((data) => {
        setSongs(data.body.albums.items);
      });

      // récupère toutes les musiques d'une playlist donnée
      // spotifyApi.getPlaylistTracks("37i9dQZF1DX1X23oiQRTB5").then((data) => {
      //   console.log("tracks", data);
      // });

      // fetching();

      spotifyApi
        .getRecommendations({
          min_energy: 0.4,
          seed_artists: ["6mfK6Q2tzLMEchAr0e9Uzu", "4DYFVNKZ1uixa6SQTvzQwJ"],
          min_popularity: 50,
        })
        .then((data) => {
          console.log(data);
        });
    }
  }, [session, spotifyApi]);

  return (
    <div className={styles.centerContainer}>
      <Header session={session} />
      {songs && (
        <div>
          <h1 className={styles.centerSectionTitle}>Top Music</h1>
          <div className={styles.songsContainer}>
            <div className={styles.songsScroller}>
              {songs.map((x) => (
                <div key={x.id} className={styles.songsSection}>
                  <img src={x.images[1].url} alt="song image" />
                  <h1>{x.name}</h1>
                  <h2>{x.artists[0].name}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {playlist && (
        <div>
          <h1 className={styles.centerSectionTitle}>Rap Playlists</h1>
          {playlist.map((x) => (
            <div key={x.id} className={styles.playlistsSection}>
              <img src={x.images[0].url} alt="playlist image" />
              <h1>{x.name}</h1>
              <h2>{x.description}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Center;
