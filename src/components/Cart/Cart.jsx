import { createPortal } from "react-dom";
import CartModal from "./CartModal/CartModal";

const id = document.getElementById("cart");

const Cart = () => {
  return createPortal(<CartModal />, id);
};

export default Cart;
