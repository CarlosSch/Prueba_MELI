import { ConditionalRender } from "./ConditionalRender";
import { Link } from "react-router-dom";
import styles from "../styles/productImage.module.css";

interface Props {
  src: string;
  width?: string;
  height?: string;
  decoding?: "async" | "sync";
  alt: string;
  borderRadius?: string;
  link?: string;
}

export const ProductImage = ({
  src,
  width = "100%",
  height = "100%",
  decoding = "async",
  borderRadius = "0",
  alt,
  link = "",
}: Props) => {
  const Img = (
    <img
      className={styles["product-image"]}
      src={src}
      width={width}
      height={height}
      decoding={decoding}
      alt={alt}
    />
  );

  return (
    <div
      className={styles["product-image-containter"]}
      style={{ borderRadius, width, height }}
    >
      <ConditionalRender condition={!!link} Else={Img}>
        <Link to={link} title={alt}>
          {Img}
        </Link>
      </ConditionalRender>
    </div>
  );
};
