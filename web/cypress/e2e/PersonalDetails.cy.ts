describe("Personal Details E2E Test", () => {
  it("should be routed properly from the Home page", () => {
    cy.visit("/");

    cy.contains("button", "Discover My Loan Options").click();
    cy.url().should("include", "/personal-details");
  });

  it("should have rendered and validated First Name", () => {
    cy.visit("personal-details");

    const firstNameLabel = cy.contains("label", "First Name");
    const firstNameInput = cy.get("input[name=firstName]");

    firstNameLabel.should("be.visible");
    firstNameInput.should("be.visible");

    cy.contains("button", "Continue").click();

    cy.contains("p", "First name is required.").should("exist");

    firstNameInput.type("Joseph");
    cy.contains("button", "Continue").click();

    cy.contains("p", "First name is required.").should("not.exist");
  });

  it("should have rendered and validated Last Name", () => {
    cy.visit("personal-details");

    const lastNameLabel = cy.contains("label", "Last Name");
    const lastNameInput = cy.get("input[name=lastName]");

    lastNameLabel.should("be.visible");
    lastNameInput.should("be.visible");

    cy.contains("button", "Continue").click();

    cy.contains("p", "Last name is required.").should("exist");

    lastNameInput.type("Fourier");
    cy.contains("button", "Continue").click();

    cy.contains("p", "Last name is required.").should("not.exist");
  });

  it("should have rendered and validated Date of Birth", () => {
    cy.visit("personal-details");

    const dobLabel = cy.contains("label", "Date of Birth");
    const dobInput = cy.get("input.dateOfBirth-date");

    dobLabel.should("be.visible");
    dobInput.should("be.visible");

    dobInput.click();

    cy.contains("button", "Continue").click();
    cy.contains("p", "Date of birth is required.").should("exist");

    dobInput.click();

    cy.get(".react-datepicker__day--017").click();
    cy.contains("p", "Date of birth is required.").should("not.exist");
  });

  it("should have rendered and validated Date of Birth", () => {
    cy.visit("personal-details");

    const firstNameInput = cy.get("input[name=firstName]");
    const lastNameInput = cy.get("input[name=lastName]");
    const dobInput = cy.get("input.dateOfBirth-date");

    firstNameInput.type("Alexander");
    lastNameInput.type("Fleming");
    dobInput.click();

    cy.get(".react-datepicker__day--017").click();

    cy.contains("button", "Continue").click();
    cy.url().should("include", "contact-details");
  });
});
