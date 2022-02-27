import styles from "./MusicPlayerDetails.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import RepeatIcon from "@mui/icons-material/Repeat";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { useRef } from "react";

const MusicPlayerDetails = ({
  songs,
  index,
  isPlaying,
  setIsPlaying,
  controler,
  prevMusic,
  nextMusic,
}) => {
  const musicProgressBar = useRef();
  const musicProgressArea = useRef();
  const currentTimeRef = useRef();

  // convertit millisecondes en mm:ss
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
    musicProgressBar.current.value = `${progressWidth}`;
    musicProgressBar.current.style.backgroundSize = `${progressWidth}%`;

    // update playing song current time
    currentTimeRef.current.innerHTML = convertTime(currentTime);
  };

  // update playing song currentTime on according to the progress bar width
  const updateTimeOnClick = (e) => {
    let progressWidth = musicProgressBar.current.max;
    let clickedOffsetX = e.target.value; //getting offset x value
    // let progressWidth = musicProgressArea.current.clientWidth; //getting width of progress bar
    // let clickedOffsetX = e.clientX; //getting offset x value
    let songDuration = controler.current.duration; //getting song total duration
    console.log("progress width: ", progressWidth);
    console.log("client off set: ", clickedOffsetX);
    console.log("song duration: ", songDuration);

    controler.current.currentTime =
      (clickedOffsetX / progressWidth) * songDuration;
    // pause la musique
    if (!isPlaying) {
      controler.current.pause();
    }

    // jous la musique
    if (isPlaying) {
      controler.current.play();
    }
  };

  return (
    <div className={styles.detailsBackground}>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsTop}>
          <KeyboardArrowDownIcon
            sx={{ fontSize: "35px", color: "white", cursor: "pointer" }}
          />
          <MoreHorizIcon
            sx={{ fontSize: "35px", color: "white", cursor: "pointer" }}
          />
        </div>

        <img
          src={songs[index].image}
          alt="music image"
          className={styles.musicImg}
        />

        <div className={styles.detailsCenter}>
          <div className={styles.detailsCenterParagraph}>
            <p>
              <span>{songs[index].name}</span>
            </p>
            <p>{songs[index].artist}</p>
          </div>
          <div className={styles.detailsCenterIcons}>
            <FavoriteBorderIcon
              sx={{ fontSize: "25px", color: "white", cursor: "pointer" }}
            />
            <QueueMusicIcon
              sx={{ fontSize: "25px", color: "white", cursor: "pointer" }}
            />
          </div>
        </div>

        <audio
          id={styles.mainAudio}
          ref={controler}
          src={songs[index].src}
          onTimeUpdate={updateTime}
          onEnded={nextMusic}
        ></audio>

        <div className={styles.progressContainer}>
          <span ref={currentTimeRef}>0:00</span>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="0"
            ref={musicProgressBar}
            className={styles.progressBar}
          />
          <span>{convertTime(songs[index].duration)}</span>
        </div>

        <div className={styles.detailsBottom}>
          <ShuffleIcon
            sx={{ fontSize: "30px", color: "white", cursor: "pointer" }}
          />
          <FastRewindIcon
            onClick={prevMusic}
            sx={{ fontSize: "35px", color: "white", cursor: "pointer" }}
          />
          {!isPlaying ? (
            <PlayCircleFilledIcon
              onClick={() => setIsPlaying(!isPlaying)}
              sx={{ fontSize: "45px", color: "white", cursor: "pointer" }}
            />
          ) : (
            <PauseCircleIcon
              onClick={() => setIsPlaying(!isPlaying)}
              sx={{ fontSize: "45px", color: "white", cursor: "pointer" }}
            />
          )}
          <FastForwardIcon
            onClick={nextMusic}
            sx={{ fontSize: "35px", color: "white", cursor: "pointer" }}
          />
          <RepeatIcon
            sx={{ fontSize: "30px", color: "white", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerDetails;
