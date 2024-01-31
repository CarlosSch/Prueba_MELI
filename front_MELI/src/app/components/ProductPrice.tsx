import { ConditionalRender } from "./ConditionalRender";
import styles from "../styles/productPrice.module.css";

interface Props {
  /**
   * Amount price product
   */
  amount: number;
  /**
   * Decimals price product
   */
  decimals?: number | string;
  /**
   * Show decimals price product
   */
  showDecimals?: boolean;
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
  showDecimals = false,
  decimals = "00",
  currency,
  fontColor = "#333333",
  fontSize = "24px",
}: Props) => {
  const formatAmount = new Intl.NumberFormat("de-DE", {
    style: "decimal",
    currency,
  }).format(amount);

  const Decimals = (
    <span
      className="decimals"
      style={{ fontSize: `calc(${fontSize} / 2 )`, lineHeight: 1.9 }}
    >
      {decimals}
    </span>
  );

  return (
    <div
      className={styles["product-price"]}
      style={{ color: fontColor, fontSize }}
    >
      <span className="currency">$</span>
      <span className={styles.amount}>{formatAmount}</span>
      <ConditionalRender
        condition={!!decimals && showDecimals}
        Then={Decimals}
      />
    </div>
  );
};
