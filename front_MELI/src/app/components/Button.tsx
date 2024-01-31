import styles from "../styles/button.module.css";

interface ButtonProps {
  /**
   * Button primary color
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What font color to use
   */
  fontColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "large";
  /**
   * Button contents
   */
  content: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({
  primary = true,
  size = "large",
  backgroundColor,
  fontColor,
  content,
  ...props
}: ButtonProps) => {
  const classNames = `
  ${styles["btn-action"]}
  ${styles[`btn--${primary ? "primary" : "secondary"}`]}
  ${styles[`btn--${size}`]}`;

  return (
    <button
      type="button"
      className={classNames}
      style={{ backgroundColor, color: fontColor }}
      {...props}
    >
      {content}
    </button>
  );
};
