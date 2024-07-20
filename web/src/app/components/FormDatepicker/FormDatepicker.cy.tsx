import { mount } from "cypress/react18";
import { FormDatepicker } from "./FormDatepicker";
import { FormLoanWrapper } from "@/../cypress/components/FormLoanWrapper";

describe("FormDatepicker Component", () => {
  beforeEach(() => {
    mount(
      <FormLoanWrapper>
        <FormDatepicker
          field="dateOfBirth"
          label="Date of Birth"
          required={true}
        />
      </FormLoanWrapper>
    );
  });

  it("should display an error message if the date of birth is left blank and the form is submitted", () => {
    cy.get('button[type="submit"]').click();
    cy.get("p.error-text")
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
    cy.get("p.error-text").should("not.exist");
  });
});
