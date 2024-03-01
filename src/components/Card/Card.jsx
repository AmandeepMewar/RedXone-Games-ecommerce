import styles from "./Card.module.scss";
import Button from "../Button/Button";
import { FaCartPlus } from "react-icons/fa6";
const Card = props => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-image"]}>
        <img src={props.background_image} alt={props.name} />
      </div>
      <div className={styles["card-info"]}>
        <div className={styles["card-title"]}>
          <h3>{props.name}</h3>
        </div>
        <div className={styles["card__purchase"]}>
          <Button className={styles["card__purchase--button"]}>
            Add to cart <FaCartPlus />
          </Button>
          <p>$20.99</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
