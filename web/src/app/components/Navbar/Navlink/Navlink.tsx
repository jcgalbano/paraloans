import { NavlinkProps } from "./Navlink.types";
import { useRouter } from "next/navigation";
import styles from "./Navlink.module.scss";

export const Navlink = ({ content, link, isActive }: NavlinkProps) => {
  const router = useRouter();

  return (
    <a
      className={`cursor-pointer font-proximaNova
      text-base text-neutral-600 uppercase
      hover:text-neutral-700
      hover:border-b-[1px] border-neutral-700
      ${
        isActive
          ? "text-primary-500 border-primary-500 hover:border-b-[1px] hover:text-primary-500"
          : ""
      }`}
      onClick={() => router.push(link)}
    >
      {content}
    </a>
  );
};
