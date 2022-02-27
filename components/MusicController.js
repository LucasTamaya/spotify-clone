import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MusicController = ({
  isPlaying,
  setIsPlaying,
  prevMusic,
  nextMusic,
}) => {
  return (
    <div>
      <div className="controlerBar">
        {/* <FastRewindIcon onClick={prevMusic} /> */}
        {!isPlaying ? (
          <PlayCircleFilledIcon onClick={() => setIsPlaying(!isPlaying)} />
        ) : (
          <PauseCircleIcon onClick={() => setIsPlaying(!isPlaying)} />
        )}
        {/* <FastForwardIcon onClick={nextMusic} /> */}
      </div>
    </div>
  );
};

export default MusicController;
