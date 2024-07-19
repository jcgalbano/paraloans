"use client";

import Image from "next/image";
import { NextPage } from "next";
import { useRouter } from "next/navigation";

import { Navbar } from "../components/Navbar/Navbar";
import { PrimaryButton } from "../components/shared/PrimaryButton";

import HeroImage from "/public/hero-img.svg";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="h-max bg-general-white">
      <Navbar />
      <section className="h-[83vh] flex flex-col p-12 md:flex-row md:p-0">
        <div className="flex flex-col justify-center items-end w-full sm:w-5/8 md:w-3/4 lg:w-1/2">
          <div className="w-full sm:w-full md:w-5/6 lg:w-2/3 2xl:w-3/4 3xl:w-2/3 4xl:w-1/3">
            <h1 className="font-calluna font-bold text-neutral-900 text-2xl w-full sm:w-full md:w-3/4 lg:w-full">
              <span>Your Perfect Loan Match in </span>
              <span className="text-primary-500">Minutes</span>
            </h1>
            <p className="font-proximaNova font-normal text-neutral-600 text-xl w-full sm:w-2/3 md:w-4/6 lg:w-4/6 pt-2">
              Take the next step and discover affordable loans with flexible
              terms to match your lifestyle.
            </p>

            <div className="pt-5">
              <PrimaryButton
                content="Discover My Loan Options"
                size="lg"
                callback={() => router.push("/personal-details")}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full sm:w-3/8 md:w-2/3 lg:w-1/2">
          <div className="w-full h-auto sm:w-full md:w-5/6 lg:w-full">
            <Image priority src={HeroImage} alt="hero image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
