import styles from "./MusicPlayerDetails.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import MusicPlayerProgressBar from "../MusicPlayerProgressBar/MusicPlayerProgressBar";
import MusicPlayerControler from "../MusicPlayerControler/MusicPlayerControler";

const MusicPlayerDetails = ({
  songs,
  index,
  isPlaying,
  setIsPlaying,
  controler,
  prevMusic,
  nextMusic,
  smallMusicPlayLine,
  showMusicDetails,
}) => {
  const toggleMusicDetails = () => {
    showMusicDetails.current.style.transform = "translateY(100vh)";
    // showMusicDetails.current.style.display = "none";
  };

  return (
    <div className={styles.detailsBackground} ref={showMusicDetails}>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsTop}>
          <KeyboardArrowDownIcon
            onClick={toggleMusicDetails}
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

        <MusicPlayerProgressBar
          songs={songs}
          index={index}
          controler={controler}
          nextMusic={nextMusic}
          isPlaying={isPlaying}
          smallMusicPlayLine={smallMusicPlayLine}
        />

        <MusicPlayerControler
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          prevMusic={prevMusic}
          nextMusic={nextMusic}
        />
      </div>
    </div>
  );
};

export default MusicPlayerDetails;
