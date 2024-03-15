import video from "../../assets/game.mp4";
import NavBar from "../../components/NavBar/NavBar";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles["home-container"]}>
      <header>
        <NavBar browse={true} />
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

        <section></section>
      </main>
    </div>
  );
};

export default Home;
