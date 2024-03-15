import Button from "../../../ui/Button/Button";

import styles from "./CartModal.module.scss";
import { cartActions } from "../../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const CartModal = () => {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(cartActions.setShowCart());
  };

  useEffect(() => {
    const root = document.querySelector("#root");

    if (root) {
      root.style.overflow = "hidden";
    }

    return () => {
      if (root) {
        root.style.overflow = "auto";
      }
    };
  }, []);

  return (
    <div className={styles["cart"]}>
      <div className={styles["background"]} onClick={handleCart}></div>
      <div className={styles["cart-modal"]}>
        <div className={styles["cart-header"]}>
          <h1>No Games</h1>
          <Button>Clear</Button>
        </div>
        <div></div>

        <div className={styles["checkout"]}>
          <p>Total: $0</p>

          <Button>Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
