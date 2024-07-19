import DatePicker from "react-datepicker";
import { FieldValues, Path, useFormContext } from "react-hook-form";

import { calendarIcon } from "./calendarIcon";
import { FormDatepickerProps } from "./FormDatepicker.types";

import "react-datepicker/dist/react-datepicker.css";

export const FormDatepicker = <FormObj extends FieldValues>({
  field,
  label,
  required,
}: FormDatepickerProps) => {
  const { setValue, formState, watch, clearErrors, trigger } = useFormContext();

  const handleInputChange = (field: Path<FormObj>, value: Date | null) => {
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

      <DatePicker
        className={`${formState.errors[field] && "react-datepicker-error"}`}
        dateFormat="dd/MM/yyyy"
        placeholderText="DD/MM/YYYY"
        showIcon={true}
        icon={calendarIcon()}
        selected={watch(field)}
        onBlur={() => trigger(field)}
        onChange={(date) => {
          handleInputChange(field as Path<FormObj>, date);
        }}
      />
      {formState.errors[field] && (
        <p className="font-proximaNova text-base text-errors-600">
          {formState.errors[field]?.message as string}
        </p>
      )}
    </div>
  );
};
