import { FormTextFieldProps } from "./FormTextField.types";

export const FormTextField = ({ label, required }: FormTextFieldProps) => {
  return (
    <div className="mb-7">
      <label
        className="font-proximaNova text-base block
      text-neutral-800 text-sm font-bold mb-2"
      >
        {label}
        {required ? <span className="text-errors-600 pl-1">*</span> : ""}
      </label>
      <input
        className="font-proximaNova shadow appearance-none border rounded-rounded5px
        w-full py-2 px-3 text-gray-700 leading-tight
        focus:outline-primary-300 focus:shadow-outline"
        id={label}
        type="text"
      />
    </div>
  );
};
