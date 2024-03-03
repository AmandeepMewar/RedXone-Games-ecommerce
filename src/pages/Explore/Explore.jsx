import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Explore.module.scss";
import { api } from "../../api/api";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Grid from "../../components/Grid/Grid";

import { LuLoader2 } from "react-icons/lu";

const Explore = () => {
  const [loading, setLoading] = useState(true);
  const [gameData, setGameData] = useState(null);
  const query = "?dates=2023-01-01,2024-12-31&page_size=40&";

  const fetchData = async () => {
    setLoading(true);
    const responseData = await api(query);
    setGameData(responseData.results);
    setTimeout(() => setLoading(false), 1000);
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
        {loading ? (
          <div className={styles["game-loading"]}>
            <LuLoader2 className={styles["game-loading__icon"]} />
            Please wait...
          </div>
        ) : (
          <div className={styles["game-list"]}>
            <h1>Trending and interesting</h1>
            <Grid>
              {gameData &&
                gameData.map(game => <Card key={game.id} {...game} />)}
            </Grid>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Explore;
