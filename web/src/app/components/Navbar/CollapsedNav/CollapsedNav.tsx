import { useRouter } from "next/navigation";

import { Navlink } from "../Navlink";
import { PrimaryButton } from "../../shared/PrimaryButton";
import { OutlinedButton } from "../../shared/OutlinedButton";
import { CollapsedNavProps } from "./CollapsedNav.types";

export const CollapsedNav = ({ collapsed }: CollapsedNavProps) => {
  const router = useRouter();

  return (
    <div
      className={`bg-general-white p-5 z-3 ${
        collapsed ? "" : "hidden"
      } lg:hidden`}
    >
      <div className="nav-links flex flex-col items-start space-y-8">
        <Navlink content={"Home"} link="/" isActive={true} />
        <Navlink content={"About"} link="/" />
        <Navlink content={"Careers"} link="/" />
        <Navlink content={"Lenders"} link="/" />
      </div>
      <div className="nav-links flex flex-col pt-5 space-y-3">
        <OutlinedButton content="Log In" callback={() => router.push("/")} />
        <PrimaryButton
          content="Get Started"
          callback={() => router.push("/personal-details")}
        />
      </div>
    </div>
  );
};
