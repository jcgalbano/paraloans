"use client";

import { NextPage } from "next";

import { FormHeadliner } from "@/app/components/FormHeadliner";
import { FormPhoneField } from "@/app/components/FormPhoneField";
import { FormTextField } from "@/app/components/FormTextField";

const ContactDetails: NextPage = () => {
  const headline: string = "Contact Details";
  const subheading: string = "How can we reach you?";

  return (
    <form className="w-auto sm:w-[500px]">
      <FormHeadliner text={headline} subtext={subheading} />
      <FormTextField field="email" label="Email" required={true} />
      <FormPhoneField
        field="phoneNumber"
        label="Mobile Number"
        countryFormat="au"
        required={true}
      />
    </form>
  );
};

export default ContactDetails;
