import styles from "./MusicPlayerControler.module.css";
import RepeatIcon from "@mui/icons-material/Repeat";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import ShuffleIcon from "@mui/icons-material/Shuffle";

const MusicPlayerControler = ({isPlaying, setIsPlaying, prevMusic, nextMusic}) => {
  return (
    <div className={styles.controlerContainer}>
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
  );
};

export default MusicPlayerControler;
