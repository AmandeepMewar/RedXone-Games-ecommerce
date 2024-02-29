import styles from "./Grid.module.scss";
const Grid = props => {
  return <div className={styles["grid-container"]}>{props.children}</div>;
};

export default Grid;
