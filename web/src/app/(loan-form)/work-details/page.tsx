"use client";

import { useCallback, useEffect } from "react";

import { NextPage } from "next";

import { EmploymentCards } from "@/app/components/EmploymentCards";
import { FormHeadliner } from "@/app/components/FormHeadliner";
import { FormTextField } from "@/app/components/FormTextField";
import { useFormContext } from "react-hook-form";
import { useLoanFormContext } from "@/app/contexts/LoanFormContext";

import { workSchemaMap } from "./config";

const WorkDetails: NextPage = () => {
  const headline: string = "Work Details";
  const subheading: string = "Tell us about your employment and income";

  const { watch } = useFormContext();
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
  }, [currentEmploymentStatus, setCurrentSchema, watch, toggleCurrentSchema]);

  return (
    <form className="w-auto sm:w-11/12">
      <FormHeadliner text={headline} subtext={subheading} />
      <EmploymentCards />
      {currentEmploymentStatus === "Employed" && (
        <div className="w-auto sm:w-[500px]">
          <FormTextField
            field="employerName"
            label="Employer Name"
            required={true}
          />
        </div>
      )}
    </form>
  );
};

export default WorkDetails;
