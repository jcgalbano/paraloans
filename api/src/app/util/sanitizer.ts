import { escape, trim } from "validator";

export const sanitizeInput = (input: any) => {
  const sanitizedInput = { ...input };

  for (const key in sanitizedInput) {
    if (typeof sanitizedInput[key] === "string") {
      sanitizedInput[key] = escape(trim(sanitizedInput[key]));
    }
  }

  return sanitizedInput;
};
