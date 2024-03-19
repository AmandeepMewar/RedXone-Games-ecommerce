import styles from "./Error.module.scss";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 3000);

  return (
    <div className={styles["error"]}>
      <div className={styles["error__content"]}>
        <h1>404</h1>
        <h2>Page Not Found.</h2>
        <p>Redirecting to homepage...</p>
        <div className={styles["loader"]}></div>
      </div>
    </div>
  );
};

export default Error;
