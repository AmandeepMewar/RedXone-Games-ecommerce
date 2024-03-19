import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./NavBar.module.scss";
import { SearchBar, Cart } from "../index";
import { Button } from "../../ui";

import { cartActions } from "../../features/cart/cartSlice";
import { getTotalCartQuantity } from "../../features/cart/cartSlice";

import { SiRiotgames } from "react-icons/si";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";

const NavBar = ({ browse = false }) => {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.cart.showCart);

  const totalQuantity = useSelector(getTotalCartQuantity);

  const handleCart = () => {
    dispatch(cartActions.setShowCart());
  };
  return (
    <>
      <nav className={styles.navigation}>
        <NavLink to="/" className={styles.navigation__logo}>
          <SiRiotgames className={styles["navigation__logo--icon"]} />
          <h2>
            <span>R</span>XG
          </h2>
        </NavLink>
        {browse ? (
          <NavLink to="/browse" className={styles.navigation__links}>
            <MdOutlineShoppingCart className={styles.navigation__icons} />
            <h5>Browse Store</h5>
          </NavLink>
        ) : (
          <div className={styles["navigation__main"]}>
            <div className={styles["navigation__main--search"]}>
              <SearchBar />
            </div>

            <Button
              className={styles["navigation__cart-btn"]}
              onClick={handleCart}
            >
              <MdOutlineShoppingBag
                className={`${styles.navigation__icons} ${
                  totalQuantity && styles.active
                }`}
              />
              <h5>
                Cart: <span>{totalQuantity}</span>
              </h5>
            </Button>
          </div>
        )}

        {showCart && <Cart />}
      </nav>
    </>
  );
};

export default NavBar;
