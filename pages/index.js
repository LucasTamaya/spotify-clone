import styles from "../styles/Index.module.css";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import Center from "../components/Center/Center";
import Siderbar from "../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <main className={styles.mainContainer}>
        <Siderbar />
        <Center />
      </main>
      <MusicPlayer />
    </>
  );
};

export default Home;
