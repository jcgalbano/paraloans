import { useFormContext } from "react-hook-form";
import { PrimaryButton } from "../shared/PrimaryButton";

export const FormNext = () => {
  const onSubmit = (data: any) => {
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
