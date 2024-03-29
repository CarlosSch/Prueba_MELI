import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/navSearch.module.css";
import iconSearch from "../../assets/images/ic_Search.png";

interface Props {
  /**
   * placerholder input search
   */
  placeholder: string;
}

export const NavSearch = ({ placeholder }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const query = inputRef.current?.value;
    if (query) {
      navigate(`/items?search=${query}`);
    }
  };

  return (
    <form
      className={styles["nav-search"]}
      role="search"
      method="GET"
      onSubmit={handleSubmit}
    >
      <input
        className={styles["nav-search-input"]}
        type="text"
        placeholder={placeholder}
        ref={inputRef}
      />
      <button className={styles["nav-search-btn"]} type="submit">
        <img src={iconSearch} alt="buscar" />{" "}
      </button>
    </form>
  );
};
