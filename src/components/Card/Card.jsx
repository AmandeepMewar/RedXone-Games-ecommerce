import styles from "./Card.module.scss";
import Button from "../Button/Button";
import { MdAdd } from "react-icons/md";

const Card = props => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-image"]}>
        <img src={props.background_image} alt={props.name} />
      </div>
      <div className={styles["card-info"]}>
        <div className={styles["card__purchase"]}>
          <Button className={styles["card__purchase--button"]}>
            Add to Cart <MdAdd />
          </Button>
          <p>$20.99</p>
        </div>
        <div className={styles["card-title"]}>
          <h3>{props.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
