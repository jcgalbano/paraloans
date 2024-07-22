import Joi from "joi";

const loanApplicationSchema = Joi.object({
  firstName: Joi.string().min(2).max(30).required(),
  lastName: Joi.string().min(2).max(30).required(),
  dateOfBirth: Joi.date().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string()
    .pattern(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    )
    .required(),
  address: Joi.string().max(255).required(),
  employmentStatus: Joi.string()
    .valid("Employed", "Self-Employed", "Unemployed")
    .required(),
  employerName: Joi.string()
    .max(100)
    .when("employmentStatus", {
      is: "Employed",
      then: Joi.required(),
      otherwise: Joi.allow("").optional(),
    }),
  annualIncome: Joi.number().positive().required(),
  price: Joi.number().positive().required(),
  deposit: Joi.number().positive().required(),
  loanPurpose: Joi.string().max(100).required(),
  loanTerm: Joi.number().integer().min(1).required(),
});

export default loanApplicationSchema;
