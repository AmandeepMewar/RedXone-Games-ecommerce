import styles from "./Grid.module.scss";

const Grid = ({ children }) => {
  return <div className={styles["grid-container"]}>{children}</div>;
};

export default Grid;
