import styles from "./MusicPlayer.module.css";
import songs from "../../public/songs";
import Navigation from "../Navigation/Navigation";
import MusicPlayerDetails from "../MusicPlayerDetails/MusicPlayerDetails";
import SmallMusicPlayer from "../SmallMusicPlayer/SmallMusicPlayer";
import MusicPlayerProgressBar from "../MusicPlayerProgressBar/MusicPlayerProgressBar";
import MusicPlayerControler from "../MusicPlayerControler/MusicPlayerControler";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import SpeakerIcon from "@mui/icons-material/Speaker";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useState, useEffect, useRef } from "react";

const MusicPlayer = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const controler = useRef();
  const smallMusicPlayLine = useRef();
  const showMusicDetails = useRef();

  const prevMusic = () => {
    if (index !== 0) {
      setIndex(index - 1);
    }
  };

  const nextMusic = () => {
    if (index >= songs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const toggleMusicDetails = () => {
    // showMusicDetails.current.style.display = "flex";
    showMusicDetails.current.style.transform = "translateY(0)";
  };

  useEffect(() => {
    // permet de récupérer l'index précédent afin de détecter lorsque celui-ci change
    const prevIndex = index;

    // pause la musique
    if (!isPlaying) {
      controler.current.pause();
    }

    // jous la musique
    if (isPlaying) {
      controler.current.play();
    }

    // si on change de musique, on jous automatiquement celle qui suit
    if (index != prevIndex) {
      controler.current.play();
    }
  }, [isPlaying, index]);

<<<<<<< HEAD
  return (
    <>
      <div className={styles.footerContainer}>
        {/* Small screen */}
        <div className={styles.smallMusicPlayer}>
          <FavoriteBorderIcon
            sx={{ fontSize: 30, color: "white", cursor: "pointer" }}
          />
          <div
            className={styles.smallMusicPlayerParagraph}
            onClick={toggleMusicDetails}
          >
            <span>{songs[index].name}</span>
            <span className={styles.bullPoint}>&bull;</span>
            <p>{songs[index].artist}</p>
=======
  const toggleMusicDetails = () => {
    showMusicDetails.current.style.transform = "translateY(0)";
  };

  return (
    <>
      <div className={styles.footerContainer}>
        {/* Small Screen */}
        <div className={styles.smScreen}>
          <div className={styles.smallMusicPlayer}>
            <SmallMusicPlayer
              songs={songs}
              index={index}
              toggleMusicDetails={toggleMusicDetails}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />

            <div
              className={styles.smallMusicPlayLine}
              ref={smallMusicPlayLine}
            ></div>
          </div>

          <div className={styles.nav}>
            <Navigation />
>>>>>>> 238471b418de358b6f72ee927304a6775e43f75d
          </div>
        </div>
        {/* Small Screen */}

        {/* Large Screen */}
        <div className={styles.lgScreen}>
          <div className={styles.lgScreenLeft}>
            <img src={songs[index].image} alt="current song image" />
            <div className={styles.lgScreenLeftParagraph}>
              <span>{songs[index].name}</span>
              <p>{songs[index].artist}</p>
            </div>
            <div className={styles.lgScreenIcons}>
              <FavoriteBorderIcon
                sx={{
                  fontSize: 23,
                  color: "var(--lightgray)",
                  cursor: "pointer",
                }}
              />
              <PresentToAllIcon
                sx={{
                  fontSize: 23,
                  color: "var(--lightgray)",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>

          <div className={styles.lgScreenCenter}>
            <MusicPlayerControler
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              prevMusic={prevMusic}
              nextMusic={nextMusic}
            />
            <MusicPlayerProgressBar
              songs={songs}
              index={index}
              controler={controler}
              nextMusic={nextMusic}
              isPlaying={isPlaying}
              smallMusicPlayLine={smallMusicPlayLine}
            />
          </div>

          <div className={styles.lgScreenRight}>
            <QueueMusicIcon
              sx={{
                fontSize: 23,
                color: "var(--lightgray)",
                cursor: "pointer",
              }}
            />
            <SpeakerIcon
              sx={{
                fontSize: 23,
                color: "var(--lightgray)",
                cursor: "pointer",
              }}
            />
            <VolumeUpIcon
              sx={{
                fontSize: 23,
                color: "var(--lightgray)",
                cursor: "pointer",
              }}
            />
            <input
              type="range"
              min="0"
              max="0"
              defaultValue={50}
              className={styles.inputVolume}
            />
          </div>
        </div>
<<<<<<< HEAD
        {/* End Small screen */}
      </div>
      {/* Hidden / Visible on small screen */}
=======
        {/* Large Screen */}
      </div>

>>>>>>> 238471b418de358b6f72ee927304a6775e43f75d
      <MusicPlayerDetails
        songs={songs}
        index={index}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        controler={controler}
        prevMusic={prevMusic}
        nextMusic={nextMusic}
        smallMusicPlayLine={smallMusicPlayLine}
        showMusicDetails={showMusicDetails}
      />
      {/* End Hidden / Visible on small screen */}
    </>
  );
};

export default MusicPlayer;
