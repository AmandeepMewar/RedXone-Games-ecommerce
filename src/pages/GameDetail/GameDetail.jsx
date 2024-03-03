import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { api } from "../../api/api";
import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";

import styles from "./GameDetail.module.scss";
import { LuLoader2 } from "react-icons/lu";
const GameDetail = () => {
  const params = useParams();

  const [loading, setLoading] = useState(true);

  const query = "/" + params.id + "?";
  console.log(query);

  const fetchData = async () => {
    setLoading(true);
    const response = await api(query);
    setTimeout(() => setLoading(false), 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <NavBar />
      {loading ? (
        <div className={styles["game-loading"]}>
          <LuLoader2 className={styles["game-loading__icon"]} />
          Please wait...
        </div>
      ) : (
        <div className={styles["carousel-container"]}>
          <Carousel id={params.id} />
        </div>
      )}
    </div>
  );
};

export default GameDetail;
