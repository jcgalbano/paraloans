import Image from "next/image";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormFooter } from "@/app/components/FormFooter";
import { NavbarAlt } from "@/app/components/NavbarAlt";

import { FormValues } from "./LoanForm.types";
import { schema } from "./LoanForm.schema";

import SidebarImg from "/public/sidebar-img.jpg";

export const LoanForm = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  return (
    <FormProvider {...methods}>
      <div className="w-full h-screen">
        <NavbarAlt />
        <div className="flex">
          <Image
            className="h-screen hidden 2sm:block z-1"
            src={SidebarImg}
            alt="sidebar img"
          />
          <div className="w-full h-screen flex justify-center pt-[150px] p-8 2sm:pl-12 2sm:justify-start">
            {children}
          </div>
        </div>
        <FormFooter />
      </div>
    </FormProvider>
  );
};
