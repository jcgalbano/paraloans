import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

import { PrimaryButton } from "../shared/PrimaryButton";
import { FormNextProps } from "./FormNext.types";

export const FormNext = ({ nextLink }: FormNextProps) => {
  const router = useRouter();

  const onSubmit = () => {
    trigger().then((isValid) => {
      if (nextLink && isValid) {
        router.push(nextLink);

        console.log(getValues());
      } else {
        return;
      }
    });
  };

  const { trigger, getValues } = useFormContext();

  return <PrimaryButton content="Continue" callback={onSubmit}></PrimaryButton>;
};
