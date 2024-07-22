import { Router } from "express";
import validateRequestBody from "../middleware/validateRequestBody";
import { createLoanApplication } from "../controllers/loanApplicationsController";

const router = Router();

router.post("/loan-applications", validateRequestBody, createLoanApplication);

export default router;
