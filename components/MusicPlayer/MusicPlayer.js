import styles from "./MusicPlayer.module.css";
import songs from "../../public/songs";
import Navigation from "../Navigation/Navigation";
import MusicPlayerDetails from "../MusicPlayerDetails/MusicPlayerDetails";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { useState, useEffect, useRef } from "react";

const MusicPlayer = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const controler = useRef();
  const smallMusicPlayLine = useRef();

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

  const convertTime = (time) => {
    let totalMin = Math.floor(time / 60);
    let totalSec = Math.floor(time % 60);
    if (totalSec < 10) {
      //if sec is less than 10 then add 0 before it
      totalSec = `0${totalSec}`;
    }
    return `${totalMin}:${totalSec}`;
  };

  const updateTime = (e) => {
    const currentTime = e.target.currentTime; //getting playing song currentTime
    const duration = e.target.duration; //getting playing song total duration
    let progressWidth = (currentTime / duration) * 100;
    if (musicProgressBar) {
      musicProgressBar.current.value = `${progressWidth}`;
      musicProgressBar.current.style.backgroundSize = `${progressWidth}%`;
    }
    smallMusicPlayLine.current.style.width = `${progressWidth}%`;

    // update playing song current time
    currentTimeRef.current.innerHTML = convertTime(currentTime);
  };

  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.smallMusicPlayer}>
          <FavoriteBorderIcon
            sx={{ fontSize: 30, color: "white", cursor: "pointer" }}
          />
          <div className={styles.smallMusicPlayerParagraph}>
            <span>{songs[index].name}</span>
            <span className={styles.bullPoint}>&bull;</span>
            <p>{songs[index].artist}</p>
          </div>
          {!isPlaying ? (
            <PlayCircleIcon
              onClick={() => setIsPlaying(!isPlaying)}
              sx={{ fontSize: 30, color: "white", cursor: "pointer" }}
            />
          ) : (
            <PauseCircleIcon
              onClick={() => setIsPlaying(!isPlaying)}
              sx={{ fontSize: 30, color: "white", cursor: "pointer" }}
            />
          )}
          <div
            className={styles.smallMusicPlayLine}
            ref={smallMusicPlayLine}
          ></div>
        </div>
        <div className={styles.nav}>
          <Navigation />
        </div>
      </div>
      <MusicPlayerDetails
        songs={songs}
        index={index}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        controler={controler}
        prevMusic={prevMusic}
        nextMusic={nextMusic}
        updateTime={updateTime}
        convertTime={convertTime}
      />
    </>
  );
};

export default MusicPlayer;
