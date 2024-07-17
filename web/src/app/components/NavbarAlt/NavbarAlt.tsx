"use client";

import Image from "next/image";
import { Navlogo } from "../Navbar/Navlogo";
import { OutlinedButton } from "../shared/OutlinedButton";

import PhoneIcon from "/public/phone-icon.svg";

export const NavbarAlt = () => {
  return (
    <nav className="w-full fixed z-4">
      <div className="flex justify-between items-center p-0 xs:p-5">
        <div className="block 2sm:hidden">
          <Navlogo type="main" />
        </div>
        <div className="hidden 2sm:block">
          <Navlogo type="alt" />
        </div>
        <div className="flex space-x-5">
          <div className="flex items-center xs:space-x-3">
            <Image height={16} width={16} src={PhoneIcon} alt="phone icon" />{" "}
            <span className="font-proximaNova text-base text-neutral-700">
              1300 755 494
            </span>
          </div>
          <OutlinedButton content="Log In" callback={() => {}} />
        </div>
      </div>
    </nav>
  );
};
