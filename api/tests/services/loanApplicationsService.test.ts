import { describe, it, expect, jest } from "@jest/globals";
import {
  calcLoanOffers,
  calcMonthlyRepayment,
} from "../../src/app/services/loanApplicationsService";
import Lender from "../../src/app/models/lender";

jest.mock("../../src/app/models/lender");

describe("calcLoanOffers", () => {
  it("should calculate loan offers correctly", () => {
    const mockLenders = [
      { name: "Lender A", annualPR: 0.055, appFee: 15 },
      { name: "Lender B", annualPR: 0.06, appFee: 10 },
    ];

    (Lender.all as jest.Mock).mockReturnValue(mockLenders);

    const totalValue = 3000;
    const deposit = 500;
    const loanYears = 4;

    const loanOffers = calcLoanOffers(totalValue, deposit, loanYears);

    expect(loanOffers).toEqual([
      {
        name: "Lender A",
        annualPR: 0.055,
        appFee: 15,
        monthlyRepayment: "58.14",
      },
      {
        name: "Lender B",
        annualPR: 0.06,
        appFee: 10,
        monthlyRepayment: "58.71",
      },
    ]);
  });
});

describe("calcMonthlyRepayment", () => {
  it("should calculate the monthly repayment correctly", () => {
    const totalValue = 3000;
    const deposit = 500;
    const annualInterest = 0.055;
    const loanYears = 4;

    const expectedRepayment = calcMonthlyRepayment(
      totalValue,
      deposit,
      annualInterest,
      loanYears
    );

    expect(expectedRepayment).toBe("58.14");
  });
});
