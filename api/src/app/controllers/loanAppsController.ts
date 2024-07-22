import { Request, Response } from "express";
import { calcLoanOffers } from "../services/loanAppsService";

export const createLoanApp = (req: Request, res: Response) => {
  const loanFormJson = req.body;

  const { price, deposit, loanTerm } = loanFormJson;

  // Stub: we want to save our applications to the DB for tracking
  const applications = [];
  applications.push(loanFormJson);

  const response = calcLoanOffers(price, deposit, loanTerm);
  res.status(201).json(response);
};
