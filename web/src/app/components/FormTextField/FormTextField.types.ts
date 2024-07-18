import { UseFormRegister, FieldValues, Path } from "react-hook-form";

export interface FormTextFieldProps<FormObj extends FieldValues> {
  field: Path<FormObj>;
  label: string;
  required?: boolean;
}
