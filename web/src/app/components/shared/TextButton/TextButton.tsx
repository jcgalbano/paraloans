import { TextButtonProps } from "./TextButton.types";
import styles from "./TextButton.module.scss";

export const TextButton = ({ content, size, callback }: TextButtonProps) => {
  return (
    <button className={styles.txtBtn} onClick={callback}>
      {content}
    </button>
  );
};
