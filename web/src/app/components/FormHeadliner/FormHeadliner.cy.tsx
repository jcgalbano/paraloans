import { mount } from "cypress/react18";
import { FormHeadliner } from "./FormHeadliner"; // Adjust the import path as necessary

describe("FormHeadliner Component", () => {
  it("should render the text and subtext correctly", () => {
    const text = "Let’s find your perfect loan match";
    const subtext = "Tell us about yourself first";

    mount(<FormHeadliner text={text} subtext={subtext} />);

    cy.get("h1")
      .should("have.class", "font-proximaNovaCondensed")
      .and("have.class", "text-h1")
      .and("contain.text", text);

    cy.get("p")
      .should("have.class", "font-proximaNova")
      .and("have.class", "text-text-lg")
      .and("contain.text", subtext);
  });
});
