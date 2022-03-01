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
        {/* End Small screen */}
      </div>
      {/* Hidden / Visible on small screen */}
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
