import video from "../../assets/game.mp4";
import styles from "./Home.module.scss";
import { SiRiotgames } from "react-icons/si";
import { TbShoppingCartSearch } from "react-icons/tb";
import { FaGithubAlt } from "react-icons/fa";
const Home = () => {
  return (
    <div className={styles["home-container"]}>
      <header>
        <nav className={styles.navigation}>
          <div className={styles.navigation__links}>
            <SiRiotgames className={styles.navigation__icons} />
            <h2>
              <span>R</span>XG
            </h2>
          </div>
          <div className={styles.navigation__links}>
            <TbShoppingCartSearch className={styles.navigation__icons} />
            <h5>Explore</h5>
          </div>

          <div className={styles.navigation__links}>
            <FaGithubAlt className={styles.navigation__icons} />
            <h5>AmandeepMewar</h5>
          </div>
        </nav>
      </header>
      <video autoPlay loop muted className={styles.video}>
        <source src={video} type="video/mp4" />
      </video>
      <div className={styles["home-bg"]}></div>

      <main>
        <section className={styles.intro}>
          <h1>
            <span>Red</span>xone Games
          </h1>
          <p>
            Dive into the world of gaming bliss! Explore and snag the latest
            games at unbeatable prices. Your one-stop shop for gaming wonders
            awaits – elevate your play with us!
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
