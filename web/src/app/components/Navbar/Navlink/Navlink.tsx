import { NavlinkProps } from "./Navlink.types";
import { useRouter } from "next/navigation";
import styles from "./Navlink.module.scss";

export const Navlink = ({ content, link, isActive }: NavlinkProps) => {
  const router = useRouter();

  return (
    <a
      className={`${styles.navLink} ${isActive ? styles.active : ""}`}
      onClick={() => router.push(link)}
    >
      {content}
    </a>
  );
};
