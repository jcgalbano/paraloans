import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { FormPhoneFieldProps } from "./FormPhoneField.types";

export const FormPhoneField = ({
  field,
  label,
  countryFormat,
  required,
}: FormPhoneFieldProps) => {
  const { register, clearErrors, formState, setValue, trigger } =
    useFormContext();

  const handleInputChange = (field: string, value: string) => {
    if (formState.errors[field]) {
      clearErrors(field);
    }

    setValue(field, value as any);
  };

  return (
    <div className="mb-7">
      <label
        className="font-proximaNova text-base block
      text-neutral-800 text-sm font-semibold font-base mb-2"
      >
        {label}
        {required && <span className="text-errors-600 pl-1">*</span>}
      </label>
      <div className={`${formState.errors[field] ? "phonefield-error" : ""}`}>
        <PhoneInput
          placeholder=""
          country={countryFormat}
          {...register(field)}
          onChange={(value, details: CountryData) =>
            handleInputChange(field, value.slice(details.dialCode.length))
          }
          onBlur={() => trigger(field)}
        />
      </div>
      {formState.errors[field] && (
        <p className="error-text font-proximaNova text-base text-errors-600">
          {formState.errors[field]?.message as string}
        </p>
      )}
    </div>
  );
};
