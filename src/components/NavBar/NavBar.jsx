import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

import { SiRiotgames } from "react-icons/si";
import { TbShoppingCartSearch } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const NavBar = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <NavLink to="/" className={styles.navigation__links}>
          <SiRiotgames className={styles.navigation__icons} />
          <h2>
            <span>R</span>XG
          </h2>
        </NavLink>
        <NavLink to="/explore" className={styles.navigation__links}>
          <TbShoppingCartSearch className={styles.navigation__icons} />
          <h5>Explore</h5>
        </NavLink>

        <NavLink
          to="https://github.com/AmandeepMewar/RedXone-Games-ecommerce"
          target="_blank"
          className={styles.navigation__links}
        >
          <FaGithub className={styles.navigation__icons} />
          <h5>AmandeepMewar</h5>
        </NavLink>

        <NavLink className={styles.navigation__links}>
          <MdShoppingCart className={styles.navigation__icons} />
          <h5>Cart</h5>
        </NavLink>
      </nav>
    </>
  );
};

export default NavBar;
