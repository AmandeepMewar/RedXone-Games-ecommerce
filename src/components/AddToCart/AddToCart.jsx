import Button from "../../ui/Button/Button";
import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import styles from "./AddToCart.module.scss";
import priceCalc from "../../utils/priceCalc";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cart/cartSlice";

const AddToCart = ({ rating }) => {
  const dispatch = useDispatch();
  const [Added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    dispatch(cartActions.addItem("hello"));
  };
  const price = priceCalc(rating);
  return (
    <div className={styles["add-to-cart"]}>
      {Added ? (
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
      <p>${price}</p>
    </div>
  );
};

export default AddToCart;
