import { IoSearch } from "react-icons/io5";
import styles from "./SearchBar.module.scss";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { api } from "../../api/api";
import { gameActions } from "../../features/game/gameSlice";
import Button from "../../ui/Button/Button";

import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const fetchData = async query => {
    dispatch(gameActions.setLoading(true));
    const response = await api(
      "?search=" + input.replaceAll(" ", "-") + "&search_precise=true&"
    );
    // console.log(response.results);

    navigate("/browse");
    dispatch(gameActions.updateGames(response.results));
    setTimeout(() => dispatch(gameActions.setLoading(false)), 1000);
  };

  const search = e => {
    e.preventDefault();
    if (input.trim()) fetchData();
  };

  return (
    <form className={styles["search-bar"]} onSubmit={search}>
      <input
        type="text"
        placeholder="Search games..."
        id="searchbar"
        autoComplete="off"
        value={input}
        onChange={e => setInput(e.target.value)}
        className={styles["search-bar__input"]}
      />
      <Button className={styles["search-bar__btn"]}>
        <IoSearch className={styles["search-bar__icon"]} />
      </Button>
    </form>
  );
};
export default SearchBar;
