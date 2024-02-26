import style from "../styles/productPrice.module.css";
import { Show } from "./Show";

interface Props {
  /**
   * Amount price product
   */
  amount: number;
  /**
   * Decimals price product
   */
  decimals?: number;
  /**
   * Currency product
   */
  currency?: string;
  /**
   * Font color price
   */
  fontColor?: string;
  /**
   * Font size price
   */
  fontSize?: string;
}

export const ProductPrice = ({
  amount,
  decimals = 0,
  currency,
  fontColor = "#333333",
  fontSize = "24px",
}: Props) => {
  const formatAmount = new Intl.NumberFormat("de-DE", {
    style: "decimal",
    currency,
  }).format(amount);

  return (
    <div
      className={style["product-price"]}
      style={{ color: fontColor, fontSize }}
    >
      <span className={style["product-price___currency"]}>$</span>
      <span className={style["product-price__amount"]}>{formatAmount}</span>
      <Show.When isTrue={!!decimals}>
        <span
          className="decimals"
          style={{ fontSize: `calc(${fontSize} / 2 )`, lineHeight: 1.9 }}
        >
          {decimals}
        </span>
      </Show.When>
    </div>
  );
};
