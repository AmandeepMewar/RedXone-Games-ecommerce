import { useDispatch, useSelector } from "react-redux";
import Button from "../../../ui/Button/Button";

import styles from "./CartItem.module.scss";

import { IoMdClose } from "react-icons/io";
import { cartActions } from "../../../features/cart/cartSlice";
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
