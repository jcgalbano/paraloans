import Image from "next/image";
import Logo from "/public/logo.svg";
import { useRouter } from "next/navigation";

export const Navlogo = () => {
  const router = useRouter();

  return (
    <Image
      priority
      className="cursor-pointer"
      src={Logo}
      alt="main logo"
      onClick={() => router.push("/")}
    />
  );
};
