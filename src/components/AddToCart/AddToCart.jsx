import { useDispatch, useSelector } from "react-redux";

import styles from "./AddToCart.module.scss";
import { Button } from "../../ui";

import { cartActions } from "../../features/cart/cartSlice";
import { calculateGamePrice, formatCurrency } from "../../utils/helpers";

import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

const AddToCart = props => {
  const { id, rating_top, rating, released, name } = props;

  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.cartItems);
  const price = calculateGamePrice(rating, rating_top, released);

  const handleAddToCart = () => {
    dispatch(cartActions.addItem({ id: id, name: name, price: price }));
  };

  const formattedPrice = formatCurrency(price);

  return (
    <div className={styles["add-to-cart"]}>
      {cartItems.some(obj => obj.id == id) ? (
        <p className={styles["add-to-cart__added"]}>
          Added
          <FaCheck style={{ width: "1.2rem", height: "1.2rem" }} />
        </p>
      ) : (
        <Button
          className={styles["add-to-cart__button"]}
          onClick={handleAddToCart}
        >
          Add to cart <IoMdAdd />
        </Button>
      )}
      <p>{formattedPrice}</p>
    </div>
  );
};

export default AddToCart;
