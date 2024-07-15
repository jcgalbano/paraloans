import { TextButtonProps } from "../TextButton/TextButton.types";
import styles from "./OutlinedButton.module.scss";

export const OutlinedButton = ({ content, callback }: TextButtonProps) => {
  return (
    <button className={styles.outlinedBtn} onClick={callback}>
      {content}
    </button>
  );
};
