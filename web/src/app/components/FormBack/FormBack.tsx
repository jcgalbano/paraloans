import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

import { FormBackProps } from "./FormBack.types";
import { TextButton } from "../shared/TextButton";

export const FormBack = ({ content, prevLink }: FormBackProps) => {
  const router = useRouter();

  const onSubmit = () => {
    router.push(prevLink);
  };

  return <TextButton content={content} callback={onSubmit}></TextButton>;
};
