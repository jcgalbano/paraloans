import { mount } from "cypress/react18";
import { FormTextField } from "./FormTextField";
import { FormLoanWrapper } from "@/../cypress/components/FormLoanWrapper";

describe("FormTextField Component", () => {
  beforeEach(() => {
    mount(
      <FormLoanWrapper>
        <FormTextField field="firstName" label="First Name" required={true} />
      </FormLoanWrapper>
    );
  });

  context("when value is supplied", () => {
    it("does not show the error text", () => {
      cy.get(".form-loan-input").focus().type("Haruki Murakami").blur();
      cy.get(".error-text").should("not.exist");
    });
  });

  context("when value is left blank", () => {
    it("shows the error text", () => {
      cy.get(".form-loan-input").focus().blur();
      cy.get(".error-text").should("exist");
    });
  });
});
