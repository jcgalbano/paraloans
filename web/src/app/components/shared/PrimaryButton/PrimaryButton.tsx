import { PrimaryButtonProps } from "./PrimaryButton.types";
import styles from "./PrimaryButton.module.scss";

export const PrimaryButton = ({
  content,
  size,
  callback,
}: PrimaryButtonProps) => {
  const sizeStyle: string = size || "md";

  return (
    <button className={styles[`${sizeStyle}PrimaryBtn`]} onClick={callback}>
      {content}
    </button>
  );
};
