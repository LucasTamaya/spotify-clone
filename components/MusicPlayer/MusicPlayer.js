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
        {/* Large Screen */}
      </div>

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
    </>
  );
};

export default MusicPlayer;
