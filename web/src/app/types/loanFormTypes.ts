import * as yup from "yup";

type Schema = yup.ObjectSchema<any, yup.AnyObject>;

interface RouteConfig {
  previous: string | null;
  next: string | null;
  schema: Schema;
}

export interface RouteMap {
  [route: string]: RouteConfig;
}
