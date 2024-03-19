import Button from "../../../ui/Button/Button";

import styles from "./CartModal.module.scss";
import { cartActions } from "../../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import { FaArrowRight } from "react-icons/fa6";

import {
  getTotalCartQuantity,
  getTotalCartPrice,
} from "../../../features/cart/cartSlice";
import { formatCurrency } from "../../../utils/helpers";

const CartModal = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.cartItems);
  let totalPrice = useSelector(getTotalCartPrice);
  const totalQuantity = useSelector(getTotalCartQuantity);

  totalPrice = formatCurrency(totalPrice);

  const handleCart = () => {
    dispatch(cartActions.setShowCart());
  };

  const handleClear = () => {
    dispatch(cartActions.clearCart());
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
          <h2>
            {(totalQuantity === 0 && `No games added`) ||
              (totalQuantity === 1 && `1 game added`) ||
              (totalQuantity > 1 && `${totalQuantity} games added`)}
          </h2>
          {totalQuantity ? (
            <Button
              onClick={handleClear}
              className={styles["cart-header__clear"]}
            >
              Clear
            </Button>
          ) : null}
        </div>
        <div className={styles["items"]}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        <div className={styles["checkout"]}>
          <p>Total: {totalPrice}</p>

          <Button className={styles["checkout-btn"]}>
            <h3>
              Checkout <FaArrowRight />
            </h3>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
