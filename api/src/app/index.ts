import express, { Express } from "express";
import cors = require("cors");
import rateLimit from "express-rate-limit";
import helmet from "helmet";

import bodyParser from "body-parser";

import loanApplicationsRoutes from "./routes/loanApplicationsRoutes";

const app: Express = express();
const port = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 360000, // this i think is 1 hour in millisecondss
  max: 100, // Limit each IP to 100 requests per windowMs, prevents DDOS
  message: "Too many requests from this IP, please try again later.", // try again another dayhackerman
});

app.use(limiter);

// prevent browser from guessing returned content type
helmet.noSniff();
// prevents the website being rendered in an iframe, prevents 1-2 ways of automated clicks
helmet.frameguard({ action: "deny" });
// bloks harmful scripts throught the browser
helmet.xssFilter();

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
