import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.scss";
const SearchBar = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search games..."
        id="searchbar"
        className={styles["search-input"]}
      />
      <label htmlFor="searchbar" className={styles["search-label"]}>
        <FaSearch />
      </label>
    </div>
  );
};
export default SearchBar;
