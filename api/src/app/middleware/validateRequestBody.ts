import { Request, Response, NextFunction } from "express";

import loanApplicationSchema from "../schemas/loanApplicationSchema";

const validateRequestBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = loanApplicationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export default validateRequestBody;
