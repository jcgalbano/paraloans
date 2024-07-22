import { FormTextFieldProps } from "./FormTextField.types";
import { FieldValues, useFormContext, Path } from "react-hook-form";

export const FormTextField = <FormObj extends FieldValues>({
  field,
  label,
  required,
}: FormTextFieldProps<FormObj>) => {
  const { register, clearErrors, formState, setValue } = useFormContext();

  const handleInputChange = (field: Path<FormObj>, value: string) => {
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
      <input
        className={`form-loan-input font-proximaNova shadow appearance-none border rounded-rounded5px
        w-full py-2 px-3 text-neutral-800 leading-tight
        focus:border-primary-300 focus:outline-none shadow-none
        ${formState.errors[field] ? "border-errors-600" : ""}
        `}
        id={field}
        type="text"
        {...register(field)}
        onChange={(e) => handleInputChange(field, e.target.value)}
      />
      {formState.errors[field] && (
        <p className="error-text font-proximaNova text-base text-errors-600">
          {formState.errors[field]?.message as string}
        </p>
      )}
    </div>
  );
};
