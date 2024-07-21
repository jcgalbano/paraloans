"use client";

import { FormCurrencyField } from "@/app/components/FormCurrencyField";
import { FormHeadliner } from "@/app/components/FormHeadliner";
import { NextPage } from "next";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const LoanDetails: NextPage = () => {
  const headline: string = "Loan Details";
  const subheading: string = "Provide specifics about your desired loan";
  const { watch, trigger, formState } = useFormContext();
  const { isDirty, dirtyFields } = formState;
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
      </div>
    </form>
  );
};

export default LoanDetails;
