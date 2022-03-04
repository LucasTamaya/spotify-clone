import styles from "./SmallMusicPlayer.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

const SmallMusicPlayer = ({
  songs,
  index,
  toggleMusicDetails,
  isPlaying,
  setIsPlaying,
}) => {
  return (
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
    </div>
  );
};

export default SmallMusicPlayer;
