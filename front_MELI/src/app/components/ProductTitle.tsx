import { Link } from "react-router-dom";
import { ConditionalRender } from "./ConditionalRender";
import styles from "../styles/productTitle.module.css";

interface Props {
  /**
   * Title to product
   */
  title: string;
  /**
   * Link to the product detail page
   */
  link?: string;
  /**
   * Select level to heading <h${level} />
   */
  level?: "1" | "2" | "3" | "4" | "5";
  /**
   * Font color to title
   */
  fontColor?: string;
  /**
   * Size to title
   */
  size?: "small" | "long";
  /**
   * If you want to show the title truncated
   */
  truncate?: boolean;
}

export const ProductTitle = ({
  title,
  level = "1",
  link = "",
  size = "small",
  fontColor = "#666666",
  truncate = false,
}: Props) => {
  
  const Heading = () => {
    const CustomHeading = `h${level}` as keyof JSX.IntrinsicElements;
    
    const className = `
    ${styles.heading} 
    ${styles[size]} 
    ${truncate ? styles.truncated : ""}`;

    return (
      <CustomHeading className={className} style={{ color: fontColor }}>
        {title}
      </CustomHeading>
    );
  };

  return (
    <div className={styles["product-title-container"]}>
      <ConditionalRender condition={!!link} Else={<Heading />}>
        <Link className={styles["product-title-link"]} to={link} title={title}>
          <Heading />
        </Link>
      </ConditionalRender>
    </div>
  );
};
