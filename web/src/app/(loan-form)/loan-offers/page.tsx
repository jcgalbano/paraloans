"use client";

import { NextPage } from "next";

import { useFormContext } from "react-hook-form";

import { LoanCard } from "@/app/components/LoanCard";
import { LoanHead } from "@/app/components/LoanHead/LoanHead";
import { LoanItem } from "@/app/components/LoanItem";
import { SectionHeadline } from "@/app/components/shared/SectionHeadline";

import { useCallback, useEffect, useState } from "react";
import { postLoanApplication } from "@/app/utils/api/loanForm";

const LoanOffers: NextPage = () => {
  const { getValues } = useFormContext();
  const loanFormObj = getValues();
  const [loanOffers, setLoanOffers] = useState([]);

  const getLoanOffers = useCallback(async () => {
    try {
      const loanFormObj = await getValues();
      const fetchedLoanOffers = await postLoanApplication(loanFormObj);
      setLoanOffers(fetchedLoanOffers);
    } catch (error) {
      console.error("Failed to get loan offers:", error);
    }
  }, [getValues]);

  useEffect(() => {
    getLoanOffers();
  }, [getLoanOffers]);

  return (
    <div className="w-full">
      <SectionHeadline content={"Summary of Loan Details"} />
      <div className="flex flex-row flex-wrap justify-between mb-7">
        <div className="flex justify-center items-center mb-10 md:mb-0">
          <LoanHead
            headContent={"Loan Amount"}
            content={"$12,000"}
            footContent={"Project/Item Price - Deposit"}
          />
        </div>
        <div className="flex sm:flex-row flex-col justify-start sm:flex-wrap sm:items-center items-start">
          <LoanItem headContent={"Project/Item Price"} content={"$14,000"} />
          <LoanItem headContent={"Deposit"} content={"$2,000"} />
          <LoanItem headContent={"Loan Purpose"} content={"Vacation"} />
          <LoanItem headContent={"Loan Term"} content={"2 Years"} />
        </div>
      </div>
      <SectionHeadline content={"Best Loan Offers For You"} />
      <div className="w-full flex flex-row flex-wrap">
        {loanOffers &&
          loanOffers.map((loan) => (
            <LoanCard
              key={loan.name}
              name={loan.name}
              monthlyRepayment={loan.monthlyRepayment}
              interestRate={loan.annualPR}
              fees={loan.appFee}
            />
          ))}
      </div>
    </div>
  );
};

export default LoanOffers;
