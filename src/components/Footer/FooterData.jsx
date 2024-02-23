import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Footer.module.scss";

export const Socials = [
  {
    id: 1,
    icon: <RiInstagramFill className={styles.social__icon} />,
  },
  {
    id: 2,
    icon: <FaYoutube className={styles.social__icon} />,
  },
  {
    id: 3,
    icon: <FaXTwitter className={styles.social__icon} />,
  },
  {
    id: 4,
    icon: <FaFacebook className={styles.social__icon} />,
  },
  {
    id: 5,
    icon: <MdEmail className={styles.social__icon} />,
  },
];
