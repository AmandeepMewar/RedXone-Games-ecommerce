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
import Header from "../../components/Header/Header";

const Browse = () => {
  const gameData = useSelector(state => state.game.games);
  const loading = useSelector(state => state.game.loading);
  const PageHeader = useSelector(state => state.game.header);
  const searched = useSelector(state => state.game.searched);
  const dispatch = useDispatch();

  const query = "?dates=2023-01-01,2024-12-31&page_size=50&";

  const fetchData = async () => {
    dispatch(gameActions.setLoading(true));
    const responseData = await api(query);
    const data = responseData.results.filter(item => item.rating);
    dispatch(gameActions.updateGames(data));
    dispatch(gameActions.setHeader("New and Trending"));

    dispatch(gameActions.setLoading(false));
    dispatch(gameActions.setSearched(false));
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
            {/* <h1>{PageHeader}</h1> */}
            {searched ? <Header title={PageHeader} /> : <h1>{PageHeader}</h1>}
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
