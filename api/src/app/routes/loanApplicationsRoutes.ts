import { Router } from "express";
import { createLoanApplication } from "../controllers/loanApplicationsController";

const router = Router();

router.post("/loan-applications", createLoanApplication);

export default router;
