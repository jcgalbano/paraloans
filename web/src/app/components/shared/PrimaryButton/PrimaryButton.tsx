import { PrimaryButtonProps } from "./PrimaryButton.types";

export const PrimaryButton = ({
  content,
  size,
  callback,
}: PrimaryButtonProps) => {
  const sizeStyle: string = size || "md";

  return (
    <button
      className="bg-primary-500 font-proximaNova text-base
      text-general-white uppercase rounded-rounded5px p-lgButton
      hover:bg-primary-600"
      onClick={callback}
    >
      {content}
    </button>
  );
};
