import { Link } from "react-router-dom";

import styles from "./Card.module.scss";
import { AddToCart } from "../index";

const Card = props => {
  const { id, name, background_image } = props;

  return (
    <div className={styles["card"]}>
      <Link to={`/browse/${id}`} className={styles["card-image"]}>
        <img src={background_image} alt={name} loading="lazy" />
      </Link>
      <div className={styles["card-info"]}>
        <div className={styles["card-title"]}>
          <Link to={`/browse/${id}`}>
            <h3>{name}</h3>
          </Link>
        </div>
        <div className={styles["add-to-cart"]}>
          <AddToCart {...props} />
        </div>
      </div>
    </div>
  );
};

export default Card;
