import { useFormContext } from "react-hook-form";

import { FormSelectCard } from "../FormSelectCard/FormSelectCard";

import EmployedIcon from "/public/employed-icon.svg";
import SelfEmployedIcon from "/public/self-employed-icon.svg";
import UnemployedIcon from "/public/unemployed-icon.svg";

export const EmploymentCards = () => {
  const { formState } = useFormContext();
  const field = "employmentStatus";

  return (
    <div className="mb-7">
      <div className="flex flex-row work-details-cards pb-5 justify-start items-center flex-wrap">
        <FormSelectCard
          icon={EmployedIcon}
          field={field}
          label="Employed"
          desc="Currently working for an employer, receiving regular income."
        />
        <FormSelectCard
          icon={SelfEmployedIcon}
          field={field}
          label="Self-Employed"
          desc="Running a business or freelance work, generating own income."
        />
        <FormSelectCard
          icon={UnemployedIcon}
          field={field}
          label="Unemployed"
          desc="Currently without a job and not earning regular income."
        />
      </div>
      <p className="error-text font-proximaNova text-base text-errors-600">
        {formState.errors[field]?.message as string}
      </p>
    </div>
  );
};
