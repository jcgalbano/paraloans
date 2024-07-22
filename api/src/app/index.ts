import express, { Express } from "express";
import cors = require("cors");

import bodyParser from "body-parser";

import loanApplicationsRoutes from "./routes/loanApplicationsRoutes";

const app: Express = express();
const port = process.env.PORT || 3000;

// Uses CORS to explicitly state what our API accepts as the origin of the request
// and the type of requests it can do and how that looks like.
// just standard stuff but pretty powerful
app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(bodyParser.urlencoded({ limit: "10kb", extended: true }));

// Routes
app.use("/api", loanApplicationsRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
