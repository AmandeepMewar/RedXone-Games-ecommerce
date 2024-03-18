import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Browse.module.scss";
import { api } from "../../api/api";
import { useEffect } from "react";
import Card from "../../components/Card/Card";
import Grid from "../../components/Grid/Grid";
import Loader from "../../ui/Loader/Loader";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { gameActions } from "../../features/game/gameSlice";
import Header from "../../components/Header/Header";
import { useLocation, useSearchParams } from "react-router-dom";

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
