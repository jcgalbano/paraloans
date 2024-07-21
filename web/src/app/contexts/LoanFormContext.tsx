import { createContext, FC, ReactNode, useContext, useState } from "react";
import * as yup from "yup";

interface LoanFormContextType {
  currentSchema: yup.ObjectSchema<any>;
  setCurrentSchema: (schema: yup.ObjectSchema<any>) => void;
}

const LoanFormContext = createContext<LoanFormContextType | undefined>(
  undefined
);

export const LoanFormProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentSchema, setCurrentSchema] = useState<yup.ObjectSchema<any>>(
    yup.object()
  );

  return (
    <LoanFormContext.Provider value={{ currentSchema, setCurrentSchema }}>
      {children}
    </LoanFormContext.Provider>
  );
};

export const useLoanFormContext = () => {
  const context = useContext(LoanFormContext);

  if (!context) {
    throw new Error(
      "useLoanFormContext must be used within a LoanFormProvider"
    );
  }

  return context;
};
