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

const loanSchemaShape = {
  price: yup
    .string()
    .required("Project/Item price is required.")
    .test(
      "is-above-2000",
      "The project/item price must be at least $2000 AUD.",
      (value) => {
        const numberValue = parseFloat(value);
        return !isNaN(numberValue) && numberValue >= 2000;
      }
    )
    .test(
      "is-below-1000000",
      "The project/item price exceeds the $1,000,000 limit.",
      (value) => {
        const numberValue = parseFloat(value);
        return !isNaN(numberValue) && numberValue <= 1000000;
      }
    ),
  deposit: yup
    .string()
    .required("Deposit is required.")
    .test(
      "is-not-above-price",
      "The deposit cannot be greater than the project/item price.",
      function (value) {
        const { price } = this.parent;
        const priceValue = parseFloat(price);
        const depositValue = parseFloat(value);

        return (
          !isNaN(depositValue) &&
          !isNaN(priceValue) &&
          depositValue <= priceValue
        );
      }
    ),
};

export const personalSchema = yup.object().shape(personalSchemaShape);
export const contactSchema = yup.object().shape(contactSchemaShape);
export const workSchema = yup.object().shape(workSchemaShape);
export const employedSchema = yup.object().shape(employedSchemaShape);
export const selfEmployedSchema = yup.object().shape(selfEmployedSchemaShape);
export const unemployedSchema = yup.object().shape(unemployedSchemaShape);
export const loanFormSchema = yup.object().shape(loanSchemaShape);
