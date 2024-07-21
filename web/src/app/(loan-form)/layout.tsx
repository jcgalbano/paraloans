"use client";
import { Suspense } from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormBack } from "@/app/components/FormBack";
import { FormNext } from "@/app/components/FormNext";
import { NavbarAlt } from "@/app/components/NavbarAlt";

import { routeMap } from "./config";

import SidebarImg from "/public/sidebar-img.jpg";

import "@/app/globals.scss";

export default function LoanFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentPath = usePathname();
  const currentSchema = routeMap[currentPath].schema;

  const prevPath = routeMap[currentPath].previous;
  const nextPath = routeMap[currentPath].next;

  const methods = useForm({
    resolver: yupResolver(currentSchema),
    mode: "all",
  });

  return (
    <html lang="en">
      <head>
        <Suspense>
          <link rel="stylesheet" href="https://use.typekit.net/qrl5ogo.css" />
        </Suspense>
      </head>
      <body>
        <FormProvider {...methods}>
          <div className="w-full h-screen">
            <NavbarAlt />
            <div className="flex">
              <Image
                className="h-screen w-1/10 hidden 2sm:block z-1"
                src={SidebarImg}
                alt="sidebar img"
              />
              <div className="w-2/3 flex flex-col">
                <div className="w-auto 2sm:w-2/3 h-screen flex flex-col justify-center pl-10 pt-[50vh] xs:pt-[200px] 2sm:justify-start">
                  {children}
                  <div className="flex space-x-5">
                    {prevPath && <FormBack prevLink={prevPath} />}
                    {nextPath && <FormNext nextLink={nextPath} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FormProvider>
      </body>
    </html>
  );
}
