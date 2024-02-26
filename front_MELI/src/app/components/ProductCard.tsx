import { ProductImage, ProductTitle, IconFreeShipping, ProductPrice } from "./";
import { Product } from "../interfaces";
import styles from "../styles/productCard.module.css";

export const ProductCard = ({ product }: { product: Product }) => {
  const {
    id,
    title,
    price: { amount, decimals, currency },
    picture,
    condition,
    free_shipping,
  } = product;

  return (
    <div className={styles["product-card"]}>
      <div className={styles["product-card__image"]}>
        <ProductImage
          src={picture}
          width="180px"
          height="180px"
          link={`/items/${id}`}
          alt={title}
        />
      </div>
      <div className={styles["product-card__content"]}>
        <div className={styles["product-card__content--group"]}>
          <ProductPrice amount={amount} currency={currency} decimals={decimals}/>
          <IconFreeShipping isFree={free_shipping} />
        </div>
        <div className={styles["product-card__title"]}>
          <ProductTitle
            title={title}
            link={`/items/${id}`}
            level="3"
            truncate={true}
          />
        </div>
      </div>
      <div className={styles["product-card__condition"]}>
        <p className="product-condition">{condition}</p>
      </div>
    </div>
  );
};
