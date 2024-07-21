"use client";

import { FormCurrencyField } from "@/app/components/FormCurrencyField";
import { FormHeadliner } from "@/app/components/FormHeadliner";
import { NextPage } from "next";

const LoanDetails: NextPage = () => {
  const headline: string = "Loan Details";
  const subheading: string = "Provide specifics about your desired loan";

  return (
    <form className="w-auto sm:w-[500px]">
      <FormHeadliner text={headline} subtext={subheading} />
      <div className="w-auto sm:w-[500px]">
        <FormCurrencyField
          field="price"
          label="Project/Item Price (at least $2000 AUD)"
          required={true}
        />
      </div>
    </form>
  );
};

export default LoanDetails;
