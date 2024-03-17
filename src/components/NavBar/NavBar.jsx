import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

import { SiRiotgames } from "react-icons/si";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";
import SearchBar from "../SearchBar/SearchBar";

import Button from "../../ui/Button/Button";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../features/cart/cartSlice";
import Cart from "../Cart/Cart";

import { getTotalCartQuantity } from "../../features/cart/cartSlice";

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
        <NavLink to="/" className={styles.navigation__links}>
          <SiRiotgames className={styles.navigation__logo} />
          <h2>
            <span>Red</span>Xone
          </h2>
        </NavLink>
        {browse ? (
          <NavLink to="/browse" className={styles.navigation__links}>
            <MdOutlineShoppingCart className={styles.navigation__icons} />
            <h5>Browse Store</h5>
          </NavLink>
        ) : (
          <SearchBar />
        )}

        <NavLink
          to="https://github.com/AmandeepMewar/RedXone-Games-ecommerce"
          target="_blank"
          className={styles.navigation__links}
        >
          <FiGithub className={styles.navigation__icons} />
          <h5>AmandeepMewar</h5>
        </NavLink>

        <Button className={styles["navigation__cart-btn"]} onClick={handleCart}>
          <MdOutlineShoppingBag
            className={`${styles.navigation__icons} ${
              totalQuantity && styles.active
            }`}
          />
          <h5>
            Cart: <span>{totalQuantity}</span>
          </h5>
        </Button>

        {showCart && <Cart />}
      </nav>
    </>
  );
};

export default NavBar;
