import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Explore.module.scss";
import { api } from "../../api/api";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Grid from "../../components/Grid/Grid";

const Explore = () => {
  const [gameData, setGameData] = useState(null);
  const query = "?dates=2023-01-01,2024-12-31&page_size=40&";

  const fetchData = async () => {
    const responseData = await api(query);
    setGameData(responseData.results);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles["explore-container"]}>
      <header>
        <NavBar />
      </header>

      <main className={styles["explore-main"]}>
        <h1>New and trending!</h1>
        <Grid>
          {gameData && gameData.map(game => <Card key={game.id} {...game} />)}
        </Grid>
      </main>

      <Footer />
    </div>
  );
};

export default Explore;
