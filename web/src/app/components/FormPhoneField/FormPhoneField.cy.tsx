import { mount } from "cypress/react18";
import { FormPhoneField } from "./FormPhoneField";
import { FormLoanWrapper } from "@/../cypress/components/FormLoanWrapper";

describe("FormPhoneField Component", () => {
  beforeEach(() => {
    mount(
      <FormLoanWrapper>
        <FormPhoneField
          field="phoneNumber"
          label="Mobile Number"
          countryFormat="au"
          required={true}
        />
      </FormLoanWrapper>
    );
  });
  it("should validate required", () => {
    cy.get('button[type="submit"]').click();

    cy.get(".error-text").should("be.visible");
    cy.get("input").type("6134567891");
    cy.get('button[type="submit"]').click();
    cy.get(".error-text").should("not.exist");
  });

  it("should validate phone format", () => {
    cy.get("input").type("123");
    cy.get('button[type="submit"]').click();
    cy.get(".error-text").should("be.visible");

    cy.get("input").clear();
    cy.get("input").type("6134567891");
    cy.get('button[type="submit"]').click();
    cy.get(".error-text").should("not.exist");
  });
});
