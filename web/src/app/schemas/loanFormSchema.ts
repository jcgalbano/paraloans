import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const personalSchemaShape = {
  firstName: yup.string().required("First name is required."),
  lastName: yup.string().required("Last name is required."),
  dateOfBirth: yup.date().required("Date of birth is required."),
};

const contactSchemaShape = {
  email: yup
    .string()
    .email("Invalid email format. Please enter a valid email address.")
    .required("Email address is required."),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Please enter a valid phone number.")
    .required("Mobile number is required."),
  address: yup.string().required("Address is required."),
};

const workSchemaShape = {
  employmentStatus: yup.string().required("Employment status is required."),
};

const employedSchemaShape = {
  employmentStatus: yup.string().required("Employment status is required."),
  employerName: yup.string().required("Employer name is required."),
  annualIncome: yup.string().required("Annual income is required."),
};

const selfEmployedSchemaShape = {
  employmentStatus: yup.string().required("Employment status is required."),
  annualIncome: yup.string().required("Annual income is required."),
};

const unemployedSchemaShape = {
  employmentStatus: yup.string().required("Employment status is required."),
  annualIncome: yup.string().required("Annual income is required."),
};

export const personalSchema = yup.object().shape(personalSchemaShape);
export const contactSchema = yup.object().shape(contactSchemaShape);
export const workSchema = yup.object().shape(workSchemaShape);
export const employedSchema = yup.object().shape(employedSchemaShape);
export const selfEmployedSchema = yup.object().shape(selfEmployedSchemaShape);
export const unemployedSchema = yup.object().shape(unemployedSchemaShape);
