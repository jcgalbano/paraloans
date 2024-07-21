import CurrencyInput from "react-currency-input-field";
import { useFormContext } from "react-hook-form";

export const FormCurrencyField = ({
  field,
  label,
  required,
}: FormCurrencyFieldProps) => {
  const { register, formState, clearErrors, setValue, trigger, watch } =
    useFormContext();

  const handleInputChange = (field: string, value: string | undefined) => {
    if (formState.errors[field]) {
      clearErrors(field);
    }

    setValue(field, value as any);
  };

  return (
    <div>
      <label
        className="font-proximaNova text-base block
      text-neutral-800 text-sm font-semibold font-base mb-2"
      >
        {label}
        {required && <span className="text-errors-600 pl-1">*</span>}
      </label>

      <CurrencyInput
        className={`form-loan-input font-proximaNova shadow appearance-none rounded-rounded5px
        w-full py-2 px-3 text-neutral-800 leading-tight
        focus:border-primary-300 focus:outline-none border
        ${formState.errors[field] ? "border-errors-600" : ""}`}
        {...register(field)}
        name="Currency Input"
        intlConfig={{ locale: "en-AU", currency: "AUD" }}
        decimalsLimit={2}
        allowNegativeValue={false}
        onValueChange={(value) => handleInputChange(field, value)}
        onBlur={() => trigger(field)}
        value={watch(field)}
      />
      {formState.errors[field] && (
        <p className="error-text font-proximaNova text-base text-errors-600">
          {formState.errors[field]?.message as string}
        </p>
      )}
    </div>
  );
};
