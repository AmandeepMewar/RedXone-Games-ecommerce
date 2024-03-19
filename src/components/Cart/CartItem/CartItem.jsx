import { useDispatch } from "react-redux";

import styles from "./CartItem.module.scss";
import { Button } from "../../../ui";

import { cartActions } from "../../../features/cart/cartSlice";

import { IoMdClose } from "react-icons/io";

const CartItem = props => {
  const { id, name, price } = props;

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <div className={styles["cart-item"]}>
      <div className={styles["left"]}>
        <p>{name}</p>
      </div>

      <div className={styles["right"]}>
        <p>${price}</p>
        <Button className={styles["close"]} onClick={handleRemove}>
          <IoMdClose className={styles["close__icon"]} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
