"use client";
import Image from "next/image";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormFooter } from "@/app/components/FormFooter";
import { NavbarAlt } from "@/app/components/NavbarAlt";

import { FormValues } from "@/app/types/loanFormTypes";
import { schema } from "@/app/schemas/loanFormSchema";

import SidebarImg from "/public/sidebar-img.jpg";

import "@/app/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/qrl5ogo.css" />
      </head>
      <body>
        <FormProvider {...methods}>
          <div className="w-full h-screen">
            <NavbarAlt />
            <div className="flex">
              <Image
                className="h-screen w-auto hidden 2sm:block z-1"
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
      </body>
    </html>
  );
}
