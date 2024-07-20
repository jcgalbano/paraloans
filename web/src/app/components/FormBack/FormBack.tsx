import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

import { FormBackProps } from "./FormBack.types";
import { TextButton } from "../shared/TextButton";

export const FormBack = ({ prevLink }: FormBackProps) => {
  const router = useRouter();

  const onSubmit = () => {
    router.push(prevLink);

    console.log(getValues());
  };

  const { getValues } = useFormContext();

  return <TextButton content="Back" callback={onSubmit}></TextButton>;
};
