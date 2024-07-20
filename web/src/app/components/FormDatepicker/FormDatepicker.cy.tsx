import { mount } from "cypress/react18";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormDatepicker } from "./FormDatepicker"; // Adjust the import path as necessary

const validationSchema = yup.object().shape({
  dateOfBirth: yup.date().required("Date of Birth is required."),
});

const WrapperComponent = () => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: "all",
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(() => {})}>
        <FormDatepicker
          field="dateOfBirth"
          label="Date of Birth"
          required={true}
        />
        <button className="opacity-0" type="submit">
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

describe("FormDatepicker Component", () => {
  beforeEach(() => {
    mount(<WrapperComponent />);
  });

  it("should display an error message if the date of birth is left blank and the form is submitted", () => {
    cy.get('button[type="submit"]').click();
    cy.get("p.text-errors-600")
      .should("exist")
      .and("contain", "Date of Birth is required");
  });

  it("should not display an error message after a valid date is selected", () => {
    cy.get('button[type="submit"]').click();
    cy.get("p.text-errors-600")
      .should("exist")
      .and("contain", "Date of Birth is required.");
    cy.get('input[placeholder="DD/MM/YYYY"]').click();
    cy.get(".react-datepicker__day--017").click();
    cy.get("p.text-errors-600").should("not.exist");
  });
});
