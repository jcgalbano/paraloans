import * as yup from "yup";

const schemaShape = {
  firstName: yup.string().required("First name is required."),
  lastName: yup.string().required("Last name is required."),
  dateOfBirth: yup.date().required("Date of birth is required."),
};

export const schema = yup.object().shape(schemaShape);
