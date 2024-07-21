describe("LoanDetails Page", () => {
  beforeEach(() => {
    cy.visit("/loan-details");
  });

  it("renders the form and its fields correctly", () => {
    cy.get("form").should("exist");
    cy.get("label")
      .contains("Project/Item Price (at least $2000 AUD)")
      .should("exist");
    cy.get("label").contains("Deposit (AUD)").should("exist");
    cy.get("label").contains("Loan Purpose").should("exist");
    cy.get("label").contains("Loan Term (years)").should("exist");

    cy.get('input[id="price"]').should("exist");
    cy.get('input[id="deposit"]').should("exist");
    cy.get('select[name="loanPurpose"]').should("exist");
    cy.get(".rc-slider").should("exist");
  });

  it("allows the user to fill out and submit the form", () => {
    cy.get('input[id="price"]').type("2500");
    cy.get('input[id="deposit"]').type("500");
    cy.get('select[name="loanPurpose"]').select("Car");

    cy.get(".rc-slider-dot").first().click();

    cy.get('input[id="price"]').should("have.value", "$2,500");
    cy.get('input[id="deposit"]').should("have.value", "$500");
    cy.get('select[name="loanPurpose"]').should("have.value", "Car");

    cy.get(".rc-slider-handle").should("have.attr", "aria-valuenow", "1");

    cy.contains("button", "Submit").click();
    cy.url().should("include", "/loan-offers");
  });

  it("displays validation errors for required fields", () => {
    cy.get('input[id="price"]').clear();
    cy.get('input[id="deposit"]').clear();
    cy.get('select[name="loanPurpose"]').select("");

    cy.contains("button", "Submit").click();

    cy.get(".error-text").should("contain", "Project/Item price is required.");
    cy.get(".error-text").should("contain", "Deposit is required.");
    cy.get(".error-text").should("contain", "Loan purpose is required.");
  });
});
