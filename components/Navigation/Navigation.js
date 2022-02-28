import styles from "./Navigation.module.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FitbitIcon from "@mui/icons-material/Fitbit";
import spotifyIcon from "../../images/spotify-icon.svg";
import Image from "next/image";

const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navIconContainer}>
        <HomeIcon sx={{ color: "var(--lightgray)", fontSize: 30 }} />
        <p>Home</p>
      </div>
      <div className={styles.navIconContainer}>
        <SearchIcon sx={{ color: "var(--lightgray)", fontSize: 30 }} />
        <p>Search</p>
      </div>
      <div className={styles.navIconContainer}>
        <FitbitIcon sx={{ color: "var(--lightgray)", fontSize: 30 }} />
        <p>Your Library</p>
      </div>
      <div className={styles.navIconContainer}>
        <Image src={spotifyIcon} width="24px" height="24px" />
        <p>Get App</p>
      </div>
    </nav>
  );
};

export default Navigation;
