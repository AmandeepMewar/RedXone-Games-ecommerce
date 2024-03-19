import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";

import styles from "./Browse.module.scss";
import { Footer, NavBar, Card, Grid, Header } from "../../components";
import { api } from "../../api/api";
import { Loader } from "../../ui";

import { gameActions } from "../../features/game/gameSlice";

const Browse = () => {
  const gameData = useSelector(state => state.game.games);
  const loading = useSelector(state => state.game.loading);
  const PageHeader = useSelector(state => state.game.header);
  const dispatch = useDispatch();

  const location = useLocation();

  const [searchParams] = useSearchParams();

  const fetchData = async () => {
    dispatch(gameActions.setLoading(true));
    const search = searchParams.get("search");

    let responseData;
    let query;

    if (search) {
      const search = searchParams.get("search");
      query =
        "?search=" + search.trim().replaceAll(" ", "-") + "&page_size=50&";
      responseData = await api(query);
      dispatch(gameActions.setHeader(search));
      dispatch(gameActions.setShowBackButton(true));
    } else {
      query = "?dates=2023-01-01,2024-12-31&page_size=50&";
      responseData = await api(query);
      dispatch(gameActions.setHeader("New and Trending"));
      dispatch(gameActions.setShowBackButton(false));
    }

    const data = responseData.results.filter(item => item.rating);
    dispatch(gameActions.updateGames(data));
    dispatch(gameActions.setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [location]);

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
            <Header title={PageHeader} />
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
