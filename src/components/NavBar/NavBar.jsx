import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

import { SiRiotgames } from "react-icons/si";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";

const NavBar = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <NavLink to="/" className={styles.navigation__links}>
          <SiRiotgames className={styles.navigation__logo} />
          <h2>
            <span>R</span>XG
          </h2>
        </NavLink>
        <NavLink to="/explore" className={styles.navigation__links}>
          <MdOutlineShoppingCart className={styles.navigation__icons} />
          <h5>Explore Store</h5>
        </NavLink>

        <NavLink
          to="https://github.com/AmandeepMewar/RedXone-Games-ecommerce"
          target="_blank"
          className={styles.navigation__links}
        >
          <FiGithub className={styles.navigation__icons} />
          <h5>AmandeepMewar</h5>
        </NavLink>

        <NavLink className={styles.navigation__links}>
          <MdOutlineShoppingBag className={styles.navigation__icons} />
          <h5>Cart</h5>
        </NavLink>
      </nav>
    </>
  );
};

export default NavBar;
