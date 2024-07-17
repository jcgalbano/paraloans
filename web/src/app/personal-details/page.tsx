import Image from "next/image";
import { NextPage } from "next";

import { FormFooter } from "../components/FormFooter";
import { NavbarAlt } from "../components/NavbarAlt";

import SidebarImg from "/public/sidebar-img.jpg";

const PersonalDetails: NextPage = () => {
  return (
    <div className="h-vh">
      <div className="fixed z-1">
        <Image
          className="w-vh h-auto hidden 2sm:block"
          src={SidebarImg}
          alt="sidebar img"
        />
      </div>
      <NavbarAlt />
      <FormFooter />
    </div>
  );
};

export default PersonalDetails;
