import ReactMarkdown from "react-markdown";
import styles from "../styles/productDescription.module.css";

interface Props {
  title: string;
  content: string | undefined;
}

export const ProductDescription = ({ title, content }: Props) => {
  return (
    <div className={styles["product-description"]}>
      <h2 className={styles["description-title"]}>{title}</h2>
      <ReactMarkdown className={styles["description-content"]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};
