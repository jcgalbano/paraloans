import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { Navlink } from "../Navlink";
import { PrimaryButton } from "../../shared/PrimaryButton";
import { OutlinedButton } from "../../shared/OutlinedButton";
import { CollapsedNavProps } from "./CollapsedNav.types";
import { collapsedNavVariants } from "./CollapsedNav.animation";

export const CollapsedNav = ({ collapsed }: CollapsedNavProps) => {
  const router = useRouter();

  return (
    <motion.div
      className={`fixed w-screen bg-general-white p-5 z-3 lg:hidden`}
      initial={"hidden"}
      animate={collapsed ? "visible" : "hidden"}
      variants={collapsedNavVariants}
      transition={{ duration: 0.2 }}
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
    </motion.div>
  );
};
