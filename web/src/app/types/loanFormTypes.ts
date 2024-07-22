import * as yup from "yup";

type Schema = yup.ObjectSchema<any, yup.AnyObject>;

interface RouteConfig {
  previous: string | null;
  next: string | null;
  schema: Schema;
}

export interface SchemaMap {
  [employ: string]: Schema;
}

export interface RouteMap {
  [route: string]: RouteConfig;
}

export interface LoanOffer {
  name: string;
  monthlyRepayment: string;
  annualPR: number;
  appFee: number;
}
