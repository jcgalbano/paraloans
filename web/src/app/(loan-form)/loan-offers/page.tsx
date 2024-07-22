"use client";

import { NextPage } from "next";

import { useFormContext } from "react-hook-form";

import { LoanCard } from "@/app/components/LoanCard";
import { LoanHead } from "@/app/components/LoanHead/LoanHead";
import { LoanItem } from "@/app/components/LoanItem";
import { SectionHeadline } from "@/app/components/shared/SectionHeadline";

import { useCallback, useEffect, useState } from "react";
import { postLoanApplication } from "@/app/utils/api/loanForm";
import { formatCurrency, formatRate } from "@/app/utils/formatters/numbers";

import { LoanOffer } from "@/app/types/loanFormTypes";

const LoanOffers: NextPage = () => {
  const { getValues } = useFormContext();
  const loanFormObj = getValues();

  const [loanOffers, setLoanOffers] = useState<LoanOffer[]>([]);

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
            content={formatCurrency(
              Number(loanFormObj.price - loanFormObj.deposit)
            )}
            footContent={"Project/Item Price - Deposit"}
          />
        </div>
        <div className="flex sm:flex-row flex-col justify-start sm:flex-wrap sm:items-center items-start">
          <LoanItem
            headContent={"Project/Item Price"}
            content={formatCurrency(Number(loanFormObj.price))}
          />
          <LoanItem
            headContent={"Deposit"}
            content={formatCurrency(Number(loanFormObj.deposit))}
          />
          <LoanItem
            headContent={"Loan Purpose"}
            content={loanFormObj.loanPurpose}
          />
          <LoanItem
            headContent={"Loan Term"}
            content={`${loanFormObj.loanTerm} Years`}
          />
        </div>
      </div>
      <SectionHeadline content={"Best Loan Offers For You"} />
      <div className="w-full flex flex-row flex-wrap">
        {loanOffers &&
          loanOffers.map((loan: LoanOffer) => (
            <LoanCard
              key={loan.name}
              name={loan.name}
              monthlyRepayment={formatCurrency(Number(loan.monthlyRepayment))}
              interestRate={formatRate(loan.annualPR)}
              fees={formatCurrency(loan.appFee)}
            />
          ))}
      </div>
    </div>
  );
};

export default LoanOffers;
