import { ConditionalRender } from "./ConditionalRender";
import { Link } from "react-router-dom";
import styles from "../styles/productImage.module.css";

interface Props {
  src: string;
  width?: string;
  height?: string;
  decoding?: "async" | "sync";
  loading?: "eager" | "lazy";
  alt: string;
  link?: string;
}

export const ProductImage = ({
  src,
  width = "100%",
  height = "100%",
  decoding = "async",
  loading = "lazy",
  alt,
  link = "",
}: Props) => {
  
  const Img = (
    <img
      className={styles["product-image"]}
      src={src}
      width={width}
      height={height}
      alt={alt}
      loading={loading}
      decoding={decoding}
    />
  );

  return (
    <ConditionalRender
      condition={!!link}
      Then={
        <Link to={link} title={alt}>
          {Img}
        </Link>
      }
      Else={Img}
    />
  );
};
