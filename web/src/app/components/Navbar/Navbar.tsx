"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { Navlink } from "./Navlink";
import { Navlogo } from "./Navlogo";
import { PrimaryButton } from "../shared/PrimaryButton";
import { TextButton } from "../shared/TextButton";
import { CollapsedNav } from "./CollapsedNav";

import BurgerMenu from "/public/burger.svg";

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav className="sticky flex flex-col">
      <div className="flex justify-between h-20 items-center bg-general-white p-5">
        <Navlogo />
        <div className="nav-links flex space-between space-x-10 hidden lg:block">
          <Navlink content={"Home"} link="/" isActive={pathname == "/"} />
          <Navlink content={"About"} link="/" />
          <Navlink content={"Careers"} link="/" />
          <Navlink content={"Lenders"} link="/" />
        </div>
        <div className="nav-links flex space-between space-x-4 hidden lg:block">
          <TextButton content="Log In" callback={() => router.push("/")} />
          <PrimaryButton
            content="Get Started"
            callback={() => router.push("/personal-details")}
          />
        </div>
        <Image
          className="cursor-pointer block lg:hidden"
          src={BurgerMenu}
          alt="burger menu"
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>
      <CollapsedNav collapsed={collapsed} />
    </nav>
  );
};
