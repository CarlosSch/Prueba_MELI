import { MapRender } from "./MapRender";
import styles from "../styles/breadcrumb.module.css";

interface Props {
  categories: string[];
}

export const Breadcrumb = ({ categories }: Props) => {
  return (
    <div className="search-breadcrumb">
      <ol className={styles["breadcrumb-items"]}>
        <MapRender
          of={categories}
          render={(item) => (
            <li className={styles["breadcrumb-item"]}>{item}</li>
          )}
        />
      </ol>
    </div>
  );
};
