import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Browse.module.scss";
import { api } from "../../api/api";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Grid from "../../components/Grid/Grid";
import Loader from "../../ui/Loader/Loader";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { gameActions } from "../../features/game/gameSlice";

const Browse = () => {
  const gameData = useSelector(state => state.game.games);
  const loading = useSelector(state => state.game.loading);
  const dispatch = useDispatch();

  const query = "?dates=2023-01-01,2024-12-31&page_size=40&";

  const fetchData = async () => {
    dispatch(gameActions.setLoading(true));
    const responseData = await api(query);
    dispatch(gameActions.updateGames(responseData.results));
    setTimeout(() => dispatch(gameActions.setLoading(false)), 1000);
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
          <Loader />
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

export default Browse;
