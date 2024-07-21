import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { routeMap } from "../config";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoanFormContext } from "@/app/contexts/LoanFormContext";
import { FormProvider, useForm } from "react-hook-form";
import { FormBack } from "@/app/components/FormBack";
import { FormNext } from "@/app/components/FormNext";

export const LoanForm = ({ children }: { children: ReactNode }) => {
  const currentPath = usePathname();
  const { currentSchema, setCurrentSchema } = useLoanFormContext();

  useEffect(() => {
    setCurrentSchema(routeMap[currentPath].schema);
  }, [currentPath, setCurrentSchema]);

  const prevPath = routeMap[currentPath].previous;
  const nextPath = routeMap[currentPath].next;

  const methods = useForm({
    resolver: yupResolver(currentSchema),
    mode: "all",
  });

  return (
    <FormProvider {...methods}>
      {children}
      <div className="flex space-x-5">
        {prevPath && <FormBack content="Back" prevLink={prevPath} />}
        {nextPath && <FormNext content="Continue" nextLink={nextPath} />}
      </div>
    </FormProvider>
  );
};
