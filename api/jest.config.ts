import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testEnvironment: "node",
  coveragePathIgnorePatterns: ["/node_modules/"],
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
export default config;
