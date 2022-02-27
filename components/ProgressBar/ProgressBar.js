import styles from "./ProgressBar.module.css";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { useState, useEffect, useRef } from "react";

const ProgressBar = ({ controler, index, songs, isPlaying, nextMusic }) => {
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
    // musicProgressBar.current.style.width = `${progressWidth}%`;
    musicProgressBar.current.value = `${progressWidth}`;

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
    <div className={styles.wrapper}>
      <h2>Playing now: {songs[index].name}</h2>
      <audio
        id={styles.mainAudio}
        ref={controler}
        src={songs[index].src}
        onTimeUpdate={updateTime}
        onEnded={nextMusic}
      ></audio>
      <div ref={currentTimeRef}>0:00</div>
      <input
        type="range"
        min={0}
        max={100}
        ref={musicProgressBar}
        // value={0}
        onChange={updateTimeOnClick}
      />
      <div>{convertTime(songs[index].duration)}</div>
      <div className={styles.controls}></div>
    </div>
  );
};

export default ProgressBar;
