import { mount } from "cypress/react18";
import { FormTextArea } from "./FormTextArea";
import { FormLoanWrapper } from "@/../cypress/components/FormLoanWrapper";

describe("FormTextField Component", () => {
  beforeEach(() => {
    mount(
      <FormLoanWrapper>
        <FormTextArea field="address" label="Address" required={true} />
      </FormLoanWrapper>
    );
  });

  context("when value is supplied", () => {
    it("does not show the error text", () => {
      cy.get(".form-loan-textarea").type("42 Wallaby Way, Sydney").blur();
      cy.get(".error-text").should("not.exist");
    });
  });

  context("when value is left blank", () => {
    it("shows the error text", () => {
      cy.get(".form-loan-textarea").focus().blur();
      cy.get(".error-text").should("exist");
    });
  });
});
