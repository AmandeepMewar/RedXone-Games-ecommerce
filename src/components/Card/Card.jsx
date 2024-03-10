import AddToCart from "../AddToCart/AddToCart";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = props => {
  return (
    <Link to={`/browse/${props.id}`} className={styles["card"]}>
      <div className={styles["card-image"]}>
        <img src={props.background_image} alt={props.name} loading="lazy" />
      </div>
      <div className={styles["card-info"]}>
        <div className={styles["card-title"]}>
          <h3>{props.name}</h3>
        </div>
        <AddToCart />
      </div>
    </Link>
  );
};

export default Card;
