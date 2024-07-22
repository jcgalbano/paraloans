import { useFormContext } from "react-hook-form";
import { FormSelectFieldProps } from "./FormSelectField.types";

export const FormSelectField = ({
  field,
  label,
  required,
  options,
}: FormSelectFieldProps) => {
  const { formState, setValue, trigger } = useFormContext();

  const handleInputChange = (field: string, value: string | undefined) => {
    setValue(field, value as any);
    trigger(field);
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
      <select
        className={`form-loan-input font-proximaNova shadow appearance-none rounded-rounded5px
        w-full py-2 px-3 text-neutral-800 leading-tight shadow-none
        focus:border-primary-300 focus:outline-none border
        ${formState.errors[field] ? "border-errors-600" : ""}`}
        name={field}
        id={field}
        onChange={(e) => handleInputChange(field, e.target.value)}
        onBlur={() => trigger(field)}
      >
        <option key="empty-select-field" value="">
          Select an Option
        </option>
        {options.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {formState.errors[field] && (
        <p className="error-text font-proximaNova text-base text-errors-600">
          {formState.errors[field]?.message as string}
        </p>
      )}
    </div>
  );
};
