import Button from "../../ui/Button/Button";
import { FaCartPlus } from "react-icons/fa6";

import styles from "./AddToCart.module.scss";

const AddToCart = () => {
  return (
    <div className={styles["add-to-cart__container"]}>
      <Button className={styles["add-to-cart__button"]}>
        Add to cart <FaCartPlus />
      </Button>
      <p>$20.99</p>
    </div>
  );
};

export default AddToCart;
