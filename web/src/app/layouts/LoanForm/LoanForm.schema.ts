import * as yup from "yup";

const schemaShape = {
  firstName: yup.string().required("First name is required."),
  lastName: yup.string().required("Last name is required."),
};

export const schema = yup.object().shape(schemaShape);
