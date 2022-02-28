import styles from "./MusicPlayerProgressBar.module.css";
import { useRef } from "react";

const MusicPlayerProgressBar = ({
  songs,
  index,
  controler,
  nextMusic,
  isPlaying,
  updateTime,
  convertTime,
}) => {
  const currentTimeRef = useRef();
  const musicProgressBar = useRef();

  // // convertit millisecondes en mm:ss
  // const convertTime = (time) => {
  //   let totalMin = Math.floor(time / 60);
  //   let totalSec = Math.floor(time % 60);
  //   if (totalSec < 10) {
  //     //if sec is less than 10 then add 0 before it
  //     totalSec = `0${totalSec}`;
  //   }
  //   return `${totalMin}:${totalSec}`;
  // };

  // const updateTime = (e) => {
  //   const currentTime = e.target.currentTime; //getting playing song currentTime
  //   const duration = e.target.duration; //getting playing song total duration
  //   let progressWidth = (currentTime / duration) * 100;
  //   musicProgressBar.current.value = `${progressWidth}`;
  //   musicProgressBar.current.style.backgroundSize = `${progressWidth}%`;

  //   // update playing song current time
  //   currentTimeRef.current.innerHTML = convertTime(currentTime);
  // };

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
    <div>
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
          onChange={updateTimeOnClick}
        />
        <span>{convertTime(songs[index].duration)}</span>
      </div>
    </div>
  );
};

export default MusicPlayerProgressBar;
