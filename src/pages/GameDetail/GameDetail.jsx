import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./GameDetail.module.scss";
import { NavBar, Carousel, AddToCart, Header } from "../../components";
import { api } from "../../api/api";
import { Loader } from "../../ui";

import { gameActions } from "../../features/game/gameSlice";

const GameDetail = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const [gameData, setGameData] = useState(null);

  const [loading, setLoading] = useState(true);

  const query = "/" + params.id + "?";

  const fetchData = async () => {
    setLoading(true);
    const response = await api(query);
    setGameData(response);
    setTimeout(() => setLoading(false), 1000);
    dispatch(gameActions.setShowBackButton(true));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles["container"]}>
      <NavBar />
      <main className={styles["main"]}>
        {loading ? (
          <Loader />
        ) : (
          <div className={styles["game-details"]}>
            <Header title={gameData.name} />

            <div className={styles["game-details__content"]}>
              <div className={styles["carousel-container"]}>
                <Carousel id={params.id} />
              </div>

              <div className={styles["game-details__about"]}>
                <div className={styles["game-details__info"]}>
                  <h3>About</h3>

                  <div>
                    <p className={styles["game-details__url"]}>
                      <a href={gameData.website}>
                        {gameData.name}'s Official Website
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      <span>Published By: </span>
                      {gameData.publishers.map(p => p.name).join(", ")}
                    </p>
                  </div>

                  <div>
                    <p>
                      <span>Developers: </span>
                      {gameData.developers.map(d => d.name).join(", ")}
                    </p>
                  </div>

                  <div>
                    <p>
                      <span>Genres:</span>{" "}
                      {gameData.genres.map(g => g.name).join(", ")}
                    </p>
                  </div>

                  <div>
                    <p>
                      <span>Rating:</span> {gameData.rating}
                    </p>
                  </div>

                  <div>
                    <p>
                      <span>Release Date: </span>
                      {new Date(gameData.released).toLocaleDateString()}
                    </p>
                  </div>

                  <div>
                    <p>
                      <span>Platforms: </span>
                      {gameData.platforms.map(p => p.platform.name).join(", ")}
                    </p>
                  </div>
                </div>

                <div className={styles["purchase"]}>
                  <AddToCart {...gameData} />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default GameDetail;
