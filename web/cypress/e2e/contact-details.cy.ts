describe("Contact Details E2E Test", () => {
  it("should be routed properly from the Personal Details page", () => {
    cy.visit("personal-details");

    const firstNameInput = cy.get("input[name=firstName]");
    const lastNameInput = cy.get("input[name=lastName]");
    const dobInput = cy.get("input.dateOfBirth-date");
    firstNameInput.type("Joseph");
    lastNameInput.type("Fourier");
    dobInput.click();

    cy.get(".react-datepicker__day--017").click();

    cy.contains("button", "Continue").click();
    cy.url().should("include", "/contact-details");
  });

  it("should have rendered and validated email", () => {
    cy.visit("contact-details");

    const emailLabel = cy.contains("label", "Email");
    const emailInput = cy.get("input[id=email]");

    emailLabel.should("be.visible");
    emailInput.should("be.visible");

    cy.contains("button", "Continue").click();

    cy.contains("p", "Email address is required.").should("exist");

    emailInput.type("Invalid Email");
    cy.contains("button", "Continue").click();

    cy.contains(
      "p",
      "Invalid email format. Please enter a valid email address."
    ).should("exist");

    emailInput.clear();
    emailInput.type("example@domain.com");

    cy.contains("button", "Continue").click();

    cy.contains("p", "Email is required.").should("not.exist");
    cy.contains(
      "p",
      "Invalid email format. Please enter a valid email address."
    ).should("not.exist");
  });

  it("should have rendered and validated phone number", () => {
    cy.visit("contact-details");

    const mobileLabel = cy.contains("label", "Mobile Number");
    const mobileInput = cy.get(".react-tel-input").find("input");

    mobileLabel.should("be.visible");
    mobileInput.should("be.visible");

    cy.contains("button", "Continue").click();

    cy.contains("p", "Mobile number is required.").should("exist");

    mobileInput.type("123");
    cy.contains("button", "Continue").click();
    cy.contains("p", "Please enter a valid phone number.").should("exist");

    mobileInput.clear();
    mobileInput.type("61234567891");

    cy.contains("button", "Continue").click();

    cy.contains("p", "Mobile number is required.").should("not.exist");
    cy.contains("p", "Please enter a valid phone number.").should("not.exist");
  });

  it("should have rendered and validated address", () => {
    cy.visit("contact-details");

    const addressLabel = cy.contains("label", "Address");
    const addressInput = cy.get(".form-loan-textarea");

    addressLabel.should("be.visible");
    addressInput.should("be.visible");

    cy.contains("button", "Continue").click();

    cy.contains("p", "Address is required.").should("exist");

    addressInput.type("42 Wallaby Way, Sydney");
    cy.contains("button", "Continue").click();

    cy.contains("p", "Address is required.").should("not.exist");
  });
});
