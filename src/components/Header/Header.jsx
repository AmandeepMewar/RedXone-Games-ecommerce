import styles from "./Header.module.scss";

import { useNavigate } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";

import Button from "../../ui/Button/Button";

import { useSelector } from "react-redux";

const Header = ({ title }) => {
  const showBackButton = useSelector(state => state.game.showBackButton);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles["header"]}>
      {showBackButton && (
        <Button className={styles["back-button"]} onClick={handleGoBack}>
          <IoMdArrowRoundBack className={styles["back-button__icon"]} />
          Store
        </Button>
      )}
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
