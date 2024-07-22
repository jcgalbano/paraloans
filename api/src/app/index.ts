import express, { Express } from "express";

import bodyParser from "body-parser";

import loanAppsRoutes from "./routes/loanAppsRoutes";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use("/api", loanAppsRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
