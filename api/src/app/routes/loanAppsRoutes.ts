import { Router } from "express";
import { createLoanApp } from "../controllers/loanAppsController";

const router = Router();

router.post("/loan-applications", createLoanApp);

export default router;
