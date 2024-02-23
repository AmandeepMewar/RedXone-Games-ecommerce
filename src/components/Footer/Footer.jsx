import { Socials } from "./FooterData";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["social"]}>
        {Socials.map(item => (
          <div key={item.id}>{item.icon}</div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
