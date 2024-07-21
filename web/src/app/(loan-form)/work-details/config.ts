import {
  employedSchema,
  selfEmployedSchema,
  unemployedSchema,
  workSchema,
} from "@/app/schemas/loanFormSchema";
import { SchemaMap } from "@/app/types/loanFormTypes";

export const workSchemaMap: SchemaMap = {
  default: workSchema,
  Employed: employedSchema,
  "Self-Employed": selfEmployedSchema,
  Unemployed: unemployedSchema,
};
