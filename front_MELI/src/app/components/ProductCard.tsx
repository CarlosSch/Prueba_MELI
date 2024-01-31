import { ProductImage, ProductTitle, IconFreeShipping, ProductPrice } from "./";
import { Product } from "../interfaces";
import styles from "../styles/productCard.module.css";

export const ProductCard = ({
  id,
  title,
  price: { amount, currency },
  picture,
  condition,
  free_shipping,
}: Product) => {
  
  return (
    <div className={styles["product-card"]}>
      <ProductImage
        src={picture}
        width="180px"
        height="180px"
        link={`/items/${id}`}
        alt={title}
      />
      <div className={styles["product-content"]}>
        <div className={styles["product-content-row"]}>
          <ProductPrice amount={amount} currency={currency} />
          <IconFreeShipping isFree={free_shipping} />
        </div>
        <ProductTitle
          title={title}
          link={`/items/${id}`}
          level="3"
          truncate={true}
        />
      </div>
      <div className={styles["product-condition"]}>
        <p className="condition">{condition}</p>
      </div>
    </div>
  );
};
