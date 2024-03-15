import styles from "./Header.module.scss";

import { useNavigate } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";

import Button from "../../ui/Button/Button";

const Header = ({ title }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/browse");
  };
  return (
    <div className={styles["header"]}>
      <Button className={styles["back-button"]} onClick={handleGoBack}>
        <IoMdArrowRoundBack className={styles["back-button__icon"]} />
        Store
      </Button>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
