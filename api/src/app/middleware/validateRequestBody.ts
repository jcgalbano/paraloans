import { Request, Response, NextFunction } from "express";

import loanApplicationSchema from "../schemas/loanApplicationSchema";
import { sanitizeInput } from "../util/sanitizer";

const validateRequestBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.body = sanitizeInput(req.body);

  const { error } = loanApplicationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export default validateRequestBody;
