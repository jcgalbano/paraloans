"use client";

import { FormCurrencyField } from "@/app/components/FormCurrencyField";
import { FormHeadliner } from "@/app/components/FormHeadliner";
import { FormSelectField } from "@/app/components/FormSelectField";
import { NextPage } from "next";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { FormSlider } from "@/app/components/FormSlider";

const LoanDetails: NextPage = () => {
  const headline: string = "Loan Details";
  const subheading: string = "Provide specifics about your desired loan";
  const { watch, trigger } = useFormContext();
  const price = watch("price");
  const deposit = watch("deposit");

  useEffect(() => {
    // should allow for live comparison of values to show the proper validation
    if (
      price !== "" &&
      price !== undefined &&
      deposit !== "" &&
      deposit !== undefined
    ) {
      trigger();
    }
  }, [price, deposit, trigger]);

  return (
    <form className="w-auto sm:w-[500px]">
      <FormHeadliner text={headline} subtext={subheading} />
      <div className="w-auto sm:w-[500px]">
        <FormCurrencyField
          field="price"
          label="Project/Item Price (at least $2000 AUD)"
          required={true}
        />
        <FormCurrencyField
          field="deposit"
          label="Deposit (AUD)"
          required={true}
        />
        <FormSelectField
          field="loanPurpose"
          label="Loan Purpose"
          required={true}
          options={[
            "Debt Consolidation",
            "Car",
            "Home Improvements",
            "Holiday",
            "Wedding",
            "Repairs",
            "Moving Costs",
            "Rental Bond",
            "Pay Utility Bills",
            "Pay Fees (eg. uni fees, childcare etc.)",
            "Solar Battery",
            "Medical",
            "Other",
          ]}
        />
        <FormSlider
          field="loanTerm"
          label="Loan Term (years)"
          required={true}
          minVal={1}
          maxVal={7}
          defaultVal={5}
          marks={{ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7 }}
        />
      </div>
    </form>
  );
};

export default LoanDetails;
