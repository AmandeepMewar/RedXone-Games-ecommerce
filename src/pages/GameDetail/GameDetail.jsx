import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { api } from "../../api/api";
import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";

import { useNavigate } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";

import styles from "./GameDetail.module.scss";
import Loader from "../../ui/Loader/Loader";
import Button from "../../ui/Button/Button";
const GameDetail = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [gameData, setGameData] = useState(null);

  const [loading, setLoading] = useState(true);

  const query = "/" + params.id + "?";
  console.log(query);

  const fetchData = async () => {
    setLoading(true);
    const response = await api(query);
    console.log(response);
    setGameData(response);
    setTimeout(() => setLoading(false), 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <NavBar />
      <main className={styles["main"]}>
        {loading ? (
          <Loader />
        ) : (
          <div className={styles["game-details"]}>
            <div className={styles["game-details__header"]}>
              <Button className={styles["back-button"]} onClick={handleGoBack}>
                <IoMdArrowRoundBack className={styles["back-button__icon"]} />
                Store
              </Button>
              <h1>{gameData.name}</h1>
            </div>

            <div className={styles["game-details__content"]}>
              <div className={styles["carousel-container"]}>
                <Carousel id={params.id} />
              </div>
              <div className={styles["game-details__description"]}>
                <h2>About</h2>

                <p className={styles["game-details__para"]}>
                  {gameData.description_raw}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default GameDetail;
