import style from "../styles/skeleton.module.css";

interface Props {
  width: string;
  height: string;
  borderRadius?: string;
}

export const Skeleton = ({ width, height, borderRadius = "4px" }: Props) => {
  return (
    <div
      style={{
        width,
        height,
        borderRadius
      }}
      className={style["skeleton"]}
    />
  );
};
