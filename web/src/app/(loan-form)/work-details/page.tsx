"use client";

import { useCallback, useEffect } from "react";

import { NextPage } from "next";

import { EmploymentCards } from "@/app/components/EmploymentCards";
import { FormHeadliner } from "@/app/components/FormHeadliner";
import { FormTextField } from "@/app/components/FormTextField";
import { useFormContext } from "react-hook-form";
import { useLoanFormContext } from "@/app/contexts/LoanFormContext";

import { workSchemaMap } from "./config";
import { FormCurrencyField } from "@/app/components/FormCurrencyField";

const WorkDetails: NextPage = () => {
  const headline: string = "Work Details";
  const subheading: string = "Tell us about your employment and income";

  const { watch, clearErrors, setValue } = useFormContext();
  const { setCurrentSchema } = useLoanFormContext();
  const currentEmploymentStatus = watch("employmentStatus");

  const toggleCurrentSchema = useCallback(() => {
    if (currentEmploymentStatus) {
      setCurrentSchema(workSchemaMap[currentEmploymentStatus]);
    } else {
      setCurrentSchema(workSchemaMap["default"]);
    }
  }, [currentEmploymentStatus, setCurrentSchema]);

  useEffect(() => {
    toggleCurrentSchema();
    clearErrors();
    setValue("employerName", "");
    setValue("annualIncome", "");
  }, [
    currentEmploymentStatus,
    setCurrentSchema,
    watch,
    toggleCurrentSchema,
    clearErrors,
    setValue,
  ]);

  return (
    <form className="w-auto sm:w-11/12 pb-10">
      <FormHeadliner text={headline} subtext={subheading} />
      <EmploymentCards />
      {currentEmploymentStatus === "Employed" && (
        <>
          <div className="w-auto sm:w-[500px]">
            <FormTextField
              field="employerName"
              label="Employer Name"
              required={true}
            />
          </div>
        </>
      )}
      {["Employed", "Self-Employed", "Unemployed"].includes(
        currentEmploymentStatus
      ) && (
        <div className="w-auto sm:w-[500px]">
          <FormCurrencyField
            field="annualIncome"
            label="Annual Income"
            required={true}
          />
        </div>
      )}
    </form>
  );
};

export default WorkDetails;
