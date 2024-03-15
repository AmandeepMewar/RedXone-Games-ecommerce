import Button from "../../../ui/Button/Button";

import styles from "./CartItem.module.scss";
const CartItem = () => {
  return (
    <div>
      <div>
        <p>Gta Sandreas</p>
      </div>

      <div>
        <p>$18.99</p>
        <Button></Button>
      </div>
    </div>
  );
};

export default CartItem;
