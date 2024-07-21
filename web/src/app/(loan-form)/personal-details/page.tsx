"use client";

import { NextPage } from "next";

import { FormDatepicker } from "../../components/FormDatepicker";
import { FormHeadliner } from "../../components/FormHeadliner";
import { FormTextField } from "../../components/FormTextField";

const PersonalDetails: NextPage = () => {
  const headline: string = "Let's find your perfect loan match";
  const subheading: string = "Tell us about yourself first";

  return (
    <form className="w-auto sm:w-[500px]">
      <FormHeadliner text={headline} subtext={subheading} />
      <FormTextField field="firstName" label="First Name" required={true} />
      <FormTextField field="lastName" label="Last Name" required={true} />
      <FormDatepicker
        field="dateOfBirth"
        label="Date of Birth"
        required={true}
      />
    </form>
  );
};

export default PersonalDetails;
