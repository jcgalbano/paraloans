"use client";

import { NextPage } from "next";

import { LoanForm } from "../layouts/LoanForm";
import { FormHeadliner } from "../components/FormHeadliner";
import { FormTextField } from "../components/FormTextField";
import { FormNext } from "../components/FormNext";

const PersonalDetails: NextPage = () => {
  const headline: string = "Let's find your perfect loan match";
  const subheading: string = "Tell us about yourself first";

  return (
    <LoanForm>
      <form>
        <FormHeadliner text={headline} subtext={subheading} />
        <FormTextField field="firstName" label="First Name" required={true} />
        <FormTextField field="lastName" label="Last Name" required={true} />
        <FormNext />
      </form>
    </LoanForm>
  );
};

export default PersonalDetails;
