import { Socials, FooterData } from "./FooterData";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

import psBadge from "../../assets/images/playstore_badge.png";
import asBadge from "../../assets/images/applestore_badge.svg";
import gsBadge from "../../assets/images/galaxystore_badge.png";

import { SiRiotgames } from "react-icons/si";
const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__links"]}>
        {FooterData.map(item => (
          <Link key={item.id} className={styles["footer__links--item"]}>
            {item.title}
          </Link>
        ))}
      </div>
      <Link to="/" className={styles["footer__logo"]}>
        <SiRiotgames className={styles["footer__logo--icon"]} />
      </Link>
      <div className={styles["footer__copyright"]}>
        <p>
          © 2024 <span>RedXone Games.</span> All rights reserved.
        </p>
        <p className={styles["footer__copyright--text"]}>
          Our websites may contain resources provided by third parties. These
          links are provided for your convenience only. RedXone Games has no
          control over the contents of those resources, and accepts no
          responsibility for them or for any loss or damage that may arise from
          your use of them.
        </p>
      </div>

      <div className={styles["footer__badges"]}>
        <img
          src={psBadge}
          alt="PlayStore Badge"
          className={styles["footer__badges--item"]}
        />
        <img
          src={asBadge}
          alt="AppStore Badge"
          className={styles["footer__badges--item"]}
        />
      </div>
      <div className={styles["footer__social"]}>
        {Socials.map(item => (
          <div key={item.id}>{item.icon}</div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
