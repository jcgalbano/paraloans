import { useEffect } from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useFormContext } from "react-hook-form";
import { FormSliderProps } from "./FormSlider.types";

export const FormSlider = ({
  field,
  label,
  required,
  minVal,
  maxVal,
  defaultVal,
  marks,
}: FormSliderProps) => {
  const { formState, setValue, trigger, getValues } = useFormContext();
  const handleInputChange = (field: string, value: number | number[]) => {
    setValue(field, value as any);
    trigger(field);
  };

  useEffect(() => {
    setValue(field, defaultVal);
  }, [defaultVal, field, setValue]);

  return (
    <div className="mb-12">
      <label
        className="font-proximaNova text-base block
      text-neutral-800 text-sm font-semibold font-base mb-2"
      >
        {label}
        {required && <span className="text-errors-600 pl-1">*</span>}
      </label>
      <div className="pl-3 w-full sm:w-[500px]">
        <Slider
          className="mt-3 border-primary-500"
          min={minVal}
          max={maxVal}
          defaultValue={defaultVal}
          marks={marks}
          step={null}
          onChange={(value) => handleInputChange(field, value)}
          onBlur={() => trigger(field)}
          trackStyle={{
            fontFamily: "proxima-nova",
            backgroundColor: "#E6FFFC",
          }}
          handleStyle={{
            borderColor: "#09C7B0",
            backgroundColor: "#09C7B0",
          }}
          dotStyle={{
            borderColor: "#E6FFFC",
            backgroundColor: "#09C7B0k",
          }}
          railStyle={{ backgroundColor: "#E6FFFC" }}
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
