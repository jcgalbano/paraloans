import { ReactNode } from "react";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required."),
  dateOfBirth: yup.date().required("Date of Birth is required."),
});

export const FormLoanWrapper = ({ children }: { children?: ReactNode }) => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: "all",
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(() => {})}>
        {children}
        <button className="opacity-0" type="submit">
          Submit
        </button>
      </form>
    </FormProvider>
  );
};
