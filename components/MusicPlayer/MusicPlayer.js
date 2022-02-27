import styles from "./MusicPlayer.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import MusicController from "../MusicController";
import songs from "../../public/songs";
import { useState, useEffect, useRef } from "react";
import Navigation from "../Navigation/Navigation";
import MusicPlayerDetails from "../MusicPlayerDetails/MusicPlayerDetails";
const MusicPlayer = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const controler = useRef();

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

  return (
    <>
      {/* <div className={styles.footerContainer}>
        <div className={styles.musicPlayerTop}>
          <ProgressBar
            controler={controler}
            index={index}
            songs={songs}
            isPlaying={isPlaying}
            nextMusic={nextMusic}
          />
          <MusicController
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            prevMusic={prevMusic}
            nextMusic={nextMusic}
          />
        </div>
        <Navigation />
      </div> */}
      <MusicPlayerDetails
        songs={songs}
        index={index}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        controler={controler}
        prevMusic={prevMusic}
        nextMusic={nextMusic}
      />
    </>
  );
};

export default MusicPlayer;
