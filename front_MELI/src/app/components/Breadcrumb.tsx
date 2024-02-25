import { MapRender } from "./MapRender";
import style from "../styles/breadcrumb.module.css";

interface Props {
  categories: string[];
}

export const Breadcrumb = ({ categories }: Props) => {
  return (
    <nav className={style.breadcrumb}>
      <ul className={style.breadcrumb__list}>
        <MapRender
          of={categories}
          render={(item) => (
            <li className={style.breadcrumb__item}>{item}</li>
          )}
        />
      </ul>
    </nav>
  );
};
