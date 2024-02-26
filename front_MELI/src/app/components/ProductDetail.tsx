import { ProductDetailProps } from "../interfaces";
import {
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  IconFreeShipping,
  Button,
} from "./";
import styles from "../styles/productDetail.module.css";

export const ProductDetail = ({product}: {product: ProductDetailProps}) => {
  const { title, price, picture, condition, free_shipping, description } = product;
  const { amount, currency, decimals } = price;

  return (
    <div className={styles["pdp-container"]}>
      <div className={styles["pdp-row"]}>
        <div className={styles["pdp-col-2"]}>
          <ProductImage
            src={picture}
            width="680px"
            height="680px"
            alt={title}
          />
          <ProductDescription
            title="Descripción del producto"
            content={description}
          />
        </div>
        <div className={styles["pdp-col-1"]}>
          <div className={styles["pdp-subtitle"]}>
            <span
              className={styles["pdp-subtitle-content"]}
            >{`${condition}`}</span>
          </div>
          <ProductTitle title={title} size="large" fontColor="#333" />
          <div className={styles["pdp-price"]}>
            <ProductPrice
              amount={amount}
              decimals={decimals}
              currency={currency}
              fontSize="46px"
            />
            <IconFreeShipping isFree={free_shipping} />
          </div>
          <Button content="Comprar" />
        </div>
      </div>
    </div>
  );
};
