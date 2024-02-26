import { NavSearch } from "./NavSearch";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";

export const Header = () => {
  return (
    <header className={styles["nav-header"]}>
      <div className={styles["nav-items"]}>
        <div className={styles["nav-items--left"]}>
          <Link to={"/"} title="Mercado Libre">
            <img src="/Logo_ML.png" alt="Mercado Libre" />
          </Link>
        </div>
        <div className={styles["nav-items--right"]}>
          <NavSearch placeholder="Nunca dejes de buscar" />
        </div>
      </div>
    </header>
  );
};
