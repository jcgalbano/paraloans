import { Request, Response } from "express";
import { calcLoanOffers } from "../services/loanApplicationsService";
import LoanApplication from "../models/loanApplication";

export const createLoanApplication = (req: Request, res: Response) => {
  const loanFormJson = req.body;
  const { price, deposit, loanTerm } = loanFormJson;

  // Save the application to be processed by other parts of the app
  LoanApplication.createApplication(req.body);
  const response = calcLoanOffers(price, deposit, loanTerm);

  res.status(201).json(response);
};
