import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

import { PrimaryButton } from "../shared/PrimaryButton";
import { FormNextProps } from "./FormNext.types";

export const FormNext = ({ content, nextLink }: FormNextProps) => {
  const router = useRouter();

  const onSubmit = () => {
    trigger().then((isValid) => {
      if (nextLink && isValid) {
        router.push(nextLink);
      } else {
        return;
      }
    });
  };

  const { trigger } = useFormContext();

  return <PrimaryButton content={content} callback={onSubmit}></PrimaryButton>;
};
