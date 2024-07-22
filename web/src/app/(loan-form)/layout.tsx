"use client";

import { Suspense } from "react";

import Image from "next/image";
import { NavbarAlt } from "@/app/components/NavbarAlt";

import SidebarImg from "/public/sidebar-img.jpg";

import "@/app/globals.scss";
import { LoanForm } from "./LoanForm";
import { LoanFormProvider } from "../contexts/LoanFormContext";

export default function LoanFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Suspense>
          <link rel="stylesheet" href="https://use.typekit.net/qrl5ogo.css" />
        </Suspense>
      </head>
      <body>
        <div className="w-full h-screen">
          <NavbarAlt />
          <div className="flex">
            <Image
              priority
              className="h-auto w-1/10 hidden 2sm:block z-1"
              src={SidebarImg}
              alt="sidebar img"
            />
            <div className="w-2/3 flex flex-col">
              <div className="w-auto 2sm:w-2/3 h-screen flex flex-col justify-center pl-10 pt-[50vh] xs:pt-[200px] 2sm:justify-start">
                <LoanFormProvider>
                  <LoanForm>{children}</LoanForm>
                </LoanFormProvider>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
