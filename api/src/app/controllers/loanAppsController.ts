import { Request, Response } from "express";
import { calcLoanOffers } from "../services/loanAppsService";
import LoanApp from "../models/loanApp";

export const createLoanApp = (req: Request, res: Response) => {
  const loanFormJson = req.body;
  const { price, deposit, loanTerm } = loanFormJson;

  // Save the application to be processed by other parts of the app
  LoanApp.createApp(req.body);
  const response = calcLoanOffers(price, deposit, loanTerm);

  res.status(201).json(response);
};
