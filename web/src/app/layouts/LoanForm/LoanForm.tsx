import Image from "next/image";

import { FormFooter } from "@/app/components/FormFooter";
import { NavbarAlt } from "@/app/components/NavbarAlt";

import SidebarImg from "/public/sidebar-img.jpg";

export const LoanForm = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen">
      <NavbarAlt />
      <div className="flex">
        <Image
          className="h-screen hidden 2sm:block z-1"
          src={SidebarImg}
          alt="sidebar img"
        />
        <div className="w-full h-screen flex justify-center pt-[150px] 2sm:pl-12 2sm:justify-start">
          {children}
        </div>
      </div>
      <FormFooter />
    </div>
  );
};
