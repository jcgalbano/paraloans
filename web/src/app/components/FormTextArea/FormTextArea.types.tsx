import { FieldValues, Path } from "react-hook-form";

export interface FormTextAreaProps<FormObj extends FieldValues> {
  field: Path<FormObj>;
  label: string;
  required?: boolean;
}
