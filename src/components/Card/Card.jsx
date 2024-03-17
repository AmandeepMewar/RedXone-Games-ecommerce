import AddToCart from "../AddToCart/AddToCart";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = props => {
  return (
    <div className={styles["card"]}>
      <Link to={`/browse/${props.id}`} className={styles["card-image"]}>
        <img src={props.background_image} alt={props.name} loading="lazy" />
      </Link>
      <div className={styles["card-info"]}>
        <div className={styles["card-title"]}>
          <Link to={`/browse/${props.id}`}>
            <h3>{props.name}</h3>
          </Link>
        </div>
        <AddToCart {...props} />
      </div>
    </div>
  );
};

export default Card;
