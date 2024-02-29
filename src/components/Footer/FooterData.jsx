import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Footer.module.scss";

export const Socials = [
  {
    id: 1,
    icon: <RiInstagramFill className={styles["footer__social--icon"]} />,
  },
  {
    id: 2,
    icon: <FaYoutube className={styles["footer__social--icon"]} />,
  },
  {
    id: 3,
    icon: <FaXTwitter className={styles["footer__social--icon"]} />,
  },
  {
    id: 4,
    icon: <FaFacebook className={styles["footer__social--icon"]} />,
  },
  {
    id: 5,
    icon: <MdEmail className={styles["footer__social--icon"]} />,
  },
];

export const FooterData = [
  {
    id: 1,
    title: "About",
  },
  {
    id: 2,
    title: "Pricing",
  },
  {
    id: 3,
    title: "Terms of Use",
  },
  {
    id: 4,
    title: "Privacy Policy",
  },
  {
    id: 5,
    title: "Careers",
  },
  {
    id: 6,
    title: "Blog",
  },
  {
    id: 7,
    title: "Contact Us",
  },
];
