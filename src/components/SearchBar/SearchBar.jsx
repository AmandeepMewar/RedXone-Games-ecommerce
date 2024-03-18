import { IoSearch } from "react-icons/io5";
import styles from "./SearchBar.module.scss";
import { useState } from "react";
import Button from "../../ui/Button/Button";

import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [input, setInput] = useState("");

  const handleSearch = e => {
    e.preventDefault();
    if (!input.trim()) return;
    else {
      navigate("/browse");
      setSearchParams({ search: input });
    }
  };

  return (
    <form className={styles["search-bar__form"]} onSubmit={handleSearch}>
      <div className={styles["search-bar"]}>
        <input
          type="text"
          placeholder="Search games..."
          id="searchbar"
          autoComplete="off"
          value={input}
          onChange={e => setInput(e.target.value)}
          className={styles["search-bar__input"]}
        />
      </div>
      <Button type="submit" className={styles["search-bar__btn"]}>
        <IoSearch className={styles["search-bar__icon"]} />
      </Button>
    </form>
  );
};
export default SearchBar;
