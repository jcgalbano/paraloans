import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { FormSelectCardProps } from "./FormSelectCard.types";

export const FormSelectCard = ({
  icon,
  field,
  label,
  desc,
}: FormSelectCardProps) => {
  const { setValue, register, watch, formState, clearErrors } =
    useFormContext();
  const isSelected = watch(field) === label;

  const handleInputChange = (field: string) => {
    if (formState.errors[field]) {
      clearErrors(field);
    }

    if (isSelected) {
      setValue(field, "");
    } else {
      setValue(field, label);
    }
  };

  return (
    <div
      className={`cursor-pointer inline-flex h-[160px] font-proximaNova flex flex-col justify-center items-center
      space-y-1  rounded-rounded5px pt-[32px] pb-[32px] pl-[24px] pr-[24px] m-1
      border ${isSelected ? "border-primary-500" : "border-neutral-100"}`}
      {...register}
      onClick={() => {
        handleInputChange(field);
      }}
    >
      <Image src={icon} alt="phone icon" />{" "}
      <div className="text-base text-neutral-800 font-semibold">{label}</div>
      <div className="w-[150px] text-xs text-neutral-600 w-2/4 text-center">
        {desc}
      </div>
    </div>
  );
};
