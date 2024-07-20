import { mount } from "cypress/react18";
import { FormFooter } from "./FormFooter";

describe("FormFooter Component", () => {
  it("should render the placeholder texts properly", () => {
    const privacyPolicyTxt = "Privacy Policy";
    const termsAndConditionsTxt = "Terms & Conditions";

    mount(<FormFooter />);

    cy.contains(privacyPolicyTxt);
    cy.contains(termsAndConditionsTxt);
  });
});
