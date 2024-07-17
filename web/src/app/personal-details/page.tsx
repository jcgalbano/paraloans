import Image from "next/image";
import { NextPage } from "next";

import { FormFooter } from "../components/FormFooter";
import { NavbarAlt } from "../components/NavbarAlt";

import SidebarImg from "/public/sidebar-img.jpg";

const PersonalDetails: NextPage = () => {
  return (
    <div className="w-full h-screen">
      <NavbarAlt />
      <div className="flex">
        <Image
          className="h-screen hidden 2sm:block z-1"
          src={SidebarImg}
          alt="sidebar img"
        />
        <div className="w-full h-screen flex justify-center pt-[110px] 2sm:pl-12 2sm:justify-start">
          <div>This is the form content</div>
        </div>
      </div>
      <FormFooter />
    </div>
  );
};

export default PersonalDetails;
