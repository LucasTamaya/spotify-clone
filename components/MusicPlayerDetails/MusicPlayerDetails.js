import styles from "./MusicPlayerDetails.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MusicPlayerProgressBar from "../MusicPlayerProgressBar/MusicPlayerProgressBar";
import MusicPlayerControler from "../MusicPlayerControler/MusicPlayerControler";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import SpeakerIcon from "@mui/icons-material/Speaker";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";

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

        {/* Large screen */}
        <div className={styles.footerLargeLeft}>
          <img src={songs[index].image} alt="current song image" />
          <div className={styles.footerLargeLeftParagraph}>
            <span>{songs[index].name}</span>
            <p>{songs[index].artist}</p>
          </div>
          <div className={styles.footerLargeLeftIcons}>
            <FavoriteBorderIcon
              sx={{
                fontSize: 25,
                color: "var(--lightgray)",
                cursor: "pointer",
              }}
            />
            <FitScreenIcon
              sx={{
                fontSize: 25,
                color: "var(--lightgray)",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        {/* Large screen */}

        <div className={styles.footerLargeCenter}>
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

        {/* Large screen */}
        <div className={styles.footerLargeRight}>
          <div className={styles.footerLargeRightIcons}>
            <QueueMusicIcon
              sx={{
                fontSize: 25,
                color: "var(--lightgray)",
                cursor: "pointer",
              }}
            />
            <SpeakerIcon
              sx={{
                fontSize: 25,
                color: "var(--lightgray)",
                cursor: "pointer",
              }}
            />
            <VolumeUpIcon
              sx={{
                fontSize: 25,
                color: "var(--lightgray)",
                cursor: "pointer",
              }}
            />
          </div>
          <input type="range" min="0" max="0" defaultValue={0} />
        </div>
        {/* Large screen */}
      </div>
    </div>
  );
};

export default MusicPlayerDetails;
