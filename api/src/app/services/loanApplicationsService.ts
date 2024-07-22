import BigNumber from "bignumber.js";
import Lender from "../models/lender";

export const calcLoanOffers = (
  totalValue: number,
  deposit: number,
  loanYears: number
) => {
  const loanOffers = Lender.all().map((lender) => {
    return {
      name: lender.name,
      annualPR: lender.annualPR,
      appFee: lender.appFee,
      monthlyRepayment: calcMonthlyRepayment(
        totalValue,
        deposit,
        lender.annualPR,
        loanYears
      ),
    };
  });

  return loanOffers;
};

export const calcMonthlyRepayment = (
  totalValue: number,
  deposit: number,
  annualInterest: number,
  loanYears: number
) => {
  const totalValueBN = BigNumber(totalValue);
  const depositBN = BigNumber(deposit);
  const annualInterestBN = BigNumber(annualInterest);
  const loanMonthsBN = BigNumber(loanYears * 12);
  const baseBN = BigNumber(1);

  const principalBN = totalValueBN.minus(depositBN);
  const monthlyInterestBN = annualInterestBN.dividedBy(12);

  const compoundingFactorBN = baseBN
    .plus(monthlyInterestBN)
    .exponentiatedBy(loanMonthsBN);

  const monthlyRepayment = principalBN
    .multipliedBy(monthlyInterestBN)
    .multipliedBy(compoundingFactorBN)
    .dividedBy(compoundingFactorBN.minus(baseBN));

  // M = P * r * (1+r)^n / (1+r)^n – 1

  // M: Monthly Repayment
  // P: Principal (loan amount)
  // R: Monthly interest rate (APR divided by 12)
  // N: Total number of monthly payments (loan term length in years multiplied by 12)
  // used bignumber.js for accuracy

  return monthlyRepayment.toFixed(2);
};
