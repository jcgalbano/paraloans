import { TextButtonProps } from "./TextButton.types";

export const TextButton = ({ content, size, callback }: TextButtonProps) => {
  return (
    <button
      className="bg-general-white font-proximaNova text-base
    text-primary-500 uppercase rounded-rounded5px p-lgButton
    hover:bg-primary-50"
      onClick={callback}
    >
      {content}
    </button>
  );
};
