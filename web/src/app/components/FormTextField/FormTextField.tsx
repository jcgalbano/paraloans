import { FormTextFieldProps } from "./FormTextField.types";
import { FieldValues, useFormContext, Path } from "react-hook-form";

export const FormTextField = <FormObj extends FieldValues>({
  field,
  label,
  required,
}: FormTextFieldProps<FormObj>) => {
  const { register, clearErrors, formState } = useFormContext();

  const handleInputChange = (field: Path<FormObj>) => {
    if (formState.errors[field]) {
      clearErrors(field);
    }
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
        className="font-proximaNova shadow appearance-none border rounded-rounded5px
        w-full py-2 px-3 text-gray-700 leading-tight
        focus:outline-primary-300 focus:shadow-outline"
        id={label}
        type="text"
        {...register(field)}
        onChange={() => handleInputChange(field)}
      />
      {formState.errors[field] && (
        <p className="font-proximaNova text-base text-errors-600">
          {formState.errors[field]?.message as string}
        </p>
      )}
    </div>
  );
};
