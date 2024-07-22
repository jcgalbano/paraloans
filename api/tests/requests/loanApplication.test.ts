import express from "express";

import { describe, it, expect, jest } from "@jest/globals";
import request from "supertest";

import { calcLoanOffers } from "../../src/app/services/loanApplicationsService";
import { createLoanApplication } from "../../src/app/controllers/loanApplicationsController";
import validateRequestBody from "../../src/app/middleware/validateRequestBody";

const app = express();

app.use(express.json());
app.post("/loan-applications", validateRequestBody, createLoanApplication);

jest.mock("../../src/app/services/loanApplicationsService");
jest.mock("../../src/app/models/loanApplication");

describe("POST /loan-application", () => {
  it("should create a loan application and return loan offers", async () => {
    const requestBody = {
      firstName: "Alexander",
      lastName: "Fleming",
      dateOfBirth: "1881-08-05T15:56:00.000Z",
      email: "alex.fleming@gmail.com",
      phoneNumber: "3113213222",
      address: "29 Amiens Road. BUDGEE BUDGEE, New South Wales(NSW)",
      employerName: "Driva",
      annualIncome: "100000",
      employmentStatus: "Employed",
      price: "3500",
      deposit: "500",
      loanTerm: 5,
      loanPurpose: "Home Improvements",
    };

    const loanOffers = [
      {
        name: "Lender A",
        annualPR: 5,
        appFee: 100,
        monthlyRepayment: "1000.00",
      },
    ];

    (calcLoanOffers as jest.Mock).mockReturnValue(loanOffers);

    const response = await request(app)
      .post("/loan-applications")
      .send(requestBody)
      .expect("Content-Type", /json/)
      .expect(201);

    expect(calcLoanOffers).toHaveBeenCalledWith(
      requestBody.price,
      requestBody.deposit,
      requestBody.loanTerm
    );
    expect(response.body).toEqual(loanOffers);
  });

  it("should handle missing request body fields", async () => {
    const response = await request(app)
      .post("/loan-applications")
      .send({ firstName: null })
      .expect(400);

    expect(response.body.error).toBe('"firstName" must be a string');
  });

  it("should handle empty request body fields", async () => {
    const response = await request(app)
      .post("/loan-applications")
      .send({ firstName: "" })
      .expect(400);

    expect(response.body.error).toBe('"firstName" is not allowed to be empty');
  });
});
