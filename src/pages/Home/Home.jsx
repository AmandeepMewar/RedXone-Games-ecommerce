import video from "../../assets/game.mp4";
import NavBar from "../../components/NavBar/NavBar";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
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

      <main className={styles["home-main"]}>
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

        <section className={styles.links}>
          <Link to="/browse" className={styles.link}>
            <FaShoppingCart className={styles["links-icon"]} /> Browse
          </Link>
          <a
            href="https://github.com/AmandeepMewar"
            target="_blank"
            className={styles.link}
          >
            <FaGithub className={styles["links-icon"]} /> Github
          </a>
          <a
            href="https://www.linkedin.com/in/amandeepmewar/"
            target="_blank"
            className={styles.link}
          >
            <FaLinkedin className={styles["link__icon"]} /> Linkedin
          </a>
          <a
            href="https://github.com/AmandeepMewar/RedXone-Games-ecommerce"
            target="_blank"
            className={styles.link}
          >
            <FaCode className={styles["link__icon"]} /> Code
          </a>
        </section>
      </main>
    </div>
  );
};

export default Home;
