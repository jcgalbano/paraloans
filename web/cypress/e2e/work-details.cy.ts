describe("Work Details E2E Test", () => {
  it("validates employment status", () => {
    cy.visit("work-details");
    cy.contains("button", "Continue").click();
    cy.contains("p", "Employment status is required.").should("exist");
    cy.get(".form-select-card").first().click();
    cy.contains("p", "Employment status is required.").should("not.exist");
  });

  it("validates employer name", () => {
    cy.visit("work-details");
    cy.contains("button", "Continue").click();
    cy.get(".form-select-card").first().click();
    cy.contains("button", "Continue").click();
    cy.contains("p", "Employer name is required.").should("exist");
    cy.get("input[id=employerName]").type("Driva");
    cy.contains("button", "Continue").click();
    cy.contains("p", "Employer name is required.").should("not.exist");
  });

  it("validates annual income", () => {
    cy.visit("work-details");
    cy.contains("button", "Continue").click();
    cy.get(".form-select-card").first().click();
    cy.contains("button", "Continue").click();
    cy.contains("p", "Annual income is required.").should("exist");
    cy.get("input[id=annualIncome]").type("1000");
    cy.contains("button", "Continue").click();
    cy.contains("p", "Annual income is required.").should("not.exist");
  });
});
