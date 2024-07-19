import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

import { PrimaryButton } from "../shared/PrimaryButton";
import { FormNextProps } from "./FormNext.types";

export const FormNext = ({ nextLink }: FormNextProps) => {
  const router = useRouter();

  const onSubmit = (data: any) => {
    if (nextLink) {
      router.push(nextLink);
      return;
    }

    console.log(data);
  };

  const { handleSubmit } = useFormContext();

  return (
    <PrimaryButton
      content="Continue"
      callback={handleSubmit(onSubmit)}
    ></PrimaryButton>
  );
};
