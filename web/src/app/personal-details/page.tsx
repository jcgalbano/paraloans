import Image from "next/image";
import { NextPage } from "next";

import { LoanForm } from "../layouts/LoanForm";
import { FormHeadliner } from "../components/FormHeadliner";
import { FormTextField } from "../components/FormTextField";

const PersonalDetails: NextPage = () => {
  const headline: string = "Let's find your perfect loan match";
  const subheading: string = "Tell us about yourself first";

  return (
    <LoanForm>
      <form>
        <FormHeadliner text={headline} subtext={subheading} />
        <FormTextField label="First Name" required={true} />
        <FormTextField label="Last Name" required={true} />
      </form>
    </LoanForm>
  );
};

export default PersonalDetails;
