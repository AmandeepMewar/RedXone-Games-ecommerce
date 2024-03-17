import { IoSearch } from "react-icons/io5";
import styles from "./SearchBar.module.scss";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { api } from "../../api/api";
import { gameActions } from "../../features/game/gameSlice";
import Button from "../../ui/Button/Button";

import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const fetchData = async () => {
    dispatch(gameActions.setLoading(true));
    const responseData = await api(
      "?search=" + input.trim().replaceAll(" ", "-") + "&page_size=50&"
    );
    console.log(responseData.results);

    navigate("/browse");
    const data = responseData.results.filter(item => item.rating);
    dispatch(gameActions.updateGames(data));
    dispatch(gameActions.setHeader(`"${input.trim()}"`));
    // setTimeout(() => dispatch(gameActions.setLoading(false)), 1000);
    dispatch(gameActions.setLoading(false));
  };

  const handleSearch = e => {
    e.preventDefault();
    if (!input.trim()) return;
    else {
      fetchData();
      dispatch(gameActions.setSearched(true));
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
