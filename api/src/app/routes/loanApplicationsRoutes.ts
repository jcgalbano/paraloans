import { Router } from "express";
import validateRequestBody from "../middleware/validateRequestBody";
import { createLoanApplication } from "../controllers/loanApplicationsController";

const router = Router();

// Validates the form data using JOI and Sanitizies it using express validator
router.post("/loan-applications", validateRequestBody, createLoanApplication);

export default router;
