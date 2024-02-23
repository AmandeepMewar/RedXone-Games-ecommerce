import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Explore.module.scss";
const Explore = () => {
  return (
    <div className={styles["explore-container"]}>
      <header>
        <NavBar />
        <h1>New and trending</h1>
      </header>

      <main></main>

      <Footer />
    </div>
  );
};

export default Explore;
