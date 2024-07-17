"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { NavlogoProps } from "./Navlogo.types";

import MainLogo from "/public/logo.svg";
import AltLogo from "/public/logo-alt.svg";

export const Navlogo = ({ type }: NavlogoProps) => {
  const router = useRouter();

  return (
    <Image
      priority
      className="cursor-pointer"
      src={type == "alt" ? AltLogo : MainLogo}
      alt="main logo"
      onClick={() => router.push("/")}
    />
  );
};
