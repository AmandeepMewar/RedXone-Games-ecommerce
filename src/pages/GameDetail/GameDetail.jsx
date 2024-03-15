import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { api } from "../../api/api";
import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";

import styles from "./GameDetail.module.scss";
import Loader from "../../ui/Loader/Loader";
import Button from "../../ui/Button/Button";
import AddToCart from "../../components/AddToCart/AddToCart";
import Header from "../../components/Header/Header";

const GameDetail = () => {
  const params = useParams();

  const [gameData, setGameData] = useState(null);

  const [loading, setLoading] = useState(true);

  const query = "/" + params.id + "?";

  const fetchData = async () => {
    setLoading(true);
    const response = await api(query);
    setGameData(response);
    console.log(response);
    setTimeout(() => setLoading(false), 1000);
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
                <h3>About</h3>

                <div>
                  <p>
                    Published By:{" "}
                    {gameData.publishers.map(p => p.name).join(", ")}
                  </p>
                </div>

                <div>
                  <p>
                    Developers:{" "}
                    {gameData.developers.map(d => d.name).join(", ")}
                  </p>
                </div>

                <div>
                  <p>Genres: {gameData.genres.map(g => g.name).join(", ")}</p>
                </div>

                <div>
                  <p>Rating: {gameData.rating}</p>
                </div>

                <div>
                  <p>
                    Release Date:{" "}
                    {new Date(gameData.released).toLocaleDateString()}
                  </p>
                </div>

                <div>
                  <p>
                    Platforms:{" "}
                    {gameData.platforms.map(p => p.platform.name).join(", ")}
                  </p>
                </div>

                <div className="purchase">
                  <AddToCart rating={gameData.rating} />
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
