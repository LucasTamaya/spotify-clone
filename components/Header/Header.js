import styles from "./Header.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Header = ({session}) => {

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLeft}>
        <div className={styles.headerLeftIcon}>
          <ArrowBackIosIcon />
        </div>
        <div className={styles.headerLeftIcon}>
          <ArrowForwardIosIcon />
        </div>
      </div>
      <div className={styles.headerRight}>
        <button className={styles.upgradeBtn}>Upgrade</button>
        <div className={styles.userInfoContainer}>
          <img src={session?.user.image} alt="spotify user logo" />
          <h1>{session?.user.name}</h1>
          <ArrowDropDownIcon sx={{ color: "white", fontSize: 25 }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
