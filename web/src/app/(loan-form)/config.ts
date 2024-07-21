import { RouteMap } from "@/app/types/loanFormTypes";
import {
  personalSchema,
  contactSchema,
  workSchema,
} from "@/app/schemas/loanFormSchema";

export const routeMap: RouteMap = {
  "/personal-details": {
    previous: null,
    next: "/contact-details",
    schema: personalSchema,
  },
  "/contact-details": {
    previous: "/personal-details",
    next: "/work-details",
    schema: contactSchema,
  },
  "/work-details": {
    previous: "/contact-details",
    next: "/loan-details",
    schema: workSchema,
  },
};
