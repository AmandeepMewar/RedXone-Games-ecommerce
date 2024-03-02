import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { api } from "../../api/api";
import { useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";

import styles from "./GameDetail.module.scss";

const GameDetail = () => {
  const params = useParams();

  const query = "/" + params.id + "?";
  console.log(query);

  const fetchData = async () => {
    const response = await api(query);
    console.log(response);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <NavBar />
      <div className={styles["carousel-container"]}>
        <Carousel id={params.id} />
      </div>
    </div>
  );
};

export default GameDetail;
